---
id: groupdocs-conversion-for-java-17-10-release-notes
url: conversion/java/groupdocs-conversion-for-java-17-10-release-notes
title: GroupDocs.Conversion for Java 17.10 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Conversion for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Conversion for Java 17.10{{< /alert >}}

## Major Features

There are 4 new features, improvements and fixes in this regular monthly release. The most notable are:

*   Hide comments from Cells documents
*   Option to convert specific pages (e.g. 1,3,5) from source document
*   Simplifying the generated HTML markup
*   Fixed bug with fixed layout when converting to HTML
*   Major improvements in the public API. Note: no braking changes. The redundant methods are marked as obsolete and will be removed after 17.12.0 release
*   Improvement in diagram to HTML conversion
*   Improved conversion from SVG
*   Email to HTML conversion improvements
*   Converting from STL
*   Converting from IFC
*   Improved Cells to XPS conversions
*   Improved Slides to XPS conversions
*   Improved saving on the whole converted document as well as page by page saving functionallity
*   Watermark transparency set to 50% transparent by default
*   9 bugs fixed

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1999</p></td><td class="confluenceTd"><p>Hide comments for Cells documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1984</p></td><td class="confluenceTd"><p>Implement possibility to convert specific pages</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2170</p></td><td class="confluenceTd"><p>Implement conversion from STL</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2171</p></td><td class="confluenceTd"><p>Implement conversion from IFC</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2176</p></td><td class="confluenceTd"><p>Conversion of document containing images to RTF with "old readers" compatibility</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2003</p></td><td class="confluenceTd"><p>Simplify the generated HTML markup</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1841</p></td><td class="confluenceTd"><p>Convert Diagram to Html improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2044</p></td><td class="confluenceTd"><p>Conversion from SVG improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2056</p></td><td class="confluenceTd"><p>Email to Html conversion improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2072</p></td><td class="confluenceTd"><p>Improved public API</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2108</p></td><td class="confluenceTd"><p>Improve document savers for saving complete document and save by page</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2130</p></td><td class="confluenceTd"><p>Cells To XPS conversion improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2152</p></td><td class="confluenceTd"><p>WatermarkOptions is instantiated default Width and Height of the watermark</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2153</p></td><td class="confluenceTd"><p>Set default transparency of watermark to 0.5</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2155</p></td><td class="confluenceTd"><p>Slides To XPS conversion improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2161</p></td><td class="confluenceTd"><p>Expose FileType and PagesCount properties in ConvertedDocument class</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2020</p></td><td class="confluenceTd"><p>Converting to Html with SaveOptions.FixedLayout=false always produce fixed layout html conversion</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1754</p></td><td class="confluenceTd"><p>PPTX to HTML Conversion - While converting pptx to html found improper text formatting of Header or missing text</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2042</p></td><td class="confluenceTd"><p>ImageSaveOptions.TiffOptions.Compression does not seem to work</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1755</p></td><td class="confluenceTd"><p>PPTX to HTML Conversion - Image without background converted with white background also white dot is added near Header Text</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-809</p></td><td class="confluenceTd"><p>Images are missing when PDF is saved to EPUB</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1908</p></td><td class="confluenceTd"><p>Incorrect conversion from One to Pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2158</p></td><td class="confluenceTd"><p>PsdOptions does not have constrcutor</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2163</p></td><td class="confluenceTd"><p>Converting HTML with external resources produce wrong output</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2167</p></td><td class="confluenceTd"><p>Pdf locked with modification password but without view password cannot be converted</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-143</p></td><td class="confluenceTd"><p>Conversion .html to .pdf doesn't load .css and image resources from relative path</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-405</p></td><td class="confluenceTd"><p>Simplify the generated HTML markup</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-442</p></td><td class="confluenceTd"><p>File extension for filetype is not reliable</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-443</p></td><td class="confluenceTd"><p>Corrupted Jpeg scan component id definition. Cannot load image</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Conversion for Java 17.10. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Conversion which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### How to hide comments when converting from Cells

**Java**

```csharp
 String sourceFileName = "source.xlsx"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
conversionConfig.setOutputPath(outputPath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

PdfSaveOptions options = new PdfSaveOptions();
options.setOutputType(OutputType.String);
options.setHideComments(true); 

ConvertedDocument result = conversionHandler.<String>convert(sourceFileName, options);
result.save(sourceFileName + "." + result.getFileType());
```

### How to convert specific pages from source document

**Java**

```csharp
String sourceFileName = "DOCXsample.docx"; //TODO: Put the source filename here with more than 5 pages 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
conversionConfig.setOutputPath(outputPath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

PdfSaveOptions options = new PdfSaveOptions();
options.setOutputType(OutputType.String);
ArrayList<Integer> arrayList = new ArrayList<Integer>();
arrayList.add(1);
arrayList.add(3);
arrayList.add(5);
options.setConvertPages(arrayList); 

ConvertedDocument result = conversionHandler.<String>convert(sourceFileName, options);
result.save(sourceFileName + "." + result.getFileType());
```

### How to get simplified markup when converting to HTML

**Java**

```csharp
String sourceFileName = "DOCXsample.docx"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
conversionConfig.setOutputPath(outputPath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

HtmlSaveOptions options = new HtmlSaveOptions();
options.setOutputType(OutputType.String);
options.setFixedLayout(false); 

ConvertedDocument result = conversionHandler.<String>convert(sourceFileName, options);
result.save(sourceFileName + "." + result.getFileType());
```
