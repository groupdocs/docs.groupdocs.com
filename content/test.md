---
id: test
url: test
title: Test Markdown
weight: 1
bookCollapseSection: false
showMenu: false
---
# Cheat Sheet

*Italic*
**Bold**
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
[Link](http://www.groupdocs.com)
![Image](https://www.nuget.org/profiles/groupdocs/avatar?imageSize=128)

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

* List item 1
* List item 2
* List item 3
 
1. One
2. Two
3. Three

Horizontal Rule

---
`Inline code` with backticks

code block for CSharp 
``` csharp
using (Viewer viewer = new Viewer("sample.pdf"))
{
    ViewInfoOptions viewInfoOptions = ViewInfoOptions.ForHtmlView();
    ViewInfo viewInfo = viewer.GetViewInfo(viewInfoOptions);
}
```

code block for Java 
``` java
ViewInfoOptions viewInfoOptions = ViewInfoOptions.forHtmlView();
         
Viewer viewer = new Viewer("sample.pdf");
ViewInfo info = viewer.getViewInfo(viewInfoOptions);
viewer.close();   
```


  
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3  

