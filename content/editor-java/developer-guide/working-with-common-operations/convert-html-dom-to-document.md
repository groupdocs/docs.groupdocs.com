---
id: convert-html-dom-to-document
url: editor/java/convert-html-dom-to-document
title: Convert HTML DOM to Document
weight: 3
description: ""
keywords: 
productName: GroupDocs.Editor for Java
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607260623 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607260623 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607260623 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607260623"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#ConvertHTMLDOMtoDocument-ConvertHTMLDOMtodocument">Convert HTML DOM to document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#ConvertHTMLDOMtoDocument-GetHTMLDOMfromstringcontentwithresourcesandsavetodocument">Get HTML DOM from string content with resources and save to document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1.1</span> <a href="#ConvertHTMLDOMtoDocument-Code">Code</a></li></ul></li><li><span class="TOCOutline">1.2</span> <a href="#ConvertHTMLDOMtoDocument-GetHTMLDOMfromfilewithresourcefolderandsavetodocument">Get HTML DOM&nbsp;from file with resource folder and save to document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.2.1</span> <a href="#ConvertHTMLDOMtoDocument-Code.1">Code</a></li></ul></li></ul></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

## Convert HTML DOM to document

In this area code samples are placed to show how to code samples to show how to convert HTML DOM to document.

### Get HTML DOM from string content with resources and save to document

Following code example shows how to Get HTML DOM from string content with resources and save to document.

#### Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-editor/GroupDocs.Editor-for-Java</span></td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">InputStream</span> inputStream <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">FileInputStream</span>(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>storagePath <span class="pl-k">+</span> <span class="pl-smi">File</span><span class="pl-k">.</span>separator <span class="pl-k">+</span> fileName);</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">InputHtmlDocument</span> htmlDoc <span class="pl-k">=</span> <span class="pl-smi">EditorHandler</span><span class="pl-k">.</span>toHtml(inputStream);</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> htmlContent <span class="pl-k">=</span> htmlDoc<span class="pl-k">.</span>getContent();</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">OutputHtmlDocument</span> editedHtmlDoc <span class="pl-k">=</span> <span class="pl-smi">OutputHtmlDocument</span><span class="pl-k">.</span>fromMarkup(htmlContent, <span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getStoragePathWithResource(<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">WordProcessingSaveOptions</span> saveOptions <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">WordProcessingSaveOptions</span>();</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">OutputStream</span> out <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">FileOutputStream</span>(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getOutputPath(<span class="pl-s"><span class="pl-pds">"</span>output.docx<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">EditorHandler</span><span class="pl-k">.</span>toDocument(editedHtmlDoc, out, saveOptions);</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC10" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> ex){</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC11" class="blob-code blob-code-inner js-file-line">ex<span class="pl-k">.</span>getMessage();</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java-LC12" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/b0d9d0d187a2bb0dcede30612d24e094/raw/c095f349efe8865dc713f1dec4ba34a1ce76d3c7/Examples-src-main-java-com-groupdocs-editor-examples-HTMLDOMEditor-saveToWordsDocument.java) [Examples-src-main-java-com-groupdocs-editor-examples-HTMLDOMEditor-saveToWordsDocument.java](https://gist.github.com/GroupDocsGists/b0d9d0d187a2bb0dcede30612d24e094#file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savetowordsdocument-java) hosted with ❤ by [GitHub](https://github.com)

### Get HTML DOM from file with resource folder and save to document

Following code example shows how to Get HTML DOM from file with resource folder and save to document.

#### Code

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-editor/GroupDocs.Editor-for-Java</span></td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">OutputHtmlDocument</span> editedHtmlDoc <span class="pl-k">=</span> <span class="pl-smi">OutputHtmlDocument</span><span class="pl-k">.</span>fromFile(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getStoragePath(fileName), <span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getStoragePathWithResource(<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">WordProcessingSaveOptions</span> saveOptions <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">WordProcessingSaveOptions</span>();</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">OutputStream</span> out <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">FileOutputStream</span>(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getOutputPath(<span class="pl-s"><span class="pl-pds">"</span>output.docx<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">EditorHandler</span><span class="pl-k">.</span>toDocument(editedHtmlDoc, out, saveOptions);</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC7" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> ex){</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC8" class="blob-code blob-code-inner js-file-line">ex<span class="pl-k">.</span>getMessage();</td></tr><tr><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java-LC9" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/d2f8109dd25f1f36f0c3fb9f510d06a0/raw/d6563fe2e9226800be3794225348efa93186765e/Examples-src-main-java-com-groupdocs-editor-examples-HTMLDOMEditor-saveHTMLDOMFromFileToWordsDocument.java) [Examples-src-main-java-com-groupdocs-editor-examples-HTMLDOMEditor-saveHTMLDOMFromFileToWordsDocument.java](https://gist.github.com/GroupDocsGists/d2f8109dd25f1f36f0c3fb9f510d06a0#file-examples-src-main-java-com-groupdocs-editor-examples-htmldomeditor-savehtmldomfromfiletowordsdocument-java) hosted with ❤ by [GitHub](https://github.com)