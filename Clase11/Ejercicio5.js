//Encuentra los números pares entre dos valores
//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
//incluyendo los límites si son pares. 

const prompt = require('prompt-sync')();

let inicio = parseInt (prompt ("Ingrese un número entero inicial:"));
let final = parseInt (prompt ("Ingrese un número entero final:"));

//esto no funciona
//for (let vuelta = inicio %2 ==0; vuelta >= inicio && vuelta<= final;vuelta ++){
//    console.log ("Estos son los numeros pares:")
//}

//Hacemos estructura if para verificar si los valores son válidos

if (inicio >final){
    console.log("El número inicial no puede ser mayor que el número final. Intenta de nuevo");
} else {
    console.log(`Los números pares entre ${inicio} y ${final}, son:`)};

// Usamos un ciclo for para recorrer el rango

for (let i = inicio; i <= final; i++){
    if(i%2 ===0){
     console.log (i);
}
}
