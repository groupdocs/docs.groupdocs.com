---
id: get-attachments
url: viewer-net/get-attachments
title: Get attachments
weight: 1
description: This guide describes how to get attachment from PDF document, Outlook data file or email and view it with file viewer by GroupDocs.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Get attachments

GroupDocs.Viewer for .NET API enables you to to retrieve a list of document attachments from your emails, Outlook data files, archives and PDF documents.

Follow these steps to get a list of all attachments:

*   Instantiate [Viewer](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer)object for the file that contains attachment(s);
*   Call [GetAttachments](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getattachments) method which will return document attachments collection;
*   Iterate through attachments collection.

Following example demonstrates on how to get all attachments from MSG file.

			using (Viewer viewer = new Viewer("sample.msg"))
            {
                IList<Attachment> attachments = viewer.GetAttachments();

                Console.WriteLine("\\nAttachments:");
                foreach(Attachment attachment in attachments)
                    Console.WriteLine(attachment);
            }

NOTE: provided code example is actual for all document types that support attachments - Email documents, Outlook data files, Archives and PDF documents.

## More resources

### Advanced Usage Topics

To learn more about document viewing features, please refer to the [advanced usage section](Advanced%2Busage.html).

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
