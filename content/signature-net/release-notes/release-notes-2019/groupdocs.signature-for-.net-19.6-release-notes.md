---
id: groupdocs-signature-for-net-19-6-release-notes
url: signature/net/groupdocs-signature-for-net-19-6-release-notes
title: GroupDocs.Signature for .NET 19.6 Release Notes
weight: 6
description: ""
keywords: 
productName: GroupDocs.Signature for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Signature for .NET 19.6{{< /alert >}}

## Major Features

There are about 15 new features, improvements and bug fixes in this regular release. Most features are related to support new image file format for most service methods, implementation of serialization and encryption of custom data objects into Metadata signatures for Image documents, with ability to extract them back and specify custom serialization and data encryption. Also this release contains some internal security improvements.

*   Introduced ability to embed custom objects to Metadata Signature for Image Documents
*   Improved and fixed digital signatures search
*   Added page indicator for Signature object after search
*   Implemented support of new image data formats for all service methods
*   fixed some output file path issues for different save settings

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><colgroup><col><col><col></colgroup><colgroup><col><col><col></colgroup><colgroup><col><col><col></colgroup><colgroup><col><col><col></colgroup><tbody><tr><th class="confluenceTh"><div class="tablesorter-header-inner">Key</div></th><th class="confluenceTh"><div class="tablesorter-header-inner">Summary</div></th><th class="confluenceTh"><div class="tablesorter-header-inner">Issue Type</div></th></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2121</td><td colspan="1" class="confluenceTd">Digital Signature IsValid property is not being set correctly for Search routine</td><td colspan="1" style="text-align: center;" class="confluenceTd">Bug</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2089</td><td colspan="1" class="confluenceTd">Output file is missing if save options are not provided</td><td colspan="1" style="text-align: center;" class="confluenceTd">Bug</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-1982</td><td colspan="1" class="confluenceTd">Illegal character issue when trying to encrypt serialized data</td><td colspan="1" style="text-align: center;" class="confluenceTd">Bug</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-1874</td><td colspan="1" class="confluenceTd">Output file path is unexpected for different scenarios</td><td colspan="1" style="text-align: center;" class="confluenceTd">Bug</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-1846</td><td colspan="1" class="confluenceTd">Implement ability to embed custom object to Image Metadata Signature</td><td colspan="1" class="confluenceTd">New Feature</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2118</td><td colspan="1" class="confluenceTd">Implement ability to verify files with .cmx (CorelDraw) format as image documents</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2117</td><td colspan="1" class="confluenceTd">Implement ability to search .cmx (CorelDraw) files as image documents</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2116</td><td colspan="1" class="confluenceTd">Implement ability to sign .cmx (CorelDraw) files as image documents</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2095</td><td colspan="1" class="confluenceTd">Add Page Number to BaseSignature as result of Search method</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2093</td><td colspan="1" class="confluenceTd">Implement ability of saving Word documents with FlatOpc formats</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2091</td><td colspan="1" class="confluenceTd">Implement new method AddSignature for Image Metadata Options</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2084</td><td colspan="1" class="confluenceTd">Implement support of .cdr (CorelDraw) file format for verification process</td><td colspan="1" class="confluenceTd">Improvement</td></tr><tr><td class="confluenceTd">SIGNATURENET-2080</td><td class="confluenceTd">Implement ability to search .cdr (CorelDraw) files as image documents</td><td class="confluenceTd">Improvement</td></tr><tr><td colspan="1" class="confluenceTd">SIGNATURENET-2079</td><td colspan="1" class="confluenceTd">Implement ability to sign .cdr (CorelDraw) files as image documents</td><td colspan="1" class="confluenceTd">Improvement</td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Signature for .NET 19.6. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Signature which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Public abstract class **BaseSignature **was extended with new property **PageNumber** to specify documentpage number where signature object was found over Search method.
    
    **PageNumber property**
    
    ```csharp
    /// <summary>
    /// Specifies the page signature was found on  
    /// </summary>
    public int? PageNumber { get; }
    ```
    
    This field is supported for BarcodeSignature, QRCodeSignature and Pdf Digital Signature types. The rest signature types are not related to specific page but only to Document. This is true for Digital and Metadata Signatures.
    
    Following example demonstrates searching document for QRCode signature and display signatures with page numbers:
    
    **C#**
    
    ```csharp
    // setup Signature configuration
    SignatureConfig signConfig = new SignatureConfig
    {
        StoragePath = @"c:\Aspose\Test\Storage",
        OutputPath = @"c:\Aspose\Test\Output"
    };
    // instantiating the signature handler
    SignatureHandler handler = new SignatureHandler(signConfig);
    // setup search options
    PdfSearchQRCodeOptions searchOptions = new PdfSearchQRCodeOptions();
    // specify as true to search all pages of a document
    searchOptions.SearchAllPages = true;
    // search document
    SearchResult result = handler.Search("SignedQRCode.pdf", searchOptions);
    // output signatures
    // output signatures
    List<QRCodeSignature> signatures = result.ToList<QRCodeSignature>();
    foreach (QRCodeSignature signature in signatures)
    {
        Console.WriteLine("Found QRCode signature: {0} with text {1} on page {2}", signature.EncodeType.TypeName, signature.Text, signature.PageNumber);
    }
    ```
    
2.  Public class **ImageMetadataSignOptions **was extended with new public method **AddSignature**. Method creates new Image Metadata Signature with passed arguments (id and value), adds signature to list of metadata signatures and returns newly created object as result.
    
    **AddSignature method**
    
    ```csharp
    /// <summary>
    /// Creates new ImageMetadataSignature with passed arguments and adds it to collection.
    /// </summary>
    /// <param name="id">Unique identifier Image Metadata Signature name. See references for Exif tags specifications for possible id values</param>
    /// <param name="value">Metadata value</param>
    /// <returns>Newly created signature that was added to MetadataSignatures collection</returns>
    public ImageMetadataSignature AddSignature(ushort id, object value)
    ```
    
    Following example demonstrates singing Image document with Metadata signature using this new method:
    
    **C#**
    
    ```csharp
    // setup Signature configuration
    SignatureConfig signConfig = new SignatureConfig
    {
        StoragePath = @"c:\Aspose\Test\Storage",
        OutputPath = @"c:\Aspose\Test\Output"
    };
    // instantiating the signature handler
    SignatureHandler handler = new SignatureHandler(signConfig);
    // setup options with text of signature
    ImagesMetadataSignOptions signOptions = new ImagesMetadataSignOptions();
    // Specify different Metadata Signatures and add them to options sigature collection
    // set start id
    ushort imgsMetadataId = 41996;
    // setup int value
    ImageMetadataSignature mdSign_DocId = signOptions.AddSignature(imgsMetadataId++, 123456); // int
    // setup Author property
    ImageMetadataSignature mdSign_Author = signOptions.AddSignature(imgsMetadataId++, "Mr.Scherlock Holmes"); // string
    // setup data of sign date
    ImageMetadataSignature mdSign_Date = signOptions.AddSignature(imgsMetadataId++, DateTime.Now); // DateTime
    // setup double
    ImageMetadataSignature mdSign_Amnt = signOptions.AddSignature(imgsMetadataId++, 123.456M); //decimal value
     
    // sign document
    string signedPath = handler.Sign<string>(@"SignedMetadata.jpg", signOptions,
        new SaveOptions { OutputType = OutputType.String, OutputFileName = "SignedMetadata2.jpg" });
    Console.WriteLine("Signed file path is: " + signedPath);
    ```
    
3.  Public base abstract class **MetadataSignature, **ImageMetadataSignature ** **was extended with new public property **DataEncryption **of type **IDataEncryption **
    
    **DataEncryption property**
    
    ```csharp
    /// <summary>
    /// Gets or sets implementation of <see cref="IDataEncryption"/> interface to encode and decode signature Value properties.
    /// </summary>
    public IDataEncryption DataEncryption { get; set; }
    ```
    
    and virtual method **public T GetData<T>()**. This method returns object of type T over de-serialization and decryption from Metadata Value.
    
    **GetData<T>() method**
    
    ```csharp
    /// <summary>
    /// Obtain object from Metadata Signature Value over de-serialization and decryption
    /// </summary>
    /// <typeparam name="T">Type of object to deserialize from Metadata value</typeparam>
    /// <returns></returns>
    public T GetData<T>() where T : class
     
    /// <summary>
    /// Obtain object from Metadata Signature Value over deserialization.
    /// </summary>
    /// <typeparam name="T">Type of object to deserialize from Metadata Value</typeparam>
    /// <param name="dataEncryption">Set custom data encryption implementation</param>
    /// <returns></returns>
    public T GetData<T>(IDataEncryption dataEncryption) where T : class 
    ```
    
    With these changes all derived classes, same as **ImageMetadataSignature** will support this functionality.
    
    Following example demonstrates singing Image documents with Metadata signature with value of  **DocumentSignature **object:
    
    **C#**
    
    ```csharp
    // setup key and passphrase
    string key = "1234567890";
    string salt = "1234567890";
    // create data encryption
    IDataEncryption encryption = new SymmetricEncryption(SymmetricAlgorithmType.Rijndael, key, salt);
    // setup Signature configuration
    SignatureConfig signConfig = new SignatureConfig
    {
        StoragePath = @"c:\Aspose\Test\Storage",
        OutputPath = @"c:\Aspose\Test\Output"
    };
    // instantiating the signature handler
    SignatureHandler handler = new SignatureHandler(signConfig);
    // setup options with text of signature
    ImagesMetadataSignOptions signOptions = new ImagesMetadataSignOptions();
    // create custom object
    DocumentSignature signature = new DocumentSignature()
    {
        ID = Guid.NewGuid().ToString(),
        Author = Environment.UserName,
        Signed = DateTime.Now,
        DataFactor = 11.22M
    };
    ushort imgsMetadataId = 41996;
    // Specify different Metadata Signatures and add them to options sigature collection
    // setup Author property
    ImageMetadataSignature mdDocument = signOptions.AddSignature(imgsMetadataId, signature);
    // set encryption
    mdDocument.DataEncryption = encryption;
    // sign document
    string signedPath = handler.Sign<string>(@"SignedMetadata.jpg", signOptions,
        new SaveOptions { OutputType = OutputType.String, OutputFileName = "SignedMedataDataEncrypted.jpg" });
    Console.WriteLine("Signed file path is: " + signedPath);
    ```
    
    Class **DocumentSignature **written by user
    
    **Example of custom class**
    
    ```csharp
    public class DocumentSignature
    {
        // specify SkipSerialization attribute to skip this field on serialization
        [SkipSerialization]
        public string Version { get; set; }
        // specify SkipSerialization attribute to skip this field on serialization
        [SkipSerialization]
        public bool IsProcessed { get; set; }
        [Format("SignatureID")]
        public string ID { get; set; }
        [Format("Author")]
        public string Author { get; set; }
        [Format("SignatureDate","yyyy-MM-dd")]
        public DateTime Signed { get; set; }
        [Format("Factor", "N2")]
        public decimal DataFactor { get; set; }
    }
    ```
    
    Following example shows how to retrieve signed Cells file with **DocumentSignature **Metadata Value:
    
    **C#**
    
    ```csharp
    // setup key and pasphrase
    string key = "1234567890";
    string salt = "1234567890";
    // create data encryption
    IDataEncryption encryption = new SymmetricEncryption(SymmetricAlgorithmType.Rijndael, key, salt);
    // setup Signature configuration
    SignatureConfig signConfig = new SignatureConfig
    {
        StoragePath = @"c:\Aspose\Test\Storage",
        OutputPath = @"c:\Aspose\Test\Output"
    };
    // instantiating the signature handler
    SignatureHandler handler = new SignatureHandler(signConfig);
    // setup search options
    CellsSearchMetadataOptions searchOptions = new CellsSearchMetadataOptions();
    // search document
    SearchResult result = handler.Search("SignedMedataDataEncrypted.xlsx", searchOptions);
    // output signatures
    List<CellsMetadataSignature> signatures = result.ToList<CellsMetadataSignature>();
    foreach (CellsMetadataSignature signature in signatures)
    {
        if (signature != null && signature.Name.Equals("DocumentSignature"))
        {
            DocumentSignature docSignature = signature.GetData<DocumentSignature>(encryption);
            if (docSignature != null)
            {
                Console.WriteLine("Found DocumentSignature signature: #{0}. Author {1} from {2}. Factor: {3}",
                    docSignature.ID, docSignature.Author, docSignature.DataFactor, docSignature.DataFactor);
            }
        }
    }
    ```
    
    Following example shows how to retrieve signed Image with **DocumentSignature **Metadata Value (see examples above how to sign Document with custom data objects):
    
    **C#**
    
    ```csharp
    // setup key and pasphrase
    string key = "1234567890";
    string salt = "1234567890";
    // create data encryption
    IDataEncryption encryption = new SymmetricEncryption(SymmetricAlgorithmType.Rijndael, key, salt);
    // setup Signature configuration
    SignatureConfig signConfig = new SignatureConfig
    {
        StoragePath = @"c:\Aspose\Test\Storage",
        OutputPath = @"c:\Aspose\Test\Output"
    };
    // instantiating the signature handler
    SignatureHandler handler = new SignatureHandler(signConfig);
    // setup search options
    ImagesSearchMetadataOptions searchOptions = new ImagesSearchMetadataOptions();
    // search document
    SearchResult result = handler.Search("SignedMedataDataEncrypted.jpg", searchOptions);
    // output signatures
    List<ImageMetadataSignature> signatures = result.ToList<ImageMetadataSignature>();
    ushort imgsMetadataId = 41996;
    foreach (ImageMetadataSignature signature in signatures)
    {
        if (signature != null && signature.Id.Equals(imgsMetadataId))
        {
            DocumentSignature docSignature = signature.GetData<DocumentSignature>(encryption);
            if (docSignature != null)
            {
                Console.WriteLine("Found DocumentSignature signature: #{0}. Author {1} from {2}. Factor: {3}", 
                        docSignature.ID, docSignature.Author, docSignature.Signed.ToShortDateString(), docSignature.DataFactor);
            }
        }
    }
    ```
