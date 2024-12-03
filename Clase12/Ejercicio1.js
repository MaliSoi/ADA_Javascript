//  Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números continuamente 
//hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

//utilicé gtp para guiarme a netender el razonamiento de la solución del problema.

let suma = 0 //se inicia la variable suma en 0 para acumular los números.

while (true) { //permite iterar continuamente hasta que encuentre una condición para salir.

let numero = parseFloat (prompt( "Ingresa un número entero (ingresa un número negativo para salir):"));

if (numero < 0) {  // si el número es negativo sale
  break;
}

suma += numero;
}

console.log ("La suma de todos los números ingresados es:",suma)