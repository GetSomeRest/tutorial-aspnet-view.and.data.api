<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AnotherSamplePage.aspx.cs" Inherits="FirstViewerWebApp.AnotherSamplePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>


<body style="margin: 0">

    <form id="form1" runat="server">
        <div>
        </div>
    </form>

    <div id="viewerDiv">
    </div>
    <!-- Your HTML code -->
    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-2.1.2.min.js"></script>
    <!-- Viewer -->
    <link type="text/css" rel="stylesheet" href="https://developer.api.autodesk.com/viewingservice/v1/viewers/style.css" />
    <script src="https://developer.api.autodesk.com/viewingservice/v1/viewers/viewer3D.min.js"></script>
    <script src="https://rawgit.com/Developer-Autodesk/library-javascript-view.and.data.api/master/js/Autodesk.ADN.Toolkit.Viewer.js"></script>
    <script>
        //global variable 
        var oViewer;
        //replace with your own urn ...
        var urn = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwtYXMtYS1zZXJ2aWNlMjAxNTAxMjYvU3VzcGVuc2lvbi5kd2Y=';
        $(document).ready(function () {
            var adnViewerMng = new Autodesk.ADN.Toolkit.Viewer.AdnViewerManager(
                'https://still-spire-1606.herokuapp.com/api/rawtoken',
                document.getElementById('viewerDiv'));
            var paramUrn = Autodesk.Viewing.Private.getParameterByName('urn');
            urn = (paramUrn !== '' ? paramUrn : urn);
            if (urn.substring(0, 4) != "urn:")
                urn = 'urn:' + urn;
            adnViewerMng.loadDocument(urn, onViewerInitialized, onError);
        });
        var onViewerInitialized = function (viewer) {
            //export the viewer object to global object
            oViewer = viewer;
            //Now it's your turn to have fun with viewer client API...
            //For example, you can get the camera of viewer
            var camera = viewer.getCamera();
            console.dir(camera);
        };
        var onError = function (error) {
            console.error(error);
        };
    </script>


</body>
</html>
