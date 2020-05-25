---
id: groupdocs-search-for-net-19-10-1-release-notes
url: search/net/groupdocs-search-for-net-19-10-1-release-notes
title: GroupDocs.Search for .NET 19.10.1 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Search for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Search for .NET 19.10.1{{< /alert >}}

## Major Features

There are the following bug fixes and improvements:

*   License setting error while extracting text of documents
*   Add MailFieldNames class containing e-mail field names

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p>Key</p></td><td class="confluenceTd"><p>Summary</p></td><td class="confluenceTd"><p>Category</p></td></tr><tr><td colspan="1" class="confluenceTd"><p>SEARCHNET-2129</p></td><td colspan="1" class="confluenceTd"><p>License setting error while extracting text of documents</p></td><td colspan="1" class="confluenceTd">Bug</td></tr><tr><td class="confluenceTd"><p>SEARCHNET-2127</p></td><td class="confluenceTd"><p>Add MailFieldNames class containing e-mail field names</p></td><td class="confluenceTd"><p>Improvement</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

### License setting error while extracting text of documents

Fixed error of setting a license for extracting text of documents.

### Fixed error of setting a license for extracting text of documents.

This improvement adds the **MailFieldNames** class, which contains constants with values of field names of mail documents.

##### Public API changes

Static class **MailMessageBody** has been added to **GroupDocs.Search.Options** namespace.  
Constant **string MailMessageBody**has been added to **GroupDocs.Search.Options.**MailMessageBody**** class.  
Constant **string MailSenderName** has been added to **GroupDocs.Search.Options.**MailMessageBody**** class.  
Constant **string MailDisplayTo** has been added to **GroupDocs.Search.Options.**MailMessageBody**** class.  
Constant **string MailSubject** has been added to **GroupDocs.Search.Options.**MailMessageBody**** class.

##### Usecases

This example shows how to use field names constants to search specific fields of documents:

**C#**

```csharp
string indexFolder = @"c:\MyIndex";
string documentFolder = @"c:\MyDocuments";
 
// Creating index
Index index = new Index(indexFolder);
 
// Adding documents to index
index.Add(documentFolder);
 
// Searching
SearchResult result = index.Search(MailFieldNames.MailMessageBody + ": meeting");
```
