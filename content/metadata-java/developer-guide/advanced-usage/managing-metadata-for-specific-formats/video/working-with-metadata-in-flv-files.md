---
id: working-with-metadata-in-flv-files
url: metadata/java/working-with-metadata-in-flv-files
title: Working with metadata in FLV files
weight: 3
description: ""
keywords: 
productName: GroupDocs.Metadata for Java
hideChildren: False
---
## Reading FLV header properties

The GroupDocs.Metadata API supports extracting format-specific information from the FLV file header.

The following are the steps to read the header of an FLV file.

1.  [Load](Loading%2Bfiles.html) an FLV video
2.  Get the root metadata package
3.  Extract  the native metadata package using the [FlvRootPackage.getHeader](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata.core/FlvRootPackage#getHeader()) method
4.  Read the FLV header properties

**advanced\_usage.managing\_metadata\_for\_specific\_formats.video.flv.FlvReadHeaderProperties**

```csharp
try (Metadata metadata = new Metadata(Constants.InputFlv)) {
    FlvRootPackage root = metadata.getRootPackageGeneric();

    System.out.println(root.getHeader().getVersion());
    System.out.println(root.getHeader().hasAudioTags());
    System.out.println(root.getHeader().hasVideoTags());
    System.out.println(root.getHeader().getTypeFlags());
}
```

## Working with XMP metadata

GroupDocs.Metadata for Java allows managing XMP metadata in FLV files. For more details please refer to the following guide: [Working with XMP Metadata](Working%2Bwith%2BXMP%2Bmetadata.html).

## More resources

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Metadata for .NET examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
    
*   [GroupDocs.Metadata for Java examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)
    

### Free online document metadata management App

Along with full featured Java library we provide simple, but powerful free Apps.

You are welcome to view and edit metadata of PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, emails, images and more with our free online [Free Online Document Metadata Viewing and Editing App](https://products.groupdocs.app/metadata).