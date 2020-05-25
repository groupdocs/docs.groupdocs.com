---
id: groupdocs-metadata-for-net-19-5-1-release-notes
url: metadata/net/groupdocs-metadata-for-net-19-5-1-release-notes
title: GroupDocs.Metadata for .NET 19.5.1 Release Notes
weight: 2
description: ""
keywords: 
productName: GroupDocs.Metadata for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Metadata for .NET 19.5.1{{< /alert >}}

## Major Features

There are the following features, enhancements and fixes in this release:

*   Fix "Invalid xls format" exception when loading Excel worksheet

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Key</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Summary</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Category</span></p></td></tr><tr><td colspan="1" class="confluenceTd">METADATANET-2909</td><td colspan="1" class="confluenceTd">"Invalid xls format" exception when loading Excel worksheet</td><td colspan="1" class="confluenceTd">Bug</td></tr></tbody></table>

## Public API and Backward Incompatible Changes

### "Invalid xls format" exception when loading Excel worksheet

[https://forum.groupdocs.com/t/error-occurred-when-loading-xls-file-using-groupdocs-metadata-formats-document-xlsformat/7280/2](https://forum.groupdocs.com/t/error-occurred-when-loading-xls-file-using-groupdocs-metadata-formats-document-xlsformat/7280/2)

The exception occurred because of a problematic Excel file saved in the Microsoft Excel 5.0/95 format which GroupDocs.Metadata was unable to recognize. This release adds support for such files so they can be loaded by the library. Please note that GroupDocs.Metadata automatically updates Excel 5.0/95 workbooks to the Excel 97-2003 format during saving. Both these formats have the same extension (.xls) so regular users won't see any difference between the loaded and saved file.  

##### Public API changes in .Net version

None

##### Use cases

Load a Microsoft Excel 5.0/95 workbook

**C#**

```csharp
using (XlsFormat format = new XlsFormat(@"D:\input95.xls"))
{
	// Work with the workbook as you normally do with all other Excel files
	// ...

	// Please note that it will be saved in the Excel 97-2003 format
	format.Save(@"D:\output97.xls");
}
```
