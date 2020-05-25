---
id: groupdocs-viewer-for-net-3-5-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-3-5-0-release-notes
title: GroupDocs.Viewer For .NET 3.5.0 Release Notes
weight: 6
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 3.5.0.{{< /alert >}}

## Major Features

There are 2 new features and 21 improvements and fixes in this regular monthly release. The most notable are:

*   Implemented saving Cells document sheet to multiple pages in image mode.
*   Ability to specify font for watermark.

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-733</p></td><td class="confluenceTd"><p>Implement saving Cells document sheet to multiple pages in image mode</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-787</p></td><td class="confluenceTd"><p>Implement ability to specify font for watermark</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-616</p></td><td class="confluenceTd"><p>Implement GetPdfFile from stream or remote file</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-721</p></td><td class="confluenceTd"><p>Improve Words files to html rendering speed</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-732</p></td><td class="confluenceTd"><p>Implement saving file data separately based on options</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-748</p></td><td class="confluenceTd"><p>Implement releasing converters resources</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-529</p></td><td class="confluenceTd"><p>Cannot add page to pdf document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-564</p></td><td class="confluenceTd"><p>OutOfMemoryException raised when total readed file size reached upto 250MB</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-627</p></td><td class="confluenceTd"><p>The operation is not supported error raised when loading epub document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-667</p></td><td class="confluenceTd"><p>IOException is raised when try to move a loaded document(into the viewer) to any other directory</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-691</p></td><td class="confluenceTd"><p>Cell shading is not applied uniformly while converting spreadsheet to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-717</p></td><td class="confluenceTd"><p>Ott file stream detects as ods file format</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-729</p></td><td class="confluenceTd"><p>GetDocumentInfo() Throws "Parameter is not valid" Exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-753</p></td><td class="confluenceTd"><p>Excel file is not properly rendering into HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-776</p></td><td class="confluenceTd"><p>Header contents of Word document are not appearing in rendered html or images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-779</p></td><td class="confluenceTd"><p>Exception generated while calling handler.getDocumentInfo(uuid)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-780</p></td><td class="confluenceTd"><p>Exception when calling GetPdfFile/RotatePage/ReorderPage with guid without extension</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-784</p></td><td class="confluenceTd"><p>Incorrect watermark position and text in PDF file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-786</p></td><td class="confluenceTd"><p>Out Of Memory Exception While Rendering Excel File into HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1869</p></td><td class="confluenceTd"><p>Each page of a Word document is converted to HTML too long</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2000</p></td><td class="confluenceTd"><p>Incorrect saving PDF to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2081</p></td><td class="confluenceTd"><p>There is no text in tables of a PDF after conversion to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2349</p></td><td class="confluenceTd"><p>Text selection is unstable in Firefox on the HTML engine</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 3.5.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Implemented GetPdfFile from stream or remote file public methods.

**Get original file in Pdf format without transformations**

{{< alert style="info" >}}The GetPdfFile(PdfFileOptions) method was marked as obsolate in v3.5.0, please use overloaded GetPdfFile methods that are available starting from v3.5.0.{{< /alert >}}

**v3.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

string guid = "word.doc";

// Get file as pdf
FileContainer container = imageHandler.GetPdfFile(guid);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Get original file in Pdf format with Watermark**

Add watermark to Pdf document by setting **Watermark** property of **PdfFileOptions**.

{{< alert style="info" >}}The GetPdfFile(PdfFileOptions) method was marked as obsolate in v3.5.0, please use overloaded GetPdfFile methods that are available starting from v3.5.0.{{< /alert >}}

**v3.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

string guid = "word.doc";

// Set watermark properties
Watermark watermark = new Watermark("This is watermark text");
watermark.Color = System.Drawing.Color.Blue;
watermark.Position = WatermarkPosition.Diagonal;
watermark.Width = 100;

PdfFileOptions options = new PdfFileOptions();
options.Watermark = watermark;

// Get file as pdf with watermaks
FileContainer container = imageHandler.GetPdfFile(guid, options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Get original file in Pdf format with Watermark and Font name specified**

Add watermark to Pdf document by setting **Watermark** property of **PdfFileOptions**.  
Specify watermark font name by setting **FontName** property of Watermark.

{{< alert style="info" >}}This feature is available starting from v3.5.0.{{< /alert >}}

**v3.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

string guid = "word.doc";

// Set watermark properties
Watermark watermark = new Watermark("透かし文字、");
watermark.Color = System.Drawing.Color.Blue;
watermark.Position = WatermarkPosition.Diagonal;
watermark.Width = 100;
// Set watermark font name which contains Japanese characters
watermark.FontName = "MS Gothic";

PdfFileOptions options = new PdfFileOptions();
options.Watermark = watermark;

// Get file as pdf with watermaks
FileContainer container = imageHandler.GetPdfFile(guid, options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Get original file in Pdf format with print action**

Add watermark to Pdf document by setting **AddPrintAction** property to True of **PdfFileOptions**.

{{< alert style="info" >}}The GetPdfFile(PdfFileOptions) method was marked as obsolate in v3.5.0, please use overloaded GetPdfFile methods that are available starting from v3.5.0.{{< /alert >}}

**v3.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

string guid = "word.doc";

// Set add print action property
PdfFileOptions options = new PdfFileOptions();
options.Transformations = Transformation.AddPrintAction;

// Get file as pdf with print action
FileContainer container = imageHandler.GetPdfFile(guid, options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Get original file in Pdf format with transformations**

Add watermark to Pdf document by setting **Transformations** property of **PdfFileOptions**.

{{< alert style="info" >}}Transformation.AddPrintAction feature is supported starting from v3.4.0.{{< /alert >}}{{< alert style="info" >}}The GetPdfFile(PdfFileOptions) method was marked as obsolate in v3.5.0, please use overloaded GetPdfFile methods that are available starting from v3.5.0.{{< /alert >}}

**v3.5.0 and higher (C#)**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

string guid = "word.doc";

// Perform page rotation
RotatePageOptions rotatePageOptions = new RotatePageOptions(guid, 1, 90);
imageHandler.RotatePage(rotatePageOptions);

// Reorder pages, move 1 page to the 2 position, it is assumed that "word.doc" document has at least two pages
ReorderPageOptions reorderPageOptions = new ReorderPageOptions(guid, 1, 2);
imageHandler.ReorderPage(reorderPageOptions);

// Set apply rotate and reorder transformations
PdfFileOptions options = new PdfFileOptions();
options.Transformations = Transformation.Rotate | Transformation.Reorder | Transformation.AddPrintAction;


// Get file as pdf with transformations
FileContainer container = imageHandler.GetPdfFile(guid, options);
Console.WriteLine("Stream lenght: {0}", container.Stream.Length);


```

**Public API changes**

1\. ViewerHandler.GetPdfFile(PdfFileOptions) marked as 'Obsolete'  
2\. PdfFileOptions class all constructors except parameterles are marked as 'Obsolete'  
3\. Added new ViewerHandler methods:

FileContainer GetPdfFile(string guid);  
FileContainer GetPdfFile(string guid, PdfFileOptions pdfFileOptions);  
FileContainer GetPdfFile(Stream fileStream);  
FileContainer GetPdfFile(Stream fileStream, PdfFileOptions pdfFileOptions);  
FileContainer GetPdfFile(Stream fileStream, string fileName);  
FileContainer GetPdfFile(Stream fileStream, string fileName, PdfFileOptions pdfFileOptions);  
FileContainer GetPdfFile(Uri uri);  
FileContainer GetPdfFile(Uri uri, PdfFileOptions pdfFileOptions);  
FileContainer GetPdfFile(Uri uri, WindowsAuthenticationCredential credential, PdfFileOptions pdfFileOptions);

### Implemented saving Cells document sheet to multiple pages in image mode.

Public API changes: Option **CellsOptions.OnePagePerSheet** now supported by **ImageHandler**.

**Multiple pages per sheet with GetPages method in Image mode**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = TestHelper.StoragePath;

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
string guid = "document.xlsx";

// Set pdf file one page per sheet option to false, default value of this option is true
ImageOptions imageOptions = new ImageOptions();
imageOptions.CellsOptions.OnePagePerSheet = false;

//Get pages
List<PageImage> pageImages = imageHandler.GetPages(guid, imageOptions);


```

### Implemented setting 'FontName' which allows users to specify font name for watermark text.

Public API changes:  
#Class: **GroupDocs.Viewer.Domain.Watermark**, Added field: public string **FontName { get; set; }**

**Add Watermark with Font name to Image page representation**

Add watermark to document pages by setting Watermark property of ImageOptions.  
Specify watermark font name by setting FontName property of Watermark.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
string guid = "word.doc";

ImageOptions options = new ImageOptions();

// Set watermark properties
Watermark watermark = new Watermark("透かし文字、");
watermark.Color = System.Drawing.Color.Blue;
watermark.Position = WatermarkPosition.Diagonal;
watermark.Width = 100;
// Set watermark font name which contains Japanese characters
watermark.FontName = "MS Gothic";

options.Watermark = watermark;

// Get document pages image representation with watermark
List<PageImage> pages = imageHandler.GetPages(guid, options);


```

**Add Watermark with Font name to Html page representation**

Add watermark to document pages by setting Watermark property of HtmlOptions.  
Specify watermark font name by setting FontName property of Watermark.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "word.doc";

HtmlOptions options = new HtmlOptions();

// Set watermark properties
Watermark watermark = new Watermark("This is watermark text");
watermark.Color = System.Drawing.Color.Blue;
watermark.Position = WatermarkPosition.Diagonal;
watermark.Width = 100;
// Set watermark tag font-family css property
watermark.FontName = "\"Comic Sans MS\", cursive, sans-serif";

options.Watermark = watermark;

// Get document pages html representation with watermark
List<PageHtml> pages = htmlHandler.GetPages(guid, options);


```
