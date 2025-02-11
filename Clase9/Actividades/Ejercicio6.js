//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
//Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();

let edad = parseFloat (prompt ("Ingrese su edad:"));

if (edad >= 18){
    console.log ("Es mayor de edad")
}else if (edad < 18){
    console.log ("Es menor de edad")
}