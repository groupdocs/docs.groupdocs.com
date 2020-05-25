---
id: set-checkbox-values-dynamically
url: assembly/net/set-checkbox-values-dynamically
title: Set Checkbox Values Dynamically
weight: 45
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
{{< alert style="info" >}}This feature is supported by version 20.3 or greater.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

You can set checkbox values to either checked or unchecked in your reports dynamically by taking the following steps:

1.  Add a checkbox content control to your template at a place where you want it to appear in a result document.
2.  By editing content control properties, add a check tag to the title of the checkbox content control using the following syntax.

```csharp
<<check [conditional_expression]>>
```

The code will look like following snippet:

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC3" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source document template (Email or Word Document)</span></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/CheckBoxValueSetDemo.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC6" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination for reports</span></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/CheckBoxValueSetDemo Out.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC9" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Assemble the document</span></td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>), <span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">boolVal</span>, <span class="pl-s"><span class="pl-pds">"</span>conditional_expression<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC14" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC16" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-setcheckboxvaluedynamicallyinword_20-3-cs-LC18" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/b06d6c5655c84fc772c6411d66016943/raw/0e3f7c8194319630dfb51af12d10c100c846cbcb/SetCheckboxValueDynamicallyInWord_20.3.cs) [SetCheckboxValueDynamicallyInWord\_20.3.cs](https://gist.github.com/GroupDocsGists/b06d6c5655c84fc772c6411d66016943#file-setcheckboxvaluedynamicallyinword_20-3-cs) hosted with ❤ by [GitHub](https://github.com)

  

Here, conditional\_expression defines a condition upon which the value of the checkbox content control is to be set to checked (or unchecked, if the condition is not met). The conditional expression must return a Boolean value.

While building a report, a conditional expression declared within a check tag is evaluated and the value of its containing checkbox content control is set accordingly. The check tag itself is removed then.

{{< alert style="warning" >}}Dynamic checkbox value setting is available for Word Processing documents only.{{< /alert >}}