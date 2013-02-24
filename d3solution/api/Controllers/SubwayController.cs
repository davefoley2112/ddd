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
    public class SubwayController : ApiController
    {
        private mtaContainer db = new mtaContainer();

        // GET api/Subway
        public IEnumerable<SubwayLine> GetSubwayLines()
        {
            //return db.SubwayLines.Include(x => x.SubwayLineWaits).AsEnumerable();
            return db.SubwayLines.AsEnumerable();
        }

        // GET api/Subway/5
        public SubwayLine GetSubwayLine(int id)
        {
            SubwayLine subwayline = db.SubwayLines.Find(id);
            if (subwayline == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return subwayline;
        }

        // PUT api/Subway/5
        public HttpResponseMessage PutSubwayLine(int id, SubwayLine subwayline)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != subwayline.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(subwayline).State = EntityState.Modified;

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

        // POST api/Subway
        public HttpResponseMessage PostSubwayLine(SubwayLine subwayline)
        {
            if (ModelState.IsValid)
            {
                db.SubwayLines.Add(subwayline);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, subwayline);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = subwayline.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Subway/5
        public HttpResponseMessage DeleteSubwayLine(int id)
        {
            SubwayLine subwayline = db.SubwayLines.Find(id);
            if (subwayline == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.SubwayLines.Remove(subwayline);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, subwayline);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}