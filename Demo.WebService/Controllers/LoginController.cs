using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Data.login;
using Demo.Data.models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            var users = _login.QueryByUsername(user.username);
            if (users.Count() ==0 ) {
                return new BadRequestObjectResult("用户名不存在");
            } else if (users[0].password!=user.password) {
                return new BadRequestObjectResult("密码错误");
            }
                return new OkObjectResult(users[0]);

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        public LoginController(ILogin login)
        {
            _login = login;  
        }
        private readonly ILogin _login;
       
    }
}
