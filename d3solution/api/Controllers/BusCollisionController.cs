using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using data;

namespace api.Controllers
{
    public class BusCollisionController : ApiController
    {
        private mtaContainer db = new mtaContainer();

        // GET api/Bus
        public IEnumerable<BusBreakdown> GetBusBreakdowns()
        {
            return db.BusBreakdowns.AsEnumerable();
        }

        // GET api/Bus/5
        public BusBreakdown GetBusBreakdown(int id)
        {
            BusBreakdown busbreakdown = db.BusBreakdowns.Find(id);
            if (busbreakdown == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return busbreakdown;
        }

        // PUT api/Bus/5
        public HttpResponseMessage PutBusBreakdown(int id, BusBreakdown busbreakdown)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != busbreakdown.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(busbreakdown).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Bus
        public HttpResponseMessage PostBusBreakdown(BusBreakdown busbreakdown)
        {
            if (ModelState.IsValid)
            {
                db.BusBreakdowns.Add(busbreakdown);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, busbreakdown);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = busbreakdown.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Bus/5
        public HttpResponseMessage DeleteBusBreakdown(int id)
        {
            BusBreakdown busbreakdown = db.BusBreakdowns.Find(id);
            if (busbreakdown == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.BusBreakdowns.Remove(busbreakdown);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, busbreakdown);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}