---
id: working-with-outer-document-insertion
url: assembly/net/working-with-outer-document-insertion
title: Working with Outer Document Insertion
weight: 28
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625496 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625496 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625496 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625496"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#WorkingwithOuterDocumentInsertion-InsertingDocumentsDynamically">Inserting Documents Dynamically</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#WorkingwithOuterDocumentInsertion-WorkingwithOuterDocumentInsertion">Working with Outer Document Insertion&nbsp;</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1.1</span> <a href="#WorkingwithOuterDocumentInsertion-DownloadTemplates">Download Templates</a></li><li><span class="TOCOutline">1.1.2</span> <a href="#WorkingwithOuterDocumentInsertion-TheCode">The Code</a></li></ul></li><li><span class="TOCOutline">1.2</span> <a href="#WorkingwithOuterDocumentInsertion-OuterDocumentInsertioninWordProcessingFormats">Outer Document Insertion in Word Processing Formats</a><ul class="toc-indentation"><li><span class="TOCOutline">1.2.1</span> <a href="#WorkingwithOuterDocumentInsertion-DownloadTemplates.1">Download Templates</a></li><li><span class="TOCOutline">1.2.2</span> <a href="#WorkingwithOuterDocumentInsertion-TheCode.1">The Code</a></li></ul></li><li><span class="TOCOutline">1.3</span> <a href="#WorkingwithOuterDocumentInsertion-OuterDocumentInsertioninEmailFormats">Outer Document Insertion in Email Formats</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#WorkingwithOuterDocumentInsertion-DownloadTemplates.2">Download Templates</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#WorkingwithOuterDocumentInsertion-TheCode.2">The Code</a></li></ul></li></ul></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is supported by version 3.2.0 or greater.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Inserting Documents Dynamically

You can insert contents of outer documents to your reports dynamically using doc tags. A doc tag denotes a placeholder within a template for a document to be inserted during run-time.

```csharp
<<doc [document_expression]>>
```

{{< alert style="warning" >}}A doc tag can be used almost anywhere in a template document except text-boxes and charts.{{< /alert >}}

An expression declared within a doc tag is used by the engine to load a document to be inserted during run-time. The expression must return a value of one of the following types:

*   A byte array containing document data
*   A Stream instance able to read document data
*   An instance of the Document class
*   A string containing a document URI

{{< alert style="warning" >}}If an expression declared within a doc tag returns a stream object, then the stream is closed by the engine as soon as a corresponding document is loaded.{{< /alert >}}

By default, a document being inserted is not checked against template syntax and is not populated with data. However, you can enable this by using a build switch as follows.

```csharp
<<doc [document_expression] -build>>
```

When a build switch is used, the engine treats a document being inserted as a template that can access the following data available at the scope of a corresponding doc tag:

*   Data sources
*   Variables
*   A contextual object (see "[Using Contextual Object Member Access](https://docs.aspose.com/display/wordsnet/Template+Syntax#nowhere)" for more information)
*   Known external types (see "[Setting up Known External Types](https://docs.aspose.com/display/wordsnet/Template+Syntax#nowhere)"for more information)

  

{{< alert style="success" >}}For detailed technical information about syntax, expressions and report generation by the engine, please visit: Working with GroupDocs.Assembly Engine{{< /alert >}}

### Working with Outer Document Insertion 

#### Download Templates

Get designed and outer templates from here.

*   [OuterDocInsertion.odt](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/OuterDocInsertion.odt?raw=true)
*   [OuterDoc.odt](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/OuterDocuments/outerDoc.odt?raw=true)

#### The Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-outerdocumentinsertion-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-outerdocumentinsertion-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-outerdocumentinsertion-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source open document template</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-outerdocumentinsertion-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/OuterDocInsertion.odt<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-outerdocumentinsertion-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-outerdocumentinsertion-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-outerdocumentinsertion-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/OuterDocInsertion Report.odt<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-outerdocumentinsertion-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-outerdocumentinsertion-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-outerdocumentinsertion-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-outerdocumentinsertion-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-outerdocumentinsertion-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-outerdocumentinsertion-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-outerdocumentinsertion-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-outerdocumentinsertion-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Report in open document format</span></td></tr><tr><td id="file-outerdocumentinsertion-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-outerdocumentinsertion-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-outerdocumentinsertion-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-outerdocumentinsertion-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-outerdocumentinsertion-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-outerdocumentinsertion-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">DataLayer</span>.<span class="pl-en">GetCustomerData</span>(), <span class="pl-s"><span class="pl-pds">"</span>customer<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-outerdocumentinsertion-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-outerdocumentinsertion-cs-LC14" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-outerdocumentinsertion-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-outerdocumentinsertion-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-outerdocumentinsertion-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-outerdocumentinsertion-cs-LC16" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-outerdocumentinsertion-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-outerdocumentinsertion-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-outerdocumentinsertion-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-outerdocumentinsertion-cs-LC18" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/d86e65933ed173d59f1e5109ff20d33b/raw/6280ca34134ce412bd970b7549d7ae0a7fce3390/outerdocumentinsertion.cs) [outerdocumentinsertion.cs](https://gist.github.com/GroupDocsGists/d86e65933ed173d59f1e5109ff20d33b#file-outerdocumentinsertion-cs) hosted with ❤ by [GitHub](https://github.com)

### Outer Document Insertion in Word Processing Formats

{{< alert style="info" >}}This feature is supported by version 18.12 or greater.{{< /alert >}}

#### Download Templates

Get designed and outer templates from here.

*   [NestedExternalDocument.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/Nested%20External%20Document.docx)
*   [OuterDocument.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/OuterDocuments/OuterDocument.docx)

#### The Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-insertnestedexternaldocumentsinword-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source open document template</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/Nested External Document.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/Nested External Document.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Report in open document format</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">DataLayer</span>.<span class="pl-en">GetCustomerData</span>(), <span class="pl-s"><span class="pl-pds">"</span>customer<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC14" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC16" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-insertnestedexternaldocumentsinword-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-insertnestedexternaldocumentsinword-cs-LC18" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/db91bbaafa91669b04f305bbf909a9cd/raw/bc9025c59d27828ad6a3aa38286bec34dd574574/InsertNestedExternalDocumentsInWord.cs) [InsertNestedExternalDocumentsInWord.cs](https://gist.github.com/GroupDocsGists/db91bbaafa91669b04f305bbf909a9cd#file-insertnestedexternaldocumentsinword-cs) hosted with ❤ by [GitHub](https://github.com)

### Outer Document Insertion in Email Formats

{{< alert style="info" >}}This feature is supported by version 18.12 or greater.{{< /alert >}}

#### Download Templates

Get designed and outer templates from here.

*   [NestedExternalDocument.msg](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Email%20Templates/Nested%20External%20Document.msg)
*   [OuterDocument.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/OuterDocuments/OuterDocument.docx)

#### The Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source open document template</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Templates/Nested External Document.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Reports/Nested External Document.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Report in open document format</span></td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">DataLayer</span>.<span class="pl-en">GetCustomerData</span>(), <span class="pl-s"><span class="pl-pds">"</span>customer<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC14" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC16" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-insertnestedexternaldocumentsinemail-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-insertnestedexternaldocumentsinemail-cs-LC18" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/54701f594999260d10a4e6d66fa069e7/raw/2340d230ad1d736c5daf93b4dc0bf05c7c09e7a1/InsertNestedExternalDocumentsInEmail.cs) [InsertNestedExternalDocumentsInEmail.cs](https://gist.github.com/GroupDocsGists/54701f594999260d10a4e6d66fa069e7#file-insertnestedexternaldocumentsinemail-cs) hosted with ❤ by [GitHub](https://github.com)