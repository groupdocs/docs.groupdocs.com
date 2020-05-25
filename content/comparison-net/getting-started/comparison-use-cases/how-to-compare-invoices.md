---
id: how-to-compare-invoices
url: comparison/net/how-to-compare-invoices
title: How to Compare Invoices
weight: 3
description: "You will find how you can use GroupDocs.Comparison for .NET inside your production when comparing invoices. Look at file comparison sensitivity configuration and other use cases of the GroupDocs.Comparison API"
keywords: Compare docx files, invoices comparison, how to compare invoices
productName: GroupDocs.Comparison for .NET
hideChildren: False
---
# How to Compare Two Invoices using GroupDocs.Comparison

Sometimes you need to achieve maximum accuracy in comparing files. Suppose you have two versions of an important document and you need to find differences character-by-character or the opposite case, you need to compare the documents, but the details are not important to you, and you only need words that have changes. **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** provides the ability to compare documents with sensitivity settings  

For example, there are two invoices in the DOCX format and you need to compare their contents with the maximum level of detail and comparison sensitivity.

  

| Source Invoice | Target Invoice |
| --- | --- |
| ![](https://wiki.lisbon.dynabic.com/download/attachments/31490619/2.png?version=1&modificationDate=1584538043000&api=v2) | ![](https://wiki.lisbon.dynabic.com/download/attachments/31490619/1.png?version=1&modificationDate=1584538043000&api=v2) |

  

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/net) provides the ability to compare two files in DOCX format(or any other [supported file formats](https://docs.groupdocs.com/display/comparisonnet/Supported+Document+Formats)) with adjustment of detalization level and[comparison sensitivity.](https://docs.groupdocs.com/display/comparisonnet/Adjusting+comparison+sensitivity)

The following are the steps to compare two DOCX files with specific settings of detalization level and[comparison sensitivity.]({{< ref "comparison-net/developer-guide/advanced-usage/comparison/adjusting-comparison-sensitivity.md" >}})

*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer)objectwith source document path or stream;
*   Call [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index)method and specify target document path or stream;
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions)object with desired [SensitivityOfComparison](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions/properties/sensitivityofcomparison) and [DetalisationLevel](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions/properties/detalisationlevel) value;
    
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.comparer/compare/methods/1)method and pass [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) object to method.
    

The following code samples demonstrate how to compare two DOCX files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">sourceDocumentPath = </code><code class="csharp string">@"Invoice_source.docx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to source document</code></div><div class="line number2 index1 alt1"><code class="csharp keyword">string</code> <code class="csharp plain">targetDocumentPath = </code><code class="csharp string">@"Invoice_target.docx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to target document</code></div><div class="line number3 index2 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">outputPath = </code><code class="csharp string">@"Invoice_result.docx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to result document&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></div><div class="line number4 index3 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div><div class="line number5 index4 alt2"><code class="csharp keyword">using</code> <code class="csharp plain">(Comparer comparer = </code><code class="csharp keyword">new</code> <code class="csharp plain">Comparer(sourceDocumentPath))</code></div><div class="line number6 index5 alt1"><code class="csharp plain">{</code></div><div class="line number7 index6 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Add(targetDocumentPath);</code></div><div class="line number8 index7 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">CompareOptions options = </code><code class="csharp keyword">new</code> <code class="csharp plain">CompareOptions</code></div><div class="line number9 index8 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">{</code></div><div class="line number10 index9 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">SensitivityOfComparison = 100,</code></div><div class="line number11 index10 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">DetalisationLevel = DetalisationLevel.High</code></div><div class="line number12 index11 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">};</code></div><div class="line number13 index12 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Compare(outputPath, options);</code></div><div class="line number14 index13 alt1"><code class="csharp plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a DOCX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green**

| Result Invoice |
| --- |
| ![](https://wiki.lisbon.dynabic.com/download/attachments/31490619/%3F%3F%3F%3F%3F%3F.PNG?version=1&modificationDate=1584539216000&api=v2) |

## More resources

### Advanced Usage Topics

To learn more about document comparison features, please refer to the [advanced usage section]({{< ref "comparison-net/developer-guide/advanced-usage/_index.md" >}}).

### GitHub Examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Comparison for .NET examples, plugins, and showcase](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET)
    
*   [GroupDocs.Comparison for Java examples, plugins, and showcase](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java)
    
*   [Document Comparison for .NET MVC UI Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC) 
    
*   [Document Comparison for .NET App WebForms UI Modern Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms)
    
*   [Document Comparison for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java-Dropwizard)
    
*   [Document Comparison for Java Spring UI Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java-Spring)
    

### Free Online App

Along with full-featured .NET library we provide simple, but powerful free Apps.  

You are welcome to compare your DOC or DOCX, XLS or XLSX, PPT or PPTX, PDF, EML, EMLX, MSGand other documents with free to use online [GroupDocs Comparison App](https://products.groupdocs.app/comparison).
