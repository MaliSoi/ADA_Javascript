//Declara dos variables numero1 y numero2. Pide al usuario que ingrese dos numeros y muestra cual es > o ==

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat (prompt ('Ingrese un numero:'));
let numero2 = parseFloat (prompt ('Ingrese otro numero:'));
if (numero1 > numero2){
    console.log ("numero1 es mayor")
}else if (numero2 > numero1){
    console.log ("numero2 es mayor")
}else{
  console.log ("numero1 y numero2 son iguales")  
}