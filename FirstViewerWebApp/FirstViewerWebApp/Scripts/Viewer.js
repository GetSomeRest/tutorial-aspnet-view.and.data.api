//(function () {  //comment out this closure so that you can type variables in 
                  //console of broswer to do debuggin
 
    var viewer;

    function initialize() {

        var urn = $('#urn').val();
        if (urn =='') {
            urn = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGFuaWVsX3RyYW5zbGF0ZV9idWNrZXQzL0RyaWxsLmR3Zng=';
        }
        if (urn.substr(0,4) !=='urn:') {
            urn = 'urn:' + urn;
        }

        var options = {
            'document': urn,
            'getAccessToken': getToken,
            'refreshToken': getToken,
        };

        var viewerElement = document.getElementById('viewer');

        viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {
            extensions: ['BasicExtension']
        });
        

        Autodesk.Viewing.Initializer(options, function () {
            viewer.start();
            loadDocument(viewer, options.document);
        });


       
    }

    function loadDocument(viewer, documentId) {
        // Find the first 3d geometry and load that.
        Autodesk.Viewing.Document.load(documentId, function (doc) {// onLoadCallback
            var geometryItems = [];
            geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
                'type': 'geometry',
                'role': '3d'
            }, true);

            if (geometryItems.length > 0) {
                viewer.load(doc.getViewablePath(geometryItems[0]));
            }
        }, function (errorMsg) {// onErrorCallback
            alert("Load Error: " + errorMsg);
        });
    }

    // This method returns a valid access token 
    function getToken() {
        // This method should fetch a token from a service you create to provide authentication.
        // See the ADN Samples for examples of how to create such a service.  For example, see
        // https://github.com/Developer-Autodesk/workflow-aspnet-webform-view.and.data.api/blob/master/ViewAndShare/ViewAndShare/GetAccessToken.ashx.cs
        // This method might look something like:
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "GetAccessToken.aspx", false);
        xmlHttp.send(null);
        var res = xmlHttp.responseText;
        var newToken = JSON.parse(res);

        if (newToken.error) {
            console.log(newToken.error);
            return '';
           
        }
        else {
            return newToken.access_token;
        }
        
    }


    $('#btnLoadModel').click(function () {
        //call initialize method to start
        initialize();
    });

    $('#nav1').click(function () {
        
        viewer.navigation.toPerspective();

        var camera = viewer.navigation.getCamera();
        var position = new THREE.Vector3(camera.position.x, camera.position.y,camera.position.z + 5);
        var target = camera.target;//new THREE.Vector3();
        viewer.navigation.setView(position,target);

        console.log(position);
    });

    $('#nav2').click(function () {

        viewer.navigation.toPerspective();

        var camera = viewer.navigation.getCamera();
        var position = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z - 5);

        var target = camera.target;//new THREE.Vector3();
        viewer.navigation.setView(position, target);

        //viewer.navigation.setCameraUpVector(viewer.navigation.getWorldUpVector());
        //viewer.navigation.setWorldUpVector(viewer.navigation.getWorldUpVector(), true);

        console.log(position);

    });



//}).call(this);
