// Probando temas de la clase 8 
const prompt = require("prompt-sync")({ sigint: true });

let nombre = 'Malala';
const edad = 43
nombre = 'Agos'
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios`);

// probar distintos tipos de datos
let number = 42 ; // numero entero
let number2 = 26.89 //numero decimal
let text = 'Hi Girls!' //string
let boolean = true ; //can also be false
let undefined;//it will give me undefined
let nulo = null //empty value

console.log (`Numbers: ${number} and ${number2}`)
console.log (`Text: ${text}`)
console.log (`Boolean: ${boolean}`)
console.log (`Undefined: ${undefined}`)
console.log (`Nulo: ${nulo}`)

// Ahora probamos numeros. Operadores

let a = 10;
let b = 3;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

//operadores de comparacion

console.log (a > b)
console.log (a < b)
console.log (a === b)

//operadores logicos

console.log (true && false);
console.log (true || false);
console.log (!true);








































