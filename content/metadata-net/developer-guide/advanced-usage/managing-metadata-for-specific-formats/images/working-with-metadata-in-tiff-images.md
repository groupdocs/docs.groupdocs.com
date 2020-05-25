---
id: working-with-metadata-in-tiff-images
url: metadata/net/working-with-metadata-in-tiff-images
title: Working with metadata in TIFF images
weight: 9
description: ""
keywords: 
productName: GroupDocs.Metadata for .NET
hideChildren: False
---
## Working with IPTC metadata

The GroupDocs.Metadata API partially supports handling IPTC IIM metadata in TIFF images. Updating and removing IPTC metadata is not implemented yet but you can easily read IPTC properties using the general approach described in the [Working with IPTC IIM metadata](Working%2Bwith%2BIPTC%2BIIM%2Bmetadata.html) section. The only difference is in utilizing the [IIptc](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata.standards.iptc/iiptc) interface which is not implemented by the [TiffRootPackage](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata.formats.image/tiffrootpackage) class. The following code snippet demonstrates how to read IPTC metadata properties from a TIFF image avoiding using the [IIptc](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata.standards.iptc/iiptc) interface.

**AdvancedUsage.ManagingMetadataForSpecificFormats.Image.Tiff.TiffReadBasicIptcProperties**

```csharp
using (Metadata metadata = new Metadata(Constants.TiffWithIptc))
{
	var root = metadata.GetRootPackage<TiffRootPackage>();
	if (root.IptcPackage != null)
	{
		if (root.IptcPackage.EnvelopeRecord != null)
		{
			Console.WriteLine(root.IptcPackage.EnvelopeRecord.DateSent);
			Console.WriteLine(root.IptcPackage.EnvelopeRecord.Destination);
			Console.WriteLine(root.IptcPackage.EnvelopeRecord.FileFormat);
			Console.WriteLine(root.IptcPackage.EnvelopeRecord.FileFormatVersion);

			// ...
		}

		if (root.IptcPackage.ApplicationRecord != null)
		{
			Console.WriteLine(root.IptcPackage.ApplicationRecord.Headline);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.ByLine);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.ByLineTitle);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.CaptionAbstract);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.City);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.DateCreated);
			Console.WriteLine(root.IptcPackage.ApplicationRecord.ReleaseDate);

			// ...
		}
	}
}
```

## Working with XMP metadata

GroupDocs.Metadata for .NET allows managing XMP metadata in TIFF images. For more details please refer to the following guide: [Working with XMP metadata](Working%2Bwith%2BXMP%2Bmetadata.html).

## Working with EXIF metadata

The GroupDocs.Metadata API supports handling EXIF metadata in TIFF images. Please find appropriate code samples in the [Working with EXIF metadata](Working%2Bwith%2BEXIF%2Bmetadata.html) section.

## More resources

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Metadata for .NET examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
    
*   [GroupDocs.Metadata for Java examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)
    

### Free online document metadata management App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to view and edit metadata of PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, emails, images and more with our free online [Free Online Document Metadata Viewing and Editing App](https://products.groupdocs.app/metadata).
