using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Data.models
{
    public class MenuModel
    {
       public MenuModel(Menu m) {
            Id = m.Id;
            content = m.content;
            router = m.router;
            fatherId = m.fatherId;
        }
        public int Id { get; set; }
        public string content { get; set; }
        public string router { get; set; }
        public int fatherId { get; set; }
        public IList<MenuModel> menus { get; set; }
    }
}
