---
id: working-with-template-syntax-formatting
url: assembly/net/working-with-template-syntax-formatting
title: Working with Template Syntax Formatting
weight: 27
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625484 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625484 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625484 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625484"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#WorkingwithTemplateSyntaxFormatting-TemplateSyntaxFormats">Template Syntax Formats</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#WorkingwithTemplateSyntaxFormatting-SpecifyingStringandNumericFormats">Specifying String and Numeric Formats</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1.1</span> <a href="#WorkingwithTemplateSyntaxFormatting-TemplateSyntax">Template Syntax</a></li><li><span class="TOCOutline">1.1.2</span> <a href="#WorkingwithTemplateSyntaxFormatting-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.1.3</span> <a href="#WorkingwithTemplateSyntaxFormatting-TheCode">The Code</a></li></ul></li></ul></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is only compatible with GroupDocs.Assembly for .NET 3.2.0 or later releases.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Template Syntax Formats

### Specifying String and Numeric Formats

Learn more about string and numeric formats [here](http://www.groupdocs.com/docs/display/assemblynet/Features+Overview#FeaturesOverview-TemplateSyntaxFormatsforExpressionResults).

#### Template Syntax

<table cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left: 0pt;"><tbody><tr><td style="border-bottom-color: rgb(191, 191, 191); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(191, 191, 191); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(191, 191, 191); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(191, 191, 191); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 456.45pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">&nbsp;</span></p><table cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left: 0pt;"><tbody><tr><td style="border-bottom-color: rgb(102, 102, 102); border-bottom-style: solid; border-bottom-width: 1.5pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 266.8pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">Products</span></p></td><td style="border-bottom-color: rgb(102, 102, 102); border-bottom-style: solid; border-bottom-width: 1.5pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 167.55pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">Order</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;"> Price</span></p></td></tr><tr><td colspan="2" style="border-bottom-color: rgb(153, 153, 153); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 445.15pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt; text-align: center;"><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">&lt;&lt;if [!</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">Any</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">()]&gt;&gt;No data</span></p></td></tr><tr><td style="border-bottom-color: rgb(153, 153, 153); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 266.8pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">&lt;&lt;else&gt;&gt;&lt;&lt;foreach [in </span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">orders</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">]&gt;&gt;&lt;&lt;[</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">Product.</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">ProductName</span><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">] : upper&gt;&gt;</span></p></td><td style="border-bottom-color: rgb(153, 153, 153); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 167.55pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">&lt;&lt;[</span><span style="font-family: Calibri; font-size: 11pt;">P</span><span style="font-family: Calibri; font-size: 11pt;">rice</span><span style="font-family: Calibri; font-size: 11pt;">] : arabicDash&gt;&gt;&lt;&lt;/foreach&gt;&gt;</span></p></td></tr><tr><td style="border-bottom-color: rgb(153, 153, 153); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 266.8pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt; font-weight: bold;">Total:</span></p></td><td style="border-bottom-color: rgb(153, 153, 153); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(153, 153, 153); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(153, 153, 153); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(153, 153, 153); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 167.55pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">&lt;&lt;[</span><span style="font-family: Calibri; font-size: 11pt;">Sum</span><span style="font-family: Calibri; font-size: 11pt;">(c =&gt; c.</span><span style="font-family: Calibri; font-size: 11pt;">P</span><span style="font-family: Calibri; font-size: 11pt;">rice</span><span style="font-family: Calibri; font-size: 11pt;">)]&gt;&gt;&lt;&lt;/if&gt;&gt;</span></p></td></tr><tr style="height: 0pt;"><td style="width: 277.6pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: initial; border-right-style: none; border-right-width: initial; border-bottom-color: initial; border-bottom-style: none; border-bottom-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial;"></td><td style="width: 178.35pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: initial; border-right-style: none; border-right-width: initial; border-bottom-color: initial; border-bottom-style: none; border-bottom-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial;"></td></tr></tbody></table><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">&nbsp;</span></p><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">&nbsp;</span></p></td></tr></tbody></table>

{{< alert style="success" >}}For detailed technical information about syntax, expressions and report generation by the engine, please visit: Working with GroupDocs.Assembly Engine{{< /alert >}}

#### Download Template

Get the template from here.

*   [String\_Numeric\_Formatting.ods](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/String_Numeric_Formatting.odt?raw=true)

#### The Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-templatesyntaxformatting-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-templatesyntaxformatting-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-templatesyntaxformatting-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source open document template</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-templatesyntaxformatting-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/String_Numeric_Formatting.odt<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-templatesyntaxformatting-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-templatesyntaxformatting-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-templatesyntaxformatting-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/String_Numeric_Formatting Report.odt<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-templatesyntaxformatting-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-templatesyntaxformatting-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-templatesyntaxformatting-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-templatesyntaxformatting-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-templatesyntaxformatting-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-templatesyntaxformatting-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-templatesyntaxformatting-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-templatesyntaxformatting-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Report in open document format</span></td></tr><tr><td id="file-templatesyntaxformatting-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-templatesyntaxformatting-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-templatesyntaxformatting-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-templatesyntaxformatting-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-templatesyntaxformatting-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-templatesyntaxformatting-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">DataLayer</span>.<span class="pl-en">GetOrdersData</span>(), <span class="pl-s"><span class="pl-pds">"</span>orders<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-templatesyntaxformatting-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-templatesyntaxformatting-cs-LC14" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-templatesyntaxformatting-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-templatesyntaxformatting-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-templatesyntaxformatting-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-templatesyntaxformatting-cs-LC16" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-templatesyntaxformatting-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-templatesyntaxformatting-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-templatesyntaxformatting-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-templatesyntaxformatting-cs-LC18" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/cc1574aacc60dd670dfadd92109bf833/raw/f2d6326db9c7ea6116fe33b938d18418a27860bf/Templatesyntaxformatting.cs) [Templatesyntaxformatting.cs](https://gist.github.com/GroupDocsGists/cc1574aacc60dd670dfadd92109bf833#file-templatesyntaxformatting-cs) hosted with ❤ by [GitHub](https://github.com)