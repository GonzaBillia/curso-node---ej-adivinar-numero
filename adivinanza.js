const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado == numeroSecreto){
        console.log("Felicitaciones, adivinaste el numero!")
    }else if(numeroAdivinado > numeroSecreto){
        console.log("El numero secreto es menor")
    }else{
        console.log("El numero es mayor")
    }
}

module.exports = {generarNumeroAleatorio, verificarAdivinanza}