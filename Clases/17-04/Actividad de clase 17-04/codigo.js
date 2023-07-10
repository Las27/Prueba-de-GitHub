// 1

const lista = ["manzana", "naranja", "banana", "pera", "uva", "mandarina"]

const listaMapeada = lista.map((fruta) => fruta.length)
    console.log(listaMapeada)


// 2

const lista2 = [1, 2, 3, 4, 5, 6, 7]

const Busqueda = lista2.filter((numero) => numero > 5)
    console.log(Busqueda)

// 3

const lista3 = ["rojo", "marron", "azul", "purpura", "naranja"]

const listaReducida = lista.reduce((a, b) => a + ", " + b)
    console.log(listaReducida)

// 4

const lista4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista4.forEach((elemento) => {
    console.log("Este es el numero actual:", elemento * 2)
}) 