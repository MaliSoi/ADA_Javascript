//Eliminar espacios innecesarios
//Tienes la siguiente cadena con espacios adicionales.
// " Hola, mundo! "
//Elimina los espacios al inicio y al final y muestra la cadena resultante.

const prompt = require('prompt-sync')()

let frase = " Hola, mundo! "
//console.log (frase.trim());

let fraseLimpia = frase.trim(); 
console.log("Frase limpia:", `"${fraseLimpia}"`);
