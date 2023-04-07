import { jsPDF } from "jspdf";

const boton_enviar = document.querySelector(".boton-enviar");
const boton_cerrar = document.querySelector(".boton-cerrar");
const boton_aceptar = document.querySelector(".boton-aceptar");
const boton_exportar = document.querySelector(".boton-imprimir");
const mensaje = document.querySelector(".mensaje-confirmacion");
const section_reclamos = document.getElementById("reclamos");
const miFormulario = document.getElementById('miFormulario');

boton_enviar.addEventListener('click', (e) => {
    e.preventDefault();
    mensaje.style.display = "block";
    section_reclamos.style.opacity = "0.3";
    // Obtener los valores de los campos de formulario input y textarea
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const reclamo = document.getElementById("reclamo").value;

    // Establecer el texto de los elementos p correspondientes
    document.getElementById("mensaje_nombre").innerHTML = `Nombre: ${nombre}`;
    document.getElementById("mensaje_email").innerHTML = `Email: ${email}`;
    document.getElementById("mensaje_tel").innerHTML = `Telefono: ${telefono}`;
    document.getElementById("mensaje_reclamo").innerHTML = `Reclamo: ${reclamo}`;
})
boton_cerrar.addEventListener('click', (e) => {
    mensaje.style.display = "none";
    section_reclamos.style.opacity = "1";
    e.preventDefault();
})
boton_exportar.addEventListener('click', (e) => {
  // Crear un nuevo objeto jsPDF
  const pdf = new jsPDF();
  // Obtener el contenido HTML de los elementos p
  const contenidoHTML = document.getElementById("mensaje_nombre").outerHTML
                        + document.getElementById("mensaje_email").outerHTML
                        + document.getElementById("mensaje_tel").outerHTML
                        + document.getElementById("mensaje_reclamo").outerHTML;
  // Agregar el contenido HTML al PDF
  pdf.html(contenidoHTML, {
    callback: function(pdf) {
      // Descargar el archivo PDF
      pdf.save("reclamo.pdf");
    }
  });
})
boton_aceptar.addEventListener('click', (e) => {
    mensaje.style.display = "none";
    section_reclamos.style.opacity = "1";
    e.preventDefault();
})
miFormulario.addEventListener('submit', (event) => {
  event.preventDefault();

})
