//Crea un programa que le pida al usuario un número positivo. 
//El programa deberá contar desde el 1 hasta ese número e 
//imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

const prompt = require('prompt-sync')();

let numero = parseFloat (prompt ("Ingrese un número positivo:"));

for (let vuelta = 1; vuelta <= numero; vuelta ++){
    console.log ("Este es el numero:" +vuelta);
}

