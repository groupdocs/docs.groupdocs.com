---
id: code-files-comparison
url: comparison/java/code-files-comparison
title: Code Files Comparison
weight: 2
description: "This article describes how can you compare programming files and merge them into one file with applied or canceled changes. GroupDocs.Comparison for Java provides the ability to find differences in such files as: CS, Java, Python, C ++, Ruby and others"
keywords: Compare cs files, compare java files, merge documents
productName: GroupDocs.Comparison for Java
hideChildren: False
---
# How to Compare CSharp, Java, Python, Ruby files

You are working in an IT project on one product. You need to compare two CS files and accept or reject the found changes found in the specified range. With this action, you will merge the two files into one with the edits from different developers.

  

| Source File | Target File |
| --- | --- |
| ![](comparison-java/images/code-files-comparison.png)) | ![](comparison-java/images/code-files-comparison_1.png))

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/java) provides the ability to compare two files in CS format(or any other [supported file formats]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}})).

The following are the steps to compare two CS files

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer)objectwith source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String)) method  and specify path target document path or stream;
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare()) method;
*   Call [getChanges](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#getChanges()) method and obtain detected changes list;
*   Set [ComparisonAction](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.result/ComparisonAction)of needed change object to [ComparisonAction.ACCEPT](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.result/ComparisonAction#ACCEPT) or [ComparisonAction.REJECT](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison.result/ComparisonAction#REJECT) value;
*   Call [applyChanges](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#applyChanges(java.lang.String,%20com.groupdocs.comparison.options.save.SaveOptions,%20com.groupdocs.comparison.options.ApplyChangeOptions)) method and pass collection of changes to it.

ApplyChangeOptions class:

*   **getChanges** - List of changes that must be applied (or not) to the resulting document;  
      
    

The following code samples demonstrate how to compare two CS files and accept or reject detected changesin a specific range.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">Comparer comparer = </code><code class="java keyword">new</code> <code class="java plain">Comparer(SOURCE_FILE); </code><code class="java comments">// NOTE: Put here actual path to source document</code></div><div class="line number2 index1 alt1"><code class="java keyword">try</code> <code class="java plain">{</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.add(TARGET_FILE); </code><code class="java comments">// NOTE: Put here actual path to target document</code></div><div class="line number4 index3 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.compare();</code></div><div class="line number5 index4 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">ChangeInfo[] changes = comparer.getChanges();</code></div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java keyword">for</code> <code class="java plain">(</code><code class="java keyword">int</code> <code class="java plain">n = </code><code class="java value">0</code><code class="java plain">; n &lt; </code><code class="java value">5</code><code class="java plain">; n++) {</code></div><div class="line number7 index6 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">changes[n].setComparisonAction(ComparisonAction.REJECT);</code></div><div class="line number8 index7 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">}</code></div><div class="line number9 index8 alt2">&nbsp;</div><div class="line number10 index9 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java keyword">for</code> <code class="java plain">(</code><code class="java keyword">int</code> <code class="java plain">n = </code><code class="java value">6</code><code class="java plain">; n &lt; </code><code class="java value">17</code><code class="java plain">; n++) {</code></div><div class="line number11 index10 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">changes[n].setComparisonAction(ComparisonAction.ACCEPT);</code></div><div class="line number12 index11 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">}</code></div><div class="line number13 index12 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.applyChanges(RESULT_FILE, </code><code class="java keyword">new</code> <code class="java plain">SaveOptions(), </code><code class="java keyword">new</code> <code class="java plain">ApplyChangeOptions(changes));</code></div><div class="line number14 index13 alt1"><code class="java plain">} </code><code class="java keyword">finally</code> <code class="java plain">{</code></div><div class="line number15 index14 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">comparer.dispose();</code></div><div class="line number16 index15 alt1"><code class="java plain">}</code></div></div></td></tr></tbody></table>

As a result, we get a merged CS file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green. **

Also, you will receive a file in HTML format with changed places in the code.

  

| Result File |
| --- |
| ![](comparison-java/images/code-files-comparison_2.png)) 
