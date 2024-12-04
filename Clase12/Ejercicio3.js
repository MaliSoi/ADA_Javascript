//Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive).

const prompt = require('prompt-sync')();

let x = parseInt (prompt("Ingrese un número: "));

let countOddNumbers = 0; 

    
    for (let i = 0; i <= x; i ++){
        if ((i % 2) !== 0){
           countOddNumbers ++;
        }
    }


    console.log("La cantidad de números impares desde 0 hasta " + x + " (inclusive) es: " + countOddNumbers);
   

// con las modificaciones que le fui haciendo no me salían los numeros y abajo el mensaje sin nada o mensajes por separada por cada numero impar.




