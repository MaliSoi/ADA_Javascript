//Manipulación Completa de un Objeto Literal y Arrays
//Crea un objeto literal que represente un estudiante. 
//El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
//Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
//1.Agregar una nueva nota al array de notas.
//2.Eliminar la primera nota del array.
//3.Calcular el promedio de las notas restantes.
//4.Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”.
//5.Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.

let estudiante = {
    nombre: 'Jaime',
    edad: 25,
    notas : [ 7, 9, 6, 9, 8]
    }

function procesarEstudiante(estudiante, nuevaNota) {
         // Agregar una nueva nota al array de notas
         estudiante.notas.push(nuevaNota);
         //Eliminar la primera nota del array.
         estudiante.notas.shift();
         //Calcular el promedio de las notas restantes.


    };
    procesarEstudiante(estudiante, 10);

    console.log (estudiante);
        

