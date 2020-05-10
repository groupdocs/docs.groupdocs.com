---
id: verify-text-signatures-in-the-document
url: signature-net/verify-text-signatures-in-the-document
title: Verify Text signatures in the document
weight: 4
description: This topic explains how to verify Text electronic signatures with GroupDocs.Signature API.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Signature for .NET
hideChildren: False
---

# Verify Text signatures in the document



  

# Verify Text signatures in the document

[**GroupDocs.Signature**](https://products.groupdocs.com/signature/net) provides [TextVerifyOptions](https://apireference.groupdocs.com/net/signature/groupdocs.signature.options/textverifyoptions) class to specify different options for verification of Text signatures.

Here are the steps to verify Text signature within the document with GroupDocs.Signature:

*   Create new instance of [Signature](https://apireference.groupdocs.com/net/signature/groupdocs.signature/signature) class and pass source document path as a constructor parameter.
    
*   Instantiate the [TextVerifyOptions](https://apireference.groupdocs.com/net/signature/groupdocs.signature.options/textverifyoptions) object according to your requirements and specify verification options  
    
*   Call [Verify](https://apireference.groupdocs.com/net/signature/groupdocs.signature/signature/methods/verify) method of [Signature](https://apireference.groupdocs.com/net/signature/groupdocs.signature/signature)class instance and pass [TextVerifyOptions](https://apireference.groupdocs.com/net/signature/groupdocs.signature.options/textverifyoptions) to it.   
      
    

This example shows how to verify Text signature in the document.

using (Signature signature = new Signature("sample.pdf"))
{
        TextVerifyOptions options = new TextVerifyOptions()
        {
            AllPages = true, // this value is set by default
            SignatureImplementation = TextSignatureImplementation.Stamp,
            Text = "John",
            MatchType = TextMatchType.Contains
        };
        // verify document signatures
        VerificationResult result = signature.Verify(options);
        if(result.IsValid)
        {
            Console.WriteLine("\\nDocument was verified successfully!");
        }
        else
        {
            Console.WriteLine("\\nDocument failed verification process.");
        }
}

## More resources

### Advanced Usage Topics

To learn more about document eSign features, please refer to the [advanced usage section](Advanced%2Busage.html).

### GitHub Examples 

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Signature for .NET examples, plugins, and showcase](https://github.com/groupdocs-signature/GroupDocs.Signature-for-.NET)
    
*   [GroupDocs.Signature for Java examples, plugins, and showcase](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Java)
    
*   [Document Signature for .NET MVC UI Example](https://github.com/groupdocs-signature/GroupDocs.Signature-for-.NET-MVC) 
    
*   [Document Signature for .NET App WebForms UI Example](https://github.com/groupdocs-signature/GroupDocs.Signature-for-.NET-WebForms)
    
*   [Document Signature for Java App Dropwizard UI Example](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Java-Dropwizard)
    
*   [Document Signature for Java Spring UI Example](https://github.com/groupdocs-signature/GroupDocs.Signature-for-Java-Spring)
    

### Free Online App 

Along with full-featured .NET library we provide simple, but powerful free Apps.

You are welcome to eSign PDF, Word, Excel, PowerPoint documents with free to use online **[GroupDocs Signature App](https://products.groupdocs.app/signature)**.
