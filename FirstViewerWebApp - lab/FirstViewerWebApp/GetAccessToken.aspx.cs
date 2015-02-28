using RestSharp;
using System;

namespace FirstViewerWebApp
{
    public partial class GetAccessToken : System.Web.UI.Page
    {



        protected void Page_Load(object sender, EventArgs e)
        {

            RestClient m_client = new RestClient(Credentials.BASE_URL);
            string accessToken = "";

            RestRequest req = new RestRequest();
            req.Resource = "authentication/v1/authenticate";
            req.Method = Method.POST;
            req.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            req.AddParameter("client_id", Credentials.CONSUMMER_KEY);
            req.AddParameter("client_secret", Credentials.SECRET_KEY);
            req.AddParameter("grant_type", "client_credentials");

            IRestResponse resp = m_client.Execute(req);

            if (resp.StatusCode == System.Net.HttpStatusCode.OK)
            {
                accessToken = resp.Content;
            }
            else
            {
                accessToken = "{\"access_token\":\"\",\"error\":\"getting access token error\"}";
            }


            Response.ContentType = "application/json";

            Response.Write(accessToken);
            Response.End();
        }
    }
}