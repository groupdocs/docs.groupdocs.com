---
id: nesting-search-queries-in-object-form
url: search/net/nesting-search-queries-in-object-form
title: Nesting search queries in object form
weight: 11
description: ""
keywords: 
productName: GroupDocs.Search for .NET
hideChildren: False
---
The table below shows all combinations of nesting search queries in object form with an indication of their possibility (+) or impossibility (–).

<table class="confluenceTable"><colgroup><col><col><col><col></colgroup><tbody><tr><th rowspan="2" class="confluenceTh">Nested query type<br><br></th><th colspan="5" style="text-align: center;" class="confluenceTh">Parent query type</th></tr><tr><th class="confluenceTh">Field</th><th class="confluenceTh">PhraseSearch</th><th class="confluenceTh">Not</th><th class="confluenceTh">Or</th><th class="confluenceTh">And</th></tr><tr><th class="confluenceTh">Word</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">WordPattern</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">NumericRange</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">Regex</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">Field</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">DateRange</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">PhraseSearch</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">Not</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">Or</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">And</th><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">+</td></tr><tr><th class="confluenceTh">Wildcard</th><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">+</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">–</td><td style="text-align: center;" class="confluenceTd">–</td></tr></tbody></table>

## More resources

### GitHub examples

You may easily run the code from documentation articles and see the features in action in our GitHub examples:

*   [GroupDocs.Search for .NET examples](https://github.com/groupdocs-search/GroupDocs.Search-for-.NET)
    
*   [GroupDocs.Search for Java examples](https://github.com/groupdocs-search/GroupDocs.Search-for-Java)
    

### Free online document search App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to search over your PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and more with our free online [Free Online Document Search App](https://products.groupdocs.app/search).
