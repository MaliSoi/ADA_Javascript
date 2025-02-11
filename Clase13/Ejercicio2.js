//Número mayor (función expresada) 
//Crea una función expresada llamada encontrarMayor 
//que reciba dos números como parámetros y devuelva el número mayor.

const prompt = require('prompt-sync')()

const encontrarMayor = function (a, b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}
console.log ("El mayor de 30 y 100, es:", encontrarMayor (30, 100));