using Entidades;
using Negocio;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ClienteServicios
{
    public partial class Alta : Form
    {
        public Alta()
        {
            InitializeComponent();
        }

        private async void btnAceptar_Click(object sender, EventArgs e)
        {
            NewAlumno newAlumno = new NewAlumno();
            newAlumno.DNI = txbDNI.Text;
            newAlumno.ApellidoNombre = txbApellidoNombre.Text;
            newAlumno.Email = txbEmail.Text;
            newAlumno.FechaNacimiento = dtpFechaNacimiento.Value;
            newAlumno.NotaPromedio = Convert.ToDecimal(txbNotaPromedio.Text);
            if (btnAceptar.Text == "Modificar")
            {
                await NewAlumnoNegocio.Update(newAlumno);
            }
            else
            {
                await NewAlumnoNegocio.Add(newAlumno);
            }
            Dispose();
        }

        private void btnCancelar_Click(object sender, EventArgs e)
        {
            Dispose();
        }

        public Alta(NewAlumno newAlumnoAModificar)
        {
            InitializeComponent();
            btnAceptar.Text = "Modificar";
            txbDNI.Text = newAlumnoAModificar.DNI;
            txbDNI.Enabled = false;
            txbApellidoNombre.Text = newAlumnoAModificar.ApellidoNombre;
            txbEmail.Text = newAlumnoAModificar.Email;
            dtpFechaNacimiento.Value = newAlumnoAModificar.FechaNacimiento;
            txbNotaPromedio.Text = Convert.ToString(newAlumnoAModificar.NotaPromedio);
        }
    }
}
