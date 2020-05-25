---
id: groupdocs-viewer-for-net-17-9-release-notes
url: viewer/net/groupdocs-viewer-for-net-17-9-release-notes
title: GroupDocs.Viewer for .NET 17.9 Release Notes
weight: 4
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 17.9.{{< /alert >}}

## Major Features

There are 2 new features and 12 improvements and fixes in this regular monthly release. The most notable are:

*   Setting to exclude fonts while rendering into HTML
*   Setting to exclude default fonts when rendering Presentation documents
*   Responsive output for rendering MS Visio documents and SVG images into HTML
*   Responsive output for Text documents with HtmlOptions.EnableResponsiveRendering setting

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1343</p></td><td class="confluenceTd"><p>GIF images are displayed without animation</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1263</p></td><td class="confluenceTd"><p>Implement a setting for excluding fonts while rendering into HTML</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1336</p></td><td class="confluenceTd"><p>Show local time when rendering Email messages</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1323</p></td><td class="confluenceTd"><p>Implement responsive output for rendering MS Visio documents and SVG images into HTML</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1311</p></td><td class="confluenceTd"><p>Extend support for HtmlOptions.EnableResponsiveRendering to Text documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1261</p></td><td class="confluenceTd"><p>Improve rendering into HTML for rotated documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-1407</p></td><td class="confluenceTd"><p>It takes hours of time and gigabytes of RAM to convert a DOCX of 1758 pages</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1335</p></td><td class="confluenceTd"><p>Issue with recipient and sent date when rendering from .eml message to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1257</p></td><td class="confluenceTd"><p>File extension field does not include period</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1202</p></td><td class="confluenceTd"><p>Incorrect position of parenthesis in output HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1178</p></td><td class="confluenceTd"><p>Out Of Memory Exception when rendering PDF into image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1159</p></td><td class="confluenceTd"><p>Blank output HTML page when rendering PDF document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td colspan="1" class="confluenceTd">VIEWERNET-1136</td><td colspan="1" class="confluenceTd">Misplaced Characters when Viewing HTML in Safari for iOS</td><td colspan="1" class="confluenceTd">Bug</td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1004</p></td><td class="confluenceTd"><p>Alignment of radio button text and checkbox text is not proper</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 17.9. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Excluding fonts when rendering to HTML

When we are rendering documents into HTML, by default the fonts that are used in the document are added into HTML content. This ensures fonts availability so that you can be pretty sure that the text from the original document will appear similar in the HTML, regardless of whether the fonts are installed on the viewer's device or not. Depending on **IsResourceEmbedded** option of **HtmlOptions** class the fonts are added inline as base64-encoded fonts or as external resources. Embedded fonts increase the size of the rendering result, in order to prevent adding fonts into HTML, set **ExcludeFonts** property of **HtmlOptions** class as true as shown in the example below:

Use **ExcludeFonts \= true** to prevent adding fonts in HTML representations

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "word.doc";
 
HtmlOptions options = new HtmlOptions();
options.ExcludeFonts = true;
List<PageHtml> pages = htmlHandler.GetPages(guid, options);
 
 
foreach (PageHtml page in pages)
{
    Console.WriteLine("Page number: {0}", page.PageNumber);
    Console.WriteLine("Html content: {0}", page.HtmlContent);
}
```

{{< alert style="info" >}}Please note, that the option for excluding fonts, is available since the version 17.9 and currently works only for email documents. We are planning to extend support for this feature for all document types where it is applicable in the upcoming releases.{{< /alert >}}{{< alert style="info" >}}Please note that, currently, not all document types support adding fonts into HTML, but we are planning to extend this feature to work with every document where it is applicable, in the upcoming releases.{{< /alert >}}

### Rendering Document into Responsive HTML

{{< alert style="info" >}}Since the version 17.9, this feature is extended to support MS Visio documents, SVG images, MS Word, Open Office Text and Rich Text Format documents.{{< /alert >}}

Set **EnableResponsiveRendering****\= true** to get responsive html representations.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "CadDrawing.dwg";
 
HtmlOptions options = new HtmlOptions();
options.EnableResponsiveRendering = true;
List<PageHtml> pages = htmlHandler.GetPages(guid, options);
 
 
foreach (PageHtml page in pages)
{
    Console.WriteLine("Page number: {0}", page.PageNumber);
    Console.WriteLine("Html content: {0}", page.HtmlContent);
}
```

Please note that, currently, this option works for most document types, but there are few (listed below) that are not supported yet. We are planning to extend support for this option in upcoming releases.

**List of document types that do not support responsive rendering.**

| Format Name | Extension |
| --- | --- |
| Portable Document Format | PDF |
| Microsoft Excel | XLS, XLSX, XLSM, XLSB |
| Microsoft PowerPoint | PPT, PPTX, PPS, PPSX |
| Microsoft Project | MPP, MPT |
| OpenDocument Formats | ODS, ODP, OTP, OTS |
| Plain Text File | TXT |
| Comma-Separated Values | CSV |
| HyperText Markup Language | HTML, MHT, MHTML |
| Extensible Markup Language | XML |
| XML Paper Specification | XPS |
| Electronic publication | EPUB |
| Mobipocket e-book format | MOBI |
| LaTeX | TEX |

### List of changes in GroupDocs.Viewer for .NET 17.9.0

#### GroupDocs.Viewer.Config.ViewerConfig

##### Public bool UsePdf obsolete property has been removed

Please use ImageOptions.ExtractText or DocumentInfoOptions.ExtractText  settings instead, as shown in example below.

**Get text coordinates in image mode**

**v17.6.0 and higher**

**C#**

```csharp
//Init viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:\\storage";
 
// Set document guid
string guid = "document.doc";
 
// Init viewer image handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig);
 
//Get document info
DocumentInfoOptions documentInfoOptions = new DocumentInfoOptions();
documentInfoOptions.ExtractText = true;
DocumentInfoContainer documentInfoContainer = viewerImageHandler.GetDocumentInfo(guid, documentInfoOptions);
 
// Go through all pages
foreach (PageData pageData in documentInfoContainer.Pages)
{
    Console.WriteLine("Page number: " + pageData.Number);
  
    //Go through all page rows
    for (int i = 0; i < pageData.Rows.Count; i++)
    {
        RowData rowData = pageData.Rows[i];
 
        // Write data to console
        Console.WriteLine("Row: " + (i + 1));
        Console.WriteLine("Text: " + rowData.Text);
        Console.WriteLine("Text width: " + rowData.LineWidth);
        Console.WriteLine("Text height: " + rowData.LineHeight);
        Console.WriteLine("Distance from left: " + rowData.LineLeft);
        Console.WriteLine("Distance from top: " + rowData.LineTop);
 
        // Get words
        string[] words = rowData.Text.Split(' ');
 
        // Go through all word coordinates
        for (int j = 0; j < words.Length; j++)
        {
            int coordinateIndex = j == 0 ? 0 : j + 1;
 
            // Write data to console
            Console.WriteLine(string.Empty);
            Console.WriteLine("Word: '" + words[j] + "'");
            Console.WriteLine("Word distance from left: " + rowData.TextCoordinates[coordinateIndex]);
            Console.WriteLine("Word width: " + rowData.TextCoordinates[coordinateIndex + 1]);
            Console.WriteLine(string.Empty);
        }
    }
}
```

#### GroupDocs.Viewer.Converter.Options.PdfOptions

##### Public bool DeleteAnnotations is set as obsolete

This property is obsolete and will be removed in version 17.12. Please use RenderComments property of the HtmlOptions or ImageOptions class instead.

#### GroupDocs.Viewer.Domain.EmailAttachment

##### Public GroupDocs.Viewer.Domain.EmailAttachment obsolete class and class members have been removed

Please use GroupDocs.Viewer.Domain.Attachment class instead as shown in the example below.

**Get text coordinates in image mode**

**Loading email attachments using obsolete and new class**

**C#**

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

#### GroupDocs.Viewer.Domain.EmailFileData

##### Public GroupDocs.Viewer.Domain.EmailFileData class and class members have been removed

Please use FileData class instead. 

#### GroupDocs.Viewer.Domain.FileData

##### Public bool IsComplete property has been removed

There is no replacement for this property.

#### GroupDocs.Viewer.Handler.IInputDataHandler

##### Public GroupDocs.Viewer.Handler.IInputDataHandler interface AddFile(string guid, Stream content) method compilation is set to fail

This method is obsolete and will be removed in the next version.

{{< alert style="danger" >}}NuGet package name changedThe NuGet package name was changed from groupdocs-viewer-dotnet to GroupDocs.Viewer.{{< /alert >}}{{< alert style="danger" >}}File extension field does not include periodThere is a breaking change in the version 17.9 related to the file extensions, this change is especially relevant to users who have implemented their own custom ICacheDataHandler. All file extensions from now on will come with the leading dot.Following public members are affected:FileExtension property of ImageOptions classExtension property of the AttachmentBase abstract class SupportedDocumentFormats property of the DocumentFormatsContainer classExtension property of the FileDescription classExtension property of DocumentInfoContainer classOutputExtension property of the CachedDocumentDescription and CachedPageDescription classes.{{< /alert >}}
