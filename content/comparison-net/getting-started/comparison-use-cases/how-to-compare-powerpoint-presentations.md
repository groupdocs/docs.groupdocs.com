---
id: how-to-compare-powerpoint-presentations
url: comparison/net/how-to-compare-powerpoint-presentations
title: How to Compare PowerPoint Presentations
weight: 4
description: "The article describes a possible example of using the GroupDocs.Comparison for .NET in your work practice and the possibility of a software product for finding differences in styles within PowerPoint Presentations"
keywords: Compare Presentation, compare style changes, compare pptx, How to compare PowerPoint files
productName: GroupDocs.Comparison for .NET
hideChildren: False
---
# How to Compare Two Presentations

You may need to compare two versions of a PowerPoint Presentation to see the differences between them (e.g., if a colleague has edited it directly without noting the changes). And the quickest way to do this is with PowerPoint’s built-in Compare function. To use this:

*   Open the original version of your presentation
*   Go to **Review** > **Compare**
*   Click **Compare** to open a browser window
*   Select the edited version of the presentation and click **Merge**

![](https://wiki.lisbon.dynabic.com/download/attachments/31491169/powerpoint1.png?version=4&modificationDate=1587123812000&api=v2)

You will then enter Review Mode. This will open the Reviewing Pane, which shows a list of all edits in the presentation at the right of the screen.

# How to Compare Two Presentations using GroupDocs.Comparison

Such functionality that is provided by third-party programs is clearly not enough. **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** provides many features for comparing a wide range of [supported file formats](https://docs.groupdocs.com/display/comparisonnet/Supported+Document+Formats), including PowerPoint Presentation format. Let's make an example, you made a presentation at different times, but the elements on the slides are not located as you originally did. To find where the slides differ, you can compare two files in PPTX format using the **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** functionality along with a built-in option that helps find changes in styles.

  

| Original Presentation | Modified Presentation |
| --- | --- |
| ![](https://wiki.lisbon.dynabic.com/download/attachments/31491169/image2020-3-23%2012%3A11%3A30.png?version=1&modificationDate=1584958287000&api=v2) | ![](https://wiki.lisbon.dynabic.com/download/attachments/31491169/image2020-3-23%2012%3A11%3A51.png?version=1&modificationDate=1584958309000&api=v2) |

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/net) provides the ability to compare two files in PPTX format(or any other [supported file formats](https://docs.groupdocs.com/display/comparisonnet/Supported+Document+Formats))

The following are the steps to compare two PPTX files.

*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer)objectwith source document path or stream;
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions)object with desired parameters*;*
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer)method and pass [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) object to method;

The following code samples demonstrate how to compare two PPTX files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">sourceDocumentPath = </code><code class="csharp string">@"source_presentation.pptx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to source document</code></div><div class="line number2 index1 alt1"><code class="csharp keyword">string</code> <code class="csharp plain">targetDocumentPath = </code><code class="csharp string">@"target_presentation.pptx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to target document</code></div><div class="line number3 index2 alt2"><code class="csharp keyword">string</code> <code class="csharp plain">outputPath = </code><code class="csharp string">@"result_presentation.docx"</code><code class="csharp plain">; </code><code class="csharp comments">// NOTE: Put here actual path to result document&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></div><div class="line number4 index3 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div><div class="line number5 index4 alt2"><code class="csharp keyword">using</code> <code class="csharp plain">(Comparer comparer = </code><code class="csharp keyword">new</code> <code class="csharp plain">Comparer(sourceDocumentPath))</code></div><div class="line number6 index5 alt1"><code class="csharp plain">{</code></div><div class="line number7 index6 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Add(targetDocumentPath);</code></div><div class="line number8 index7 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">CompareOptions compareOptions = </code><code class="csharp keyword">new</code> <code class="csharp plain">CompareOptions</code></div><div class="line number9 index8 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">{</code></div><div class="line number10 index9 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">DetectStyleChanges = </code><code class="csharp keyword">true</code><code class="csharp plain">,</code></div><div class="line number11 index10 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">DetalisationLevel = DetalisationLevel.High</code></div><div class="line number12 index11 alt1"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">};</code></div><div class="line number13 index12 alt2"><code class="csharp spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="csharp plain">comparer.Compare(outputPath, compareOptions);</code></div><div class="line number14 index13 alt1"><code class="csharp plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a PPTX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green**

| Result Slide |
| --- |
| ![](https://wiki.lisbon.dynabic.com/download/attachments/31491169/image2020-3-23%2012%3A12%3A7.png?version=1&modificationDate=1584958324000&api=v2) |

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
