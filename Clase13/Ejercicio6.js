//Convertir a minutos
//Crea una función declarada llamada convertirHorasAMinutos 
//que reciba un número de horas como parámetro y devuelva el total en minutos.

const prompt = require('prompt-sync')()

function convertirHorasAMinutos (horas){
    return (horas * 60);
}

console.log ("7 horas en minutos son:", convertirHorasAMinutos (7));
