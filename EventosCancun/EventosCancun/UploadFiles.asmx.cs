using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.IO;

namespace EventosCancun
{
    /// <summary>
    /// Summary description for UploadFiles
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class UploadFiles : System.Web.Services.WebService
    {

        [WebMethod(EnableSession = true)]
        public void Upload()
        {
            
            string ID = HttpContext.Current.Request.UrlReferrer.Segments[3];
            
            if (!System.IO.Directory.Exists(Server.MapPath(@"~/uploads/" + ID)))
            {
                System.IO.Directory.CreateDirectory(Server.MapPath(@"~/uploads/" + ID));
            }
            string filepath = Server.MapPath("~/uploads/" + ID);
            HttpFileCollection uploadedFiles = HttpContext.Current.Request.Files;
            

            for (int i = 0; i < uploadedFiles.Count; i++)
            {
                HttpPostedFile userPostedFile = uploadedFiles[i];
                try
                {
                    if (userPostedFile.ContentLength > 0)
                    {
                        userPostedFile.SaveAs(filepath + "\\" + Path.GetFileName(userPostedFile.FileName));
                        EventosCancunEntities db = new EventosCancunEntities();
                        EventoURLs url = new EventoURLs();
                        url.IdEvento = Convert.ToInt32(ID);
                        url.URL = string.Concat(HttpContext.Current.Request.Url.Host,"/uploads/",ID, "/",Path.GetFileName(userPostedFile.FileName));
                        db.EventoURLs.Add(url);
                        db.SaveChanges();
                    }
                }
                catch (Exception)
                {
                    
                }
            }
        }
    }
}
