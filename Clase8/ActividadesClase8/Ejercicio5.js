//Saludo Personalizado. Cadenas de texto y funcione prompt ()
//1. Solicite al usuario que ingrese su nombre
//2. Muestre un saludo persoanlizado usando nombre ingresado.
//Utiliza prompt() para recibir el nombre del usuario.Muestra un mensaje utilizando concatenacion de cadenas.

const prompt = require('prompt-sync')();

//let nombre = parseFloat (prompt ("Ingrese su nombre:")); parseFloat sirve para numeros

let nombre = (prompt ("Ingrese su nombre:"));
console.log (`Hola ${nombre}!`);

