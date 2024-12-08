//Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

const prompt = require('prompt-sync')()

let matriz= [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];

//variable para almacenar la suma
let suma = 0

//recorre las filas
for (let i= 0; i < matriz.length; i++){

    for(let j=0; j < matriz[i].length; j++){                          //recorre las columnas de cada fila
 if(matriz [i][j]>=10 && matriz [i][j]<1000){                         //verificamos si el numero esta entre el rango deseado
    suma += matriz [i][j];                                            //sumamos el numero si cumple con la condicion
 }
    }
}

console.log ('La suma de los valores deseados es:', suma);