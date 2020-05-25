---
id: groupdocs-search-for-net-17-05-release-notes
url: search/net/groupdocs-search-for-net-17-05-release-notes
title: GroupDocs.Search for .NET 17.05 Release Notes
weight: 8
description: ""
keywords: 
productName: GroupDocs.Search for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Search for .NET 17.5{{< /alert >}}

## Major Features

There are 8 features and enhancements in this regular monthly release. The most notable are:

*   SEARCHNET-1004 Implement optimization of simple search and fuzzy search
*   SEARCHNET-1005 Implement optimization of index data on hard disc
*   SEARCHNET-1007 Remove LoadSynonyms(string fileName) obsolete method
*   SEARCHNET-1008 Remove SearchParameters.UseFuzzySearch obsolete parameter
*   SEARCHNET-1009 Implement support of OneNote documents
*   SEARCHNET-1010 Implement support of Electronic Publications (epub)
*   SEARCHNET-1011 Implement support of new Presentations formats (pptm and ppsm)
*   SEARCHNET-1012 Implement support of OpenDocument presentation format (odp)

## All Changes

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p>Key</p></td><td class="confluenceTd"><p>Summary</p></td><td class="confluenceTd"><p>Category</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1004</p></td><td class="confluenceTd"><p>Implement optimization of simple search and fuzzy search</p></td><td class="confluenceTd"><p>Enhancement</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1005</p></td><td class="confluenceTd"><p>Implement optimization of index data on hard disc</p></td><td class="confluenceTd"><p>Enhancement</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1007</p></td><td class="confluenceTd"><p>Remove LoadSynonyms(string fileName) obsolete method</p></td><td class="confluenceTd"><p>Enhancement</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1008</p></td><td class="confluenceTd"><p>Remove SearchParameters.UseFuzzySearch obsolete parameter</p></td><td class="confluenceTd"><p>Enhancement</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1009</p></td><td class="confluenceTd"><p>Implement support of OneNote documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1010</p></td><td class="confluenceTd"><p>Implement support of Electronic Publications (epub)</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1011</p></td><td class="confluenceTd"><p>Implement support of new Presentations formats (pptm and ppsm)</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>SEARCHNET-1012</p></td><td class="confluenceTd"><p>Implement support of OpenDocument presentation format (odp)</p></td><td class="confluenceTd"><p>New Feature</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Search for .NET 17.5. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Search which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

#### Implement optimization of simple search and fuzzy search

Implemented optimization of simple search and fuzzy search. Simple search performance improved by 3 times. Fuzzy search performance improved by 2 times.

**Public API Changes**  
None.

#### Implement optimization of index data on hard disc

Implemented optimization of index data stored on the hard disc. Index size decreased by 3 times.

**Public API Changes**  
None.

#### Remove LoadSynonyms(string fileName) obsolete method

Removed obsolete method Index.LoadSynonyms(string fileName).

**Public API Changes**  
Methods **LoadSynonyms(string fileName)** has been removed from **GroupDocs.Search.Index** class.

This example shows how to load synonyms from file:

**C#**

```csharp
string indexFolder = @"c:\MyIndex";
string synonymsFileName = @"c:\MySynonyms.txt";

Index index = new Index(indexFolder);
// Import synonyms from file. Existing synonyms are staying.
index.Dictionaries.SynonymDictionary.Import(synonymsFileName); 

```

#### Remove SearchParameters.UseFuzzySearch obsolete parameter

Removed obsolete property SearchParameters.UseFuzzySearch.

**Public API Changes**  
Property **bool UseFuzzySearch** has been removed from **GroupDocs.Search.SearchParameters** class.

This example shows how to use fuzzy search:

**C#**

```csharp
string indexFolder = "MyIndex";
string documentsFolder = "c:\MyDocuments";
string query = "some search query";

Index index = new Index(indexFolder);
index.AddToIndex(documentsFolder);

SearchParameters parameters = new SearchParameters();
parameters.FuzzySearch.Enabled = true; // Turning on Fuzzy search feature

SearchResults moreSimilarResults = index.Search(query, parameters);

```

#### Implement support of OneNote documents

Implemented support for Microsoft OneNote documents (\*.one).

**Public API Changes**  
None.

#### Implement support of Electronic Publications (epub)

Implemented support of Microsoft Electronic Publications (\*.epub).

**Public API Changes**  
None.

#### Implement support of new Presentations formats (pptm and ppsm)

Implemented support for new Microsoft PowerPoint documents (\*.pptm and \*.ppsm).

**Public API Changes**  
None.

#### Implement support of OpenDocument presentation format (odp)

Implemented support for OpenDocument presentation documents (\*.odp).

**Public API Changes**  
None.
