---
id: groupdocs-search-for-net-17-12-release-notes
url: search/net/groupdocs-search-for-net-17-12-release-notes
title: GroupDocs.Search for .NET 17.12 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Search for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Search for .NET 17.12.{{< /alert >}}

## Major Features

There are 4 enhancements in this regular monthly release. The most notable are:

*   Improved representation of results of exact phrase search
*   Improved calculation of relevance of search results
*   Improved search query syntax
*   Implementation of highlighted results for exact phrase search in text

## All Changes

<table class="confluenceTable"><tbody><tr><td class="confluenceTd">Key</td><td class="confluenceTd">Summary</td><td class="confluenceTd">Category</td></tr><tr><td class="confluenceTd">SEARCHNET-1294</td><td class="confluenceTd">Improve representation of results of exact phrase search</td><td class="confluenceTd">Enhancement</td></tr><tr><td class="confluenceTd">SEARCHNET-1295</td><td class="confluenceTd">Improve calculation of relevance of search results</td><td class="confluenceTd">Enhancement</td></tr><tr><td class="confluenceTd">SEARCHNET-1296</td><td class="confluenceTd">Improve search query syntax</td><td class="confluenceTd">Enhancement</td></tr><tr><td class="confluenceTd">SEARCHNET-1275</td><td class="confluenceTd">Implement highlighting of results of exact phrase search in text</td><td class="confluenceTd">Enhancement&nbsp;</td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Search for .NET 17.12. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Search which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Improved representation of results of exact phrase search

##### Description

This enhancement is implemented to store the results of exact phrase search in a more structured and convenient form.

##### Public API changes

Property **System.String\[\]\[\] TermSequences** has been added to **GroupDocs.Search.DocumentResultInfo** class.  
Property **System.String\[\]\[\] TermSequences** has been added to **GroupDocs.Search.DetailedResultInfo** class.

##### Usecases

This example shows how to perform the exact phrase search and get results:

```csharp
string indexFolder = @"c:\MyIndex";
string documentsFolder = @"c:\MyDocuments";

// Creating index
Index index = new Index(indexFolder);

// Indexing
index.AddToIndex(documentsFolder);

// Creating search parameters object
SearchParameters searchParameters = new SearchParameters();
// Enabling fuzzy search
searchParameters.FuzzySearch.Enabled = true;
// Setting maximum mistake count to 1
searchParameters.FuzzySearch.FuzzyAlgorithm = new TableDiscreteFunction(1);

// Searching for phrase 'cumulative distribution function' or phrase 'cumulative density function'
SearchResults searchResults = index.Search("\"cumulative distribution function\" OR \"cumulative density function\"", searchParameters);

// Displaying results
foreach (DocumentResultInfo document in searchResults)
{
    Console.WriteLine(document.FileName);
    foreach (DetailedResultInfo field in document.DetailedResults)
    {
        Console.WriteLine(field.FieldName);
        foreach (string[] phrase in field.TermSequences)
        {
            Console.Write("\t");
            foreach (string word in phrase)
            {
                Console.Write(word + " ");
            }
            Console.WriteLine();
        }
    }
}

// The results may contain the following phrases:
// cumulative distribution function
// cumulative distribution functions
// cumulative density function
// cumulative density functions
```

### Improved calculation of relevance of search results

##### Description

In this enhancement, the way of calculating the relevance of search results has been changed. Now the following formula is used to calculate the relevance of each found document:  
**R = O / T**,  
where **R** is relevance; **O** is occurrence count in the document; **T** is total word count in document.

##### Public API changes

None.

##### Usecases

This example shows how to perform search and sort results by relevance:

```csharp
 // Implementing comparer
public class Comparer : IComparer<DocumentResultInfo>
{
    public int Compare(DocumentResultInfo x, DocumentResultInfo y)
    {
        // Compare y and x in reverse order
        return y.Relevance.CompareTo(x.Relevance);
    }
}

...

string indexFolder = @"c:\MyIndex";
string documentsFolder = @"c:\MyDocuments";

// Creating index
Index index = new Index(indexFolder);

// Indexing
index.AddToIndex(documentsFolder);

// Creating search parameters object
SearchParameters searchParameters = new SearchParameters();
// Enabling fuzzy search
searchParameters.FuzzySearch.Enabled = true;
// Setting maximum mistake count to 1
searchParameters.FuzzySearch.FuzzyAlgorithm = new TableDiscreteFunction(1);

// Searching for term 'database'
// Using fuzzy search allows to find the plural form of the term 'databases'
SearchResults searchResults = index.Search("database", searchParameters);

// Creating and filling array for sorting
DocumentResultInfo[] array = new DocumentResultInfo[searchResults.Count];
for (int i = 0; i < array.Length; i++)
{
    array[i] = searchResults[i];
}

// Sorting results in array by relevance in descending order
Array.Sort(array, new Comparer());
```

### Implementation of highlighted results for exact phrase search in text

##### Description

In this enhancement, generating of HTML-formatted text with highlighted found terms is implemented for the results of exact phrase search.

##### Public API changes

None.

##### Usecases

This example shows how to generate text with highlighted results of exact phrase search:

```csharp
 string indexFolder = @"c:\MyIndex";
string documentsFolder = @"c:\MyDocuments";

// Creating index
Index index = new Index(indexFolder);

// Indexing documents
index.AddToIndex(documentsFolder);

// Searching for phrase 'cumulative distribution function'
SearchResults results = index.Search("\"cumulative distribution function\"");

// Generating HTML-formatted text for the first document directly to the file 'HighlightedResults.html'
index.HighlightInText("HighlightedResults.html", results[0]);
```

### Improved search query syntax

In this enhancement, the syntax of the search query language has been redesigned to make it more understandable and conventional.

#### Search operations (since v.17.12)

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><strong>Operation</strong></td><td class="confluenceTd"><strong>Syntax</strong></td><td class="confluenceTd"><strong>Description</strong></td><td class="confluenceTd"><strong>Examples</strong></td></tr><tr><td class="confluenceTd">Parentheses</td><td class="confluenceTd">(&nbsp;<em>inner-query</em>&nbsp;)</td><td class="confluenceTd">Parentheses are used to specify order of operations.</td><td class="confluenceTd"><ul><li>term1 I (term2 &amp; term3)&nbsp;</li><li>("total expenses" | "total costs") &amp; (82000 ~~ 83000 | 92000 ~~ 93000)</li></ul></td></tr><tr><td class="confluenceTd">Field specifier</td><td class="confluenceTd"><em>field-name</em>&nbsp;:&nbsp;<em>inner-query</em></td><td class="confluenceTd">Field specifier is used to specify field name.</td><td class="confluenceTd"><ul><li>content : term&nbsp;</li><li>creationdate : (2010 ~~ 2013)&nbsp;</li><li>filename&nbsp;: report&nbsp;&amp; creationdate: 2009</li></ul></td></tr><tr><td class="confluenceTd">Exact phrase query specifier</td><td class="confluenceTd">"&nbsp;<em>exact-phrase-query</em>&nbsp;"</td><td class="confluenceTd">Exact phrase query specifier is used to specify phrase for phrase search.</td><td class="confluenceTd"><ul><li>"term1 term2 term3"&nbsp;</li><li>"computational complexity theory"&nbsp;</li><li>"formal language" AND harrison</li></ul></td></tr><tr><td class="confluenceTd">And operation</td><td class="confluenceTd"><em>left-query</em>&nbsp;&amp;&nbsp;<em>right-query</em>&nbsp;<br class="atl-forced-newline"><em>left-query</em>&nbsp;AND&nbsp;<em>right-query</em></td><td class="confluenceTd">And operation is used to find documents which contain both left query and right query.</td><td class="confluenceTd"><ul><li>term1 &amp; term2&nbsp;</li><li>term1 AND term2&nbsp;</li><li>computational &amp; complexity</li></ul></td></tr><tr><td class="confluenceTd">Or operation</td><td class="confluenceTd"><em>left-query</em>&nbsp;|&nbsp;<em>right-query</em>&nbsp;<br class="atl-forced-newline"><em>left-query</em>&nbsp;||&nbsp;<em>right-query</em>&nbsp;<br class="atl-forced-newline"><em>left-query</em>&nbsp;OR&nbsp;<em>right-query</em></td><td class="confluenceTd">Or operation is used to find documents which contain left query, or right query, or both.</td><td class="confluenceTd"><ul><li>term1 | term2&nbsp;</li><li>term1 || term2&nbsp;</li><li>term1 OR term2</li><li>"cumulative distribution function" OR "cumulative density function"</li></ul></td></tr><tr><td class="confluenceTd">Not operation</td><td class="confluenceTd">!&nbsp;<em>inner-query</em>&nbsp;<br class="atl-forced-newline">NOT&nbsp;<em>inner-query</em></td><td class="confluenceTd">Not operation is used to find all documents which do not contain inner query.</td><td class="confluenceTd"><ul><li>! term&nbsp;</li><li>NOT term&nbsp;</li><li>author : (Cardano AND NOT Gerolamo)</li></ul></td></tr><tr><td class="confluenceTd">Macro name specifier</td><td class="confluenceTd">@<em>macro-name</em></td><td class="confluenceTd">Macro name specifier is used to specify name of macro within search query that will be replaces with the body of the macro before parsing the query.</td><td class="confluenceTd"><ul><li>@query_macro&nbsp;</li><li>@macro1 &amp; @macro2</li></ul></td></tr><tr><td class="confluenceTd">Regular expression specifier</td><td class="confluenceTd">^<em>regular-expression</em></td><td class="confluenceTd">Regular expression specifier is used to specify query that is regular expression.</td><td class="confluenceTd"><ul><li>^^[0-9]{1,5}$</li></ul></td></tr><tr><td class="confluenceTd">Numeric range specifier</td><td class="confluenceTd"><em>start-number</em>&nbsp;~~&nbsp;<em>end-number</em></td><td class="confluenceTd">Numeric range specifier is used to specify range for numeric range search.</td><td class="confluenceTd"><ul><li>13 ~~ 42&nbsp;</li><li>10000000000 ~~ 100000000000</li></ul></td></tr><tr><td class="confluenceTd">Date range specifier</td><td class="confluenceTd">daterange(&nbsp;<em>start-date</em>&nbsp;~~&nbsp;<em>end-date&nbsp;</em>)</td><td class="confluenceTd">Date range specifier is used to specify range for date range search.</td><td class="confluenceTd"><ul><li>daterange(09.28.2017~~11.11.2017)</li></ul></td></tr></tbody></table>

#### Search flow (since v.17.12)

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><strong>Operation</strong></td><td class="confluenceTd"><strong>Search flow</strong></td></tr><tr><td class="confluenceTd">Simple term search (case insensitive)</td><td class="confluenceTd">Keyboard layout correction&nbsp;<br class="atl-forced-newline">Spelling correction&nbsp;<br class="atl-forced-newline">Homophone search&nbsp;<br class="atl-forced-newline">Synonym search&nbsp;<br class="atl-forced-newline">Fuzzy search&nbsp;<br class="atl-forced-newline">Retrieving results</td></tr><tr><td class="confluenceTd">Simple term search (case sensitive)</td><td class="confluenceTd">Retrieving results</td></tr><tr><td class="confluenceTd">Date range search</td><td class="confluenceTd">Retrieving results</td></tr><tr><td class="confluenceTd">Numeric range search</td><td class="confluenceTd">Retrieving results</td></tr><tr><td class="confluenceTd">Exact phrase search</td><td class="confluenceTd">Retrieving results for each term of the phrase&nbsp;<br class="atl-forced-newline">Joining sets of results</td></tr><tr><td class="confluenceTd">Regex search</td><td class="confluenceTd">Regex search&nbsp;<br class="atl-forced-newline">Fuzzy search&nbsp;<br class="atl-forced-newline">Retrieving results</td></tr><tr><td class="confluenceTd">And, Or</td><td class="confluenceTd">Retrieving results for each operand<br class="atl-forced-newline">Combining sets of results</td></tr><tr><td class="confluenceTd">Not</td><td class="confluenceTd">Retrieving results&nbsp;for operand<br class="atl-forced-newline">Inverting set of results</td></tr></tbody></table>

#### Query language specification (since v.17.12)

*query*:

*   *regex-query*
*   *non-regex-query*

*regex-query*:

*   ^*pattern*

*non-regex-query*:

*   *unary-query*
*   *binary-query*

*unary-query*:

*   *word*
*   *exact-query*
*   *field-name-query*
*   *numeric-range-query*
*   *date-range-query*
*   *parenthesized-query*
*   *not-query*

*exact-query*:

*   " *word-list* "

*word-list*:

*   *word word*
*   *word-list word*

*field-name-query*:

*   *field-name*: *unary-query*

*numeric-range-query*:

*   *number* ~~ *number*

*date-range-query*:

*   daterange( *date* ~~ *date* )

*parenthesized-query*:

*   ( *non-regex-query* )

*not-query*:

*   ! *unary-query*
*   NOT *unary-query*

*binary-query*:

*   *and-query*
*   *or-query*

*and-query*:

*   *non-regex-query* & *unary-query*
*   *non-regex-query* AND *unary-query*

*or-query*:

*   *non-regex-query* | *unary-query*
*   *non-regex-query* || *unary-query*
*   *non-regex-query* OR *unary-query*
