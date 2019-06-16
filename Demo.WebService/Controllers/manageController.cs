using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Data.menu;
using Demo.Data.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Demo.WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class manageController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            IList<MenuModel> mms = new List<MenuModel>();
            IList<Menu> ms =_menu.getAll();
            foreach (var item in ms)
            {
                mms.Add(new MenuModel(item));
            }
            return new OkObjectResult(mms);
        }
        public manageController(IMenu menu)
        {
            _menu = menu;
        }
        private readonly IMenu _menu;
    }
}