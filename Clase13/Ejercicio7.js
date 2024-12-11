//Mensaje según la hora
//mostrarSaludo que imprima "Buenos días" si la hora es menor a 12,
// "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.

const prompt = require('prompt-sync')()

//me falto una variable y poner console.log en vez de return.

let hora = 21

function mostrarSaludo (){
    if(hora < 12){
        console.log  ("Buenos días");
    } else if (hora < 18){
        console.log ("Buenas tardes");
    }else{
        console.log ("Buenas noches")
    }
    }

   mostrarSaludo ();
