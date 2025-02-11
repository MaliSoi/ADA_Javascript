//1. pedir usuario que ingrese el precio original del producto (Entrada)
//2. pedir usuario que ingrese el porcenyaje de descuento (Entrada)
//3. Calcular descuento usando formula
//4. Calcular precio final usando formula
//5. Mostrar precio final al usuario (Salida)

const prompt = require('prompt-sync')();


let precioOriginal = parseFloat (prompt ('Ingrese el precio original de producto:'));
let porcentajeDescuento = parseFloat (prompt ('Ingrese descuento de producto:'));
if (precioOriginal >0 && porcentajeDescuento >= 0 && porcentajeDescuento <=100){
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log ('El precio final despues del descuento es:', precioFinal);
} else { 
    console.log ("Por favor, ingresa valores validos");
}




