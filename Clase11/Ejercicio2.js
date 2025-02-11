//Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde.
// Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción.

const prompt = require('prompt-sync')();



 let color = prompt("Ingresar un color del semáforo:");

 // No me salia, hasta que investigue que poniendo esto podia funcionar y funciono: 
 color = color.trim().toLowerCase();

switch (color){
    case 'rojo':
         console.log("Alto, no puedes avanzar.");
         break;

    case 'amarillo':
         console.log("Precaución, prepárate para avanzar.");
         break;

    case 'verde':
         console.log("Avanza con seguridad.");
         break;

    default:
         console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
         break;
}