//Calcular promedio de calificaciones
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require('prompt-sync')()

// Solicitar calificaciones al usuario
//const calificaciones = prompt("Ingresa las calificaciones separadas por comas:")
   // .split(",") // Separar por comas
   // .map(Number); // Convertir cada elemento a número

// Calcular el promedio
//const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;

// Mostrar el resultado
//console.log (`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);

//otra manera, puede ser:

const calcularPromedio = (calificaciones) => {
    let suma = 0
    for (let i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i];
    }
 return suma/calificaciones.length
};

let calificaciones =[];

for (let i= 0; i<5; i++ ) {
    calificaciones [i]= parseFloat(prompt(`Ingresa la calificacion ${i+1}:`));
}
let promedio = calcularPromedio (calificaciones);

console.log (`El promedio de las calificaciones es: ${promedio}`);




