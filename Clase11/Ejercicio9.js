//Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete.
// El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. 
//Usa un ciclo for para realizar la cuenta regresiva.

const prompt = require('prompt-sync')();



let inicio = 10;
let final = 0;

console.log ("Iniciando la cuenta regresiva ...");

for (let i = inicio; i>= final; i--) {
    console.log (i) ;
}

console.log ("¡ Despegue !");
