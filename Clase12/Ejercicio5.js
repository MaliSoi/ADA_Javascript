//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario 
//ingresar un nombre y verifica si ese nombre se encuentra en el array. 
//(Pueden desglosar en pasos el código si eso les facilita su desarrollo)

const prompt = require('prompt-sync')()

//Crea un array para almacenar nombres, 5.

let names = [];
//const numberOfNames = 5;

//Pide al usuario que ingrese 5 nombres y los almacene en un array.

for (let i = 0; i < 5; i ++){
    let name = (prompt(`Ingresa los cinco nombres ${i+1} :`))
    names.push((name.toLowerCase()));
    }
    
    console.log ("Los nombres ingresados son:", names);

    //  Solicitar al usuario que ingrese un nombre para buscarlo
let searchName = prompt("Ingresa un nombre para verificar si está en la lista: ").toLowerCase();


// verificar si ese nombre se encuentra en el array. 
if (names.includes(searchName)) {
    console.log(`El nombre ${searchName} está en la lista.`);
  } else {
    console.log(`El nombre ${searchName} no está en la lista.`);
  }





