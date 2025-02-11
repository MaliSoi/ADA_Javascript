//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
//Inicializa un array vacío para almacenar las flores favoritas.
//Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
//Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
//Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).

const prompt = require('prompt-sync')()

let floresFavoritas = [];

//preguntamos al usuario por sus tres flores favoritas. Agregamos manualmente

let flor1 = prompt ("¿Cual es tu primera flor favorita?");
floresFavoritas[0] = flor1;

let flor2 = prompt ("¿Cual es tu segunda flor favorita?");
floresFavoritas[1] = flor2;

let flor3 = prompt ("¿Cual es tu tercer flor favorita?");
floresFavoritas[2] = flor3;

//preguntamos por una flor especifica para verificar si esta entre sus favoritas

let florEspecifica = prompt("¿Qué flor quieres saber si está entre tus favoritas?");

let contador=0   //Inicializamos un contador para saber cuantas veces se menciona la flor especifica

//Recorremos el array de flores favoritas manualmente para contar coincidencias.

for(let i=0; i< floresFavoritas.length;i++){
    if (floresFavoritas[i].toLowerCase() === florEspecifica.toLocaleLowerCase()){
        contador ++;
    }
}
//Mostrar si la flor especifica está entre las favoritas

if (contador>0){
    console.log(`¡Sí! La flor "${florEspecifica}" está entre tus flores favoritas.`);
} else {
    console.log(`No, la flor "${florEspecifica}" no está entre tus flores favoritas.`);
}




