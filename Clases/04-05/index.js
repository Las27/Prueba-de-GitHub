console.log("Toy enlazado")

// SHIFT + ALT + FLECHA PARA ABAJO

const formulario = document.getElementById("formulario")
const inputNombre = document.getElementById("input-nombre")
const inputApellido = document.getElementById("input-apellido")
const inputDNI = document.getElementById("input-dni")

const listaDeClientes = document.getElementById("lista-de-clientes")

const arregloDeClientes = []

//TIMESTAP

const hoy = new Date().toLocaleDateString()

const clienteAInscribirse = {
    nombre: "",
    apellido: "",
    dni: "",
    fechaDeInscripcion: hoy
}




formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    clienteAInscribirse = {
        ...clienteAInscribirse,
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        dni: inputDNI.value
    }


    arregloDeClientes.push(clienteAInscribirse)

    arregloDeClientes.forEach((cliente) => {
        const ul = document.createElement("ul")

        for(const dato of Object.values(clienteAInscribirse)) {
            const li = document.createElement("li")

            li.innerText = `${dato}`

            ul.appendChild(li)
        }

        ul.innerHTML = `Nombre: ${cliente.nombre} \n Apellido: ${cliente.apellido} \n DNI: ${cliente.dni} \n Fecha de inscripcion: ${cliente.fechaDeInscripcion}`

        listaDeClientes.appendChild(ul)
    })
})

// Anotación Botones
const botonesFAQ = document.querySelectorAll(".boton-preguntas-frecuentes")

botonesFAQ.forEach((boton) => {
    boton.addEventListener("click", () => {  })
})


// FALTA TERMINAR