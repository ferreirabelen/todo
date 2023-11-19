/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */
let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];
console.table(numeros)

function suma(array){
    let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if( array[i][j] >= 10 && array[i][j] < 1000) {
                sumaTotal = sumaTotal + array[i][j];
            }
    }
    }
    return sumaTotal

}

let resultado = suma(numeros);
console.log(resultado);