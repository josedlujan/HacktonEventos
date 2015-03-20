using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventosCancun.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        [ValidateAntiForgeryToken]
        public ActionResult Index()
        {
            return View();
        }
        [ValidateAntiForgeryToken]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}