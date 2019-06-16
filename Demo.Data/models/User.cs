using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Data.models
{
    public class User
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public Roles roles { get; set; }
    }
}
