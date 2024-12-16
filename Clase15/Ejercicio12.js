//Clasificación de palabras según su longitud.
//Tienes una lista de palabras en una oración. Debes:
//1.Dividir la oración en palabras individuales.
//2.Clasificar las palabras en dos categorías:
//Cortas (menos de 5 letras)
//Largas (5 letras o más)
//3.Mostrar ambas listas de palabras clasificadas.
//4.La oración es: "JavaScript es un lenguaje poderoso y versátil".

let oracion= "JavaScript es un lenguaje poderoso y versátil";

//1.Dividir la oración en palabras individuales.
let palabras = oracion.split(" ");
console.log("Palabras individuales:", palabras);

//2.Clasificar las palabras en dos categorías:Cortas (menos de 5 letras)/ Largas (5 letras o más)

let palabrasCortas = [];
let palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras [i].length <5){
        palabrasCortas.push(palabras[i]);
    } else {
        palabrasLargas.push(palabras[i]);
    }
}

//3.Mostrar ambas listas de palabras clasificadas.

console.log ("PalabrasCortas:" , palabrasCortas);
console.log ("PalabrasLargas:", palabrasLargas);








