---
id: presentation-comparison
url: comparison/java/presentation-comparison
title: Presentation Comparison
weight: 5
description: "The article describes a possible example of using the GroupDocs.Comparison for Java in your work practice and the possibility of a software product for finding differences in styles within PowerPoint Presentations"
keywords: Compare Presentation, compare style changes, compare pptx, How to compare PowerPoint files
productName: GroupDocs.Comparison for Java
hideChildren: False
---
# How to Compare Two Presentations

You made a presentation at different times. But the elements on the slides are not located as you originally did. To find where the slides differ, you can compare two files in PPTX format using the **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/java)** functionality along with a built-in option that helps find changes in styles.

  

| Source Slide | Target Slide |
| --- | --- |
| ![](comparison-java/images/presentation-comparison.png)) | ![](comparison-java/images/presentation-comparison_1.png))

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/java) provides the ability to compare two files in PPTX format(or any other [supported file formats]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}}))

The following are the steps to compare two PPTX files.

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer)objectwith source document path or stream; 
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions) object with desired parameters*;* 
*   Call[ compare ](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String,%20com.groupdocs.comparison.options.CompareOptions))method and pass [CompareOptions](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions) object to method;

The following code samples demonstrate how to compare two PPTX files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">Comparer comparer = </code><code class="java keyword">new</code> <code class="java plain">Comparer(SOURCE_FILE);</code></div><div class="line number2 index1 alt1"><code class="java keyword">try</code> <code class="java plain">{</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.add(TARGET_FILE);</code></div><div class="line number4 index3 alt1">&nbsp;</div><div class="line number5 index4 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java keyword">final</code> <code class="java plain">CompareOptions compareOptions = </code><code class="java keyword">new</code> <code class="java plain">CompareOptions();</code></div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">compareOptions.setDetectStyleChanges(</code><code class="java keyword">true</code><code class="java plain">);</code></div><div class="line number7 index6 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">compareOptions.setDetalisationLevel(DetalisationLevel.High);</code></div><div class="line number8 index7 alt1">&nbsp;</div><div class="line number9 index8 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.compare(RESULT_FILE, compareOptions);</code></div><div class="line number10 index9 alt1"><code class="java plain">} </code><code class="java keyword">finally</code> <code class="java plain">{</code></div><div class="line number11 index10 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.dispose();</code></div><div class="line number12 index11 alt1"><code class="java plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a PPTX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green**

| Result Slide |
| --- |
| ![](comparison-java/images/presentation-comparison_2.png)) 
