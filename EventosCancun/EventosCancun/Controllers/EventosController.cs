using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
namespace EventosCancun.Controllers
{
    public class EventosController : Controller
    {
        [HttpGet]
        public JsonResult ObtenerTodosEventos()
        {
            try
            {
                EventosCancunEntities entidades = new EventosCancunEntities();
                entidades.Configuration.ProxyCreationEnabled = false;
                List<Eventos> eventos = entidades.Eventos.ToList();
                Response.AppendHeader("Access-Control-Allow-Origin", "*");
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
        public ActionResult CrearEvento()
        {
            List<Etiquetas> etiquetas = new List<Etiquetas>();
            using (var db = new EventosCancunEntities())
            {
                etiquetas = db.Etiquetas.ToList();
            }
            return View(etiquetas);
        }
        public ActionResult GuardarEvento(string evento, string etiquetas)
        {
            Eventos Evento = null;
            if (ModelState.IsValid)
            {
                Evento = (Eventos)Newtonsoft.Json.JsonConvert.DeserializeObject(evento, typeof(Eventos));
                var etiquetasEventos = ((Newtonsoft.Json.Linq.JContainer)(Newtonsoft.Json.JsonConvert.DeserializeObject(etiquetas))).ToObject<string[]>();
                EventosCancunEntities db = new EventosCancunEntities();
                db.Eventos.Add(Evento);
                db.SaveChanges();
                foreach (var etiqueta in etiquetasEventos)
                {
                    EtiquetasEvento etiquetaEvento = new EtiquetasEvento();
                    etiquetaEvento.Eventos = Evento;
                    etiquetaEvento.Etiquetas = db.Etiquetas.FirstOrDefault(x => x.ID.ToString() == etiqueta);
                    Evento.EtiquetasEvento.Add(etiquetaEvento);
                }
                db.SaveChanges();
                return Json(new { RedirectUrl = Url.Action("Index", "Eventos") });
            }
            return View(Evento);
        }
        public ActionResult BorrarEvento(int? id)
        {
            EventosCancunEntities db = new EventosCancunEntities();
            foreach (var etiquetaevento in db.EtiquetasEvento.Where(s => s.IdEvento == id.Value).ToList())
            {
                db.EtiquetasEvento.Remove(etiquetaevento);
            }
            db.Eventos.Remove(db.Eventos.FirstOrDefault(ev => ev.ID == id));
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        public ActionResult AgregarImagenes(int id)
        {
            EventosCancunEntities db = new EventosCancunEntities();
            return View(db.Eventos.FirstOrDefault(s => s.ID == id));
        }
        public JsonResult ImagenesEvento(int id)
        {
            string[] Archivos = Directory.GetFiles(Server.MapPath("~/uploads/" + id));
            List<string> ListArchivos = new List<string>();
            foreach (var archivo in Archivos)
            {
                ListArchivos.Add(archivo.Replace(Server.MapPath("~/uploads"), "").Replace(@"\", @"/"));
            }
            return Json(ListArchivos, JsonRequestBehavior.AllowGet);
        }

    }
}