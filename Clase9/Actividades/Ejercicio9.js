//Define una constante PI con el valor de pi (3.14159). 
//Pide al usuario que ingrese el radio de un círculo y 
//calcula su área y perímetro utilizando la constante PI.

//formula perimetro de un círculo : 2 · r · π (3.14159)
//area de un circulo: Pi r al cuadrado 

const prompt = require('prompt-sync')();

let pi = 3.14

let radio = parseFloat (prompt ("Ingrese el radio de un círculo:"));

let area = pi * (radio**2);
let perimetro = (2 * radio) * pi;

console.log (`El área del círculo es: ${area} y su perímetro es: ${perimetro}`);




