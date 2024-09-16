namespace ClienteServicios
{
    partial class Alta
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblDNI = new Label();
            lblApellidoNombre = new Label();
            lblEmail = new Label();
            lblFechaNacimiento = new Label();
            lblNotaPromedio = new Label();
            btnAceptar = new Button();
            btnCancelar = new Button();
            txbDNI = new TextBox();
            txbApellidoNombre = new TextBox();
            txbEmail = new TextBox();
            txbNotaPromedio = new TextBox();
            dtpFechaNacimiento = new DateTimePicker();
            SuspendLayout();
            // 
            // lblDNI
            // 
            lblDNI.AutoSize = true;
            lblDNI.Location = new Point(71, 47);
            lblDNI.Name = "lblDNI";
            lblDNI.Size = new Size(35, 20);
            lblDNI.TabIndex = 0;
            lblDNI.Text = "DNI";
            // 
            // lblApellidoNombre
            // 
            lblApellidoNombre.AutoSize = true;
            lblApellidoNombre.Location = new Point(71, 104);
            lblApellidoNombre.Name = "lblApellidoNombre";
            lblApellidoNombre.Size = new Size(136, 20);
            lblApellidoNombre.TabIndex = 1;
            lblApellidoNombre.Text = "Apellido y Nombre";
            // 
            // lblEmail
            // 
            lblEmail.AutoSize = true;
            lblEmail.Location = new Point(71, 167);
            lblEmail.Name = "lblEmail";
            lblEmail.Size = new Size(46, 20);
            lblEmail.TabIndex = 2;
            lblEmail.Text = "Email";
            // 
            // lblFechaNacimiento
            // 
            lblFechaNacimiento.AutoSize = true;
            lblFechaNacimiento.Location = new Point(71, 224);
            lblFechaNacimiento.Name = "lblFechaNacimiento";
            lblFechaNacimiento.Size = new Size(149, 20);
            lblFechaNacimiento.TabIndex = 3;
            lblFechaNacimiento.Text = "Fecha de Nacimiento";
            // 
            // lblNotaPromedio
            // 
            lblNotaPromedio.AutoSize = true;
            lblNotaPromedio.Location = new Point(71, 285);
            lblNotaPromedio.Name = "lblNotaPromedio";
            lblNotaPromedio.Size = new Size(111, 20);
            lblNotaPromedio.TabIndex = 4;
            lblNotaPromedio.Text = "Nota Promedio";
            // 
            // btnAceptar
            // 
            btnAceptar.Location = new Point(242, 387);
            btnAceptar.Name = "btnAceptar";
            btnAceptar.Size = new Size(94, 29);
            btnAceptar.TabIndex = 5;
            btnAceptar.Text = "Aceptar";
            btnAceptar.UseVisualStyleBackColor = true;
            btnAceptar.Click += btnAceptar_Click;
            // 
            // btnCancelar
            // 
            btnCancelar.Location = new Point(486, 387);
            btnCancelar.Name = "btnCancelar";
            btnCancelar.Size = new Size(94, 29);
            btnCancelar.TabIndex = 6;
            btnCancelar.Text = "Cancelar";
            btnCancelar.UseVisualStyleBackColor = true;
            btnCancelar.Click += btnCancelar_Click;
            // 
            // txbDNI
            // 
            txbDNI.Location = new Point(282, 44);
            txbDNI.Name = "txbDNI";
            txbDNI.Size = new Size(253, 27);
            txbDNI.TabIndex = 7;
            // 
            // txbApellidoNombre
            // 
            txbApellidoNombre.Location = new Point(282, 101);
            txbApellidoNombre.Name = "txbApellidoNombre";
            txbApellidoNombre.Size = new Size(253, 27);
            txbApellidoNombre.TabIndex = 8;
            // 
            // txbEmail
            // 
            txbEmail.Location = new Point(282, 164);
            txbEmail.Name = "txbEmail";
            txbEmail.Size = new Size(253, 27);
            txbEmail.TabIndex = 9;
            // 
            // txbNotaPromedio
            // 
            txbNotaPromedio.Location = new Point(282, 282);
            txbNotaPromedio.Name = "txbNotaPromedio";
            txbNotaPromedio.Size = new Size(253, 27);
            txbNotaPromedio.TabIndex = 11;
            // 
            // dtpFechaNacimiento
            // 
            dtpFechaNacimiento.Location = new Point(282, 219);
            dtpFechaNacimiento.Name = "dtpFechaNacimiento";
            dtpFechaNacimiento.Size = new Size(253, 27);
            dtpFechaNacimiento.TabIndex = 12;
            // 
            // Alta
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(dtpFechaNacimiento);
            Controls.Add(txbNotaPromedio);
            Controls.Add(txbEmail);
            Controls.Add(txbApellidoNombre);
            Controls.Add(txbDNI);
            Controls.Add(btnCancelar);
            Controls.Add(btnAceptar);
            Controls.Add(lblNotaPromedio);
            Controls.Add(lblFechaNacimiento);
            Controls.Add(lblEmail);
            Controls.Add(lblApellidoNombre);
            Controls.Add(lblDNI);
            Name = "Alta";
            Text = "Alta";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblDNI;
        private Label lblApellidoNombre;
        private Label lblEmail;
        private Label lblFechaNacimiento;
        private Label lblNotaPromedio;
        private Button btnAceptar;
        private Button btnCancelar;
        private TextBox txbDNI;
        private TextBox txbApellidoNombre;
        private TextBox txbEmail;
        private TextBox txbNotaPromedio;
        private DateTimePicker dtpFechaNacimiento;
    }
}