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
    public class DailyPlazaTrafficController : ApiController
    {
        private mtaContainer db = new mtaContainer();

        // GET api/DailyPlazaTraffic
        public IEnumerable<DailyPlazaTraffic> GetDailyPlazaTraffics()
        {
            return db.DailyPlazaTraffic.AsEnumerable();
        }

        // GET api/DailyPlazaTraffic/5
        public DailyPlazaTraffic GetDailyPlazaTraffic(int id)
        {
            DailyPlazaTraffic dailyplazatraffic = db.DailyPlazaTraffic.Find(id);
            if (dailyplazatraffic == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return dailyplazatraffic;
        }

        // PUT api/DailyPlazaTraffic/5
        public HttpResponseMessage PutDailyPlazaTraffic(int id, DailyPlazaTraffic dailyplazatraffic)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != dailyplazatraffic.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(dailyplazatraffic).State = EntityState.Modified;

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

        // POST api/DailyPlazaTraffic
        public HttpResponseMessage PostDailyPlazaTraffic(DailyPlazaTraffic dailyplazatraffic)
        {
            if (ModelState.IsValid)
            {
                db.DailyPlazaTraffic.Add(dailyplazatraffic);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, dailyplazatraffic);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = dailyplazatraffic.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/DailyPlazaTraffic/5
        public HttpResponseMessage DeleteDailyPlazaTraffic(int id)
        {
            DailyPlazaTraffic dailyplazatraffic = db.DailyPlazaTraffic.Find(id);
            if (dailyplazatraffic == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.DailyPlazaTraffic.Remove(dailyplazatraffic);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, dailyplazatraffic);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}