//Escribe un programa que solicite al usuario ingresar una contraseña.
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el
// usuario ingrese la correcta. La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

let contrasenia ;
const contraseniaCorrecta = "1234";

do{
    contrasenia = prompt ("Por favor, ingresa la contraseña:");
    if (contrasenia !== contraseniaCorrecta){
        console.log ("Contraseña incorrecta, intentá de nuevo.");
    }
}while (contrasenia !== contraseniaCorrecta)
    console.log ("¡Contraseña correcta!,¡Bienvenida! ")

