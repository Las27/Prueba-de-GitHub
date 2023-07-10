console.log("AHHHH")

let contenidoDeLaRespuesta = []

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((respuesta) => respuesta.json())
  .then((datos) => { 
    contenidoDeLaRespuesta = datos
  })
  .catch((error) => console.log(error))

  const Lista = document.getElementById("lista")

  Lista.array.forEach((lista) => {
    const li = document.createElement("lista")
  
    li.innerHTML = 
    <note>${lista}</note>


    lista.appendChild(li)
})