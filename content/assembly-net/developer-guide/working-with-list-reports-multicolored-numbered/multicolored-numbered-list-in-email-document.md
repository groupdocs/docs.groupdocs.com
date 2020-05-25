---
id: multicolored-numbered-list-in-email-document
url: assembly/net/multicolored-numbered-list-in-email-document
title: Multicolored Numbered List in Email Document
weight: 5
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388623384 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388623384 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388623384 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388623384"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#MulticoloredNumberedListinEmailDocument-MulticoloredNumberedListinEmailDocument">Multicolored Numbered List in Email Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#MulticoloredNumberedListinEmailDocument-CreatingaMulticoloredNumberedList">Creating a Multicolored Numbered List</a></li><li><span class="TOCOutline">1.2</span> <a href="#MulticoloredNumberedListinEmailDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#MulticoloredNumberedListinEmailDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a></li><li><span class="TOCOutline">1.4</span> <a href="#MulticoloredNumberedListinEmailDocument-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}In this article, we will use GroupDocs.Assembly to generate a Multicolored Numbered List report in Email Document format.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}{{< alert style="info" >}}This feature is supported by version 17.8.0 or greater.{{< /alert >}}

## Multicolored Numbered List in Email Document

### Creating a Multicolored Numbered List

Practising the following steps you can create Multicolored Numbered List Template in MS Outlook 2013.

1.  In your email, write a sentence like "We provide support for the following clients:".
2.  Start numbered list.
3.  Go to the "Design" tab and select color to make it colored list.
4.  Save the template.

### Reporting Requirement

As a report developer, you are required to represent the following key requirements:

*   The report must be in .eml or .msg format.
*   It must add email recipient, CSS and subject of the email.
*   The report must show the products in the numbered list.
*   It must highlight the products.
*   The report must be generated in the Presentation Document.

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

We provide support for the following products:

1. <<foreach \[in getClients()\]>><<if \[indexOf() % 2 == 0\]>>      <<\[numberOf()\]>>.    <<\[ProductName\]>>

2. <<else>>      <<\[numberOf()\]>>.    <<\[ProductName\]>>

<</if>><</foreach>>

{{< alert style="success" >}}For detailed technical information about syntax, expressions and report generation by the engine, please visit: Working with GroupDocs.Assembly Engine.{{< /alert >}}

Download Multicolored Numbered List Template

Please download the sample Multicolored Numbered List document we created in this article:

*   [Multicolored Numbered List.msg](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/raw/master/Examples/Data/Source/Email%20Templates/Multicolored%20Numbered%20List.msg?raw=true)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source email template</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strEmailDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Templates/Multicolored Numbered List.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination email report</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strEmailDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Reports/Multicolored Numbered List Report.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Multicolored Numbered List Report in html format</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strEmailDocumentTemplate</span>), <span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strEmailDocumentReport</span>), <span class="pl-smi">DataLayer</span>.<span class="pl-en">EmailDataSourceObject</span>(<span class="pl-smi">strEmailDocumentTemplate</span>, <span class="pl-smi">DataLayer</span>.<span class="pl-en">GetProductsData</span>()), <span class="pl-smi">DataLayer</span>.<span class="pl-en">EmailDataSourceName</span>(<span class="pl-s"><span class="pl-pds">"</span>.msg<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>products<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC12" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC14" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs-LC16" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/b09c7249dba7302448473eb4f54ff510/raw/df4384a4ddb320ddece80259c37838e2afcaec71/Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GenerateMulticoloredNumberedListinEmail.cs) [Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GenerateMulticoloredNumberedListinEmail.cs](https://gist.github.com/GroupDocsGists/b09c7249dba7302448473eb4f54ff510#file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatemulticolorednumberedlistinemail-cs) hosted with ❤ by [GitHub](https://github.com)