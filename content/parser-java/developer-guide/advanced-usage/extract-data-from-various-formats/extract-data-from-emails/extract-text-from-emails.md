---
id: extract-text-from-emails
url: parser/java/extract-text-from-emails
title: Extract text from Emails
weight: 1
description: ""
keywords: 
productName: GroupDocs.Parser for Java
hideChildren: False
---
To extract a text from emails `**[getText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getText())**()` method is used. This method allows to extract a text from the entire document. Pagination and raw mode is not supported for emails.

Here are the steps to extract a text from an email:

*   Instantiate `[Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser)` object for the initial email;
*   Call `**[getText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getText())**()` method and obtain `[TextReader](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader "class in com.groupdocs.parser.data")` object;
*   Read a text from *reader*.

{{< alert style="warning" >}}getText() method returns null value if text extraction isn't supported for the document. For example, text extraction isn't supported for Zip archive. Therefore, for Zip archive getText() method returns null. For an empty email getText() method returns an empty TextReader object (readToEnd() method returns an empty string).{{< /alert >}}

The following example demonstrates how to extract a text from the email:

```csharp
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleMsg)) {
    // Extract a text into the reader
    try (TextReader reader = parser.getText()) {
        // Print a text from the email
        System.out.println(reader.readToEnd());
    }
}

```

GroupDocs.Parser also allows to extract a text from emails as HTML, Markdown and formatted plain text. For more details, see [Extract Formatted Text](Extract%2Btext%2Bfrom%2BEmails.html).

Here are the steps to extract a text from an email as HTML:

*   Instantiate `[Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser)` object for the initial email;
*   Call `**[getFormattedText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getFormattedText(com.groupdocs.parser.options.FormattedTextOptions))**([FormattedTextOptions](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.options/FormattedTextOptions "class in com.groupdocs.parser.options") options)` method and obtain `[TextReader](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader "class in com.groupdocs.parser.data")` object;
*   Read a text from *reader*.

The following example shows how to extract a text from an email as HTML:

```csharp
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleMsg)) {
    // Extract a formatted text into the reader
    try (TextReader reader = parser.getFormattedText(new FormattedTextOptions(FormattedTextMode.Html))) {
        // Print a formatted text from the email
        System.out.println(reader.readToEnd());
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