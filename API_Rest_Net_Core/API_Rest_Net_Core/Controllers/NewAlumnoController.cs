using API_Rest_Net_Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Rest_Net_Core.Context;

namespace API_Rest_Net_Core.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewAlumnoController : Controller
    {
        private readonly MyDbContext _context;

        public NewAlumnoController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetAlumno")]
        public ActionResult<IEnumerable<NewAlumno>> GetAll()
        {
            return _context.newAlumnos.ToList();
        }

        [HttpGet("{DNI}")]
        public ActionResult<NewAlumno> GetById(String DNI)
        {
            var alumno = _context.newAlumnos.Find(DNI);
            if (alumno == null)
            {
                return NotFound();
            }
            return alumno;
        }

        [HttpPost]
        public ActionResult<NewAlumno> Create(NewAlumno newAlumno)
        {
            _context.newAlumnos.Add(newAlumno);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { DNI = newAlumno.DNI }, newAlumno);
        }

        [HttpPut("{DNI}")]
        public ActionResult Update(string DNI, NewAlumno newAlumno)
        {
            if(DNI != newAlumno.DNI)
            {
                return BadRequest();
            }
            _context.Entry(newAlumno).State = EntityState.Modified;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{DNI}")]
        public ActionResult<NewAlumno> Delete(String DNI)
        {
            var alumno = _context.newAlumnos.Find(DNI);
            if(alumno == null)
            {
                return NotFound();
            }
            _context.newAlumnos.Remove(alumno);
            _context.SaveChanges();
            return alumno;
        }
    }
}
