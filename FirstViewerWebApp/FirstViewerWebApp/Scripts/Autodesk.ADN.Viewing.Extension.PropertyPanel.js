///////////////////////////////////////////////////////////////////////////////
// PropertyPanel viewer Extension
// by Philippe Leefsma, October 2014
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");


Autodesk.ADN.Viewing.Extension.PropertyPanel = function (viewer, options) {

    // base constructor
    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _viewer = viewer;

    var _self = this;

    ///////////////////////////////////////////////////////////////////////////
    // load callback
    //
    ///////////////////////////////////////////////////////////////////////////
    _self.load = function () {

        Autodesk.ADN.Viewing.Extension.AdnPropertyPanel = function (viewer) {

            this.viewer = viewer;

            Autodesk.Viewing.Extensions.ViewerPropertyPanel.call(
                this,
                this.viewer);

            this.setNodeProperties = function(nodeId) {

                Autodesk.Viewing.Extensions.ViewerPropertyPanel.
                    prototype.setNodeProperties.call(
                        this, nodeId);

                this.selectedNodeId = nodeId;
            };

            this.setProperties = function (properties) {

                Autodesk.Viewing.Extensions.ViewerPropertyPanel.
                    prototype.setProperties.call(
                        this, properties);

                this.addProperty(
                    "Node Id",
                    this.selectedNodeId,
                    "Customization");
            };
        };

        Autodesk.ADN.Viewing.Extension.AdnPropertyPanel.prototype =
            Object.create(
                Autodesk.Viewing.Extensions.ViewerPropertyPanel.prototype);

        Autodesk.ADN.Viewing.Extension.AdnPropertyPanel.prototype.constructor =
            Autodesk.ADN.Viewing.Extension.AdnPropertyPanel;

        var panel = new Autodesk.ADN.Viewing.Extension.AdnPropertyPanel(
            _viewer);

        _viewer.setPropertyPanel(panel);

        console.log("Autodesk.ADN.Viewing.Extension.PropertyPanel loaded");

        return true;
    };

    ///////////////////////////////////////////////////////////////////////////
    // unload callback
    //
    ///////////////////////////////////////////////////////////////////////////
    _self.unload = function () {
        
        _viewer.setPropertyPanel(null);

        console.log("Autodesk.ADN.Viewing.Extension.PropertyPanel unloaded");

        return true;
    };
};

Autodesk.ADN.Viewing.Extension.PropertyPanel.prototype =
    Object.create(Autodesk.Viewing.Extension.prototype);

Autodesk.ADN.Viewing.Extension.PropertyPanel.prototype.constructor =
    Autodesk.ADN.Viewing.Extension.PropertyPanel;

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Autodesk.ADN.Viewing.Extension.PropertyPanel',
    Autodesk.ADN.Viewing.Extension.PropertyPanel);