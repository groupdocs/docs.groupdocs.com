---
id: invoice-comparison
url: comparison/java/invoice-comparison
title: Invoice Comparison
weight: 4
description: "You will find how you can use GroupDocs.Comparison for Java inside your production when comparing invoices. Look at file comparison sensitivity configuration and other use cases of the GroupDocs.Comparison API"
keywords: Compare docx files, invoices comparison, how to compare invoices
productName: GroupDocs.Comparison for Java
hideChildren: False
---
# How to Compare Two Invoices

For example, there are two invoices in the DOCX format and you need to compare their contents with the maximum level of detail and comparison sensitivity.

  

| Source Invoice | Target Invoice |
| --- | --- |
| ![](comparison-java/images/invoice-comparison.png)) | ![](comparison-java/images/invoice-comparison_1.png))

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/java) provides the ability to compare two files in DOCX format(or any other [supported file formats]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}})) with adjustment of detalization level and[comparison sensitivity](https://docs.groupdocs.com/display/comparisonjava/Adjusting+comparison+sensitivity).

The following are the steps to compare two DOCX files with specific settings of detalization level and[comparison sensitivity.](https://wiki.lisbon.dynabic.com/pages/viewpage.action?pageId=31492709)

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer)objectwith source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String))method and specify target document path or stream;
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions)object with desired [setSensitivityOfComparison](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions#setSensitivityOfComparison(int)) and [setDetalisationLevel](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions#setDetalisationLevel(int)) value;
    
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String,%20com.groupdocs.comparison.options.CompareOptions))method and pass [CompareOptions](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.options/CompareOptions) object to method.
    

The following code samples demonstrate how to compare two DOCX files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">Comparer comparer = </code><code class="java keyword">new</code> <code class="java plain">Comparer(SOURCE_FILE);</code></div><div class="line number2 index1 alt1"><code class="java keyword">try</code> <code class="java plain">{</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.add(TARGET_FILE);</code></div><div class="line number4 index3 alt1">&nbsp;</div><div class="line number5 index4 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java keyword">final</code> <code class="java plain">CompareOptions compareOptions = </code><code class="java keyword">new</code> <code class="java plain">CompareOptions();</code></div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">compareOptions.setSensitivityOfComparison(</code><code class="java value">100</code><code class="java plain">);</code></div><div class="line number7 index6 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">compareOptions.setDetalisationLevel(DetalisationLevel.High);</code></div><div class="line number8 index7 alt1">&nbsp;</div><div class="line number9 index8 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.compare(RESULT_FILE, compareOptions);</code></div><div class="line number10 index9 alt1"><code class="java plain">} </code><code class="java keyword">finally</code> <code class="java plain">{</code></div><div class="line number11 index10 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.dispose();</code></div><div class="line number12 index11 alt1"><code class="java plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a DOCX file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green.**

| Result Invoice |
| --- |
| ![](comparison-java/images/invoice-comparison_2.png)) 
