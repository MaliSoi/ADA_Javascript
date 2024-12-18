//Encuentra los nombres más cortos y transforma su formato.
//Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
//Primero, filtra los nombres que tengan menos de 5 letras.
//Luego, transforma los nombres resultantes para que estén en mayúsculas.
//Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
//Al final, imprime la frase en la consola.

let personas = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

let nombresLetras = personas.filter(function (persona){
    return persona.length < 5;
});

console.log (nombresLetras);

let palabrasMayusculas = nombresLetras.map(function(palabra) {
    return palabra.toUpperCase();
});

//console.log(palabrasMayusculas);

let frase = palabrasMayusculas.reduce(function(acum, palabra){
    return acum + " , " + palabra;
});

console.log(`Los nombres seleccionados son: ${frase}`);
