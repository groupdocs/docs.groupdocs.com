---
id: groupdocs-redaction-for-java-20-2-release-notes
url: redaction/java/groupdocs-redaction-for-java-20-2-release-notes
title: GroupDocs.Redaction for Java 20.2 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Redaction for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Redaction for Java 20.2{{< /alert >}}

## Major Features

There are the following improvements in this release:

*   Ability to edit or erase image metadata  
    

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p>Key</p></td><td class="confluenceTd"><p>Summary</p></td><td class="confluenceTd"><p>Category</p></td></tr><tr><td class="confluenceTd"><p>REDACTIONJAVA-62</p></td><td class="confluenceTd"><p>Implement metadata redaction for raster images</p></td><td class="confluenceTd"><p><span>Improvement</span></p></td></tr></tbody></table>

# Public API and Backward Incompatible Changes

### Implement metadata redaction for raster images

This feature provides functionality to erase or redact the raster image metadata.

##### Public API changes

There are no changes in public API

##### Usecases

The following example demonstrates how to edit exif data (erase them) from a photo or any other image:

**Java**

**java**

```csharp
final Redactor redactor  = new Redactor("D:\\photo.jpg");
try
{
    RedactorChangeLog result = redactor.apply(new EraseMetadataRedaction(MetadataFilters.All));
    if (result.getStatus() != RedactionStatus.Failed)
    {
       //The redacted output will save as PDF
       redactor.save();
    };
}
finally { redactor.close(); }
```
