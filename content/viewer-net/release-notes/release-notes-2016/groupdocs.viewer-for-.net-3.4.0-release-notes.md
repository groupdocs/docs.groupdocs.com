---
id: groupdocs-viewer-for-net-3-4-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-3-4-0-release-notes
title: GroupDocs.Viewer For .NET 3.4.0 Release Notes
weight: 7
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
# GroupDocs.Viewer for .NET 3.4.0

This page contains release notes for GroupDocs.Viewer for .NET 3.4.0

## Major Features

There are 24 improvements and fixes in this regular monthly release. The most notable are:

*   Improved rendering performance.
*   Improved applying watermark performance.
*   Improved GetPdfFile method usability and performance.

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-628</p></td><td class="confluenceTd"><p>Implement RotatePage method that returns void</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-663</p></td><td class="confluenceTd"><p>Improve library performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-665</p></td><td class="confluenceTd"><p>Improve applying watermark performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-670</p></td><td class="confluenceTd"><p>Improve get pdf file performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-674</p></td><td class="confluenceTd"><p>Improve GetPdfFile method usability</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-1734</p></td><td class="confluenceTd"><p>Hide the hidden sheets for .xls file</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-652</p></td><td class="confluenceTd"><p>Small images are not visible in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-655</p></td><td class="confluenceTd"><p>Invalid parameter exception while converting mpt to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-659</p></td><td class="confluenceTd"><p>File is corrupted or damaged exception while converting mpt document to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-662</p></td><td class="confluenceTd"><p>Project reading exception in multithreading environment</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-681</p></td><td class="confluenceTd"><p>GetPdfFile returns all pages in trial mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-682</p></td><td class="confluenceTd"><p>JpegQuality is not applied for watermarked images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-684</p></td><td class="confluenceTd"><p>Invalid Rendering of Excel File into Html and Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-689</p></td><td class="confluenceTd"><p>Incorrect Rendering of Excel File into Html and Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-690</p></td><td class="confluenceTd"><p>GetPages() for Email Attachment Throws Path Exception for Relative Storage Path</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-693</p></td><td class="confluenceTd"><p>Invalid Parameter Exception in Html Rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-701</p></td><td class="confluenceTd"><p>GetPages() Throws Exception In Case of Stream Object</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-722</p></td><td class="confluenceTd"><p>Failed to load xps document in image mode with pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-725</p></td><td class="confluenceTd"><p>API Renders First Sheet Twice in Excel Workbook</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1709</p></td><td class="confluenceTd"><p>Text is shifted and duplicated in a PDF produced from VSD</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1813</p></td><td class="confluenceTd"><p>Diagram file rendering regression</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2029</p></td><td class="confluenceTd"><p>Incorrect saving XLSX to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2289</p></td><td class="confluenceTd"><p>Incomplete converting XLSX to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2322</p></td><td class="confluenceTd"><p>Text coordinates are incorrect for a specific document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2433</p></td><td class="confluenceTd"><p>Not all content of the Visio file is stored when converting to the PDF</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-729</p></td><td class="confluenceTd"><p>Incorrect Spacing between Characters in Html Rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

The PdfFileOptions AddPrintAction property is obsolete in version 3.4.0, please use PdfFileOptions Transformations property and Transformation.AddPringAction enumeration.

**Get original file in Pdf format with print action**

Add watermark to Pdf document by setting AddPrintAction property to True of PdfFileOptions.

{{< alert style="info" >}}The PdfFileOptions AddPrintAction property is obsolete in version 3.4.0, please use PdfFileOptions Transformations property and Transformation.AddPringAction enumeration.{{< /alert >}}

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

PdfFileOptions options = new PdfFileOptions();
options.Guid = "word.doc";

// Set add print action property
options.AddPrintAction = true;

// Get file as pdf with print action
FileContainer container = imageHandler.GetPdfFile(options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Get original file in Pdf format with transformations**

Add watermark to Pdf document by setting Transformations property of PdfFileOptions.

{{< alert style="info" >}}Transformation.AddPrintAction feature is supported starting from version 3.4.0{{< /alert >}}

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

PdfFileOptions options = new PdfFileOptions();
options.Guid = "word.doc";

// Set apply rotate and reorder transformations
options.Transformations = Transformation.Rotate | Transformation.Reorder | Transformation.AddPrintAction;

// Get file as pdf with transformations
FileContainer container = imageHandler.GetPdfFile(options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```
