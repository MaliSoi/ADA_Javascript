//Entrada de datos y el us de los operadores aritmeticos
//1. Pida al usuario que ingrese dos numeros 
//2. Sume ambos numeros 
//3. Muestre el resultado de la suma

//Prompt para recibir a los numeros. ParseFloat para convertir entrada en numeros. 
//Almacenar los resultados en variables adecuadas y muestra el resultado

const prompt = require('prompt-sync')();

let numeroa = parseFloat (prompt ("Ingrese un numero:"));
let numerob = parseFloat (prompt ("Ingrese otro numero:"));
//console.log ("Sumar ${a} y ${b}"); esto no funciono. probar otro
//console.log ("Mostrar resultado ( numeroa + numerob)"); tampoco!
//console.log ("Mostrar resultado (a + b)")
//console.log (" resultado ${numeroa + numerob}")
//console.log ("numeroa + numerob")
//console.log ("Mostrar resultado (a + b)")
//me fijo en respuestas
let suma = numeroa + numerob;
console.log ("La suma de los numeros es: " + suma);

//Tambien podria haber puesto numero1 y numero2


