---
id: search-text-in-microsoft-office-excel-spreadsheets
url: parser/java/search-text-in-microsoft-office-excel-spreadsheets
title: Search text in Microsoft Office Excel spreadsheets
weight: 4
description: ""
keywords: 
productName: GroupDocs.Parser for Java
hideChildren: False
---
To search a keyword in Microsoft Office Excel spreadsheets `**[search](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#search(java.lang.String))**([String](http://docs.oracle.com/javase/7/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") keyword)` method is used. This method returns the collection of `[SearchResult](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/SearchResult "class in com.groupdocs.parser.data")` objects. For details, see [Search Text](Search%2Btext%2Bin%2BMicrosoft%2BOffice%2BExcel%2Bspreadsheets.html).

Here are the steps to search a keyword in Microsoft Office Excel spreadsheet:

*   Instantiate `[Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser)` object for the initial spreadsheet;
*   Call `**[search](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#search(java.lang.String))**([String](http://docs.oracle.com/javase/7/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") keyword)` method and obtain the collection of `[SearchResult](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/SearchResult "class in com.groupdocs.parser.data")` objects;
*   Iterate through the collection and get the position and text.

{{< alert style="warning" >}}search(String keyword) method returns null value if search isn't supported for the spreadsheet. For example, text extraction isn't supported for Zip archive. Therefore, for Zip archive search(String keyword) method returns null. For empty Microsoft Office Excel spreadsheet search(String keyword) method returns an empty collection.{{< /alert >}}

The following example shows how to find a keyword in Microsoft Office Excel spreadsheet:

```csharp
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleXlsx)) {
    // Search a keyword:
    Iterable<SearchResult> sr = parser.search("Age");
    // Iterate over search results
    for (SearchResult s : sr) {
        // Print an index and found text:
        System.out.println(String.format("At %d: %s", s.getPosition(), s.getText()));
    }
}

```

`**[search](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#search(java.lang.String,%20com.groupdocs.parser.options.SearchOptions))**([String](http://docs.oracle.com/javase/7/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") keyword, [SearchOptions](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.options/SearchOptions "class in com.groupdocs.parser.options") options)` is used for the advanced search in Microsoft Office Excel spreadsheets - like search with regular expressions, search by pages etc. `[SearchOptions](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.options/SearchOptions "class in com.groupdocs.parser.options")` parameter is used to customize a search.

Here are the steps to search with a regular expression in Microsoft Office Excel spreadsheet:

*   Instantiate `[Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser)` object for the initial spreadsheet;
*   Instantiate `[SearchOptions](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.options/SearchOptions "class in com.groupdocs.parser.options")` object with the parameters for the search;
*   Call `**[search](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#search(java.lang.String,%20com.groupdocs.parser.options.SearchOptions))**([String](http://docs.oracle.com/javase/7/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") keyword, [SearchOptions](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.options/SearchOptions "class in com.groupdocs.parser.options") options)` method and obtain the collection of `[SearchResult](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/SearchResult "class in com.groupdocs.parser.data")` objects;
*   Iterate through the collection and get the position and text.

The following example shows how to search with a regular expression in Microsoft Office Excel spreadsheet:

```csharp
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleXlsx)) {
    // Search with a regular expression with case matching
    Iterable<SearchResult> sr = parser.search("[0-9]+", new SearchOptions(true, false, true));
    // Iterate over search results
    for (SearchResult s : sr) {
        // Print an index and found text:
        System.out.println(String.format("At %d: %s", s.getPosition(), s.getText()));
    }
}
```

## More resources

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Parser for .NET examples](https://github.com/groupdocs-parser/GroupDocs.Parser-for-.NET)
    
*   [GroupDocs.Parser for Java examples](https://github.com/groupdocs-parser/GroupDocs.Parser-for-Java)
    

### Free online document parser App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to parse documents and extract data from PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, Emails and more with our free online [Free Online Document Parser App](https://products.groupdocs.app/parser).