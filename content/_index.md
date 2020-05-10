---
id: home
title: GroupDocs Documentation
weight: 1
bookCollapseSection: false
showMenu: false
---
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

# GroupDocs Documentation

{{< hint info >}}
Find documentation for end users and IT professionals, developer guides, API references, quickstarts and code examples.
{{< /hint >}}

<div class="list-group">  
  <div class="d-flex flex-row">
    <a href="{{< relref "annotation-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-primary">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Annotation for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Powerful document annotator component that helps you to boost your applications with document annotation, commenting and collaboration features. </p>   
    </a>
     <a href="{{< relref "comparison-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-secondary">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Comparison for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Document comparison API that detects document text, styling and formating changes quickly and with a high accuracy.</p>   
    </a> 
  </div>
    
  <div class="d-flex flex-row">
     <a href="{{< relref "conversion-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-success">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Conversion for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Huge conversion API that supports over 7400 document conversion pairs. With innumerous conversion options you will get hight quality result fast.</p>   
    </a>
     <a href="{{< relref "editor-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start  bg-danger">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Editor for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Modern document editor API that allows you to edit various documents inside your applications without additional software installed.</p>   
    </a>
  </div>  
  <div class="d-flex flex-row">
       <a href="{{< relref "merger-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-warning">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Merger for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Powerful API to merge PDF, Word, Excel, PowerPoint documents and many other formats, move, reorder or remove document pages in different ways and with flexible options.</p>   
    </a>
    <a href="{{< relref "signature-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-info">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Signature for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Outstanding electronic signature API that allows you to esign your documents with digital certificate, image, text and hand-written signatures, QR-Code or BarCodes and many more!</p>   
    </a>
  </div> 
  <div class="d-flex flex-row">
   <a href="{{< relref "viewer-net" >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-dark">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">GroupDocs.Viewer for .NET</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">Excellent file viewer component that empowers your C#, ASP.NET ?and other .NET-based applications with document viewing features across more than 100+ supported file formats! </p>   
    </a> 
    <a href="{{< relref "." >}}" class="list-group-item list-group-item-action flex-column align-items-start bg-success">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1 text-white">Coming Soon ...</h4>
        <small></small>
      </div>
      <p class="mb-1 text-white">There are more APIs to come! Check for updates and follow our socials</p>   
    </a> 
  </div>  
</div>

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

