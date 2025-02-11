//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let numeroa = parseFloat (prompt ("Ingresa un numero:"));
let numerob = parseFloat (prompt ("Ingresa un numero:"));
let numeroc = parseFloat (prompt ("Ingresa un numero:"));

if (numeroa > numerob && numeroc){
    console.log (`El mayor es ${numeroa}`);
}else if (numerob > numeroa && numeroc){
    console.log (`El mayor es ${numerob}`);
}else if (numeroc > numeroa && numerob){
    console.log (`El mayor es ${numeroc}`);
}
