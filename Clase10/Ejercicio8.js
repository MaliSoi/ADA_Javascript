//Conversión de Temperaturas: Escribe un programa que convierta una 
//temperatura dada en grados Celsius a grados Fahrenheit.

const prompt = require('prompt-sync')();

let temp = parseFloat (prompt("Ingrese la temperatura en grados Celisus:"));

let farenheit = (temp * 9/5) +32

console.log (" En grados Celsius, la temperatura es de :" ,farenheit)

