/*
This is just an example.

https://localhost:<PORT>/api/Hello/123
*/

using Microsoft.AspNetCore.Mvc;

namespace my_api.Controllers {
    [ApiController]
    [Route("api/[controller]")]

    public class HelloController : ControllerBase {
        [HttpGet("{id}")]
        public IActionResult Get(long id) {
            return Ok($"Hello {id}");
        }
    }
}
