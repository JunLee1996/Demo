using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Data.models
{
   public class Menu
    {
        public int Id { get; set; }
        public string content { get; set; }
        public string router { get; set; }
        public int fatherId { get; set; }
    }
}
