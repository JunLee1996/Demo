using System;
using System.Collections.Generic;
using System.Text;
using Demo.Data.models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Demo.Data.login.Impl
{
    public class ImplLogin : ILogin
    {
        public ImplLogin(DataContext ctx) => _dbContext = ctx;

        public IList<User> QueryByUsername(string username)
        {
            return _dbContext.users.Include("roles").Where(u => u.username == username).ToList();
        }

        private readonly DataContext _dbContext;
    }
}
