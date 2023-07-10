const express = require("express")

const app = express()

// Declarando formato JSON
app.use(express.json())

app.get("/area/:base/:altura", (req, res) => {
    const { base, altura } = req.params

    const areaDeRectangulo = base * altura

    res.json({areaDeRectangulo})
})

// app.get("/:nombre/:apellido", (req, res) => {
//     const { nombre, apellido } = req.params

//     res.send(nombre + " " + apellido)
// })

 // REQ: Request
 // RES: Response
app.get("/", (req, res) => {
    res.send("Hola, esta es mi primera ruta!")
})



// Empiezo TP

app.use(express())

app.get("/area/:base/:altura", (req, res) => {
    const { base, altura } =req.params
    
    const areaDeRectangulo = (base * altura) / 2

    res.json({areaDeRectangulo})
})

// Ejercicio 2 (Lo hizo Nawe)

// app.get("/secuencia/:numero", (req, res) => {
//    const { numero } = req.params
//    const numeroANumero = Number(numero)
//
//    const arreglo = []
//
//    for(let i = 0; i < numeroANumero; i++) {
    //    arreglo.push(i)
  //  }
//
//    res.json(arreglo)
////})

// Ejercicio 3

app.get("/primo/:primo", (req, res) => {
    const { primo } = req.params
    const numeroANumero = Number(primo)

    for(let i = 2; i < numeroANumero; i++) {
        if (primo % i == 0) {
            res.send("numero no es primo")
        }
    }

    res.send("numero es primo")

    res.json(primo)
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
