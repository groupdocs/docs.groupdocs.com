"use strict";

const aiSearchConfig = {
	searchPromptMinLength: 2,
	mdProcessorSettings: {
		omitExtraWLInCodeBlocks: true,
		noHeaderId: true,
		parseImgDimensions: true,
		simplifiedAutoLink: true,
		excludeTrailingPunctuationFromURLs: true,
		literalMidWordUnderscores: true,
		literalMidWordAsterisks: true,
		strikethrough: true,
		tables: true,
		tasklists: true,
		smoothLivePreview: true,
		smartIndentationFix: true,
		simpleLineBreaks: true,
		encodeEmails: false,
		openLinksInNewWindow: true,
		backslashEscapesHTMLTags: true
	}
};

var aiSearchUI;
var aiSearchMarkdownProcessor;
var aiSearchFingerprint = "";
// "Ask about this page" mode: {path, title} of the page the questions are about, or null for all docs.
// Set by aiSearchOpenForPage() (called from the page-actions toolbar); sent to the backend as `page`.
var aiSearchPage = null;

$(function(){
	ThumbmarkJS.getFingerprint().then(function(fp){aiSearchFingerprint=fp;});
	// preload DOM
	aiSearchUI = {
		sidebarField: $("#aiSearchField"),
		sidebarButton: $("#aiSearchButton"),
		curtain: $("#aiSearchResultsCurtain"),
		results: $("#aiSearchResultsForm"),
		resultsCloseButton: $("#aiSearchResultsClose"),
		resultsField: $("#aiSearchResultsField"),
		resultsButton: $("#aiSearchResultsButton"),
		preloader: $("#aiSearchResultsPreloader"),
		summary: $("#aiSearchResultsSummary"),
		relatedLinks: $("#aiSearchResultsForm > aside"),
		relatedLinksContainer: $("#aiSearchRelatedArticles"),
		linkTemplate: $("#aiSearchRelatedArticleTemplate"),
		searchError: $("#aiSearchError"),
		// page mode (absent from HTML built before it existed; jQuery no-ops on empty sets)
		pageChip: $("#aiSearchPageChip"),
		pageChipLabel: $("#aiSearchPageChipLabel"),
		pageChipRemove: $("#aiSearchPageChipRemove"),
		pageHint: $("#aiSearchPageHint")
	};
	aiSearchUI.defaultPlaceholder = aiSearchUI.resultsField.attr("placeholder");
	// initialize Markdown converter
	aiSearchMarkdownProcessor = new showdown.Converter(aiSearchConfig.mdProcessorSettings);
	// event handlers
	aiSearchUI.sidebarButton.click(aiSearchOpen);
	aiSearchUI.sidebarField.keypress(function(e){if(e.keyCode == 13) aiSearchOpen();});
	aiSearchUI.resultsButton.click(aiSearchUpdate);
	aiSearchUI.resultsField.keypress(function(e){if(e.keyCode == 13) aiSearchUpdate();});
	aiSearchUI.resultsCloseButton.click(aiSearchClose);
	aiSearchUI.curtain.click(aiSearchClose);
	aiSearchUI.pageChipRemove.click(function(){aiSearchClearPage(); aiSearchUI.resultsField.focus();});
	$(document).keyup(function(e){if(e.keyCode == 27) aiSearchClose();});
});

function aiSearchReset()
{
	aiSearchUI.preloader.show();
	aiSearchUI.pageHint.addClass("ai-search-invisible");
	aiSearchUI.searchError.hide();
	aiSearchUI.summary.html("");
	aiSearchUI.relatedLinks.hide();
	$("#aiSearchRelatedArticles > a:not(#aiSearchRelatedArticleTemplate)").remove();
}

function aiSearchOpen()
{
	let prompt = aiSearchUI.sidebarField.val().trim();
	if(prompt.length < aiSearchConfig.searchPromptMinLength)
	{
		console.log(`Search query is less than ${aiSearchConfig.searchPromptMinLength} characters`);
		return false;
	}
	// the sidebar box always asks about all docs
	aiSearchClearPage();
	// show search results interface
	aiSearchReset();
	aiSearchUI.resultsField.val(prompt);
	aiSearchShow();
	// send search request
	aiSearchRequest(prompt);
}

function aiSearchUpdate()
{
	let prompt = aiSearchUI.resultsField.val().trim();
	if(prompt.length < aiSearchConfig.searchPromptMinLength)
	{
		console.log(`Search query is less than ${aiSearchConfig.searchPromptMinLength} characters`);
		return false;
	}
	aiSearchReset();
	// send search request
	aiSearchRequest(prompt);
}

function aiSearchShow()
{
	aiSearchUI.curtain.removeClass("ai-search-invisible");
	aiSearchUI.results.removeClass("ai-search-invisible");
	$("html").addClass("ai-search-open"); // stops the page behind from scrolling
}

function aiSearchClose()
{
	aiSearchUI.curtain.addClass("ai-search-invisible");
	aiSearchUI.results.addClass("ai-search-invisible");
	$("html").removeClass("ai-search-open");
	aiSearchClearPage();
}

// "Ask about this page": open the results dialog empty, with the page attached as a context chip.
// Nothing is sent until the user asks; every question then carries `page` (see aiSearchRequest).
function aiSearchOpenForPage(path, title)
{
	if(!aiSearchUI) return false; // called before the ready handler ran
	aiSearchReset();
	aiSearchUI.preloader.hide();
	aiSearchPage = { path: path, title: title };
	aiSearchUI.results.addClass("ai-search-page-mode"); // phones: the chip gets a row of its own
	aiSearchUI.pageChipLabel.text(title);
	aiSearchUI.pageChip.removeClass("ai-search-invisible");
	aiSearchUI.pageHint.removeClass("ai-search-invisible");
	aiSearchUI.resultsField.val("").attr("placeholder", "Ask a question about this page");
	aiSearchShow();
	aiSearchUI.resultsField.focus();
	return true;
}

function aiSearchClearPage()
{
	aiSearchPage = null;
	aiSearchUI.results.removeClass("ai-search-page-mode");
	aiSearchUI.pageChip.addClass("ai-search-invisible");
	aiSearchUI.pageHint.addClass("ai-search-invisible");
	aiSearchUI.resultsField.attr("placeholder", aiSearchUI.defaultPlaceholder);
}

function aiSearchRequest(prompt)
{
	let request = {
		query: prompt,
		scope: aiSearchScope,
		referrer: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
		fingerprint: aiSearchFingerprint
	};
	// Site-relative path of the page being asked about, e.g. "/viewer/net/render-pdf-documents/".
	// The backend grounds the answer on that page's Markdown (<path without trailing "/">.md).
	if(aiSearchPage) request.page = aiSearchPage.path;
	$.ajax({
		method: "POST",
		contentType: "application/json",
		url: aiSearchEndpoint,
		data: JSON.stringify(request)
	})
		.done(aiSearchParseResults)
		.fail(aiSearchShowError)
		.always(function(){aiSearchUI.preloader.hide();});
}

function aiSearchParseResults(data)
{
	let result = (data && data.result) || {};
	let articles = result.articles || [];
	// A scope the backend has not indexed answers with an empty summary and no articles.
	if(!result.summary && articles.length == 0)
	{
		aiSearchUI.summary.html('<p class="ai-search-empty">No answer found in this documentation yet. Try rephrasing your question.</p>');
		return;
	}
	let summary = aiSearchMarkdownProcessor.makeHtml(result.summary || "");
	aiSearchUI.summary.html(summary);
	if(articles.length>0)
	{
		for(var i=0;i<articles.length;i++)
		{
			let item = articles[i];
			let fullUrl = aiSearchBuildArticleUrl(item.root, item.url);
			let placeholder = aiSearchUI.linkTemplate.clone();
			placeholder
				.removeAttr("id")
				.attr("href", fullUrl)
				.text(item.title)
				.attr("title", item.description)
				.appendTo(aiSearchUI.relatedLinksContainer);			
		}
		aiSearchUI.relatedLinks.show();
	}
}

// Combine article root ("/conversion/") and url ("/net/convert/pdf") into an absolute link
function aiSearchBuildArticleUrl(root, url)
{
	let path = `/${root || ""}/${url || ""}`
		.replace(/\\/g, "/")
		.replace(/\/{2,}/g, "/");
	return `${window.location.protocol}//${window.location.host}${path}`;
}

function aiSearchShowError(jqXHR,textStatus,error)
{
	aiSearchUI.searchError.show();
	console.log(`Error ${jqXHR.status}: ${jqXHR.responseText}`);
}
