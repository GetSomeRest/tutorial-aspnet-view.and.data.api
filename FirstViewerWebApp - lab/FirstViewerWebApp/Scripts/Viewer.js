//(function () {  //comment out this closure so that you can type variables in 
                  //console of browser to do debugging
 
    var viewer;

    function initialize() {

        //Code to initialize 


       

       
    }

  

    function loadDocument(viewer, documentId) {
        // Find the first 3d geometry and load that.
        Autodesk.Viewing.Document.load(documentId, function (doc) {// onLoadCallback
           


        //Complete this function





        }, function (errorMsg) {// onErrorCallback
            alert("Load Error: " + errorMsg);
        });
    }

  
    // This method should fetch a token from a service you created to provide authentication.
    function getToken() {
        

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

  



//}).call(this);
