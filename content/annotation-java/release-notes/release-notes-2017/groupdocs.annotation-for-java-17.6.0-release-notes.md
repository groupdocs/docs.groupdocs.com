---
id: groupdocs-annotation-for-java-17-6-0-release-notes
url: annotation/java/groupdocs-annotation-for-java-17-6-0-release-notes
title: GroupDocs.Annotation for Java 17.6.0 Release Notes
weight: 4
description: ""
keywords: 
productName: GroupDocs.Annotation for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Annotation for Java 17.6.0{{< /alert >}}

# Major Features 

Below the list of  new features and fixed bugs in this regular monthly release of GroupDocs.Annotation for Java. The most notable are:

*   Added support of annotation Diagrams documents (vsd, vss)
    1.  Arrow annotation
    2.  Area annotation
    3.  ResourceRedaction annotation
    4.  Polyline annotation
    5.  TextField annotation

*   Implement proper error handling when user try to invoke GetDocumentInfo method for images documents
*   Updated and improved library obfuscation

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Issue Type</strong></p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-417</p></td><td class="confluenceTd"><p>Implement Polyline annotation with Diagram documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-416</p></td><td class="confluenceTd"><p>Implement Arrow annotation for Diagram documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-410</p></td><td class="confluenceTd"><p>Implement Area annotation for Diagrams</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-406</p></td><td class="confluenceTd"><p>Add option to process CAD documents as PDF</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-405</p></td><td class="confluenceTd"><p>Implement GetPages method for Email documents processing from streams</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-401</p></td><td class="confluenceTd"><p>Implement proper error handling when user try to invoke GetDocumentInfo method for images documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-395</p></td><td class="confluenceTd"><p>Internal Exception in annotator.GetDocumentInfo() Method</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Annotation for Java 17.6.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Annotation which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Added annotating Diagrams (vss, vsd)  documents [](http://lisbon.dynabic.com/wiki/display/annotation/24.++Working+with+Diagram+documents)[Documentation article](https://docs.groupdocs.com/display/annotationjava/Working+with+Diagrams)
