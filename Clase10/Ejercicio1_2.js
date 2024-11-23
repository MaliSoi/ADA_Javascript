//declarar dos variables: una con el nombre edad y la otra con el nombre peso. Después deberás asignarle un valor.
//Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y
// luego muestre un mensaje personalizado que incluya toda esta información.
//Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

const prompt = require('prompt-sync')();

let nombre = prompt ("Ingrese su nombre:");
let edad = prompt ("Ingrese su edad:");
let peso = prompt ("Ingrese su peso:");

console.log(`Su nombre es: ${nombre}, tiene ${edad} anios y pesa ${peso}k.s`);
