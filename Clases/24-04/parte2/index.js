
/* const botonMostarVentana = document.getElementById("mostrar-ventana-boton")
const ventanaDelMensaje = document.querySelector(".ventana-mensaje")

botonMostarVentana.addEventListener("click", () => {
    ventanaDelMensaje.classList.toggle("visible")
}) */

const burguer = document.getElementById("burguer-btn")
const menu = document.getElementById("menu")

burguer.addEventListener("click", () => {
    menu.classList.toggle("visible")
})