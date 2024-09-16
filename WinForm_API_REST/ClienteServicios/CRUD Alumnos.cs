using Entidades;
using Negocio;

namespace ClienteServicios
{
    public partial class Form1 : Form
    {
        private Task<IEnumerable<NewAlumno>>? l;

        public Form1()
        {
            InitializeComponent();
        }

        public IEnumerable<NewAlumno> cargarTabla()
        {
            l = NewAlumnoNegocio.GetAll();
            return l.Result;
        }

        private async void btnListar_Click(object sender, EventArgs e)
        {
            Task<IEnumerable<NewAlumno>> task = new Task<IEnumerable<NewAlumno>>(cargarTabla);
            task.Start();
            dataGridView1.DataSource = await task;
        }

        private async void btnEliminar_Click(object sender, EventArgs e)
        {
            int filaSeleccionada = dataGridView1.SelectedRows[0].Index;
            await NewAlumnoNegocio.Delete(l.Result.ToList()[filaSeleccionada]);
            btnListar_Click(sender, e);
        }

        private void btnAgregar_Click(object sender, EventArgs e)
        {
            new Alta().ShowDialog();
            btnListar_Click(sender, e);
        }

        private void btnModificar_Click(object sender, EventArgs e)
        {
            int filaSeleccionada = dataGridView1.SelectedRows[0].Index;
            new Alta(l.Result.ToList()[filaSeleccionada]).ShowDialog();
            btnListar_Click(sender, e);
        }
    }
}
