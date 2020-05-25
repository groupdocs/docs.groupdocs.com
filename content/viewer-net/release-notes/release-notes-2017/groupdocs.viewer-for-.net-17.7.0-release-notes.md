---
id: groupdocs-viewer-for-net-17-7-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-17-7-0-release-notes
title: GroupDocs.Viewer for .NET 17.7.0 Release Notes
weight: 6
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 17.7.0.{{< /alert >}}

## Major Features

One new feature and 14 improvements and fixes in this regular monthly release. The most notable are:

*   Added support of rendering PDF document with attachments
*   Extended support for setting font directories for Presentation documents
*   Extended support for setting JpegQuality when rendering SVG as PDF

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1182</p></td><td class="confluenceTd"><p>Support rendering PDF documents with attachments</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1274</p></td><td class="confluenceTd"><p>Extend support for setting font directories to Presentation documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1255</p></td><td class="confluenceTd"><p>Extend support for setting JpegQuality when rendering SVG as PDF</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1250</p></td><td class="confluenceTd"><p>Improve rendering Microsoft Visio document as HTML</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1173</p></td><td class="confluenceTd"><p>Rendering djvu documents with maximum JpegQuality renders contained images with low quality</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-2429</p></td><td class="confluenceTd"><p>PDF with hieroglyphs is converted to the JPEG and HTML with corrupted symbols</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1262</p></td><td class="confluenceTd"><p>Resource prefix not applied when rendering Presentation documents to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1252</p></td><td class="confluenceTd"><p>Watermark not displayed when rendering Microsoft Visio document as HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1251</p></td><td class="confluenceTd"><p>Multipage Microsoft Visio document shows page count as one</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1220</p></td><td class="confluenceTd"><p>ViewerConfig.DefaultFontName setting does not replace missing fonts for Spreadsheet documents</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1203</p></td><td class="confluenceTd"><p>Conflict when using GroupDocs.Viewer and Aspose APIs in same project</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1154</p></td><td class="confluenceTd"><p>Incorrect rendering of bullets in HTML mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1151</p></td><td class="confluenceTd"><p>Incorrect Characters after rendering PDF in HTML/Image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1143</p></td><td class="confluenceTd"><p>Some characters are being replaced with a ? placeholder while rendering.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-917</p></td><td class="confluenceTd"><p>Failed to load DGN file</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 17.7.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### How to set output quality when rendering documents into pdf

**How to adjust the quality and size when rendering documents into pdf**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage\";
 
// Create image handler
 ViewerImageHandler handler = new ViewerImageHandler(config);
string guid = "document.djvu";
 
// Set pdf options JpegQuality in a range between 1 and 100
PdfFileOptions pdfFileOptions = new PdfFileOptions();
pdfFileOptions.JpegQuality = 5;
 
// Get file as pdf
using (FileContainer container = handler.GetPdfFile(guid, pdfFileOptions))
{
    Console.WriteLine("Stream lenght: {0}", container.Stream.Length);
}
```

##### List of formats affected by PdfFileOptions.JpegQuality property when rendered as pdf

| Format Name | Description |
| --- | --- |
| Microsoft Word | Affects JPEG images contained in Microsoft Word documents |
| Microsoft PowerPoint | Affects JPEG images contained in Microsoft Power Point documents |
| Microsoft Outlook | Affects JPEG images set as a background in email documents msg and eml formats |
| OpenDocument Formats | Affects JPEG images contained in OpenDocument presentation (odp) andOpenDocument text (odt) formats |
| Image files | Affects rendering from PSD, TIFF, multi-page TIFF, WebP, SVG and DjVu formats |
| Metafile | Affects rendering from WMF and EMF formats |
| Microsoft Visio | Affects JPEG images contained inside Microsoft Visio documents |

### List of Changes in GroupDocs.Viewer for .NET 17.7.0

#### GroupDocs.Viewer.Converter.Options.PdfOptions - Public bool PreventGlyphsGrouping obsolete property compilation is set to fail

Using this property in non obsolete members will result in compilation error. Get ready for the change, this property is no longer active and will be completely removed in the next version. Please use *EnablePreciseRendering* property instead. The difference between this tow settings is that obsolete *PreventGlyphsGrouping* property has been influencing only rendering into HTML, whereas *EnablePreciseRendering*  affects both image and HTML rendering. More over *EnablePreciseRendering* contains additional technics for improving rendering PDF documents.

#### Public GroupDocs.Viewer.Domain.EmailAttachment obsolete class and class members compilation is set to fail

Please use GroupDocs.Viewer.Domain.Attachment class instead as show in example below. This class is obsolete and will be removed in the next version.

**Loading email attachments using obsolete and new class**

**Before v17.5.0 (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create attachment object and print out its name and file type
EmailAttachment attachment = new EmailAttachment("document-with-attachments.msg", "attachment-image.png");
Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
 
// Get attachment original file and print out Stream length
using (FileContainer fileContainer = imageHandler.GetFile(attachment))
{
    Console.WriteLine("Attach stream lenght: {0}", fileContainer.Stream.Length);
}
```

**v17.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create attachment object and print out its name and file type
Attachment attachment = new Attachment("document-with-attachments.msg", "attachment-image.png");
Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
 
// Get attachment original file and print out Stream length
using (FileContainer fileContainer = imageHandler.GetFile(attachment))
{
    Console.WriteLine("Attach stream lenght: {0}", fileContainer.Stream.Length);
}
```

#### GroupDocs.Viewer.Domain.FileData - Public bool IsComplete property compilation is set to fail

This property will be removed in the next version
