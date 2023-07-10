// ACTIVIDAD 1 DE LA GUIA
const botonAlerta = document.getElementById("boton-alerta")

botonAlerta.addEventListener("click", () => {
    alert(`Funcionó la alerta!`)
})

// ACTIVIDAD 2 DE LA GUIA
const botonColor = document.getElementById("boton-color")

botonColor.addEventListener("click", () => {
  document.body.classList.toggle("color")  
})

// ACTIVIDAD 3
const botonEnviar = document.getElementById("alerta-enviado")