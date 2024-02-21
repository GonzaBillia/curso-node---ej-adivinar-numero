const readlineSync = require("readline-sync")
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza')

const numeroUsuario = () => {
    return readlineSync.question("ingresa un numero: ")
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio()
    let numeroAdivinado = 0

    console.log("Adivina el Numero! \n")

    while(numeroAdivinado != numeroSecreto){
        numeroAdivinado = numeroUsuario()
        verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
}

juegoAdivinanza()