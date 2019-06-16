using Demo.Data.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Data.login
{
   public interface ILogin
    {
        IList<User> QueryByUsername(string username);
    }
}
