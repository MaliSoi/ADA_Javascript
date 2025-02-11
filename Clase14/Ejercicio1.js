//Calcular el precio final con IVA
//Solicita al usuario el precio de un producto y el porcentaje de IVA. 
//Usa una función flecha para calcular el precio final.

const prompt = require('prompt-sync')()

//const precioProducto = num => {
 // return ((num * 21)/100) + num;
//}

//console.log (precioProducto(1000));

//no funciona y tampoco le estoy pidiendo al usuario que ingrese los datos. 

//precioBase
//IVA
//Y calcular precioFinal
 
const calcularPrecioBase = (precio ,porcentaje) => {
    const IVA = (precio * porcentaje)/100
    return precio + IVA;
};

//SOLICITAR LOS DATOS AL USUARIO

const precioProducto = parseFloat (prompt("Ingresa el precio base del producto:"));
const porcentajeIVA =  parseFloat (prompt("Ingresa el porcentaje del IVA:"));

//Calcular precio Final

const precioFinal = calcularPrecioBase (precioProducto, porcentajeIVA);

console.log (`El precio final del producto con un IVA del ${porcentajeIVA} es: $${precioFinal.toFixed(2)}`);






