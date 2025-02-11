//Buscar la última posición de un elemento repetido
//Tienes una lista de números [2, 5, 7, 2, 8, 7]. 
// Encuentra y muestra la última posición en la que aparece el número 7.

const prompt = require('prompt-sync')()

let listaNumeros = [2, 5, 7, 2, 8, 7];

let indiceNumeroSiete = listaNumeros.lastIndexOf(7);
console.log ("Indice del número 7: ", indiceNumeroSiete);



