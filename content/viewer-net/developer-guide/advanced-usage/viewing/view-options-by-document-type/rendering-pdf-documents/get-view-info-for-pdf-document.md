---
id: get-view-info-for-pdf-document
url: viewer-net/get-view-info-for-pdf-document
title: Get View Info for PDF Document
weight: 5
description: This article explains how to retrieve information about PDF Documents with GroupDocs.Viewer within your .NET applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Get View Info for PDF Document

GroupDocs.Viewer provides additional information for PDF documents when calling [GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo)method. To retrieve view information for PDF document call [GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo)method and cast output result to [PdfViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/pdfviewinfo) type.

Following example demonstrates how to retrieve view information for PDF document.

            using (Viewer viewer = new Viewer("sample.pdf"))
            {
                ViewInfoOptions viewInfoOptions = ViewInfoOptions.ForHtmlView();
                PdfViewInfo viewInfo = viewer.GetViewInfo(viewInfoOptions) as PdfViewInfo;
 
                Console.WriteLine("Document type is: " + viewInfo.FileType);
                Console.WriteLine("Pages count: " + viewInfo.Pages.Count);
                Console.WriteLine("Printing allowed: " + viewInfo.PrintingAllowed);
            }
      

## More resources

### GitHub Examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Viewer for .NET examples, plugins, and showcase](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET)
    
*   [GroupDocs.Viewer for Java examples, plugins, and showcase](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java)
    
*   [Document Viewer for .NET MVC UI Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET-MVC) 
    
*   [Document Viewer for .NET App WebForms UI Modern Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET-WebForms)
    
*   [Document Viewer for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java-Dropwizard)
    
*   [Document Viewer for Java Spring UI Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java-Spring)
    

### Free Online App

Along with full-featured .NET library we provide simple but powerful free Apps.

You are welcome to view Word, PDF, Excel, PowerPoint documents with free to use online **[GroupDocs Viewer App](https://products.groupdocs.app/viewer)**.