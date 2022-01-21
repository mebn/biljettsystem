using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]

    public class PostExampleController : ControllerBase {
        [HttpPost]
        public IActionResult PostPerson([FromBody] Person p) {
            Person person = new Person {
                FirstName = p.FirstName,
                LastName = p.LastName,
                Age = p.Age
            };

            // save to database

            return Ok(person);
        }
    }
}
