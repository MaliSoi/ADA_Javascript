//Encuentra el primer número mayor a 10.
//Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número 
// de la lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el 
// primer número que cumpla esta condición, no todos los números que lo hagan.

const prompt = require('prompt-sync')()

let numeros = [5, 8, 12, 20, 3];

//let miNumero = numeros.find(function(numero){
    
   // return numero > 10;
    
//});

let miNumero = numeros.find (numero => numero > 10);

console.log(miNumero);
