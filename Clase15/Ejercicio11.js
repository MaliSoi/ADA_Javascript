//Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
//let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//Debes realizar las siguientes acciones:
//1.Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
//2.Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
//3.Eliminar el primer producto del inventario.
//4.Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

const prompt = require('prompt-sync')()

////1.Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

inventario.push ("Impresora");

console.log(inventario);

//2.Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
if (inventario.includes("Tablet")){
    console.log ("La Tablet está en el inventario.")
} else {
    console.log ("La Tablet no está en el inventario.")
};

//3.Eliminar el primer producto del inventario.
let primerObjeto = inventario.shift();

console.log (inventario);
console.log ("Objeto eliminado:", primerObjeto);

//4.Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

let separadoPorComa = inventario.join();
console.log ("Inventario actualizado:", separadoPorComa);







