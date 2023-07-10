console.log("Enlazado")


// const botonRojo = document.getElementById("boton-rojo")

// botonRojo.addEventListener("click", () => {
//    document.body.classList.toggle("rojo")
// })



function mostrar(id)

{
    var objeto=document.getElementById(id)
            if(objeto.style.display=="block")
                objeto.style.display="none";
            else
                objeto.style.display="block";
}