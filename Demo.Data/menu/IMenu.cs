using Demo.Data.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Data.menu
{
   public interface IMenu
    {
        IList<Menu> getAll();
    }
}
