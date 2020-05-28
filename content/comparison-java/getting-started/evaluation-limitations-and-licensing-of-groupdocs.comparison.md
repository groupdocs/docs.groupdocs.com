---
id: evaluation-limitations-and-licensing-of-groupdocs-comparison
url: comparison/java/evaluation-limitations-and-licensing-of-groupdocs-comparison
title: Evaluation Limitations and Licensing of GroupDocs.Comparison
weight: 5
description: ""
keywords: 
productName: GroupDocs.Comparison for Java
hideChildren: False
---
{{< alert style="info" >}}You can use GroupDocs.Comparison without the license. The usage and functionalities are pretty much same as the licensed one but you will face few limitations while using the non-licensed API.{{< /alert >}}

## Evaluation Limits

1.  Only up to 3 first pages are processed.
2.  PDF documents: document should not have more then four elements of any collection
3.  Documents with more than 3 pages are not supported.
4.  Only 15 document Comparison per hour.
5.  Trial badges are placed in the document on the top of each page.

## Licensing

The license file contains details such as the product name, number of developers it is licensed to, subscription expiry date and so on. It contains digital signature, so don't modify the file. Even inadvertent addition of an extra line break into the file will invalidate it. You need to set a license before utilizing **GroupDocs.Comparison API** if you want to avoid its evaluation limitations. License can be applied using file path and stream.

### Apply License Using License File Path

Code given below justifies how to apply license using file path.

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java</span></td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Setup license</span></td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">License</span> lic <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">License</span>();</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC5" class="blob-code blob-code-inner js-file-line">lic<span class="pl-k">.</span>setLicense(licensePath<span class="pl-k">.</span>toString());</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC6" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC8" class="blob-code blob-code-inner js-file-line">exp<span class="pl-k">.</span>printStackTrace();</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromfile-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-src-main-utilities-applylicensefromfile-java-LC9" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/979ce1d1cb65efc4741c315c4e21111d/raw/cf3b75ffce5c6d79b18368055e3da7d1048b6377/Examples-src-Main-Utilities-applyLicenseFromFile.java) [Examples-src-Main-Utilities-applyLicenseFromFile.java](https://gist.github.com/GroupDocsGists/979ce1d1cb65efc4741c315c4e21111d#file-examples-src-main-utilities-applylicensefromfile-java) hosted with ❤ by [GitHub](https://github.com)

### Apply License Using License File Stream

Code given below explains how to apply license using stream.

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java</span></td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Obtain license stream</span></td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">FileInputStream</span> licenseStream <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">FileInputStream</span>(filePath);</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Setup license</span></td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">License</span> lic <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">License</span>();</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC7" class="blob-code blob-code-inner js-file-line">lic<span class="pl-k">.</span>setLicense(licenseStream);</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC8" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC10" class="blob-code blob-code-inner js-file-line">exp<span class="pl-k">.</span>printStackTrace();</td></tr><tr><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-examples-src-main-utilities-applylicensefromstreamobj-java-LC11" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/9601028a0d34d6c41a6885df7098e6bd/raw/61fd73c8a12bf02bbf516ed91c04ec20287a5352/Examples-src-Main-Utilities-applyLicenseFromStreamObj.java) [Examples-src-Main-Utilities-applyLicenseFromStreamObj.java](https://gist.github.com/GroupDocsGists/9601028a0d34d6c41a6885df7098e6bd#file-examples-src-main-utilities-applylicensefromstreamobj-java) hosted with ❤ by [GitHub](https://github.com)

### Metered Licensing

You can also set Metered license as an alternative to license file. It is a new licensing mechanism that will be used along with existing licensing method. It is useful if you want to be billed based on the usage of the API features. For more details, please refer to [Metered Licensing FAQ](https://purchase.groupdocs.com/faqs/licensing/metered) section.

Create metered object and use method SetMeteredKey()

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-meteredkey-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-meteredkey-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-comparison/GroupDocs.comparison-for-java</span></td></tr><tr><td id="file-meteredkey-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-meteredkey-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Set metered key</span></td></tr><tr><td id="file-meteredkey-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-meteredkey-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Metered</span> metered <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">Metered</span>();</td></tr><tr><td id="file-meteredkey-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-meteredkey-java-LC4" class="blob-code blob-code-inner js-file-line">metered<span class="pl-k">.</span>setMeteredKey(<span class="pl-s"><span class="pl-pds">"</span>****<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>****<span class="pl-pds">"</span></span>);</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/f1cea253b089f8daf2d5814c7f1b4c5a/raw/ed39dfdf6da9ede9aad128717b5915829f189332/meteredkey.java) [meteredkey.java](https://gist.github.com/GroupDocsGists/f1cea253b089f8daf2d5814c7f1b4c5a#file-meteredkey-java) hosted with ❤ by [GitHub](https://github.com)

To check current consumption quantity use getConsumptionQuantity() method

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-meteredlicensing-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-meteredlicensing-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-comparison/GroupDocs.comparison-for-java</span></td></tr><tr><td id="file-meteredlicensing-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-meteredlicensing-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Get consumption quantity from metered</span></td></tr><tr><td id="file-meteredlicensing-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-meteredlicensing-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">BigDecimal</span> amountBefor <span class="pl-k">=</span> <span class="pl-smi">Metered</span><span class="pl-k">.</span>getConsumptionQuantity();</td></tr><tr><td id="file-meteredlicensing-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-meteredlicensing-java-LC4" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-meteredlicensing-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-meteredlicensing-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Call comparison</span></td></tr><tr><td id="file-meteredlicensing-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-meteredlicensing-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> sourcePath <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>./data/source.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-meteredlicensing-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-meteredlicensing-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> targetPath <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>./data/target.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-meteredlicensing-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-meteredlicensing-java-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Comparer</span> comparer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">Comparer</span>();</td></tr><tr><td id="file-meteredlicensing-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-meteredlicensing-java-LC9" class="blob-code blob-code-inner js-file-line">comparer<span class="pl-k">.</span>compare(sourcePath, targetPath, <span class="pl-k">new</span> <span class="pl-smi">ComparisonSettings</span>());</td></tr><tr><td id="file-meteredlicensing-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-meteredlicensing-java-LC10" class="blob-code blob-code-inner js-file-line">comparer<span class="pl-k">.</span>compare(sourcePath, targetPath, <span class="pl-k">new</span> <span class="pl-smi">ComparisonSettings</span>());</td></tr><tr><td id="file-meteredlicensing-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-meteredlicensing-java-LC11" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-meteredlicensing-java-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-meteredlicensing-java-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Get consumption quantity from metered after several calls of comparison</span></td></tr><tr><td id="file-meteredlicensing-java-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-meteredlicensing-java-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">BigDecimal</span> amountAfter <span class="pl-k">=</span> <span class="pl-smi">Metered</span><span class="pl-k">.</span>getConsumptionQuantity();</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/78c66868ddf074b27e0f42759bf2ebde/raw/7389a0ffb7451b943cba5ba330ff633d7da3d0f4/meteredlicensing.java) [meteredlicensing.java](https://gist.github.com/GroupDocsGists/78c66868ddf074b27e0f42759bf2ebde#file-meteredlicensing-java) hosted with ❤ by [GitHub](https://github.com)

## Validate the License

You can validate if the license has been set properly or not. The **[L](http://www.aspose.com/api/java/words/com.aspose.words/classes/License)icense **class has **isValidLicense()** method that will return true if license has been properly set.

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-validatelicense-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-validatelicense-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java</span></td></tr><tr><td id="file-validatelicense-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-validatelicense-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-validatelicense-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-validatelicense-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Setup license</span></td></tr><tr><td id="file-validatelicense-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-validatelicense-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">License</span> lic <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">License</span>();</td></tr><tr><td id="file-validatelicense-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-validatelicense-java-LC5" class="blob-code blob-code-inner js-file-line">lic<span class="pl-k">.</span>setLicense(licensePath);</td></tr><tr><td id="file-validatelicense-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-validatelicense-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">License</span><span class="pl-k">.</span>isValidLicense()){</td></tr><tr><td id="file-validatelicense-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-validatelicense-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>License is Set!<span class="pl-pds">"</span></span>);</td></tr><tr><td id="file-validatelicense-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-validatelicense-java-LC8" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-validatelicense-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-validatelicense-java-LC9" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-validatelicense-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-validatelicense-java-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-validatelicense-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-validatelicense-java-LC11" class="blob-code blob-code-inner js-file-line">exp<span class="pl-k">.</span>printStackTrace();</td></tr><tr><td id="file-validatelicense-java-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-validatelicense-java-LC12" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/0b0e327b8e899ea71f678d782df8bf44/raw/d0c0b528f7778abf8a743458438bc7efa304e881/validatelicense.java) [validatelicense.java](https://gist.github.com/GroupDocsGists/0b0e327b8e899ea71f678d782df8bf44#file-validatelicense-java) hosted with ❤ by [GitHub](https://github.com)