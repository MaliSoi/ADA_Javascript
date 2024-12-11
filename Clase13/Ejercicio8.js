//Crea una función 
//expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius
// y devuelva la temperatura en Fahrenheit.

const prompt = require('prompt-sync')()

function convertirCelsiusAFarenheit(gradosCelsius){
    return ((gradosCelsius * 9/5)+ 32)
}

console.log ("0 grados Celsius en grados Farenheit son:", convertirCelsiusAFarenheit(0));
