using System.ComponentModel.DataAnnotations;

namespace API_Rest_Net_Core.Models
{
    public class NewAlumno
    {
        [Key]
        public String DNI { get; set; }
        public String ApellidoNombre { get; set; }
        public String Email { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public decimal NotaPromedio { get; set; }
    }
}
