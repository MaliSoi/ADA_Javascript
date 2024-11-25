//Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula. 

const prompt = require('prompt-sync')();

let peso = parseFloat (prompt("Ingrese su peso en kilos:" ));
let altura = parseFloat (prompt("Ingrese su altura en metros:" ));

let imc = peso / (altura * altura);

//console.log ("Su IMC es de:" ,imc);

//y si le agrego lo de los decimales?

console.log ("Su IMC es de:" ,imc.toFixed(2));
