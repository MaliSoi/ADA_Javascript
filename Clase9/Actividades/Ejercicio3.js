//Declara dos variables booleanas condicion1 y condicion2. 
//Pide al usuario que ingrese dos valores booleanos (true o false) 
//y muestra el resultado de diversas combinaciones lógicas.

//Este ejercicio mucho no lo entiendo pero estuve investigando un pco en internet. 

const prompt = require("prompt-sync")({ sigint: true });

let condicion1 = prompt("Ingresa el primer valor booleano (true o false):") === 'true';
let condicion2 = prompt("Ingresa el segundo valor booleano (true o false):") === 'true';

//no pasa nada mas..solo me pide de poner los valores pero despues no muestra los resultados
//de las combinaciones.

//console.log = ("condicion1:"), condicion1;
//console.log = ("condicion2:"), condicion2; 

//console.log = ("condicion1 AND condicion2:", condicion1 && condicion2 ); 
//console.log = ("condicion1 OR condicion2:", condicion1 || condicion2 ); 
//console.log = ("NOT condicion1 OR condicion2:", condicion1 || condicion2 ); 
//console.log = ("NOT condición 1:", !condicion1);
//console.log = ("NOT condición 2:", !condicion2);

