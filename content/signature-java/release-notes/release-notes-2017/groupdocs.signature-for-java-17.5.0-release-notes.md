---
id: groupdocs-signature-for-java-17-5-0-release-notes
url: signature/java/groupdocs-signature-for-java-17-5-0-release-notes
title: GroupDocs.Signature for Java 17.5.0 Release Notes
weight: 5
description: ""
keywords: 
productName: GroupDocs.Signature for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Signature for Java 17.5.0{{< /alert >}}

# Major Features

There are about 15 improvements, new features and fixes in this regular release. The most notable are:

*   Implemented non-static methods to obtain Document information like getting count of document pages, size of each page and obtain document page image. Non-static methods allow to use custom input data handler to obtain document stream based passed guid identifier.
*   Introduced alternative Text Signature implementation as Watermark for all Document Types.
*   Introduced ability to specify measure units of Signature in millimeters for all Signature Types and Document Types.
*   Improved Signature Area positioning by ability to specify different measure units for location, size and margins properties
*   Optimized Signature processing for Words Documents
*   Introduced ability to put Text Signature into Form Fields of Words Documents
*   Introduced ability to put Text Signature into predefined fields for PDF Documents
*   Implemented verification of Text Signature for Form Fields of Words Documents
*   Implemented verification for Form Fields of Pdf Documents with Text Signature

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Issue Type</strong></p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2825</p></td><td class="confluenceTd"><p>Implement ability to verify Text Signature located into Form Fields of PDF Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2824</p></td><td class="confluenceTd"><p>Implement ability to verify Text Signature located into Form Fields of Words Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2822</p></td><td class="confluenceTd"><p>Implement ability to obtain Document Information over Signature Handler</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2819</p></td><td class="confluenceTd"><p>Implement Watermark feature for Text Signature of PDF Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2816</p></td><td class="confluenceTd"><p>Implement Watermark feature for Text Signature of Slides Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2813</p></td><td class="confluenceTd"><p>Implement Watermark feature for Text Signature of Words Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2810</p></td><td class="confluenceTd"><p>Implement Watermark feature for Text Signature of Cells Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2804</p></td><td class="confluenceTd"><p>Implement ability to specify new Measure Units Millimeters for Slides Signatures</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2801</p></td><td class="confluenceTd"><p>Implement ability to specify new Measure Units Millimeters for Words Signatures</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2798</p></td><td class="confluenceTd"><p>Implement ability to specify new Measure Units Millimeters for Pdf Signatures</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2788</p></td><td class="confluenceTd"><p>Implement ability to put Text Signature into Template/Form Fields of Pdf Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2785</p></td><td class="confluenceTd"><p>Implement ability to put Text Signature into Form Fields of Words Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2768</p></td><td class="confluenceTd"><p>Implement Document information features into non static method of Signature Handler</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>SIGNATURENET-2610</p></td><td class="confluenceTd"><p>Optimize Words Signature Implementation for Text and Image types</p></td><td class="confluenceTd"><p>Improvement</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Signature for Java 17.5.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Signature which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Added new enumeration value **Millimeters** for enumeration** MeasureType** to specify measure units in millimeters for location, size of margins. See different examples here    
    [How to specify different Measure Units](https://docs.groupdocs.com/display/signaturejava/Measure+Unit+Types)  

      2. Following static method of SignatureHandler are marked as Obsolete attribute and will be deprecated after next 3 Releases

**Obsolete static methods of SignatureHandler**

```csharp
public static DocumentDescription getPageDescriptions(string guid);
public static byte[] getDocumentPageImage(String guid, Integer width, Integer quality, int pageIndex);
public static java.awt.Dimension getPageSize(String guid, int signaturePageNumber, double signatureLocationX, 
double signatureLocationY, PositionInCellsDocument positionInCellsDocument);
```

       3. Introduced non static methods to obtain Document information to SignatureHandler class. More examples are located here

           [How to obtain information about document](https://docs.groupdocs.com/pages/viewpage.action?pageId=46858855)

       4. Added new enumeration for Text Signature Implementation for each enumeration type like CellsTextSignatureImplementation,

           PdfTextSignatureImplementation, WordsTextSignatureImplementation and SlidesTextSignatureImplementation - **Watermark**. 

       5. Added new enumeration for Text Signature Implementation for Words Documents WordsTextSignatureImplementation **TextToFormField. **

### Specify different Measure Unit Types for PDF Text Signature

{{< alert style="info" >}}New Measure Unit Type MeasureType.Millimeters is supported starting from version 17.5{{< /alert >}}
