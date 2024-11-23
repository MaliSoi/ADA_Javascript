//Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. 
//Además, realizar operaciones y validaciones adicionales sobre estos valores.

const prompt = require('prompt-sync')();

let verdadero = true;
let texto = 'Hola gente!,'
let numero = 40.5
let nada = null

let resultado = ( numero + 50)
console.log ("El resultado de la suma, es:", resultado);

let saludo = texto + "¿ Cómo están? ";
console.log ("saludo:",saludo)

if (verdadero) {
    console.log ("La variable 'verdadero'es true.");
}else{
    console.log ("La variable 'verdadero' es false.");
}

if ( nada === null){
    console.log ("La variable 'nada'es null.");
} else{
    console.log ("La variable 'nada'no es null.");
}


