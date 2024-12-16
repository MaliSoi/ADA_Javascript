//Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
//  El último invitado no puede asistir. Elimina al último invitado y 
// muestra quién fue eliminado y el estado actualizado de la lista.

const prompt = require('prompt-sync')()

let listaInvitados = ['Ana', 'Juan', 'Carlos', 'Sofia'];

let invitadosQueNoAsisten = listaInvitados.pop();

console.log (listaInvitados);
console.log (invitadosQueNoAsisten);


