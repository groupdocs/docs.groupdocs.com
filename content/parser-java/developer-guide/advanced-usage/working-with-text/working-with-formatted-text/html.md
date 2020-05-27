---
id: html
url: parser/java/html
title: HTML
weight: 3
description: ""
keywords: 
productName: GroupDocs.Parser for Java
hideChildren: False
---
The following example shows how to extract HTML formatted text:

```csharp
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleDocx)) {
    // Extract a formatted text into the reader
    try (TextReader reader = parser.getFormattedText(new FormattedTextOptions(FormattedTextMode.Html))) {
        // Print a formatted text from the document
        // If formatted text extraction isn't supported, a reader is null
        System.out.println(reader == null ? "Formatted text extraction isn't suppported" : reader.readToEnd());
    }
}
```

The following HTML tags are supported by the API:

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p>&lt;p&gt;</p></td><td class="confluenceTd"><p>Paragraph is surrounded by &lt;p&gt; tag</p></td></tr><tr><td class="confluenceTd"><p>&lt;a&gt;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>&lt;b&gt;</p></td><td class="confluenceTd"><p>Text with Bold font is surrounded by &lt;b&gt; tag</p></td></tr><tr><td class="confluenceTd"><p>&lt;i&gt;</p></td><td class="confluenceTd"><p>Text with Italic font is surrounded by &lt;i&gt; tag</p></td></tr><tr><td class="confluenceTd"><p>&lt;h1&gt; - &lt;h6&gt;</p></td><td class="confluenceTd"><p>If the heading has 'Heading X' style, it's surrounded by &lt;hx&gt; tag</p></td></tr><tr><td class="confluenceTd"><p>&lt;ol&gt;/&lt;ul&gt;</p></td><td class="confluenceTd"><p>Numbering and bullets lists</p></td></tr><tr><td class="confluenceTd"><p>&lt;table&gt;</p></td><td class="confluenceTd"><p>Tables</p></td></tr></tbody></table>

The following Microsoft Word document is used as input document:

![](https://wiki.lisbon.dynabic.com/download/attachments/30050883/lorem_docx.png?version=1&modificationDate=1572111408000&api=v2)

The following HTML document is extracted using the example above:

![](https://wiki.lisbon.dynabic.com/download/attachments/30050883/lorem_html.png?version=1&modificationDate=1572111402000&api=v2)

## More resources

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Parser for .NET examples](https://github.com/groupdocs-parser/GroupDocs.Parser-for-.NET)
    
*   [GroupDocs.Parser for Java examples](https://github.com/groupdocs-parser/GroupDocs.Parser-for-Java)
    

### Free online document parser App

Along with full featured Java library we provide simple, but powerful free Apps.

You are welcome to extract data from PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, Emails and more with our free online [Free Online Document Parser App](https://products.groupdocs.app/parser).
