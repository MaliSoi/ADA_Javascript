//Crea un programa que le pida al usuario dos números y una operación matemática 
//a realizar: suma, resta, multiplicación o división. 
//Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
//Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.

const prompt = require('prompt-sync')();

let numero1 = parseFloat (prompt("Ingresa un numero:"));
let numero2 = parseFloat (prompt ("Ingresa otro número:"));

let operacion = prompt ("Elige la operación que deseas realizar: suma, resta, multiplicación o división: ").toLowerCase();

switch (operacion){

case "suma": 
    console.log (`El resultado de la suma es: ${numero1 + numero2}`);
     break;
case "resta":
    console.log (`El resultado de la resta es: ${numero1 - numero2}`);
     break;
case "multiplicación":
case "multiplicacion":
    console.log (`El resultado de la multiplicación es ${numero1 * numero2}`);
    break;
case "división": 
case "division":
    if (numero2 !== 0) {
    console.log (`El resultado de la división es: ${numero1 / numero2}`)
    } else {
     console.log (`Error: No se puede dividir entre 0.`);
    break;
    Default:
        console.log ("Operación no reconocida. Por favor, elige suma, resta, multiplicación y/o división.");
    }}
        


