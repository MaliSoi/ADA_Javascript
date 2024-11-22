//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
//Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require('prompt-sync')();

//let1 = `lunes`
//let2 = `martes`
//let3 = `miércoles`
//let4 = `jueves`
//let5 = `viernes`
//let6 = `Sábado`
//let7 = `Domingo`

let numero = parseFloat (prompt ("Ingrese un número del 1 al 7:"))


//if (numero > 7 && numero < 0){ 
//   console.log ("Error. Por favor, elige un número del 1 al 7:");
// Investigue que se puede hacer con switch y parseint asi que voy a tratar de hacer de las dos maneras.

//if..if else

/*if (numero === 1){
console.log ("Lunes");
} else if (numero === 2){
console.log ("Martes");
} else if (numero === 3){
console.log ("Miércoles");
}  else if (numero === 4){
  console.log  ("Jueves");
} else if (numero === 5){
    console.log ("Viernes")
}  else if (numero === 6){
    console.log ("Sábado")      
} else if (numero === 7){
   console.log ("Domingo");
} else {
    console.log ("Error. Debes elegir un numero del 1 al 7.")
}/*

//Ahora pruebbo, SWITCH

