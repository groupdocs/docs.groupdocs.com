---
id: add-annotation-to-the-document
url: annotation-net/add-annotation-to-the-document
title: Add annotation to the document
weight: 3
description: Learn about what is a document annotation, what possible annotation types are, and how to programmatically add annotations to a document using GroupDocs.Annotation API.
keywords: What is annotation, document annotation, add annotation
bookCollapseSection: true
productName: GroupDocs.Annotation for .NET
hideChildren: False
---
# What is a document annotation?

**Annotation** is a textual or graphic notes, comments and remarks attached to a specific part of a document content - sections, paragraphs, sentences or even words. Annotations are often used by a group of collaborators to edit and review documents in a quick and handy manner - the document is shared with reviewers who then mark it up and add notes. Then assigned team members read these annotations and modify document content accordingly.

Today annotations can be programmatically added to a documents and images of various  types - PDF, Microsoft Word and Open Document text documents, Microsoft Excel spreadsheets, Microsoft PowerPoint presentations, PNG / JPG / TIFF images etc. 

  

# Add annotation to the document

**[GroupDocs.Annotation](https://products.groupdocs.com/annotation/net)** allows to apply various annotation types to the different document formats. Supported annotations list is described in a table below. 

## List of supported annotations

Annotation

Description

[Area](https://docs.groupdocs.com/display/annotationnet/Add+area+annotation)

Rectangle annotation that can be applied in random place on document page.

[Arrow](https://docs.groupdocs.com/display/annotationnet/Add+arrow+annotation)

Annotation in the form of pointer or arrow.

[Distance](https://docs.groupdocs.com/display/annotationnet/Add+distance+annotation)

Annotation looks like arrow but with arrows at both line ends. For most document formats this annotation can contains text value (this feature not support for Word documents).

[Ellipse](https://docs.groupdocs.com/display/annotationnet/Add+ellipse+annotation)

Circle-based annotation.

[Link](https://docs.groupdocs.com/display/annotationnet/Add+link+annotation)

Represents a web-link that can be applied to the part of text. This annotation supports only for PDF, Word processing text documents and presentations.

[Point](https://docs.groupdocs.com/display/annotationnet/Add+point+annotation)

Represents abstract point annotation.

[Polyline](https://docs.groupdocs.com/display/annotationnet/Add+polyline+annotation)

Represents free-hand drawing line.

[Resource redaction](https://docs.groupdocs.com/display/annotationnet/Add+resource+redaction+annotation)

Represents free rectangle annotation with fixed position and black background. For this annotation is impossible to move it (in result document), and change any visual properties.

[Text field](https://docs.groupdocs.com/display/annotationnet/Add+text+field+annotation)

This is a rectangle annotation with some text inside rectangle area.

[Highlight](https://docs.groupdocs.com/display/annotationnet/Add+highlight+annotation)

This annotation highlight text. Applicable only for text.

[Text redaction](https://docs.groupdocs.com/display/annotationnet/Add+text+redaction+annotation)

Same as resource redaction annotation, but applicable only for text.

[Replacement](https://docs.groupdocs.com/display/annotationnet/Add+replacement+annotation)

Replace original document text by user text. Applicable only for text.

[Strikeout](https://docs.groupdocs.com/display/annotationnet/Add+strikeout+annotation)

Make selected text strikeout. Applicable only for text.

[Underline](https://docs.groupdocs.com/display/annotationnet/Add+underline+annotation)

Make selected text underline. Applicable only for text.

[Watermark](https://docs.groupdocs.com/display/annotationnet/Add+watermark+annotation)

Add text watermark. PageNumber for this annotation is ignored, because annotation adds to all document pages. For some document formats can set Angle property, that determines annotation angle rotation.

For detailed explanation about how to apply different annotation types to a document, please check these guides:
