---
id: evaluation-limitations-and-licensing-of-groupdocs-conversion
url: conversion-net/evaluation-limitations-and-licensing-of-groupdocs-conversion
title: Evaluation Limitations and Licensing of GroupDocs.Conversion
weight: 5
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Conversion for .NET
hideChildren: False
---

# Evaluation Limitations and Licensing of GroupDocs.Conversion


You can use GroupDocs.Conversion without the license. The usage and functionalities are pretty much same as the licensed one but you will face few limitations while using the non-licensed API.

## Evaluation Limitations

You can easily download GroupDocs.Conversion for evaluation. The evaluation download is the same as the purchased download. The evaluation version simply becomes licensed when you add a few lines of code to apply the license. You will face following limitations while using the API without the license:  

*   Only first 3 pages are processed.
*   Documents with more than 3 pages are not supported.
*   Trial badges are placed in the document on the top of each page.

## Licensing

The license file contains details such as the product name, number of developers it is licensed to, subscription expiry date and so on. It contains the digital signature, so don't modify the file. Even inadvertent addition of an extra line break into the file will invalidate it. You need to set a license before utilizing GroupDocs.Conversion API if you want to avoid its evaluation limitations.   
The license can be loaded from a file or stream object. The easiest way to set a license is to put the license file in the same folder as the GroupDocs.Conversion.dll file and specify the file name, without a path, as shown in the examples below.

#### Setting License from File

The code below will explain how to set product license.

// For complete examples and data files, please go to https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-.NET
// Setup license.
License license = new License();
license.SetLicense(licensePath);

#### Setting License from Stream

The following example shows how to load a license from a stream.

// For complete examples and data files, please go to https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-.NET
using (FileStream fileStream = File.OpenRead("GroupDocs.Conversion.lic"))
{
    License license = new License();
    license.SetLicense(fileStream);
}

Calling License.SetLicense multiple times is not harmful but simply wastes processor time. If you are developing a Windows Forms or console application, call License.SetLicense in your startup code, before using GroupDocs.Conversion classes.   
  
When developing an ASP.NET application, you can call License.SetLicense from the Global.asax.cs (Global.asax.vb) file in the Application\_Start protected method. It is called once when the application starts.  
Do not call License.SetLicense from within Page\_Load methods since it means the license will be loaded every time a web page is loaded.

#### Setting Metered License

You can also set [Metered](https://apireference.groupdocs.com/net/conversion/groupdocs.conversion/metered) license as an alternative to license file. It is a new licensing mechanism that will be used along with existing licensing method. It is useful for the customers who want to be billed based on the usage of the API features. For more details, please refer to [Metered Licensing FAQ](https://purchase.groupdocs.com/faqs/licensing/metered) section.

Here are the simple steps to use the `Metered` class.

1.  Create an instance of `Metered` class.
2.  Pass public & private keys to S`etMeteredKey` method.
3.  Do processing (perform task).
4.  call method G`etConsumptionQuantity` of the `Metered` class.
5.  It will return the amount/quantity of API requests that you have consumed so far.
6.  call method G`etConsumptionCredit` of the `Metered` class.
7.  It will return the credit that you have consumed so far.

Following is the sample code demonstrating how to use `Metered` class.

// For complete examples and data files, please go to https://github.com/groupdocs-conversion/GroupDocs.Conversion-for-.NET
string publicKey = ""; // Your public license key
string privateKey = ""; // Your private license key

Metered metered = new Metered();
metered.SetMeteredKey(publicKey, privateKey);

// Get amount (MB) consumed
decimal amountConsumed = GroupDocs.Conversion.Metered.GetConsumptionQuantity();
Console.WriteLine("Amount (MB) consumed: " + amountConsumed);

// Get count of credits consumed
decimal creditsConsumed = GroupDocs.Conversion.Metered.GetConsumptionCredit();
Console.WriteLine("Credits consumed: " + creditsConsumed);