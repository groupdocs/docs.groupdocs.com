---
id: get-view-info-for-ms-project-document
url: viewer-net/get-view-info-for-ms-project-document
title: Get View Info for MS Project Document
weight: 2
description: This article explains how to retrieve information about MS Project Documents into tiles with GroupDocs.Viewer within your .NET applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Get View Info for MS Project Document

GroupDocs.Viewer provides additional information such as project start and end dates for MS Project documents when calling [GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo) method. To retrieve view information for MS Project document call [GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo)method and cast output result to [ProjectManagementViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/projectmanagementviewinfo) type.

Following example demonstrates how to retrieve view information for MS Project document.

     
using (Viewer viewer = new Viewer("sample.mpp"))
{
    ViewInfoOptions viewInfoOptions = ViewInfoOptions.ForHtmlView();
    ProjectManagementViewInfo viewInfo = viewer.GetViewInfo(viewInfoOptions) as ProjectManagementViewInfo;
 
    Console.WriteLine("Document type is: " + viewInfo.FileType);
    Console.WriteLine("Pages count: " + viewInfo.Pages.Count);
    Console.WriteLine("Project start date: {0}", viewInfo.StartDate);
    Console.WriteLine("Project end date: {0}", viewInfo.EndDate); 
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