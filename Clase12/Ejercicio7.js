//Matriz 5x5
//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
//Luego, escribe un algoritmo para sumar todos los números en la matriz.

const prompt = require('prompt-sync')()

//declarar matriz
let matriz = [
    [4,10,40,55,60],
    [50,60,75,80,90],
    [1,6,9,13,15],
    [6,7,40,22,23],
    [15,25,35,45,65]
];

//inicializa la variable para la suma
let suma = 0

//recorrer matriz e indicar para hacer la suma

for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        suma += matriz [i][j];
}
}
 console.log (" La suma de los valores de la matriz, es:",suma);