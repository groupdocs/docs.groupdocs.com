---
id: redaction-basics
url: redaction/net/redaction-basics
title: Redaction basics
weight: 3
description: ""
keywords: 
productName: GroupDocs.Redaction for .NET
hideChildren: False
---
GroupDocs.Redaction supports an effective set of document redaction features. It allows to apply redactions for [text](Redaction%2Bbasics.html), [metadata](Redaction%2Bbasics.html), [annotations](Redaction%2Bbasics.html), [images](Redaction%2Bbasics.html).

Wide range document formats is supported: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others. See full list of supported formats at [supported document formats](Redaction%2Bbasics.html) article

## Redaction types

GroupDocs.Redaction comes with the following redaction types:

| Type | Description | Classes |
| --- | --- | --- |
| [Text](Redaction%2Bbasics.html) | Replaces or hides with color block a portion of text within document body | [ExactPhraseRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/exactphraseredaction), [RegexRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/regexredaction) |
| [Metadata](Redaction%2Bbasics.html) | Replace metadata values with empty ones or redacts metadata texts | [EraseMetadataRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/erasemetadataredaction), [MetadataSearchRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatasearchredaction) |
| [Annotations](Redaction%2Bbasics.html) | Deletes annotations from document or redacts its texts | [DeleteAnnotationRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/deleteannotationredaction), [AnnotationRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/annotationredaction) |
| [Images](Redaction%2Bbasics.html) | Replaces specific area of an image with a colored box | [ImageAreaRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/imagearearedaction) |

## Apply redaction

Applying redaction to a document is done through [Redactor.Apply](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactor/apply/methods/1) method. As a result, you receive [RedactorChangeLog](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactorchangelog) instance, containing a log entry for each redaction applied. The entry contains reference to [Redacton](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redaction) instance including its options, status of the operation (see below) and textual descriptions when applicable. If at least one redaction failed, you will see [Status == RedactionStatus.Failed](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactionstatus):

**C#**

```csharp
using (Redactor redactor = new Redactor("sample.docx"))
{
   RedactorChangeLog result = redactor.Apply(new RegexRedaction(LookupStrings.SSNRegexPattern, new ReplacementOptions("[ssn]")));
   if (result.Status != RedactionStatus.Failed)
   {
      redactor.Save();
   };
}
```

All possible statuses of the [RedactionStatus](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactionstatus) enumeration are listed in this table:

| Status | Description | Possible reasons |
| --- | --- | --- |
| *Applied* | Redaction was fully and successfully applied | All operations within redaction process were successfully applied |
| *PartiallyApplied* | Redaction was applied only to a part of its matches | 1) Trial limitations for replacements were exceeded2) At least one change was rejected by user |
| *Skipped* | Redaction was skipped (not applied) | 1) Trial limitations for redactions were exceeded2) Redaction cannot be applied to this type of document3) All replacements were rejected by user and no changes were made |
| *Failed* | Redaction failed with exception | An exception occurred in process of redaction |

For detailed information you have to iterate through redaction log entries in [RedactorChangeLog.RedactionLog](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactorchangelog/properties/redactionlog) and check for [ErrorMessage](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactionresult/properties/errormessage) property of any items with status other than *Applied*:

**C#**

```csharp
RedactorChangeLog summary = redactor.Apply( ... );
if (summary.Status != RedactionStatus.Applied)
{
	for (int i = 0; i < summary.RedactionLog.Count; i++)
	{
		RedactorLogEntry logEntry = summary.RedactionLog[i];
    	if (logEntry.Result.Status != RedactionStatus.Applied)
        {
			Console.WriteLine("{0} status is {1}, details: {2}", 
				logEntry.Redaction.GetType().Name, 
				logEntry.Result.Status, 
				logEntry.Result.ErrorMessage);
		}
	}
}
```

## Apply multiple redactions

You can apply as much redactions as you need in a single call to [Redactor.Apply](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactor/apply/methods/1) method, since its overload accepts an array of redactions and redaction policy. In this case, redactions will be applied in the same order as they appear in the array. As an alternative to specifying redaction sets in your code, you can create an XML file with redaction policy, as described [here](Redaction%2Bbasics.html).

**C#**

```csharp
using (Redactor redactor = new Redactor("sample.docx"))
{
   var redactionList = new Redaction[] 
   {
      new ExactPhraseRedaction(LookupStrings.ClientName, new ReplacementOptions("[client]")),
      new ExactPhraseRedaction(LookupStrings.ClientAddress, new ReplacementOptions(System.Drawing.Color.Red)),
      new RegexRedaction(LookupStrings.SSNRegexPattern, new ReplacementOptions("[ssn]")),
      new RegexRedaction(LookupStrings.BankCardRegexPattern, new ReplacementOptions(System.Drawing.Color.Blue)),
      // ... other redactions
      new DeleteAnnotationRedaction("(?im:(use|show|describe))"),
      new EraseMetadataRedaction(MetadataFilter.Author),
      new MetadataSearchRedaction(LookupStrings.CompanyName, "--company--") 
   }; 
   RedactorChangeLog result = redactor.Apply(redactionList);
   // false, if at least one redaction failed
   if (result.Status != RedactionStatus.Failed)
   {
      redactor.Save();
   };
}
```

## More resources

### Advanced usage topics

To learn more about document redaction features, please refer to the [advanced usage section](Redaction%2Bbasics.html).

### GitHub examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Redaction for .NET examples](https://github.com/groupdocs-redaction/GroupDocs.Redaction-for-.NET)
    
*   [GroupDocs.Redaction for Java examples](https://github.com/groupdocs-redaction/GroupDocs.Redaction-for-Java)
    

### Free online document parser App

Along with full featured .NET library we provide simple, but powerful free Apps.

You are welcome to perform redactions for various document formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, Emails and more with our free online [Free Online Document Redaction App](https://products.groupdocs.app/redaction).