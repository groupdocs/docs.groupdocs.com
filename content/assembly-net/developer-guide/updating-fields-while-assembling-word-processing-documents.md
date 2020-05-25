---
id: updating-fields-while-assembling-word-processing-documents
url: assembly/net/updating-fields-while-assembling-word-processing-documents
title: Updating Fields while Assembling Word Processing Documents
weight: 30
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625533 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625533 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625533 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625533"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#UpdatingFieldswhileAssemblingWordProcessingDocuments-UpdatingFieldswhileAssemblingWordProcessingDocument">Updating Fields while Assembling Word Processing Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#UpdatingFieldswhileAssemblingWordProcessingDocuments-TheRecipe">The Recipe</a></li><li><span class="TOCOutline">1.2</span> <a href="#UpdatingFieldswhileAssemblingWordProcessingDocuments-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.3</span> <a href="#UpdatingFieldswhileAssemblingWordProcessingDocuments-TheCode">The Code</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is only compatible with GroupDocs.Assembly for .NET 3.3.0 or later releases.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Updating Fields while Assembling Word Processing Document

### The Recipe

*   Set up the source document template path
*   Set up destination report path
*   Instantiate DocumentAssembler class
*   Set options, **[DocumentAssemblyOptions.UpdateFieldsAndFormulas](https://apireference.groupdocs.com/net/assembly/groupdocs.assembly/documentassemblyoptions)**
*   Generate report

### Download Template

Get the template from here.

*   [Update\_Field\_XML.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/Update_Field_XML.docx?raw=true)

### The Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source document template</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/Update_Field_XML.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination document report</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/Update_Field_XML Report.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-smi">Options</span> <span class="pl-k">|=</span> <span class="pl-smi">DocumentAssemblyOptions</span>.<span class="pl-smi">UpdateFieldsAndFormulas</span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">DataLayer</span>.<span class="pl-en">GetAllDataFromXML</span>(), <span class="pl-s"><span class="pl-pds">"</span>ds<span class="pl-pds">"</span></span>));</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/d9af36df97a2bf7f50d0fb63c9ec34c6/raw/541c58fbbbcc645ee45ddcc523d8dc02ad3d5182/Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-UpdateWordDocFields.cs) [Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-UpdateWordDocFields.cs](https://gist.github.com/GroupDocsGists/d9af36df97a2bf7f50d0fb63c9ec34c6#file-examples-csharp-groupdocs-assemblyexamples-generatereport-updateworddocfields-cs) hosted with ❤ by [GitHub](https://github.com)