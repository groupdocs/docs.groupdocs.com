---
id: inserting-bookmarks-dynamically
url: assembly/net/inserting-bookmarks-dynamically
title: Inserting Bookmarks Dynamically
weight: 1
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625510 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625510 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625510 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625510"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#InsertingBookmarksDynamically-InsertingHyperlinksDynamically">Inserting Hyperlinks Dynamically</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#InsertingBookmarksDynamically-DynamicinsertionofbookmarksforWordProcessingdocumentsandemailswithHTMLandRTFbodies">Dynamic insertion of bookmarks for Word Processing documents and emails with HTML and RTF bodies</a></li><li><span class="TOCOutline">1.2</span> <a href="#InsertingBookmarksDynamically-DynamicnamingofcellrangesforSpreadsheetdocuments">Dynamic naming of cell ranges for Spreadsheet documents</a><ul class="toc-indentation"><li><span class="TOCOutline">1.2.1</span> <a href="#InsertingBookmarksDynamically-DownloadTemplates">Download Templates</a></li></ul></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is supported by version 20.1 or greater{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Inserting Hyperlinks Dynamically

### Dynamic insertion of bookmarks for Word Processing documents and emails with HTML and RTF bodies

You can insert bookmarks to your reports dynamically using bookmark tags. Syntax of a bookmark tag is defined as follows.

```csharp
<<bookmark [bookmark_expression]>>
bookmarked_content
<</bookmark>>
```

Here, **bookmark\_expression** defines the name of a bookmark to be inserted during run-time. This expression is mandatory and must return a non-empty value. While building a report, **bookmark\_expression** is evaluated and its result is used to construct a bookmark start and end that replace corresponding opening and closing bookmark tags respectively.

{{< alert style="warning" >}}A bookmark tag cannot be used within a chart.{{< /alert >}}

The following code snippet shows how simple you call the document assembler to generate report from the template:

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-dynamicbookmarkinsertionword-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-dynamicbookmarkinsertionword-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>setting up source</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-dynamicbookmarkinsertionword-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/Dynamic bookmarks.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-dynamicbookmarkinsertionword-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-dynamicbookmarkinsertionword-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/Dynamic bookmarks.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-dynamicbookmarkinsertionword-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up Uri Expression</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-dynamicbookmarkinsertionword-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">bookmark_expression</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>gd_bookmark<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-dynamicbookmarkinsertionword-cs-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up Display Text Expression</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-dynamicbookmarkinsertionword-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">displayTextExpression</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>GroupDocs<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-dynamicbookmarkinsertionword-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-dynamicbookmarkinsertionword-cs-LC10" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-dynamicbookmarkinsertionword-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-dynamicbookmarkinsertionword-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-dynamicbookmarkinsertionword-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to assemble document</span></td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-dynamicbookmarkinsertionword-cs-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>), <span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>), <span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">bookmark_expression</span>, <span class="pl-s"><span class="pl-pds">"</span>bookmark_expression<span class="pl-pds">"</span></span>), <span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">displayTextExpression</span>, <span class="pl-s"><span class="pl-pds">"</span>displayTextExpression<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-dynamicbookmarkinsertionword-cs-LC15" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-dynamicbookmarkinsertionword-cs-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-dynamicbookmarkinsertionword-cs-LC17" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-dynamicbookmarkinsertionword-cs-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-dynamicbookmarkinsertionword-cs-L19" class="blob-num js-line-number" data-line-number="19"></td><td id="file-dynamicbookmarkinsertionword-cs-LC19" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/fe5688b6d99e17223084d5098e9324fa/raw/b5402d8cddabab62630b75f47706b534ad21463a/DynamicBookmarkInsertionWord.cs) [DynamicBookmarkInsertionWord.cs](https://gist.github.com/GroupDocsGists/fe5688b6d99e17223084d5098e9324fa#file-dynamicbookmarkinsertionword-cs) hosted with ❤ by [GitHub](https://github.com)

### Dynamic naming of cell ranges for Spreadsheet documents

Template syntax and usage of Document Assembler is same as above section for dynamic naming of cell ranges for Spreadsheet documents. The difference is that it results to insertion of named cell ranges instead of bookmarks.

#### Download Templates

*   [Dynamic Bookmarks.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/Dynamic%20Hyperlink.docx)
*   [Dynamic Cell Ranges.xlsx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/Dynamic%20Hyperlink.docx)