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
    public class StationController : ApiController
    {
        private mtaContainer db = new mtaContainer();

        // GET api/Station
        public IEnumerable<Station> GetStations()
        {
            return db.Stations.Include(x => x.TurnstileTraffics).ToList().AsEnumerable();
        }

        // GET api/Station/5
        public Station GetStation(int id)
        {
            Station station = db.Stations.Find(id);
            if (station == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return station;
        }

        // PUT api/Station/5
        public HttpResponseMessage PutStation(int id, Station station)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != station.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(station).State = EntityState.Modified;

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

        // POST api/Station
        public HttpResponseMessage PostStation(Station station)
        {
            if (ModelState.IsValid)
            {
                db.Stations.Add(station);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, station);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = station.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Station/5
        public HttpResponseMessage DeleteStation(int id)
        {
            Station station = db.Stations.Find(id);
            if (station == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Stations.Remove(station);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, station);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}