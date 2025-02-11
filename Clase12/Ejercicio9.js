//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.


const prompt = require('prompt-sync')()

let matrizGastos =[
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

function totalGastosSemana(semana) {
    let total = 0;
    for (let dia = 0; dia < matrizGastos[semana].length; dia++){
        total += matrizGastos[semana][dia]
    }
}

return total

console.log ("Los gastos de la semana, son:", totalGastosSemana);