using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;
using Newtonsoft.Json;

namespace Negocio
{
    public class NewAlumnoNegocio
    {
        static readonly string defaultURL = "https://localhost:7170/api/NewAlumno/";
        public async static Task<IEnumerable<NewAlumno>> GetAll()
        {
            var response = await Conexion.Instancia.Cliente.GetStringAsync(defaultURL);
            var data = JsonConvert.DeserializeObject<List<NewAlumno>>(response);
            return data;
        }

        public async static Task<Boolean> Delete(NewAlumno newAlumno)
        {
            var response = await Conexion.Instancia.Cliente.DeleteAsync(defaultURL + newAlumno.DNI);
            return response.IsSuccessStatusCode;
        }

        public async static Task<Boolean> Add(NewAlumno newAlumno)
        {
            var response = await Conexion.Instancia.Cliente.PostAsJsonAsync(defaultURL, newAlumno);
            return response.IsSuccessStatusCode;
        }

        public async static Task<Boolean> Update(NewAlumno newAlumno)
        {
            var response = await Conexion.Instancia.Cliente.PutAsJsonAsync(defaultURL + newAlumno.DNI, newAlumno);
            return response.IsSuccessStatusCode;
        }
    }
}
