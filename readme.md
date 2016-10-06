# Deprecated sample - not maintained anymore (Summer 2016) 

#Autodesk View and Data API Client Sample using ASP.NET Webform 

[![LMV](https://img.shields.io/badge/View%20%26%20Data%20API-v1.2.15-green.svg)](http://developer-autodesk.github.io/)

##Description

This is an ASP.NET Webform sample that shows how to embed 3D model into the Autodesk viewer on a web page with View and Data Client API. 

* Embed a translated 3D model into a web page
* Create an extension to display properties when clicking one element

##Dependencies

* This sample uses the [RestSharp](http://restsharp.org/) library. You can add it to your project using NuGet in Visual Studio.
* To run this sample, you need to use other workflow samples to upload and translate your models. 

##Setup/Usage Instructions

This repository includes two projects: FirstViewerWebApp and "FirstViewerWebApp - lab".

FirstViewerWebApp is the completed sample. You can set it up using the following steps: 

* Use your credentials from http://developer.autodesk.com.
* Open FirstViewerWebApp.sln in the FirstViewerWebApp folder.
* Replace the consumer key and secret key place holders in credentials.cs.
* Upload one of your models to your account and retrieve its URN using one of the other workflow samples, such as the [.net winform application](https://github.com/Developer-Autodesk/workflow-dotnet-winform-view.and.data.api/). 
* Copy your translated model URN into script/viewer.js, replacing the placeholder value for "urn" with it, around line #10(optional).
* Build and run the sample, paste your URN into the text box on the page, and press the "Load Model" button. 

"FirstViewerWebApp - lab" is the uncompleted version. As an exercise, you can complete the sample yourself by following the steps described in [lab_document.md](lab_document.md).


## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

##Written by 

Daniel Du





    
