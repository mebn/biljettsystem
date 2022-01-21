using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers {
    [ApiController]
    [Route("api/[controller]")]

    public class GetExampleController : ControllerBase {
        [HttpGet("{age}")]
        public IActionResult GetOnePerson(int age) {
            Person person = new Person {
                FirstName = "Name 1",
                LastName = "Name 2",
                Age = age
            };

            // receive from database


            return Ok(person);
        }
    }
}
