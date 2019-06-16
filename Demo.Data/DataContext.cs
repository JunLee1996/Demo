using System;
using System.Collections.Generic;
using System.Text;
using Demo.Data.models;
using Microsoft.EntityFrameworkCore;

namespace Demo.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> users { get; set; }
        public DbSet<Roles> roles { get; set; }
        public DbSet<Menu> menu { get; set; } 
    }
}
