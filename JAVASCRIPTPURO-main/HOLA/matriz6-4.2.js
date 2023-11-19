// Declara una variable que contenga una matriz,de 5x5 llena de puros numeros enteros y positivos
// Luego, escribe un algoritmo para sumar todos,los numeros en la matriz.

let matriz1 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

function sumarMatriz(matriz){                                 //suma total matriz 
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++){
            suma = suma + matriz[i][j]
        }
    }
    return suma;

}
let SUMA = sumarMatriz(matriz1)
console.log(SUMA)




//segundo ejercicio matriz 10x10
let miMatriz = [];
let numero = 1
for(let i=0; i<10; i++) {
    miMatriz[i] = [];
    for (j=0 ; j<10 ; j++){
    miMatriz[i][j] = numero+j
    }
    numero+= j
}

console.table(miMatriz)



//sumar diagonal principal 
function sumarRojo(matriz){
    let suma = 0;
    for (let i= 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++){
            if (i === j){
                suma = suma + matriz[i][j]
            }
    }
}
return suma;
}

let rojo = sumarRojo(miMatriz)
console.log(rojo);


//diagonal secundaria suma 


function diagonalSegundaria(matriz){
    let sumaDiagonal = 0;
    for(let i = 0 ; i < matriz.length ; i++){
        for( let j = 0 ; j <matriz[i].length ; j++){
            if(i+j == matriz.length - 1){                             //La diagonal secundaria es cuando el valor de suma entre fila y columna es igual al tamaño de la matriz
            sumaDiagonal = sumaDiagonal + matriz[i][j];
        }
        }
    }
    return sumaDiagonal

}
let total = diagonalSegundaria(matriz1)
console.log(total);



















