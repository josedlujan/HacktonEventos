using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventosCancun.Controllers
{
    public class EventosController : Controller
    {
        public JsonResult ObtenerTodosEventos()
        {
            try
            {
                EventosCancunEntities entidades = new EventosCancunEntities();
                entidades.Configuration.ProxyCreationEnabled = false;
                List<Eventos> eventos = entidades.Eventos.ToList();
                return Json(eventos, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }
        }
        public JsonResult ObtenerEvento(int Id)
        {
            EventosCancunEntities entidades = new EventosCancunEntities();
            return Json(entidades.Eventos.FirstOrDefault(x => x.ID == Id));
        }
        public ActionResult Index()
        {
            EventosCancunEntities entidades = new EventosCancunEntities();
            return View(entidades.Eventos.ToList());
        }
    }
}