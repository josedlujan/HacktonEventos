using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using EventosCancun;

namespace EventosCancun.Controllers
{
    public class EtiquetasController : Controller
    {
        private EventosCancunEntities db = new EventosCancunEntities();

        // GET: Etiquetas
        public ActionResult Index()
        {
            return View(db.Etiquetas.ToList());
        }

        // GET: Etiquetas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Etiquetas etiquetas = db.Etiquetas.Find(id);
            if (etiquetas == null)
            {
                return HttpNotFound();
            }
            return View(etiquetas);
        }

        // GET: Etiquetas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Etiquetas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Nombre")] Etiquetas etiquetas)
        {
            if (ModelState.IsValid)
            {
                db.Etiquetas.Add(etiquetas);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(etiquetas);
        }

        // GET: Etiquetas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Etiquetas etiquetas = db.Etiquetas.Find(id);
            if (etiquetas == null)
            {
                return HttpNotFound();
            }
            return View(etiquetas);
        }

        // POST: Etiquetas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Nombre")] Etiquetas etiquetas)
        {
            if (ModelState.IsValid)
            {
                db.Entry(etiquetas).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(etiquetas);
        }

        // GET: Etiquetas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Etiquetas etiquetas = db.Etiquetas.Find(id);
            if (etiquetas == null)
            {
                return HttpNotFound();
            }
            return View(etiquetas);
        }

        // POST: Etiquetas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Etiquetas etiquetas = db.Etiquetas.Find(id);
            db.Etiquetas.Remove(etiquetas);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
