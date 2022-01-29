using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {

        List<Person> people = new List<Person>();

        public PeopleController()
        {
            people.Add(new Person { FirstName = "Sina", LastName = "Kenes", Id = 1 });
            people.Add(new Person { FirstName = "Marcus", LastName = "Nilszén", Id = 2 });
            people.Add(new Person { FirstName = "Adrian", LastName = "Salamon", Id = 3 });
            people.Add(new Person { FirstName = "Josefina", LastName = "Häkkinen", Id = 4 });
            people.Add(new Person { FirstName = "Erik", LastName = "Betzholtz", Id = 5 });
            people.Add(new Person { FirstName = "Klara ", LastName = "Sandström", Id = 6 });
            people.Add(new Person { FirstName = "Harry ", LastName = "Thulin", Id = 7 });
            people.Add(new Person { FirstName = "Carl", LastName = "Bentzer", Id = 8 });
        }

        // GET: api/People
        [HttpGet("/api/people")]
        public List<Person> Get()
        {
            return people;
        }

        // GET: api/People/5
        [HttpGet("/api/people/{id}")]
        public Person Get(int id)
        {
            return people.Where(x => x.Id == id).FirstOrDefault();
        }

        //// POST: api/People
        [HttpPost("/api/people")]
        public void Post(Person val)
        {
            people.Add(val);
        }

        //// DELETE: api/ApiWithActions/5
        [HttpDelete("/api/{id}")]
        public void Delete(int id)
        {
        }
    }
}
