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
    public class ServiceStatusController : ApiController
    {
        private mtaContainer db = new mtaContainer();

        // GET api/ServiceStatus
        public IEnumerable<ServiceStatus> GetServiceStatus()
        {
            return db.ServiceStatus.AsEnumerable();
        }

        // GET api/ServiceStatus/5
        public ServiceStatus GetServiceStatus(int id)
        {
            ServiceStatus servicestatus = db.ServiceStatus.Find(id);
            if (servicestatus == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return servicestatus;
        }

        // PUT api/ServiceStatus/5
        public HttpResponseMessage PutServiceStatus(int id, ServiceStatus servicestatus)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != servicestatus.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(servicestatus).State = EntityState.Modified;

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

        // POST api/ServiceStatus
        public HttpResponseMessage PostServiceStatus(ServiceStatus servicestatus)
        {
            if (ModelState.IsValid)
            {
                db.ServiceStatus.Add(servicestatus);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, servicestatus);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = servicestatus.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/ServiceStatus/5
        public HttpResponseMessage DeleteServiceStatus(int id)
        {
            ServiceStatus servicestatus = db.ServiceStatus.Find(id);
            if (servicestatus == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.ServiceStatus.Remove(servicestatus);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, servicestatus);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}