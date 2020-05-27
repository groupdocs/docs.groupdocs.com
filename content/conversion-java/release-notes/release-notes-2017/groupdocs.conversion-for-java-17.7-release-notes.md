---
id: groupdocs-conversion-for-java-17-7-release-notes
url: conversion/java/groupdocs-conversion-for-java-17-7-release-notes
title: GroupDocs.Conversion for Java 17.7 Release Notes
weight: 3
description: ""
keywords: 
productName: GroupDocs.Conversion for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Conversion for Java 17.7{{< /alert >}}

## Major Features

There are 14 new features, improvements and fixes in this regular monthly release. The most notable are:

*   Introduced new method for retrieving basic metadata of the source document
*   Improved handling of extension-less urls
*   Improved to HTML conversions
*   Improved HTML to Cells conversions
*   Conversion from XML-FO/XSL to PDF
*   New option to set zoom when converting to HTML
*   Conversion from Vsdm, Vssm, Vstm
*   Conversion from LaTex
*   Improved speed when converting from cells.
*   Improved memory usage
*   Returning available layouts for a CAD document
*   Option to hide PDF annotations when converting from PDF
*   Option to specify exact layout to convert from a CAD document
*   Option to specify Width and Height for the result document when converting From CAD document
*   Fixed 11 bug

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1810</p></td><td class="confluenceTd"><p>Implement method for getting extended document information</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1892</p></td><td class="confluenceTd"><p>Implement conversion from XML-FO/XSL</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1910</p></td><td class="confluenceTd"><p>Option to set zoom when converting to HTML</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1917</p></td><td class="confluenceTd"><p>Conversion from Vsdm, Vssm, Vstm</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1928</p></td><td class="confluenceTd"><p>Implement conversion from LaTex</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1756</p></td><td class="confluenceTd"><p>PPTX to HTML Conversion - Slide zoom level property</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1968</p></td><td class="confluenceTd"><p>Update DocumentInfo class to return all layouts for CAD document types</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1969</p></td><td class="confluenceTd"><p>Implement possibility to convert specific layouts when converting from CAD document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1970</p></td><td class="confluenceTd"><p>Convert Pdf documents without annotations</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1835</p></td><td class="confluenceTd"><p>Convert Html to Cells improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1845</p></td><td class="confluenceTd"><p>Convert Cad to Html improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1846</p></td><td class="confluenceTd"><p>Convert Note to Html improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1840</p></td><td class="confluenceTd"><p>Convert Slides to Html improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1847</p></td><td class="confluenceTd"><p>Convert Tasks to Html improvements</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1851</p></td><td class="confluenceTd"><p>Convert Words to Html improvements with UsePdf=true option set</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1871</p></td><td class="confluenceTd"><p>Improved handling of extension-less urls</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1881</p></td><td class="confluenceTd"><p>Improve SlidesToHtml saver</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1885</p></td><td class="confluenceTd"><p>Update CellsToImageSaver and CellsToPdfSaver to remove empty rows and columns before saving document</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1962</p></td><td class="confluenceTd"><p>Implement possibility to set Width and Height when converting from CAD document</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1678</p></td><td class="confluenceTd"><p>Failed to validate PDF_X_3 and PDF_X_1A</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1844</p></td><td class="confluenceTd"><p>Converting Image to Html with UsePdf=true always use direct conversion instead converting through Pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1676</p></td><td class="confluenceTd"><p>Loading Latex document from stream requires FileStream</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1884</p></td><td class="confluenceTd"><p>PPt to PDF Conversion - Tables borders are showing - showgridline property is also not working for this</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-425</p></td><td class="confluenceTd"><p>Issue in TIF to PDF conversion in Gradle project</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-431</p></td><td class="confluenceTd"><p>Word documents with tables are not converting to images properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-399</p></td><td class="confluenceTd"><p>PDF to Image output is not as expected</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-395</p></td><td class="confluenceTd"><p>License exception throws in spite of GroupDocs license was set</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-437</p></td><td class="confluenceTd"><p>Output image is always blank or invalid if license is not applied</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-426</p></td><td class="confluenceTd"><p>Unable to set watermark color while converting document to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-219</p></td><td class="confluenceTd"><p>Usage of PageMode when converting to PDF is not supported</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Conversion for Java 17.7. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Conversion which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### How to get source document metadata

**Java**

```csharp
String sourceFileName = "DOCXsample.docx"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);
DocumentInfo documentInfo = conversionHandler.getDocumentInfo(sourceFileName); 

System.out.print("Size: %s}" + documentInfo.getSize());
System.out.print("File type: %s" + documentInfo.getFileType());
System.out.print("Pages count: %s" + documentInfo.getPageCount());
System.out.print("Last modified: %s" + documentInfo.getModifiedDate());
```

###   
How to convert XML-FO/XSL to PDF

**Java**

```csharp
String sourceFileName = "CELLSsample.xlsx"; //TODO: Put the source filename here
String foFileName = "sample.xslt"; 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

FileInputStream foStream = new FileInputStream(storagePath + "/" + foFileName); 

PdfSaveOptions pdfSaveOptions = new PdfSaveOptions();
pdfSaveOptions.setOutputType(OutputType.String); 

XmlLoadOptions xmlLoadOptions = new XmlLoadOptions();
xmlLoadOptions.setXslFo(foStream); 

String result = conversionHandler.<String>convert(sourceFileName, xmlLoadOptions, pdfSaveOptions);
System.out.print(result);
```

###   
How to set zoom when converting slides to HTML

**Java**

```csharp
String sourceFileName = "sample.pptx"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

HtmlSaveOptions saveOptions = new HtmlSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setZoom(150); 

String resultPath = conversionHandler.<String>convert(sourceFileName, saveOptions); 

System.out.print(resultPath);
```

  

### How to get available layouts in a CAD document

**Java**

```csharp
String sourceFileName = "sample.dwg"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

DocumentInfo result = conversionHandler.getDocumentInfo(sourceFileName); 

for (String layer : result.getLayers()) {
System.out.println(layer);
}
```

### How to convert specific layout from a CAD document

**Java**

```csharp
String sourceFileName = "sample.dwg"; //TODO: Put the source filename here
String[] layoutNames = new String[1];
layoutNames[0] = "layout-1"; 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

PdfSaveOptions options = new PdfSaveOptions();
options.setOutputType(OutputType.String);
options.getCadOptions().setLayoutNames(layoutNames); 

String result = conversionHandler.<String>convert(sourceFileName, options); 

System.out.print(result);
```

### How to set specific width and height for each layout from a CAD document

**Java**

```csharp
String sourceFileName = "sample.dwg"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath); 

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

PdfSaveOptions options = new PdfSaveOptions();
options.setOutputType(OutputType.String);
options.getCadOptions().setWidth(800);
options.getCadOptions().setHeight(600); 

String result = conversionHandler.<String>convert(sourceFileName, options); 

System.out.print(result);
```

### How to hide annotations when converting from PDF

**Java**

```csharp
String sourceFileName = "sample.pdf"; //TODO: Put the source filename here 

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setStoragePath(storagePath);
conversionConfig.setCachePath(cachePath);
ConversionHandler conversionHandler = new ConversionHandler(conversionConfig); 

WordsSaveOptions options = new WordsSaveOptions();
options.setOutputType(OutputType.String);
options.setHidePdfAnnotations(true); 

String result = conversionHandler.<String>convert(sourceFileName, options); 

System.out.print(result);
```
