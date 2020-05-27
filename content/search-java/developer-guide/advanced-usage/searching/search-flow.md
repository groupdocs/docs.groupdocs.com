---
id: search-flow
url: search/java/search-flow
title: Search flow
weight: 19
description: ""
keywords: 
productName: GroupDocs.Search for Java
hideChildren: False
---
The table below shows the internal stages of each search operation. See also [Query language specification](Query%2Blanguage%2Bspecification.html), [Search operation table](Search%2Boperation%2Btable.html).

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Operation</strong></p></td><td class="confluenceTd"><p><strong>Search flow</strong></p></td></tr><tr><td class="confluenceTd"><p>Simple term search (case insensitive)</p></td><td class="confluenceTd"><p>Keyboard layout correction<br class="atl-forced-newline">Spelling correction<br class="atl-forced-newline">Homophone search<br class="atl-forced-newline">Synonym search<br class="atl-forced-newline">Word forms search (since v.18.7)<br class="atl-forced-newline">Fuzzy search<br class="atl-forced-newline">Retrieving results</p></td></tr><tr><td class="confluenceTd"><p>Simple term search (case sensitive)</p></td><td class="confluenceTd"><p>Retrieving results</p></td></tr><tr><td colspan="1" class="confluenceTd">Wildcard search (since v.18.12)</td><td colspan="1" class="confluenceTd"><p>Wildcard search<br>Retrieving results</p></td></tr><tr><td class="confluenceTd"><p>Date range search</p></td><td class="confluenceTd"><p>Retrieving results</p></td></tr><tr><td class="confluenceTd"><p>Numeric range search</p></td><td class="confluenceTd"><p>Retrieving results</p></td></tr><tr><td class="confluenceTd"><p>Phrase search</p></td><td class="confluenceTd"><p>Retrieving results for each term of a phrase<br class="atl-forced-newline">Joining sets of results</p></td></tr><tr><td class="confluenceTd"><p>Regex search</p></td><td class="confluenceTd"><p>Regex search<br class="atl-forced-newline">Fuzzy search<br class="atl-forced-newline">Retrieving results</p></td></tr><tr><td class="confluenceTd"><p>And, Or</p></td><td class="confluenceTd"><p>Retrieving results for each operand<br class="atl-forced-newline">Combining sets of results</p></td></tr><tr><td class="confluenceTd"><p>Not</p></td><td class="confluenceTd"><p>Retrieving results&nbsp;for operand<br class="atl-forced-newline">Inverting set of results</p></td></tr></tbody></table>

## More resources

### GitHub examples

You may easily run the code from documentation articles and see the features in action in our GitHub examples:

*   [GroupDocs.Search for .NET examples](https://github.com/groupdocs-search/GroupDocs.Search-for-.NET)
    
*   [GroupDocs.Search for Java examples](https://github.com/groupdocs-search/GroupDocs.Search-for-Java)
    

### Free online document search App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to search over your PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and more with our free online [Free Online Document Search App](https://products.groupdocs.app/search).
