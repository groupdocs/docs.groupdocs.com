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
		searchError: $("#aiSearchError")
	};
	// initialize Markdown converter
	aiSearchMarkdownProcessor = new showdown.Converter(aiSearchConfig.mdProcessorSettings);
	// event handlers
	aiSearchUI.sidebarButton.click(aiSearchOpen);
	aiSearchUI.sidebarField.keypress(function(e){if(e.keyCode == 13) aiSearchOpen();});
	aiSearchUI.resultsButton.click(aiSearchUpdate);
	aiSearchUI.resultsField.keypress(function(e){if(e.keyCode == 13) aiSearchUpdate();});
	aiSearchUI.resultsCloseButton.click(aiSearchClose);
	$(document).keyup(function(e){if(e.keyCode == 27) aiSearchClose();});
});

function aiSearchReset()
{
	aiSearchUI.preloader.show();
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
	// show search results interface
	aiSearchReset();
	aiSearchUI.resultsField.val(prompt);
	aiSearchUI.curtain.removeClass("ai-search-invisible");
	aiSearchUI.results.removeClass("ai-search-invisible");
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

function aiSearchClose()
{
	aiSearchUI.curtain.addClass("ai-search-invisible");
	aiSearchUI.results.addClass("ai-search-invisible");
}

function aiSearchRequest(prompt)
{	
	let request = {
		query: prompt,
		scope: aiSearchScope,
		referrer: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
		fingerprint: aiSearchFingerprint
	};
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
	let summary = aiSearchMarkdownProcessor.makeHtml(data.result.summary);
	aiSearchUI.summary.html(summary);
	if(data.result.articles.length>0)
	{
		for(var i=0;i<data.result.articles.length;i++)
		{			
			let item = data.result.articles[i];
			// let fullUrl = item.root;
			// fullUrl +=  (item.url[0] == "/")?item.url.substring(1):item.url;
			  			
			let fullUrl = getSiteRoot() + item.url;
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

// Function to get the site root URL dynamically
function getSiteRoot() {
	const { protocol, host } = window.location;
	return `${protocol}//${host}/`;
  }

function aiSearchShowError(jqXHR,textStatus,error)
{
	aiSearchUI.searchError.show();
	console.log(`Error ${jqXHR.status}: ${jqXHR.responseText}`);
}
