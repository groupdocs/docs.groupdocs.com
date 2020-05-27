---
id: autocad-files-comparison
url: comparison/java/autocad-files-comparison
title: AutoCAD Files Comparison
weight: 1
description: "Read this article and find out how you can use the GroupDocs.Comparison for Java to find differences in AutoCAD files and other drawings. Also, in this article you can find an option to use this product in your production"
keywords: How to compare AutoCAD files, CAD files, Comparison Use Case, Compare AutoCAD files
productName: GroupDocs.Comparison for Java
hideChildren: False
---
# How to Compare Two AutoCAD File

You work in production and you need to compare product drawings for how it has changed. For this you can use **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/java)** with its ability to compare DWG files (or other AutoCAD [supported file format]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}})).

  

| Source drawing | Target drawing |
| --- | --- |
| ![](comparison-java/images/autocad-files-comparison.png)) | ![](comparison-java/images/autocad-files-comparison_1.png))

[**GroupDocs****.Comparison**](https://products.groupdocs.com/comparison/java) provides the ability to compare two files in DWG format(or any other [supported file formats]({{< ref "comparison-java/getting-started/supported-document-formats.md" >}})).

The following are the steps to compare two DWG files

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer) object with source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String)) method and specify target document path or stream;
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String))method.

The following code samples demonstrate how to compare two DWG files.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><pre><span style="color: rgb(0, 0, 0);">Comparer comparer </span>= <span style="color: rgb(0, 51, 179);">new </span>Comparer(<span style="color: rgb(6, 125, 23);">"source.dwg"</span>); <span style="color: rgb(140, 140, 140);">// NOTE: Put here actual path to source document<br></span><span style="color: rgb(0, 51, 179);">try </span>{<br>    <span style="color: rgb(0, 0, 0);">comparer</span>.add(<span style="color: rgb(6, 125, 23);">"target.dwg"</span>); <span style="color: rgb(140, 140, 140);">// NOTE: Put here actual path to target document<br></span><span style="color: rgb(140, 140, 140);">&nbsp;</span><span style="color: rgb(0, 0, 0);"> comparer</span>.compare(<span style="color: rgb(6, 125, 23);">"result.dwg"</span>); <span style="color: rgb(140, 140, 140);">// NOTE: Put here actual path to result document<br></span>} <span style="color: rgb(0, 51, 179);">finally </span>{<br>    <span style="color: rgb(0, 0, 0);">comparer</span>.dispose();<br>}</pre></div></div></td></tr></tbody></table>

As a result, we get a DWG file where the deleted elements are marked in **red**, the added – in **blue**, and the modified – in **green. **

| Result DWG |
| --- |
| ![](comparison-java/images/autocad-files-comparison_2.png)) 
