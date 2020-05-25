---
id: how-to-run-examples
url: annotation/net/how-to-run-examples
title: How to Run Examples
weight: 6
description: ""
keywords: 
productName: GroupDocs.Annotation for .NET
hideChildren: False
---
{{< alert style="warning" >}}Before running an example make sure that GroupDocs.Annotation has been installed successfully.{{< /alert >}}

We offer multiple solutions on how you can run GroupDocs.Annotation examples, by building your own or using our back-end or front-end examples out-of-the-box.

Please choose one from the following list:


## Build project from scratch

*   Open Visual Studio and go to **File** -> **New **\->** Project**.
*   Select appropriate project type - Console App, ASP.NET Web Application etc.
*   Install **GroupDocs.Annotation for .NET **from Nuget or official GroupDocs website following this [guide]({{< ref "annotation-net/getting-started/development-environment-installation-and-configuration.md" >}}).
*   Code your first application with **GroupDocs.Annotation for .NET **like this
    
    ```csharp
     // Create list of annotations
    List<AnnotationBase> annotations = new List<AnnotationBase>()
    {
        new AreaAnnotation()
        {
            PageNumber = 0,
            Box = new Rectangle(100, 100, 100, 100),
            Message = "area"
        },
                    
        new EllipseAnnotation()
            {
                PageNumber = 0,
                Box = new Rectangle(200, 200, 80, 80),
                Message = "ellipse"
            }
    };
    
    // Create annotator
    using  (Annotator annotator = new Annotator("C:\output\input.pdf"))
    {
        // Add annotations
        annotator.Add(annotations);
        // Save result to "C:\output\result.pdf"
        annotator.Save("C:\output\result.pdf", new SaveOptions());
    }
    ```
    
*   Build and Run your project. 
*   Rendered document pages will appear inside "*C:\\output\\" *directory*.*

## Run back-end examples

The complete examples package of **GroupDocs.Annotation** is hosted on [GitHub](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET). You can either download the ZIP file from [here](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET/archive/master.zip) or clone the repository of GitHub using your favourite git client.  
In case you download the ZIP file, extract the folders on your local disk. The extracted files and folders will look like following image:

![](annotation-net/images/how-to-run-examples.png)

In extracted files and folders, you can find CSharp solution file. The project is created in **Microsoft Visual Studio 2019**. The **Resources **folder contains all the sample document and image files used in the examples.  
To run the examples, open the solution file in Visual Studio and build the project. To add missing references of **GroupDocs.Annotation**. All the functions are called from **RunExamples.cs**.   
Un-comment the function you want to run and comment the rest.

![](annotation-net/images/how-to-run-examples_1.png)

## Run MVC examples

You can run [GroupDocs.Annotation for .NET MVC Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC) following these steps:

*   Download [source code](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC/archive/master.zip) from GitHub or clone this repository
    
    <table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="bash plain">git clone <span class="nolink"><a href="https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC" class="external-link" rel="nofollow">https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC</a></span></code></div></div></td></tr></tbody></table>
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/annotation](http://localhost:8080/annotation) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC#configuration).

## Run WebForms examples

You can run [GroupDocs.Annotation for .NET Web.Forms Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms) following these steps:

*   Download [source code](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms/archive/master.zip) from GitHub or clone this repository
    
    <table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="bash plain">git clone <span class="nolink"><a href="https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms.git" class="external-link" rel="nofollow">https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms.git</a></span></code></div></div></td></tr></tbody></table>
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/annotation](http://localhost:8080/annotation) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms#configuration).

## Run from Docker

Use [Docker](https://www.docker.com/) image to try GroupDocs.Annotation for .NET features in an easy way. Here are the command to run GroupDocs.Annotation for .NET from docker image.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="bash functions">mkdir</code> <code class="bash plain">DocumentSamples</code></div><div class="line number2 index1 alt1"><code class="bash functions">mkdir</code> <code class="bash plain">Licenses</code></div><div class="line number3 index2 alt2"><code class="bash plain">docker run -p 8080:8080 --</code><code class="bash functions">env</code> <code class="bash plain">application.hostAddress=localhost -</code><code class="bash functions">v</code> <code class="bash plain">`</code><code class="bash functions">pwd</code><code class="bash plain">`</code><code class="bash plain">/DocumentSamples</code><code class="bash plain">:</code><code class="bash plain">/home/groupdocs/app/DocumentSamples</code> <code class="bash plain">-</code><code class="bash functions">v</code> <code class="bash plain">`</code><code class="bash functions">pwd</code><code class="bash plain">`</code><code class="bash plain">/Licenses</code><code class="bash plain">:</code><code class="bash plain">/home/groupdocs/app/Licenses</code> <code class="bash plain">groupdocs</code><code class="bash plain">/annotation</code></div><div class="line number4 index3 alt1"><code class="bash comments">## Open <a href="http://localhost:8080/annotation" class="external-link" rel="nofollow">http://localhost:8080/annotation</a> in your favorite browser.</code></div></div></td></tr></tbody></table>

## Contribute

If you like to add or improve an example, we encourage you to contribute to the project. All examples in this repository are open source and can be freely used in your own applications.  
To contribute, you can fork the repository, edit the code and create a pull request. We will review the changes and include it in the repository if found helpful.
