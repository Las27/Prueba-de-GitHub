console.log("Hola, estoy enlazado!")

const inputOpcion1 = document.getElementById("opcion1")
const inputOpcion2 = document.getElementById("opcion2")
const botonDeDecidir = document.getElementById("decidir-button")

const listaDeOpciones = [0]

inputOpcion1.addEventListener("change", (e) => {
    listaDeOpciones[0] = e.target.value
})

inputOpcion2.addEventListener("change", (e) => {
    listaDeOpciones[1] = e.target.value
})

botonDeDecidir.addEventListener("click", () => {
    const indiceRandom = Math.floor(Math.random() * 10) % 2
    alert(`La decision fue: ${listaDeOpciones[indiceRandom]}`)
})
