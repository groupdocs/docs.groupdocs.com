---
id: render-tracked-changes
url: viewer-net/render-tracked-changes
title: Render tracked changes
weight: 1
description: This article explains how to show tracked changes when viewing Word Processing Documents with GroupDocs.Viewer within your .NET applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Render tracked changes

GroupDocs.Viewer does not render tracked changes of Word Processing documents by default. If you want to see tracked changes in your rendering result, use [WordProcessingOptions.RenderTrackedChanges](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/wordprocessingoptions/properties/rendertrackedchanges) property of [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions) (or [JpgViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/jpgviewoptions), or [PngViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pngviewoptions), or [PdfViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfviewoptions)) class and pass it to [Viewer](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer) object constructor.

Follow below steps to render WordProcessing document with tracked changes.

*   Initialize the [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions) object.
*   Set [WordProcessingOptions.RenderTrackedChanges](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/wordprocessingoptions/properties/rendertrackedchanges) to *true.*
*   Pass [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions) object to [View](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/view) method.

The following code sample shows how to render a Word document including tracked changes.

            using (Viewer viewer = new Viewer("sample.docx"))
            {
                HtmlViewOptions viewOptions = HtmlViewOptions.ForEmbeddedResources();
                viewOptions.WordProcessingOptions.RenderTrackedChanges = true;
                viewer.View(viewOptions);
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
