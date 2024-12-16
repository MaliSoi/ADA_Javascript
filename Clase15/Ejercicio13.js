//Simulador de una cola de atención al cliente.
//Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera 
// y un bucle que los atiende de a uno. Realiza lo siguiente:
//1.Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
//2.Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
//3.Al final, muestra cuántos clientes fueron atendidos en total.
//Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

let listaInicialDeClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"]
let contador = 0


// 1. Mientras haya clientes en la cola
while (listaInicialDeClientes.length > 0) {
    let clienteActual = listaInicialDeClientes.shift(); // Atender al primer cliente en la cola
    contador++;

// 2. Verificar si el cliente es VIP
if (clienteActual === "VIP") {
    console.log(`Atención prioritaria para: ${clienteActual}`);
} else {
    console.log(`Atendiendo a: ${clienteActual}`);
}
}

// 3. Mostrar cuántos clientes fueron atendidos
console.log(`Total de clientes atendidos: ${contador}`);