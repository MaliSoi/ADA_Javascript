//Concatenar nombres (función expresada)
//Crea una función expresada llamada concatenarNombres que reciba dos nombres
// (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.

const prompt = require('prompt-sync')()


const concatenarNombres = function (nombre, apellido){
    
    let nombreCompleto =  nombre + ' :) ' + apellido 
    return (nombreCompleto)
}

console.log ( concatenarNombres ("Malala", "Soifer"));

