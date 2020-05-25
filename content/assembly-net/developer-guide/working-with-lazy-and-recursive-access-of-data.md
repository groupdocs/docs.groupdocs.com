---
id: working-with-lazy-and-recursive-access-of-data
url: assembly/net/working-with-lazy-and-recursive-access-of-data
title: Working with Lazy And Recursive Access of Data
weight: 26
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625476 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625476 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625476 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625476"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#WorkingwithLazyAndRecursiveAccessofData-Purpose">Purpose</a></li><li><span class="TOCOutline">2</span> <a href="#WorkingwithLazyAndRecursiveAccessofData-CreatingTemplate">Creating Template</a></li><li><span class="TOCOutline">3</span> <a href="#WorkingwithLazyAndRecursiveAccessofData-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">4</span> <a href="#WorkingwithLazyAndRecursiveAccessofData-GeneratingTheReport">Generating The Report</a></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Purpose

At some point, you may want to or trying to use IDataRecord and IDataReader recursively in your application using GroupDocs.Assembly for .NET. But these Interfaces cannot serve the purpose. However, it is quite possible to accomplish the same goal using custom types.  
See IDataReader and IDataRecords Implementors [here](https://docs.groupdocs.com/display/assemblynet/Template+Syntax+-+Part+1+of+2#TemplateSyntax-Part1of2-IDataReaderImplementors).

## Creating Template

![](https://raw.githubusercontent.com/atirtahirgroupdocs/GroupDocs_Assembly_NET/master/Examples/Data/Screenshots/template.PNG)

## Download Template

Get template from here.

*   [Lazy and recursive.docs](https://github.com/atirtahirgroupdocs/GroupDocs_Assembly_NET/blob/master/Examples/Data/Source/Word%20Templates/Lazy%20And%20Recursive.docx?raw=true)

## Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source open document template</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/Lazy And Recursive.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/Lazy And Recursive Report.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DynamicEntity class</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DynamicEntity</span> <span class="pl-smi">dEntity</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DynamicEntity</span>(<span class="pl-smi">Guid</span>.<span class="pl-en">NewGuid</span>());</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Single Row Report in open document format</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">dEntity</span>, <span class="pl-s"><span class="pl-pds">"</span>root<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC16" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC18" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L19" class="blob-num js-line-number" data-line-number="19"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-L20" class="blob-num js-line-number" data-line-number="20"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs-LC20" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/96a8b32f705ac6c4ecd9cd2ebb698372/raw/0a3c622a014649628362d7717c1ceb8eef08b695/Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GeneratingReportbyRecursivelyandLazilyAccessingtheData.cs) [Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GeneratingReportbyRecursivelyandLazilyAccessingtheData.cs](https://gist.github.com/GroupDocsGists/96a8b32f705ac6c4ecd9cd2ebb698372#file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatingreportbyrecursivelyandlazilyaccessingthedata-cs) hosted with ❤ by [GitHub](https://github.com)