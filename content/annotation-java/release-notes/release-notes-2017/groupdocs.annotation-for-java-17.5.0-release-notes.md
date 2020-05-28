---
id: groupdocs-annotation-for-java-17-5-0-release-notes
url: annotation/java/groupdocs-annotation-for-java-17-5-0-release-notes
title: GroupDocs.Annotation for Java 17.5.0 Release Notes
weight: 5
description: ""
keywords: 
productName: GroupDocs.Annotation for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Annotation for Java 17.5.0{{< /alert >}}

## Major Features

Below the list of improvements, fixed bugs and new features in this regular monthly release of GroupDocs.Annotation for Java. The most notable are:  
Implemented annotations annotating documents of following types:

*   Add Metered licensing support
*   Implemented DICOM documents annotating 
*   Implemented Otp documents annotating 
*   Implemented DjVu documents annotating
*   Adding annotations to EMF/WMF documents
*   Added Distance Annotations to image documents
*   Implemented CAD documents annotating 
*   Implemented Arrow annotation for images
*   Fixed replies to annotations for Word documents
*   Improving processing CAD files (user able to work with documents with several pages)
*   Improved import annotation for Words document
*   Processing tables, numebered lists and hyperlinks in Words documents
*   Fixed issue on mechanism of annotations detection on special cases for Words documents
*   Implemented ability to annotate Email documents (export only)
*   Added ability to annotate Html documents
*   Implemented import annotations from tables for Words documents

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Issue Type</strong></p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-351</p></td><td class="confluenceTd"><p>Implement annotating for DICOM format images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-348</p></td><td class="confluenceTd"><p>Add Metered licensing support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-344</p></td><td class="confluenceTd"><p>Implement adding annotations to Otp format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-340</p></td><td class="confluenceTd"><p>Implement annotating DjVu format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-368</p></td><td class="confluenceTd"><p>Implement distance annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-367</p></td><td class="confluenceTd"><p>Implement annotating EMF/WMF document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-363</p></td><td class="confluenceTd"><p>Implement CAD documents annotating</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-361</p></td><td class="confluenceTd"><p>Implement adding Arrow annotation to Image documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-380</p></td><td class="confluenceTd"><p>Process hyperlinks in tables for Words documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-379</p></td><td class="confluenceTd"><p>Processing numbered lists in tables for Words documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-378</p></td><td class="confluenceTd"><p>Processing tables in Word documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-393</p></td><td class="confluenceTd"><p>Implement GetDocumentInfo from a stream</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-392</p></td><td class="confluenceTd"><p>Implement Html documents annotating</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-391</p></td><td class="confluenceTd"><p>Implement annotating Email format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-390</p></td><td class="confluenceTd"><p>Implement import annotations in tables for Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-381</p></td><td class="confluenceTd"><p>Improve import annotations from Word documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-376</p></td><td class="confluenceTd"><p>Improve Annotating CAD files</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-388</p></td><td class="confluenceTd"><p>Refactor annotations export logic</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-365</p></td><td class="confluenceTd"><p>Export to MS-Word exporting the repeated reply comments</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-389</p></td><td class="confluenceTd"><p>Fix issues with annotations detection in some special cases in Words documents</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Annotation for Java 17.5.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Annotation which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Added new formats to annotating images article :[ Documentation article](https://docs.groupdocs.com/display/annotationjava/Different+Annotations+for+Images)
2.  Adding annotations for EMF/WMF and CAD formats : [Documentation article](https://docs.groupdocs.com/display/annotationjava/Different+Annotations+for+Images)
3.  Adding Distance and Arrow annotations for image: [Documentation article](https://docs.groupdocs.com/display/annotationjava/Different+Annotations+for+Images)
4.  Added ability to get document information from stream: [Documentation article](https://docs.groupdocs.com/display/annotationjava/Getting+Text+Coordinates+in+Image+Representation)[](https://docs.groupdocs.com/display/annotationjava/Text+Coordinates+in+Image+Presentation+of+Document)
5.  Added annotating Email (export only) (Eml Emlx Msg) documents: [Documentation article](https://docs.groupdocs.com/display/annotationjava/Annotating+Email+Documents)
6.  Added annotating (export only) Email (Html) documents: [Documentation article](https://docs.groupdocs.com/display/annotationjava/Annotating+HTML+Documents)

### Metered licensing

**Java**

```csharp
String storagePath = Utilities.STORAGE_PATH;
        
// Setup Annotation configuration
AnnotationConfig annotationConfig = new AnnotationConfig();
annotationConfig.setStoragePath(storagePath);
 
InputStream cleanPdf = new FileInputStream(Utilities.STORAGE_PATH + File.separator + "SetLicense.TestData.Clear.pdf");
 
// Create new instance of GroupDocs.Annotation.Metered classs
Metered metered = new Metered();
 
// Set public and private key to metered instance
metered.setMeteredKey("**", "**");
 
// Get metered value before usage of the annotation
double amountBefore = Metered.getConsumptionQuantity();
System.out.println("Amount consumed  before: " + amountBefore);
 
//instantiating the annotation handler
AnnotationImageHandler annotator = new AnnotationImageHandler(annotationConfig);
AnnotationInfo pointAnnotation = new AnnotationInfo();
pointAnnotation.setAnnotationPosition(new Point(852.0, 81.0));
pointAnnotation.setBox(new Rectangle(212f, 81f, 142f, 0.0f));
pointAnnotation.setPageNumber(0);
pointAnnotation.setType(AnnotationType.Point);
pointAnnotation.setCreatorName("Anonym A.");
 
List<AnnotationInfo> annotations = new ArrayList<AnnotationInfo>();
annotations.add(pointAnnotation);
 
InputStream result = annotator.exportAnnotationsToDocument(cleanPdf, annotations, DocumentType.Pdf);
 
// Get metered value after usage of the annotation
double amountAfter = Metered.getConsumptionQuantity();
System.out.println("Amount consumed after: " + amountAfter);
System.out.println("Press any key...");
```