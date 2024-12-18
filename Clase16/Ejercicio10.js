//Construye una frase a partir de una lista de palabras
//Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], 
//queremos construir una frase completa concatenando cada palabra en orden, 
//separadas por espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.

let palabras = ['Me', 'gusta', 'aprender', 'JavaScript.'];

//let oracion =  palabras.join(' ');

//console.log(oracion);

let oracion = palabras.reduce(function(acum, palabra){
    return acum + "  " + palabra;
});

console.log (oracion);








