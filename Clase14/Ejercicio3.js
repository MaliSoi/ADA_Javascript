//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')()


let rangoEdad = (edad) => {
    if (edad >= 0 && edad <= 12){
        //console.log ('Usted es niño/a');
        return "Niño/a" ;
    } else if (edad>= 13 && edad <= 18){
        //console.log ('Usted es adolescente.');
        return "Adolescente" ;
    } else if (edad >= 19 && edad <= 59){
        //console.log ('Usted es adulto.');
        return "Adulto/a" ;
    }else if (edad >= 60){ 
        //console.log ('Usted es adulto mayor.');
        return "Adulto/a Mayor" ;
    } else{
        return "Edad no válida" ;
    }
}

let edad = parseInt (prompt('Ingrese su edad:'));

let clasificacion = rangoEdad(edad);

console.log(`La clasificación de la edad es: ${clasificacion}`);
        
