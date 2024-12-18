//Dada una lista de números [1, 2, 3, 4]. Calcula la suma total de los números
//necesitamos calcular el resultado de sumarlos todos juntos. 
// Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.

const prompt = require('prompt-sync')()

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce( function (acumulador, numero){
    return acumulador + numero;
});

console.log(suma);

