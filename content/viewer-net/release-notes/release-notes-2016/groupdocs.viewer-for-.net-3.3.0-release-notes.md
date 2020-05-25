---
id: groupdocs-viewer-for-net-3-3-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-3-3-0-release-notes
title: GroupDocs.Viewer For .NET 3.3.0 Release Notes
weight: 8
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
# GroupDocs.Viewer for .NET 3.3.0

This page contains release notes for GroupDocs.Viewer for .NET 3.3.0

## Major Features

There are 33 improvements and fixes in this regular monthly release. The most notable are:

*   Introduced option to specify custom fonts path.
*   Introduced new methods for working with email attachments.
*   Introduced new methods for getting info for remotely located document or document in the form of stream.
*   Introduced ability to clear cache.
*   Introduced options to set opacity setting for watermark in html mode.
*   Improved rendering performance.

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-631</p></td><td class="confluenceTd"><p>Add ability to specify custom fonts path</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-475</p></td><td class="confluenceTd"><p>Opacity setting for Watermark</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-416</p></td><td class="confluenceTd"><p>Get selected attachment from email documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-414</p></td><td class="confluenceTd"><p>Render attachments from email documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-478</p></td><td class="confluenceTd"><p>Pre-Render Information required of a remotely located document or document in the form of streams</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-459</p></td><td class="confluenceTd"><p>Provide remove old cache utility feature in the next generation API</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-582</p></td><td class="confluenceTd"><p>The GroupDocs.Viewer 3.x is slower than 2.19 in performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-641</p></td><td class="confluenceTd"><p>Update DocumentInfoOptions Cells/Words/Email DocumentInfoOptions properties names and types</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-640</p></td><td class="confluenceTd"><p>Remove duplicated document name header in Project document converted to html</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-636</p></td><td class="confluenceTd"><p>Remove border in html that was converted from words document</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-619</p></td><td class="confluenceTd"><p>Implement adding prefix to font-family property if it can be overriden</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-614</p></td><td class="confluenceTd"><p>Implement transparent watermarking in html mode</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-600</p></td><td class="confluenceTd"><p>Improve performance of extracting document information in image mode</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-590</p></td><td class="confluenceTd"><p>Apply HtmlResourcePrefix to fonts mentioned in css files</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-568</p></td><td class="confluenceTd"><p>Load document only when not cached</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-557</p></td><td class="confluenceTd"><p>Improve temp files folder structure</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-558</p></td><td class="confluenceTd"><p>Improve processing remote files by Uri</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-1107</p></td><td class="confluenceTd"><p>Convert a document page to JPEG in about 0.1 second</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-905</p></td><td class="confluenceTd"><p>Links for mail attachments</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-642</p></td><td class="confluenceTd"><p>GetDocumentInfo Method Throws Exception in Evaluation Mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-632</p></td><td class="confluenceTd"><p>The HtmlResourcePrefix {page-number} is not set in DiagramToHtmlConverter</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-476</p></td><td class="confluenceTd"><p>Some characters are not showing in correct format when render as HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-591</p></td><td class="confluenceTd"><p>'System.OutOfMemoryException' thrown while rendering as image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-605</p></td><td class="confluenceTd"><p>Only first frame or tiff document converted in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-606</p></td><td class="confluenceTd"><p>Only first frame or tiff document converted in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-550</p></td><td class="confluenceTd"><p>MSG file is not rendering properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-583</p></td><td class="confluenceTd"><p>Failed to get document information in image mode with text from epub document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-570</p></td><td class="confluenceTd"><p>Failed to get document information in image mode with text in trial</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-551</p></td><td class="confluenceTd"><p>File description document type format is Unknown when extension is upper case</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-552</p></td><td class="confluenceTd"><p>File description document type format is Unknown when extension is upper case</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2372</p></td><td class="confluenceTd"><p>Different HTML generated for the same document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1531</p></td><td class="confluenceTd"><p>Outlines are rendered incorrectly in HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2320</p></td><td class="confluenceTd"><p>Some text extracted from document twice</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

   
 

## Public API and Backward Incompatible Changes

#### Set custom fonts directory path

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Add custom fonts directories to FontDirectories list
config.FontDirectories.Add(@"/usr/admin/Fonts");
config.FontDirectories.Add(@"/home/admin/Fonts");
 
// Init viewer handler with config
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);


```

#### Get email attachment original file

**C#**

```csharp


// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create image handler
ViewerImageHandler handler = new ViewerImageHandler(config);
EmailAttachment attachment = new EmailAttachment("document-with-attachments.msg", "attachment-image.png");
  
// Get attachment original file
FileContainer container = imageHandler.GetFile(attachment);
Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
Console.WriteLine("Attach stream lenght: {0}", fileContainer.Stream.Length);


```

#### Get attachment document html representation

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:\\storage";
viewerConfig.UseCache = true;
 
// Setup html conversion options
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.IsResourcesEmbedded = false;
  
// Init viewer html handler
ViewerHtmlHandler handler = new ViewerHtmlHandler(viewerConfig);
 
DocumentInfoContainer info = handler.GetDocumentInfo("document-with-attachments.msg");
 
// Iterate over the attachments collection
foreach (AttachmentBase attachment in info.Attachments)
{
    Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
 
    // Get attachment document html representation
    List<PageHtml> pages = handler.GetPages(attachment, htmlOptions);
    foreach (PageHtml page in pages)
    {
        Console.WriteLine("  Page: {0}, size: {1}", page.PageNumber, page.HtmlContent.Length);
        foreach (HtmlResource htmlResource in page.HtmlResources)
        {
            Stream resourceStream = handler.GetResource(attachment, htmlResource);
            Console.WriteLine("     Resource: {0}, size: {1}", htmlResource.ResourceName, resourceStream.Length);
        }
    }
}


```

#### Get attachment document image representation

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:\\storage";
viewerConfig.UseCache = true;
  
// Init viewer image handler
ViewerImageHandler handler = new ViewerImageHandler(viewerConfig);
 
DocumentInfoContainer info = handler.GetDocumentInfo("document-with-attachments.msg");
 
// Iterate over the attachments collection
foreach (AttachmentBase attachment in info.Attachments)
{
    Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
 
    // Get attachment document image representation
    List<PageImage> pages = handler.GetPages(attachment, htmlOptions);
    foreach (PageImage page in pages)
        Console.WriteLine("  Page: {0}, size: {1}", page.PageNumber, page.Stream.Length);
}


```

#### Get document information by guid

The following code snippet shows you how to get document information by guid in Viewer v.3.3.0

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
 
string guid = "word.doc";
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(guid, options);
 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size);
 
foreach (PageData pageData in documentInfo.Pages)
{
    Console.WriteLine("Page number: {0}", pageData.Number);
    Console.WriteLine("Page name: {0}", pageData.Name);
}


```

#### Get document information by stream

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
 
// Get document stream
Stream stream = GetDocumentStream();
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(stream, options);
 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size);
 
foreach (PageData pageData in documentInfo.Pages)
{
    Console.WriteLine("Page number: {0}", pageData.Number);
    Console.WriteLine("Page name: {0}", pageData.Name);
}


```

#### Get document information by Uri

**C#**

```csharp

// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
 
Uri uri = new Uri("http://example.com/words.doc");
 
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(uri, options);
 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size);
 
foreach (PageData pageData in documentInfo.Pages)
{
    Console.WriteLine("Page number: {0}", pageData.Number);
    Console.WriteLine("Page name: {0}", pageData.Name);
}


```

#### How to clear all cache files

**C#**

```csharp

//Init viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:\\storage";
 
// Init viewer image or html handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig);
 
//Clear all cache files 
viewerImageHandler.ClearCache();


```

#### How to clear files from cache older than specified time interval

**C#**

```csharp

//Init viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:\\storage";
 
// Init viewer image or html handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig);
 
//Clear files from cache older than specified time interval
TimeSpan olderThanTwoDays = TimeSpan.FromDays(2);
viewerImageHandler.ClearCache(olderThanTwoDays)


```
