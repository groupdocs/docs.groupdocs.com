---
id: groupdocs-viewer-for-net-3-6-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-3-6-0-release-notes
title: GroupDocs.Viewer For .NET 3.6.0 Release Notes
weight: 5
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 3.6.0.{{< /alert >}}

## Major Features

There are 7 new features and 14 improvements and fixes in this regular monthly release. The most notable are:

*   Add support for Spanish locale.
*   Add support for Italian locale
*   Hide/Show the hidden pages for Visio files
*   Ability to set default font when rendering Cells and Words documents
*   Ability to set the encoding standard automatically
*   LaTeX file format viewing support

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-394</p></td><td class="confluenceTd"><p>Support for hyperlinks referencing a worksheet in the same document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-433</p></td><td class="confluenceTd"><p>Add support for Spanish locale</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-435</p></td><td class="confluenceTd"><p>Add support for Italian locale</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-639</p></td><td class="confluenceTd"><p>Hide/Show the hidden pages for Visio files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-801</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Cells documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-802</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Words documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>WEB-2073</p></td><td class="confluenceTd"><p>LaTeX file format viewing support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-401</p></td><td class="confluenceTd"><p>Improve applying pdf document transformations</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-803</p></td><td class="confluenceTd"><p>Ability to set the encoding standard automatically</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-824</p></td><td class="confluenceTd"><p>Cleanup GetDocumentInfo method response</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-826</p></td><td class="confluenceTd"><p>Remove XHTML xmlns attribute</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-827</p></td><td class="confluenceTd"><p>Cleanup html markup for Cells documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-596</p></td><td class="confluenceTd"><p>The bookmark range is invalid for .docx</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-747</p></td><td class="confluenceTd"><p>Text document format detected as Unknown</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-805</p></td><td class="confluenceTd"><p>GetPages() Method Throws "Parameter is not valid" Exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-807</p></td><td class="confluenceTd"><p>Output html contains garbled characters and few characters are merged</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-820</p></td><td class="confluenceTd"><p>GetPages() throws exception for email attachments</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-821</p></td><td class="confluenceTd"><p>API throws exception in Mono</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-835</p></td><td class="confluenceTd"><p>User can't catch GroupDocsException</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2070</p></td><td class="confluenceTd"><p>Convert .docx to .pdf wrong symbol</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2448</p></td><td class="confluenceTd"><p>Missing character in resultant html</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 3.6.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Cleanup GetDocumentInfo method response

*   Class GroupDocs.Viewer.Domain.Containers.DocumentInfoContainer field ContentControls marked as 'obsolete' 
*   Class GroupDocs.Viewer.Domain.ContentControl marked as 'obsolete' 
*   Class GroupDocs.Viewer.Domain.WordsFileData field ContentControls marked as 'obsolete'

### User can't catch GroupDocsException

*   New public class GroupDocs.Viewer.Exception.GroupDocsViewerException
*   All exceptions from GroupDocs.Viewer.Exception namespace are derived classes of GroupDocsViewerException.

### How to specify resource prefix

**HtmlResourcePrefix** setting is necessary when every resource name in html document should be prefixed with some string. This may be useful when resources for document are obtained via some REST API method. Please note that css files will also be processed - html resource prefix value will be added to font names in css file.

**C#**

```csharp
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.HtmlResourcePrefix = "http://contoso.com/api/getResource?name="


```

If ccs files should not be processed then **IgnoreResourcePrefixForCss** setting should be set to true.

**C#**

```csharp
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.HtmlResourcePrefix = "http://contoso.com/api/getResource?name="
htmlOptions.IgnoreResourcePrefixForCss = true;


```

### How to set default font name

Default font name may be specified in this cases:  
#You want to generally specify the default font to fall back on if particular font in a document cannot be found during rendering.  
#Your document uses fonts that non-English characters and you want to make sure any missing font is replaced with one that has the same character set available.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
config.DefaultFontName = "Calibri";


```

### Show hidden pages in MS Visio files

**Show hidden pages for Visio files in image representation**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
  
// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);
string guid = "sample.vdx";
  
// Set image options to show hidden pages
ImageOptions options = new ImageOptions();
options.DiagramOptions.ShowHiddenPages = true;
  
DocumentInfoContainer container = imageHandler.GetDocumentInfo(guid);
  
foreach (PageData page in container.Pages)
   Console.WriteLine("Page number: {0}, Page Name: {1}, IsVisible: {2}", page.Number, page.Name, page.IsVisible);
  
List<PageImage> pages = imageHandler.GetPages(guid, options);
  
foreach (PageImage page in pages)
{
   Console.WriteLine("Page number: {0}", page.PageNumber);
  
   // Page image stream
   Stream imageContent = page.Stream;
}

```

**Show hidden pages for Visio files in html representation**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
  
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
string guid = "sample.vdx";
  
// Set html options to show grid lines
HtmlOptions options = new HtmlOptions();
options.DiagramOptions.ShowHiddenPages = true;
  
DocumentInfoContainer container = htmlHandler.GetDocumentInfo(guid);
  
foreach (PageData page in container.Pages)
   Console.WriteLine("Page number: {0}, Page Name: {1}, IsVisible: {2}", page.Number, page.Name, page.IsVisible);
  
List<PageHtml> pages = htmlHandler.GetPages(guid, options);
  
foreach (PageHtml page in pages)
{
   Console.WriteLine("Page number: {0}", page.PageNumber);
   //Console.WriteLine("Html content: {0}", page.HtmlContent);
}

```

### How to specify internal hyperlink prefix for Excel files

It's known fact that Excel workbook may contain hyperlink to specific location in the same workbook.

[https://support.office.com/en-us/article/Hyperlinks-in-worksheets-EDB15706-517B-4ECF-81C6-84068FF8677E](https://support.office.com/en-us/article/Hyperlinks-in-worksheets-EDB15706-517B-4ECF-81C6-84068FF8677E).

**InternalHyperlinkPrefix** setting is useful for applications where workbook sheets are rendered separately one by one. In this case internal hyperlink may contain some REST API method address with referenced sheet name.

**C#**

```csharp
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.CellsOptions.InternalHyperlinkPrefix = "http://contoso.com/api/getPage?name="



```

**InternalHyperlinkPrefix** value may contain page number placeholder which will be substituted with referenced sheet number.

**C#**

```csharp
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.CellsOptions.InternalHyperlinkPrefix = "http://contoso.com/api/getPage?number={page-number}"


```
