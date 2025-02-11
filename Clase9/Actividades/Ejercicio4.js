//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombre = prompt ("Ingresa tu nombre:");

//if (nombre == Maria){
    //console.log ("Igual a mi nombre");
//} else if  (nombre != Maria){
    //console.log ("No es igual a mi nombre")
//} esto no funciona..tendria que hacer algo ${}? Estuve buscando...

let miNombre = 'Maria'
if (nombre == miNombre){
console.log (`Hola,${miNombre},tu nombre es igual al mío!!:)` )
}else if (nombre != miNombre){
    console.log (`Hola,${nombre} tu nombre no es igual al mío`)
}


