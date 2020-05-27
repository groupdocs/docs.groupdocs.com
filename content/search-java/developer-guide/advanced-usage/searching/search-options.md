---
id: search-options
url: search/java/search-options
title: Search options
weight: 22
description: ""
keywords: 
productName: GroupDocs.Search for Java
hideChildren: False
---
This page contains a description of all search options that can be specified in an instance of the [SearchOptions](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions) class.

## setCancellation method

The [setCancellation](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setCancellation(com.groupdocs.search.common.Cancellation)) method allows you to specify the object to cancel the search operation. The search can be canceled without delay by calling the [Cancel](https://apireference.groupdocs.com/search/java/com.groupdocs.search.common/Cancellation#cancel()) method or by calling the [CancelAfter](https://apireference.groupdocs.com/search/java/com.groupdocs.search.common/Cancellation#cancelAfter(int)) method with the delay in milliseconds as an argument.

## getDateFormats method

The [getDateFormats](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#getDateFormats()) method returns a collection of date formats that allows you to specify formats for the date range search feature. For details, see the [Date range search](Date%2Brange%2Bsearch.html) page.

## getFuzzySearch method

The [getFuzzySearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#getFuzzySearch()) method returns a fuzzy search options object that allows you to enable fuzzy search and set its options. By default, the fuzzy search feature is disabled. For details, see the [Fuzzy search](Fuzzy%2Bsearch.html) page.

## setChunkSearch method

The [setChunkSearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setChunkSearch(boolean)) method allows you to enable search by chunks. By default, the search by chunks feature is disabled. For details, see the [Search by chunks](Search%2Bby%2Bchunks.html) page.

## getKeyboardLayoutCorrector method

The [getKeyboardLayoutCorrector](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#getKeyboardLayoutCorrector()) method returns a keyboard layout corrector options object, which allows you to enable keyboard layout correction in search queries. By default, the keyboard layout correction feature is disabled. See the [Keyboard layout correction](Keyboard%2Blayout%2Bcorrection.html) page for details.

## setMaxOccurrenceCountPerTerm method

The [setMaxOccurrenceCountPerTerm](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setMaxOccurrenceCountPerTerm(int)) method allows you to specify the maximum number of occurrences of each word found that will be returned as a search result. The default value is 100000.

## setMaxTotalOccurrenceCount method

The [setMaxTotalOccurrenceCount](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setMaxTotalOccurrenceCount(int)) method allows you to specify the maximum number of occurrences in total for all found words, which will be returned as a search result. The default value is 500000.

## setSearchDocumentFilter method

The [setSearchDocumentFilter](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setSearchDocumentFilter(com.groupdocs.search.options.ISearchDocumentFilter)) method allows you to specify the filter of documents returned as a search result. By default, all documents found will be returned as a search result. For details, see the [Document filtering in search result](Document%2Bfiltering%2Bin%2Bsearch%2Bresult.html) page.

## getSpellingCorrector method

The [getSpellingCorrector](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#getSpellingCorrector()) method returns the spelling corrector options object, which allows you to enable spelling correction in search queries and specify spelling correction options. By default, spelling correction is disabled. See the [Spell checking](Spell%2Bchecking.html) page for details.

## setUseCaseSensitiveSearch method

The [setUseCaseSensitiveSearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setUseCaseSensitiveSearch(boolean)) method allows you to perform case-sensitive search. Please note that case-sensitive search is not compatible with other types of searches. By default, case-insensitive search is performed. For details, see the [Case sensitive search](Case%2Bsensitive%2Bsearch.html) page.

## setUseHomophoneSearch method

The [setUseHomophoneSearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setUseHomophoneSearch(boolean)) method allows you to enable homophone search feature. By default, the homophone search feature is disabled. For details, see the [Homophone search](Homophone%2Bsearch.html) page.

## setUseSynonymSearch method

The [setUseSynonymSearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setUseSynonymSearch(boolean)) method allows you to enable synonym search feature. By default, the synonym search feature is disabled. For details, see the [Synonym search](Synonym%2Bsearch.html) page.

## setUseWordFormsSearch method

The [setUseWordFormsSearch](https://apireference.groupdocs.com/search/java/com.groupdocs.search.options/SearchOptions#setUseWordFormsSearch(boolean)) method allows you to enable the word forms search feature. By default, the word forms search feature is disabled. For details, see the [Search for different word forms](Search%2Bfor%2Bdifferent%2Bword%2Bforms.html) page.

## More resources

### GitHub examples

You may easily run the code from documentation articles and see the features in action in our GitHub examples:

*   [GroupDocs.Search for .NET examples](https://github.com/groupdocs-search/GroupDocs.Search-for-.NET)
    
*   [GroupDocs.Search for Java examples](https://github.com/groupdocs-search/GroupDocs.Search-for-Java)
    

### Free online document search App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to search over your PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and more with our free online [Free Online Document Search App](https://products.groupdocs.app/search).
