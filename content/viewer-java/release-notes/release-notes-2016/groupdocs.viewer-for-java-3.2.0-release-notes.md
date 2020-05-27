---
id: groupdocs-viewer-for-java-3-2-0-release-notes
url: viewer/java/groupdocs-viewer-for-java-3-2-0-release-notes
title: GroupDocs.Viewer for Java 3.2.0 Release Notes
weight: 3
description: ""
keywords: 
productName: GroupDocs.Viewer for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for Java 3.2.0{{< /alert >}}

## Major Features

There are 36 improvements and fixes in this regular monthly release. The most notable are:

*   File detection from stream.
*   Introduced PdfFileOptions.
*   Introduced new conversion mechanism for multipage TIFF documents.
*   Introduced options to show/hide grid lines for excel documents.
*   Introduced jpeg image quality settings.
*   Introduced file description property which returns document type format.
*   Introduced method that returns supported document formats.
*   Introduced option that allows to set text document encoding.
*   Introduced Hide/Show the hidden sheets for Excel files option.
*   Custom localization engine to use custom locales from path.
*   Improved document processing fidelity and speed.
*   Improved quality of re-sized images.

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>WEB-2128</p></td><td class="confluenceTd"><p>New conversion mechanism for displaying multipage TIFF files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-542</p></td><td class="confluenceTd"><p>Implement option that allows to set text document encoding.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-495</p></td><td class="confluenceTd"><p>Implement method that returns supported document formats.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-494</p></td><td class="confluenceTd"><p>Implement file description property that returns document type format.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-484</p></td><td class="confluenceTd"><p>Provide jpeg image quality setting.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-469</p></td><td class="confluenceTd"><p>Implement configuration option that allows set cells sheet conversion mode when converting to pdf.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-434</p></td><td class="confluenceTd"><p>Add support for Portuguese locale</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-415</p></td><td class="confluenceTd"><p>Add ability to show/hide grid lines for excel files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-393</p></td><td class="confluenceTd"><p>New conversion mechanism for displaying multipage TIFF files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-389</p></td><td class="confluenceTd"><p>Implement PdfFileOptions same as another Options classes.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-304</p></td><td class="confluenceTd"><p>Process files from stream without specifying fileName parameter</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-525</p></td><td class="confluenceTd"><p>Implement storing cache files separately depends on use pdf option.</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-515</p></td><td class="confluenceTd"><p>Improve quality of re-sized images.</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-462</p></td><td class="confluenceTd"><p>Improve document processing fidelity and speed</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-436</p></td><td class="confluenceTd"><p>User provided Excel Spreadsheet does not follow MS Excel behavior when rendered to PDF</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-423</p></td><td class="confluenceTd"><p>Improve localization engine to use custom locales from path</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-395</p></td><td class="confluenceTd"><p>Hide/Show the hidden sheets for Excel files</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-2446</p></td><td class="confluenceTd"><p>DocuSign signed files not showing all content</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2445</p></td><td class="confluenceTd"><p>Doc to Pdf save error</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2441</p></td><td class="confluenceTd"><p>Empty html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2438</p></td><td class="confluenceTd"><p>Not all content of the pdf document rendered to html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2435</p></td><td class="confluenceTd"><p>High memory usage while converting to Pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2402</p></td><td class="confluenceTd"><p>Specific eml file can't be viewed in HTML mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-528</p></td><td class="confluenceTd"><p>Failed to rotate page if page number specified.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-514</p></td><td class="confluenceTd"><p>Resolution is set incorrectly when converting pdf to image.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-513</p></td><td class="confluenceTd"><p>Image re-sized incorrectly when re-sizing to larger dimensions.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-493</p></td><td class="confluenceTd"><p>Css classes are overridden in multiple pages documents</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-486</p></td><td class="confluenceTd"><p>Shift_JIS encoded characters are not showing in proper format</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-480</p></td><td class="confluenceTd"><p>PreloadPagesCount is not working in V3.0</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-479</p></td><td class="confluenceTd"><p>Blurry document in Image Based rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-472</p></td><td class="confluenceTd"><p>Invalid Parameter Exception on rendering PDF to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-455</p></td><td class="confluenceTd"><p>Underline for some words/sentences when saving to html/image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-454</p></td><td class="confluenceTd"><p>Failed to convert .xlsx with fixed headers table to image.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-453</p></td><td class="confluenceTd"><p>Conversion of .xlsx with fixed headers table to pdf never completes.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-451</p></td><td class="confluenceTd"><p>Empty Value Exception on rendering PDF File</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-438</p></td><td class="confluenceTd"><p>Invalid Parameter Exception on rendering Excel Spreadsheet to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1065</p></td><td class="confluenceTd"><p>Incorrect converting PPT file to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1120</p></td><td class="confluenceTd"><p>The .pdf document doesn't rendered</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

##### How to show grid lines for Excel files

**Show grid lines for Excel files in image representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
String guid = "document.xlsx";

// Set image options to show grid lines
ImageOptions options = new ImageOptions();
options.getCellsOptions().setShowGridLines(true);

List<PageImage> pages = imageHandler.getPages(guid, options);

for (PageImage page : pages)
{
    System.out.printf("Page number: " + page.getPageNumber());

    // Page image stream
    final InputStream imageContent = page.getStream();
}


```

**Show grid lines for Excel files in html representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
String guid = "document.xlsx";

// Set html options to show grid lines
HtmlOptions options = new HtmlOptions();
options.getCellsOptions().setShowGridLines(true);
List<PageHtml> pages = htmlHandler.getPages(guid, options);

for (PageHtml page : pages) {
    System.out.println("Page number: " + page.getPageNumber());
    System.out.println("Html content: " + page.getHtmlContent());
}


```

##### How to deny showing multiple pages per sheet for Excel files

**Multiple pages per sheet**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create image or html handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
String guid = "document.xlsx";

// Set pdf file one page per sheet option to false, default value of this option is true
PdfFileOptions pdfFileOptions = new PdfFileOptions();
pdfFileOptions.setGuid(guid);
pdfFileOptions.getCellsOptions().setOnePagePerSheet(false);

//Get pdf file
FileContainer fileContainer = imageHandler.getPdfFile(pdfFileOptions);

//The pdf file stream
final InputStream pdfStream = fileContainer.getStream();


```

##### How to get all supported formats

**Get all supported document formats**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create image or html handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

// Get supported document formats
DocumentFormatsContainer documentFormatsContainer = imageHandler.getSupportedDocumentFormats();
Map<String, String> supportedDocumentFormats = documentFormatsContainer.getSupportedDocumentFormats();

for (Map.Entry<String, String> supportedDocumentFormat : supportedDocumentFormats.entrySet()) {
    System.out.println(String.format("Extension: '%s'; Document format: '%s'", supportedDocumentFormat.getKey(), supportedDocumentFormat.getValue()));
}


```

##### Show hidden sheets for Excel files

**Show hidden sheets for Excel files in image representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
String guid = "document.xlsx";

// Set image options to show grid lines
ImageOptions options = new ImageOptions();
options.getCellsOptions().setShowGridLines(true);

List<PageImage> pages = imageHandler.getPages(guid, options);

for (PageImage page : pages)
{
    System.out.printf("Page number: " + page.getPageNumber());

    // Page image stream
    final InputStream imageContent = page.getStream();
}


```

**Show hidden sheets for Excel files in image representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.setStoragePath("C:\\storage");

// Create image or html handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
String guid = "document.xlsx";

// Set image options to show grid lines
ImageOptions options = new ImageOptions();
options.getCellsOptions().setShowHiddenSheets(true);

DocumentInfoContainer container = imageHandler.getDocumentInfo(new DocumentInfoOptions(guid));

for (PageData page : container.getPages())
 System.out.println(String.format("Page number: %d, Page Name: %s, IsVisible: %s", page.getNumber(), page.getName(), page.isVisible()));

List<PageImage> pages = imageHandler.getPages(guid, options);

for (PageImage page : pages) {
 System.out.println("Page number: " + page.getPageNumber());

 // Page image stream
 final InputStream imageContent = page.getStream();
}


```

##### Localization

**How to create and use file with localized strings**

1\. Create xml file with localized strings

**XML**

```csharp
<?xml version="1.0" encoding="utf-8" ?>
<root>
  <data name="EXC_TMPL_CORRUPTED_OR_DAMAGED_FILE">
    <value>Could not load file '{0}', file is corrupted or damaged.</value>
  </data>
  <data name="EXC_TMPL_FILE_TYPE_NOT_SUPPORTED">
    <value>File type '{0}' is not supported.</value>
  </data>
  <data name="EXC_TMPL_INVALID_PASSWORD">
    <value>Unable to decrypt file '{0}'. Password is invalid.</value>
  </data>
  <data name="EXC_TMPL_PASSWORD_PROTECTED_FILE">
    <value>Unable to open encrypted file '{0}'. Please provide password.</value>
  </data>
  <data name="EXC_TMPL_STORAGE_PATH_NOT_SPECIFIED">
    <value>The storage path is not specified. Please provide storage path.</value>
  </data>
  <data name="EXC_TMPL_CACHE_FILE_NOT_FOUND">
    <value>Could not find cached file '{0}'.</value>
  </data>
  <data name="EXC_TMPL_GUID_NOT_SPECIFIED">
    <value>The file GUID is not specified. Please provide file GUID.</value>
  </data>
  <data name="EXC_TMPL_TRANSFORMATION_FAILED_PAGE_NOT_EXIST">
    <value>Unable to transform file '{0}'. Page number '{1}' does not exist.</value>
  </data>
</root>


```

2\. Save file to disc e.g. "c://locales" with following name "LocalizedStrings-{Language Culture Name}.xml" where {Language Culture Name} is your culture name e.g. "fr-FR". So path is "c://locales//LocalizedStrings-fr-FR.xml"

3\. Setup ViewerConfig to use file with localized strings created above

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.setStoragePath("c:\\storage");
viewerConfig.setLocalesPath("c:\\locales");

// Create html handler
ViewerHandler.CultureInfo cultureInfo = new ViewerHandler.CultureInfo("fr-FR");
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(viewerConfig, cultureInfo);


```

##### How to set Words, Cells and Email document encoding

**How to set Words, Cells and Email document encoding**

**Java**

```csharp
//Initialize viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.setStoragePath("c:\\storage");

//Initialize viewer handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig);

//Set encoding
Charset encoding = Charset.forName("shift-jis");

//Set image options
ImageOptions imageOptions = new ImageOptions();
imageOptions.getWordsOptions().setEncoding(encoding);
imageOptions.getCellsOptions().setEncoding(encoding);
imageOptions.getEmailOptions().setEncoding(encoding);

//Get words document pages with encoding
String wordsDocumentGuid = "document.txt";
List<PageImage> wordsDocumentPages = viewerImageHandler.getPages(wordsDocumentGuid, imageOptions);

//Get cells document pages with encoding
String cellsDocumentGuid = "document.csv";
List<PageImage> cellsDocumentPages = viewerImageHandler.getPages(cellsDocumentGuid, imageOptions);

//Get email document pages with encoding
String emailDocumentGuid = "document.msg";
List<PageImage> emailDocumentPages = viewerImageHandler.getPages(emailDocumentGuid, imageOptions);

//Get words document info with encoding
DocumentInfoOptions wordsDocumentInfoOptions = new DocumentInfoOptions(wordsDocumentGuid);
wordsDocumentInfoOptions.getWordsDocumentInfoOptions().setEncoding(encoding);
DocumentInfoContainer wordsDocumentInfoContainer = viewerImageHandler.getDocumentInfo(wordsDocumentInfoOptions);

//Get cells document info with encoding
DocumentInfoOptions cellsDocumentInfoOptions = new DocumentInfoOptions(cellsDocumentGuid);
cellsDocumentInfoOptions.getCellsDocumentInfoOptions().setEncoding(encoding);
DocumentInfoContainer cellsDocumentInfoContainer = viewerImageHandler.getDocumentInfo(cellsDocumentInfoOptions);

//Get email document info with encoding
DocumentInfoOptions emailDocumentInfoOptions = new DocumentInfoOptions(emailDocumentGuid);
emailDocumentInfoOptions.getEmailDocumentInfoOptions().setEncoding(encoding);
DocumentInfoContainer emailDocumentInfoContainer = viewerImageHandler.getDocumentInfo(emailDocumentInfoOptions);


```
