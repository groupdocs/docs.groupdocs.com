---
id: render-project-time-interval
url: viewer/net/render-project-time-interval
title: Render project time interval
weight: 3
description: "This article explains how to view the specific time interval of MS Project Document with GroupDocs.Viewer within your .NET applications."
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
There is the possibility that you are required to render a part of the MS Project within the specified time interval. In that case, GroupDocs.Viewer allows rendering part of MS Project document according to specified [StartDate](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/projectmanagementoptions/properties/startdate) and [EndDate](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/projectmanagementoptions/properties/enddate) properties of [ProjectManagementOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/projectmanagementoptions) class as shown in code samples below. When only one of these properties is set, rendering starts from the project's start date or ends on the project's end date correspondingly.

The following code samples show how to render MS Project document using [StartDate](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/projectmanagementoptions/properties/startdate) and [EndDate](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/projectmanagementoptions/properties/enddate)*.*

```csharp
            using (Viewer viewer = new Viewer(@"sample.mpp"))
            {
                HtmlViewOptions viewOptions = HtmlViewOptions.ForEmbeddedResources();

                viewOptions.ProjectManagementOptions.StartDate = new DateTime(2008, 6, 1);
                viewOptions.ProjectManagementOptions.EndDate = new DateTime(2008, 7, 1);

                viewer.View(viewOptions);
            }

```

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