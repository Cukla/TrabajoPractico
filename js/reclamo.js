const boton_enviar = document.querySelector(".boton-enviar"); 
const boton_cerrar = document.querySelector(".boton-cerrar");
const boton_aceptar = document.querySelector(".boton-aceptar");
const mensaje = document.querySelector(".mensaje-confirmacion");
const section_reclamos = document.getElementById("reclamos");

boton_enviar.addEventListener('click', (e) => {
    e.preventDefault();
    mensaje.style.display = "block";
    section_reclamos.style.opacity = "0.3";
})
boton_cerrar.addEventListener('click', (e) => {
    mensaje.style.display = "none";
    section_reclamos.style.opacity = "1";
    e.preventDefault();
})
boton_aceptar.addEventListener('click', (e) => {
    mensaje.style.display = "none";
    section_reclamos.style.opacity = "1";
    e.preventDefault();
})