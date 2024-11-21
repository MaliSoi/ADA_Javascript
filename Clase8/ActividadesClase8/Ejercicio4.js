//Determinar si un numero es par o impar. Operadores aritmeticos y condicionales.
//1. Solicite al usuario que ingrese un numero entero.
//2.Determine si el numero es par o impar.
//3. Muestre un mensaje indicando si el numero es par o impar.

const prompt = require('prompt-sync')();

let numero = parseFloat (prompt ("Ingrese un numero entero:"));
let resultado = numero % 2;
if (resultado == 0) {
    console.log ("Par");
}else if (resultado!=0){
    console.log ("Impar");
}
//console.log ("Mostrar el resultado (true)"); este no hace falta


