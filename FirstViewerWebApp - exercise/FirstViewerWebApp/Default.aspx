<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FirstViewerWebApp.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Getting started with Autodesk View and Data API</title>

    <style>
        html, body {
            height: 100%;
        }

        .container {
            height: 100%;
        }

        .fill {
            width: 100%;
            height: 100%;
            min-height: 100%;
        }
    </style>

    <!--Bootstrap-->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

    <!-- viewer-->


</head>
<body>


    <form id="form1" runat="server">
    </form>
    <div class="container">
        <div class="row">
            <table class="table table-responsive">
                <tr>
                    <td>
                        <div class="col-lg-12 ">

                            <h1>Autodesk View and Data API</h1>
                            <p class="lead">
                                Vibrant 3D graphics in a Web browser!
                            </p>


                            <input class="text-primary col-md-10" id="urn" placeholder="urn here ..." />
                            <button class=" btn btn-primary col-md-2" id="btnLoadModel">Load model</button>
                        </div>
                    </td>

                </tr>
                

            </table>



        </div>
        <div class="row fill">
            <div class="col-lg-12 fill ">
                <div id="viewer"></div>
            </div>
        </div>




    </div>
    <!-- /.container -->




    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="Scripts/jquery-1.9.0.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>

    <!--Javascript for viewer-->



</body>
</html>
