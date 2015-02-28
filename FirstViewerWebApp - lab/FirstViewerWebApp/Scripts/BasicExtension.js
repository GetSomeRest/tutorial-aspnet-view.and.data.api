// This is a sample extension, which demos how to get the properties 
// of selected elements


'use strict';

//declare your name spaces
AutodeskNamespace('MyCommpany.Extensions');


MyCommpany.Extensions.BasicExtension = function (viewer) {

    Autodesk.Viewing.Extension.call(this, viewer);

}

MyCommpany.Extensions.BasicExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
MyCommpany.Extensions.BasicExtension.prototype.constructor = MyCommpany.Extensions.BasicExtension;

//extension load
MyCommpany.Extensions.BasicExtension.prototype.load = function () {

    console.log('MyCommpany.Extensions.BasicExtension is loaded');

    var oViewer = this.viewer;
    console.dir(oViewer);
    

  
    oViewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function (event) {

        //Selection changed event hander goes here













    });

}

//extension unload
MyCommpany.Extensions.BasicExtension.prototype.unload = function () {

}

/**
 * Register the extension with the extension manager.
 */
Autodesk.Viewing.theExtensionManager.registerExtension('BasicExtension', MyCommpany.Extensions.BasicExtension);