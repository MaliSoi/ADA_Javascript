//Calcula el total de ventas de productos seleccionados.
//Supón que tienes una lista de productos con sus precios en formato de objeto:
//const products = [
  //   { name: 'Laptop', price: 1000 },
  //   { name: 'Mouse', price: 25 },
  //  { name: 'Teclado', price: 50 },
  //  { name: 'Monitor', price: 200 },
  //  { name: 'Audífonos', price: 75 }
  //  ];
//  Queremos:
//Seleccionar los productos cuyo precio sea mayor o igual a 50.
//Obtener solo los nombres de esos productos.
//Calcular el precio total sumando los precios de los productos seleccionados.
//Imprime el total y los nombres de los productos seleccionados en la consola.
    
const products = [
      { name: 'Laptop', price: 1000 },
      { name: 'Mouse', price: 25 },
      { name: 'Teclado', price: 50 },
      { name: 'Monitor', price: 200 },
      { name: 'Audífonos', price: 75 }
      ];

let productosSeleccionados = products.filter (function(product){
    return product.price >= 50
});
//console.log(productosSeleccionados);

let soloNombres = productosSeleccionados.map (function(product){
    return product.name
});

//console.log(soloNombres);

let precioTotalSeleccionados = productosSeleccionados.reduce (function(acum, product){
    return acum + product.price
},0);

console.log(`El total de precios de los productos seleccionados: ${soloNombres} es ${precioTotalSeleccionados}`);
