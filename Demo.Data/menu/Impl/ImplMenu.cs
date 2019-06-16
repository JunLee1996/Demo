using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Demo.Data.models;

namespace Demo.Data.menu.Impl
{
    public class ImplMenu : IMenu
    {
        public ImplMenu(DataContext ctx) => _dbContext = ctx;
        
        public IList<Menu> getAll()
        {
            return _dbContext.menu.ToList();
        }
        private readonly DataContext _dbContext;
    }
}
