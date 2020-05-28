---
id: price-list-comparison
url: comparison/java/price-list-comparison
title: Price List Comparison
weight: 6
description: "This article describes how to compare files using Microsoft Excel feature and GroupDocs.Comparison API for Java. You will also learn how to compare two or more tables and get the difference in files"
keywords: Compare Excel files, compare spreedsheet, how to compare Excel files
productName: GroupDocs.Comparison for Java
hideChildren: False
---
# How to Compare Price Lists

There are three or more price list for few years (For example: "2018", "2019", "2020") in the XLSX format and you need to compare their contents.

  

| Source Price List | Target Price List #1 | Target Price List #2 |
| --- | --- | --- |
| ![](comparison-java/images/price-list-comparison.png)) | ![](comparison-java/images/price-list-comparison_1.png)) | ![](comparison-java/images/price-list-comparison_2.png)

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/java) provides the ability to compare three or more files in XLSX format(or any other [supported file formats]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}})).

The following are the steps to compare three or more XLSX files

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer) object with source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String)) method and specify target document path or stream. Repeat this step for every target document;
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String))method.

The following code samples demonstrate how to compare three or more XLSX files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">Comparer comparer = </code><code class="java keyword">new</code> <code class="java plain">Comparer(SOURCE_FILE);</code></div><div class="line number2 index1 alt1"><code class="java keyword">try</code> <code class="java plain">{</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.add(TARGET_FILE_ONE);</code></div><div class="line number4 index3 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.add(TARGET_FILE_TWO);</code></div><div class="line number5 index4 alt2">&nbsp;</div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.compare(RESULT_FILE);</code></div><div class="line number7 index6 alt2"><code class="java plain">} </code><code class="java keyword">finally</code> <code class="java plain">{</code></div><div class="line number8 index7 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.dispose();</code></div><div class="line number9 index8 alt2"><code class="java plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a XSLX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green**

| Result Price List |
| --- |
| ![](comparison-java/images/price-list-comparison_3.png)) 