//Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
//Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.

const prompt = require('prompt-sync')();

let precioOriginal = parseFloat (prompt("Ingrese el precio Original:"));
let porcentajeDescuento = parseFloat (prompt("Ingrese el porcentaje del Descuento:"));

let precioFinal = precioOriginal * (porcentajeDescuento / 100);

console.log ("El precio final, es:" ,precioFinal);

