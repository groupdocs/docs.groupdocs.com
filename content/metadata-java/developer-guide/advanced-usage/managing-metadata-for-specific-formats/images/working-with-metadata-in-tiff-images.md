---
id: working-with-metadata-in-tiff-images
url: metadata/java/working-with-metadata-in-tiff-images
title: Working with metadata in TIFF images
weight: 9
description: ""
keywords: 
productName: GroupDocs.Metadata for Java
hideChildren: False
---
## Working with IPTC metadata

The GroupDocs.Metadata API partially supports handling IPTC IIM metadata in TIFF images. Updating and removing IPTC metadata is not implemented yet but you can easily read IPTC properties using the general approach described in the [Working with IPTC IIM Metadata](Working%2Bwith%2BIPTC%2BIIM%2Bmetadata.html) section. The only difference is in utilizing the [IIptc](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata.core/IIptc) interface which is not implemented by the [TiffRootPackage](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata.core/TiffRootPackage) class. The following code snippet demonstrates how to read IPTC metadata properties from a TIFF image avoiding using the [IIptc](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata.core/IIptc) interface.

**advanced\_usage.managing\_metadata\_for\_specific\_formats.image.tiff.TiffReadBasicIptcProperties**

```csharp
try (Metadata metadata = new Metadata(Constants.TiffWithIptc)) {
	TiffRootPackage root = metadata.getRootPackageGeneric();

	if (root.getIptcPackage() != null) {
		if (root.getIptcPackage().getEnvelopeRecord() != null) {
			System.out.println(root.getIptcPackage().getEnvelopeRecord().getDateSent());
			System.out.println(root.getIptcPackage().getEnvelopeRecord().getDestination());
			System.out.println(root.getIptcPackage().getEnvelopeRecord().getFileFormat());
			System.out.println(root.getIptcPackage().getEnvelopeRecord().getFileFormatVersion());

			// ...
		}

		if (root.getIptcPackage().getApplicationRecord() != null) {
			System.out.println(root.getIptcPackage().getApplicationRecord().getHeadline());
			System.out.println(root.getIptcPackage().getApplicationRecord().getByLine());
			System.out.println(root.getIptcPackage().getApplicationRecord().getByLineTitle());
			System.out.println(root.getIptcPackage().getApplicationRecord().getCaptionAbstract());
			System.out.println(root.getIptcPackage().getApplicationRecord().getCity());
			System.out.println(root.getIptcPackage().getApplicationRecord().getDateCreated());
			System.out.println(root.getIptcPackage().getApplicationRecord().getReleaseDate());

			// ...
		}
	}
}
```

## Working with XMP metadata

GroupDocs.Metadata for Java allows managing XMP metadata in JPEG images. For more details please refer to the following guide: [Working with XMP Metadata](Working%2Bwith%2BXMP%2Bmetadata.html).

## Working with EXIF metadata

The GroupDocs.Metadata API supports handling EXIF metadata in JPEG images. Please find appropriate code samples in the [Working with EXIF Metadata](Working%2Bwith%2BEXIF%2Bmetadata.html) section.

## More resources

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Metadata for .NET examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
    
*   [GroupDocs.Metadata for Java examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)
    

### Free online document metadata management App

Along with full featured Java library we provide simple, but powerful free Apps.

You are welcome to view and edit metadata of PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, emails, images and more with our free online [Free Online Document Metadata Viewing and Editing App](https://products.groupdocs.app/metadata).
