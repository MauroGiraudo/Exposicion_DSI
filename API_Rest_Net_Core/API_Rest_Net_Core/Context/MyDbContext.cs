using Microsoft.EntityFrameworkCore;
using API_Rest_Net_Core.Models;

namespace API_Rest_Net_Core.Context
{
    public class MyDbContext : DbContext
    {
        public DbSet<NewAlumno> newAlumnos { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }
    }
}