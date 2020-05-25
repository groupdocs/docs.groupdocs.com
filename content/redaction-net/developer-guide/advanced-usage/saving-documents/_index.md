---
id: saving-documents
url: redaction/net/saving-documents
title: Saving documents
weight: 2
description: ""
keywords: 
productName: GroupDocs.Redaction for .NET
hideChildren: False
---
Saving a document, GroupDocs.Redaction puts it in the same folder as the original file, renaming or rewriting original. If you need to save the document to any custom location, you'll have to open a *Stream* to this location. As a save option by default, *GroupDocs.Redaction* converts all pages (slides, worksheets) in a document into images and puts them in a single PDF file, so you can share the redacted document without any additional conversions. You can control this behavior through *RasterizeToPdf* property in *SaveOptions *or *Enabled* property in *RasterizationOptions* class.

You can see examples of *Save* method and its options in one of these guides:

*   [Save with default options](https://wiki.lisbon.dynabic.com/display/redaction/Save+with+default+options)
*   [Save in rasterized PDF](https://wiki.lisbon.dynabic.com/display/redaction/Save+in+rasterized+PDF)
*   [Select specific pages for rasterized PDF](https://wiki.lisbon.dynabic.com/display/redaction/Select+Specific+Pages+For+Rasterized+PDF)
    
*   [Save in original format](https://wiki.lisbon.dynabic.com/display/redaction/Save+In+Original+Format)
    
*   [Save overwriting original file](https://wiki.lisbon.dynabic.com/display/redaction/Save+Overwriting+Original+File)
    
*   [Save to Stream](https://wiki.lisbon.dynabic.com/display/redaction/Save+To+Stream)
