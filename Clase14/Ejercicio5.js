//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el 
//auto es de origen nacional o importado. Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.

const prompt = require('prompt-sync')()

let marcaAuto= prompt ('Ingresa la marca del auto:');

const verificarOrigenmarca = (marca) => {
let origen;
if (marca === 'Chevrolet'||marca === 'Ford'||marca === 'Fiat') {
     origen= `${marca} es de origen Nacional`;
}else{
origen= `${marca} es de origen Importado`;
}
return(origen)
};

let resultado = verificarOrigenmarca (marcaAuto);

console.log(resultado);