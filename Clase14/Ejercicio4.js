//Solicita al usuario la cantidad de productos comprados y el precio unitario. 
//Usa una función flecha para calcular el total con descuento según la cantidad.


const prompt = require('prompt-sync')()

//Solicitar al usuario
const precioUnitario = parseFloat (prompt('Ingresa el precio por unidad del producto:'));
let cantidad = parseInt (prompt('Ingresa la cantidad de productos comprados:'));


//Calcular total con descuento

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let descuento=0
    if(cantidad < 5) descuento= 0.10;
    else if (cantidad > 5) descuento = 0.15;
    return (cantidad * precioUnitario)*(1- descuento);
}

let total = calcularTotalConDescuento (cantidad, precioUnitario);

console.log (`El total a pagar con descuento es: ${total}`);

