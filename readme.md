#Autodesk View and Data API client sample in ASP.NET Webform 


##Description

This is a sample ASP.NET Webform sample providing functions to embed 3D models viewer into web page. 

##Dependencies

This sample uses the [RestSharp](http://restsharp.org/) library. You can add it to your project using NuGet in Visual Studio.

This sample does not includes the workflow of uploading models, it depends on other workflow samples to upload models. You need to prepare the model URN with following instructions. 

##Setup/Usage Instructions

This repository include two projects, FirstViewerWebApp is the completed sample, you can set it up by following instruction. 

* Apply your own credentials from http://developer.autodesk.com
* Open FirstViewerWebApp.sln in FirstViewerWebApp folder
* Replace the place holder of consumer key and secret key in credentials.cs
* Upload one of your model in your account and get its URN using other workflow sample,for example, [this workflow sample in .net winform application](https://github.com/Developer-Autodesk/workflow-dotnet-winform-view.and.data.api/) , you may refer to [handsout.pdf](handsout.pdf) if you do not how to use this workflow sample. 
* Get your model urn from the workflow sample, and copy this URN. 
* In script/viewer.js, replace the value for "urn" with your URN, around line #10(optional).
* Build and run the sample, paste your URN into the text box on page, and press "Load Model" button to load the model.


FirstViewerWebApp - exercise is the uncompleted version, you can do the exercise to complete the sample by following the [handsout.pdf](handsout.pdf).


## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT). Please see the [LICENSE](LICENSE) file for full details.

##Written by 

Daniel Du





    
