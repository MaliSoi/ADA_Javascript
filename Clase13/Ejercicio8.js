//Crea una función 
//expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius
// y devuelva la temperatura en Fahrenheit.

const prompt = require('prompt-sync')()

function convertirCelsiusAFarenheit(gradosCelsius){
    return ((gradosCelsius * 9/5)+ 32)
}

console.log ("0 grados Celsius en grados Farenheit son:", convertirCelsiusAFarenheit(0));


//creo que use funcion declarada en vez expresada. 

//La expresada seria asi:
//const convertirCelsiusAFahrenheit = function (celsius) {
//    let fahrenheit = (celsius * 9 / 5) + 32; // Variable local
//    return fahrenheit;