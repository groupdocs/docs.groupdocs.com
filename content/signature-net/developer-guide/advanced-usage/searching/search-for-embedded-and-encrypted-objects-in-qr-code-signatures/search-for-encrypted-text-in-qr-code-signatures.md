---
id: search-for-encrypted-text-in-qr-code-signatures
url: signature-net/search-for-encrypted-text-in-qr-code-signatures
title: Search for encrypted text in QR-code signatures
weight: 4
description:  This article explains how to search for encrypted text in QR-code electronic signatures in the document metadata. This topic contains example of standard encryption usage and searching for encrypted text in the QR-code electronic signature with further decryption by GroupDocs.Signature API.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Signature for .NET
hideChildren: False
---

# Search for encrypted text in QR-code signatures

[**GroupDocs.Signature**](https://products.groupdocs.com/signature/net) provides ability to search over secure QR-code signature with standard or custom encryption. Standard encryption is implemented over class **SymmetricEncryption** class. Creation of this object expects 3 arguments like encryption algorithm enumeration **SymmetricAlgorithmType **with one of following values (DES, TripleDES, RC2, Rijndael), string value **key** and string value **salt**.

Here are the steps to search for secure QR-code text with standard encryption with GroupDocs.Signature:

*   Create new instance of **Signature** class and pass source document path or stream as a constructor parameter.
    
*   Compose object of **SymmetricEncryption** class with same parameters as secured QR-code was signed with.  
    
*   Create objects of **QrCodeSearchOptions** class and setup property **QrCodeSearchOptions**.**DataEncryption** with object of **SymmetricEncryption**   
    
*   Call **Search** method of **Signature** class instance and pass **QrCodeSearchOptions** to it.
    

This example shows how to search for secure QR-code signature text.

using (Signature signature = new Signature("QRCodeEncryptedText.pdf"))
{
    // setup key and pasphrase
    string key = "1234567890";
    string salt = "1234567890";
    // create data encryption
    IDataEncryption encryption = new SymmetricEncryption(SymmetricAlgorithmType.Rijndael, key, salt);
    QrCodeSearchOptions options = new QrCodeSearchOptions()
    {
        // specify special pages to search on 
        AllPages = true,
        // specify special QRCode type to search
        EncodeType = QrCodeTypes.QR,
        //
        DataEncryption = encryption
    };
    // search for signatures in document
    List<QrCodeSignature> signatures = signature.Search<QrCodeSignature>(options);
    Console.WriteLine("\\nSource document contains following signatures.");
    foreach (var qrCodeSignature in signatures)
    {
        Console.WriteLine("QRCode signature found at page {0} with type {1} and text '{2}'", qrCodeSignature.PageNumber,
            qrCodeSignature.EncodeType.TypeName, qrCodeSignature.Text);
    }
}

## More resources

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