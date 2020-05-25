---
id: groupdocs-viewer-for-net-17-1-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-17-1-0-release-notes
title: GroupDocs.Viewer for .NET 17.1.0 Release Notes
weight: 12
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 17.1.0.{{< /alert >}}

## Major Features

There are 4 new features and 11 improvements and fixes in this regular monthly release. The most notable are:

*   Added possibility to configure ViewerConfig class via app.config or web.config files
*   Implemented partial rendering of large Excel sheets when rendering to Html
*   Improved rendering Email documents in Html mode
*   Improved rendering Pdf documents in Html mode

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1043</p></td><td class="confluenceTd"><p>Implement setting to prevent glyphs grouping when rendering pdf documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1036</p></td><td class="confluenceTd"><p>Partial rendering of large Excel sheets in HTML mode</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1034</p></td><td class="confluenceTd"><p>Implement parameterless ViewerHtmlHandler and ViewerImageHandler constructors</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-308</p></td><td class="confluenceTd"><p>Add possibility to configure ViewerConfig class via app.config or web.config file</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1052</p></td><td class="confluenceTd"><p>Implement setting to configure content ordering in resultant HTML document</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1040</p></td><td class="confluenceTd"><p>Improve Email documents rendering</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-2422</p></td><td class="confluenceTd"><p>Printing Radio Buttons from HTML page</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1092</p></td><td class="confluenceTd"><p>Links are converted into plain text when converting PDF to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1023</p></td><td class="confluenceTd"><p>Merged cells in xlsx are not displayed as merged in HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-1004</p></td><td class="confluenceTd"><p>Alignment of radio button text and checkbox text is not proper</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-994</p></td><td class="confluenceTd"><p>Jumbling words when rendering PDF document to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-975</p></td><td class="confluenceTd"><p>Creates only one page in text(txt) document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-974</p></td><td class="confluenceTd"><p>Radio buttons are not showing as 'selected' or 'checked' when converting to fixed HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-972</p></td><td class="confluenceTd"><p>Radio buttons are not showing as 'selected' or 'checked'</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-581</p></td><td class="confluenceTd"><p>Missing characters, invalid formating when saving to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 17.1.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Implement setting to prevent glyphs grouping when rendering pdf documents

When pdf documents are rendered into html, glyphs and characters are groupped into words and string groupes, this sometimes may produce undesirable result. To prevent grouping in such situations we should set PdfOptions.PreventGlyphsGrouping value of RenderOption object to true as shown in example. This mode allows to keep maximum precision during positioning of glyphs on the page and it can be used for conversion of documents with music notes or glyphs, that should be placed separately to each other.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "document.pdf";

// Set pdf options to render content without glyphs grouping
HtmlOptions options = new HtmlOptions();
options.PdfOptions.PreventGlyphsGrouping = true; // Default value is false

// Get pages
List<PageHtml> pages = htmlHandler.GetPages(guid, options);

foreach (PageHtml page in pages)
{
    Console.WriteLine("Page number: {0}", page.PageNumber);
    Console.WriteLine("Html content: {0}", page.HtmlContent);
}

```

### Partial rendering of large Excel sheets in HTML mode

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = "c:\\storage";

// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "document.xlsx";

// Set OnePagePerSheet = false to render multiple pages per sheet
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.CellsOptions.OnePagePerSheet = false;
// Set count rows to render into one page. Default value is 50.
htmlOptions.CellsOptions.CountRowsPerPage = 50;

// Get pages
List<PageHtml> pages = htmlHandler.GetPages(guid, htmlOptions);

```

### Implement parameterless ViewerHtmlHandler and ViewerImageHandler constructors

In version 17.1.0 ViewerHtmlHandler and ViewerImageHandler objects can be initialized by parameterless constructors.

**C#**

```csharp
ViewerHtmlHandler handler = new ViewerHtmlHandler();

```

Initializing handlers this way, in combination with setting all neccesary properties for ViewerConfig in configuration file as decribed in below section, will let to reduce amount of code greatly.

### Add possibility to configurate ViewerConfig class via app.config or web.config file

Public properties of ViewerConfig class, could be configurated via app.config or web.config files, depending on the type of application.

To configurate ViewerConfig class public properties you will have to follow this steps:

1.  Add <section> element into <configSections> inside <configuration> section, with the name "groupdocs.viewer" and type "GroupDocs.Viewer.Config.GroupDocsViewerSection, GroupDocs.Viewer".
2.  Add <groupdocs.viewer> section inside <configuration> section.
3.  For each public property, which you want to be set, add an element inside <groupdocs.viewer> section, with the name equal to the property name and required value attribute.
4.  If you want to add font directory to FontDirectories collection property, create <fontDirectories> section inside <groupdocs.viewer> and append an <add> configuration element with the required path attribute for each font directory.
5.  Initialize ViewerConfig object using parameterless constructor.

{{< alert style="info" >}}Please note that configuration files are using camel case (lower camel case), so section names, element names and key names should obey this rule. Therefore, element name for the StoragePath property of ViewerConfig class should be storagePath.{{< /alert >}}{{< alert style="info" >}}Please also note that in the app.config or web.config file, <configSections> must be the first thing to appear in the <configuration> section, otherwise an error will be thrown at runtime.{{< /alert >}}

**XML**

```csharp
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <configSections>
      <section name="groupdocs.viewer" type="GroupDocs.Viewer.Config.GroupDocsViewerSection, GroupDocs.Viewer"/>
    </configSections>
    <startup>
      <supportedRuntime version="v2.0.50727"/>
    </startup>
    <groupdocs.viewer>
      <storagePath value="C:\storage"/>
      <cacheFolderName value="cachefolder"/>
      <cachePath value="C:\cache"/>
      <useCache value="true"/>
      <usePdf value="false"/>
      <localesPath value="C:\locales"/>
      <pageNamePrefix value="prefix"/>
      <defaultFontName value="Times New Roman"/>
      <fontDirectories>
        <add path="C:\fonts" />
        <add path="C:\more_fonts" />
      </fontDirectories>
    </groupdocs.viewer>
</configuration>

```

### Implement setting to configure content ordering in resultant html document

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = "c:\\storage";

// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "document.xlsx";

// Set OnePagePerSheet = false to render multiple pages per sheet
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.CellsOptions.OnePagePerSheet = false;
// Set count rows to render into one page. Default value is 50.
htmlOptions.CellsOptions.CountRowsPerPage = 50;

// Get pages
List<PageHtml> pages = htmlHandler.GetPages(guid, htmlOptions);

```
