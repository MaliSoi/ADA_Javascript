//Define dos constantes, RANGO_MINIMO y RANGO_MAXIM, con valores numericos de tu eleccion. 
//Pide al usuario que ingrese un numero y verifica si esta dentro del rango definido por las constantes

const prompt = require("prompt-sync")({ sigint: true });

const minimumrange = +-0 -30;
const maximumrange = +30 -100;

let number = parseFloat (prompt ("Ingrese un numero del 0 al 100:"))
if (number >= 0 && number < 30){
    console.log ("RANGO_MINIMO");
} else if (number >= 30 && number < 100){
    console.log ("RANGO_MAXIMO");
}

