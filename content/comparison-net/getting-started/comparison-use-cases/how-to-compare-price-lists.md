---
id: how-to-compare-price-lists
url: comparison/net/how-to-compare-price-lists
title: How to Compare Price Lists
weight: 5
description: "This article describes how to compare files using Microsoft Excel feature and GroupDocs.Comparison API for .NET. You will also learn how to compare two or more tables and get the difference in files"
keywords: Compare Excel files, compare spreedsheet, how to compare Excel files
productName: GroupDocs.Comparison for .NET
hideChildren: False
---
Let's say you have two Excel workbooks, or maybe two versions of the same workbook, that you want to compare. Or maybe you want to find potential problems, like manually-entered (instead of calculated) totals, or broken formulas. If you have Microsoft Office Professional Plus 2013, you can use Microsoft Spreadsheet Compare to run a report on the differences and problems it finds.

{{< alert style="info" >}}Important:  Spreadsheet Compare is only available with Office Professional Plus 2013 or Office 365 ProPlus.{{< /alert >}}

To compare two Excel workbooks with Office Professional Plus 2013 you should:

*   Click **Home > Compare Files**. The Compare Files dialog box appears.  
![](comparison-net/images/how-to-compare-price-lists.jpg)
*   Click the blue folder icon next to the **Compare** box to browse to the location of the earlier version of your workbook.  
      
![](comparison-net/images/how-to-compare-price-lists_1.jpg)
      
    
*   Click the green folder icon next to the **To** box to browse to the location of the workbook that you want to compare to the earlier version, and then click **OK**.
*   In the left pane, choose the options you want to see in the results of the workbook comparison by checking or unchecking the options, such as **Formulas**, **Macros**, or **Cell Format**. Or, just **Select All**.  
      
![](comparison-net/images/how-to-compare-price-lists_2.png)
*   Click **OK** to run the comparison.

## How to compare Excel files using GroupDocs.Comparison

Microsoft Office Professional Plus 2013 offers spreadsheet comparisons, but **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** provides a possibility to compare worksheet programmatically and you can compare not only two different files, but several at once. Let's say, there are three or more price list for few years (For example: "2018", "2019", "2020") in the XLSX format or other [supported file formats](https://docs.groupdocs.com/display/comparisonnet/Supported+Document+Formats). other and you need to compare their contents. Here is an example of how to compare three price lists using GroupDocs.Comparsion API. Usually you just have to follow these steps:

*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) object with source document path or stream;
*   Call [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) method and specify target document path or stream. Repeat this step for every target document;
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index)method.  
      
    

| Price List for 2018 | Price List for 2019 | Price List for 2020 |
| --- | --- | --- |
| ![](attachments/88178874/88342546.png) | ![](attachments/88178874/88342547.png) | ![](attachments/88178874/88342548.png) |

Here is the code that is used to compare three price lists.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">sourceDocumentPath = </code><code class="csharp string">@"Source Price List.xlsx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to source document</code></div><div class="line number2 index1 alt1"><code class="csharp keyword">string</code> <code class="csharp plain">targetOneDocumentPath = </code><code class="csharp string">@"Target Price List 1.xlsx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to target one document</code></div><div class="line number3 index2 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">targetTwoDocumentPath = </code><code class="csharp string">@"Target Price List 2.xlsx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to target two document</code></div><div class="line number4 index3 alt1"><code class="csharp keyword">string</code> <code class="csharp plain">outputPath = </code><code class="csharp string">@"Result Price List.xlsx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to result document</code></div><div class="line number5 index4 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div><div class="line number6 index5 alt1"><code class="csharp keyword">using</code> <code class="csharp plain">(Comparer comparer = </code><code class="csharp keyword">new</code> <code class="csharp plain">Comparer(sourceDocumentPath))</code></div><div class="line number7 index6 alt2"><code class="csharp plain">{</code></div><div class="line number8 index7 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Add(targetOneDocumentPath);</code></div><div class="line number9 index8 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Add(targetTwoDocumentPath);</code></div><div class="line number10 index9 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Compare(outputPath);</code></div><div class="line number11 index10 alt2"><code class="csharp plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a XSLX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green**

| Result Price List |
| --- |
| ![](attachments/88178874/88342549.png) |

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
