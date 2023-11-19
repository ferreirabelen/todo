// Escribir una función que reciba un array de elementos e indique si se encuentran ordenados de menor a mayor o no.La función debe retornar un bool: true
//  si el array esta ordenado, false, si no.
// Comprueba tu función con los 2 arrays dif

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

function comprobarOrden(array){
    let ordenacion = true;
    for (let i= 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[i] > array[i+1]){
                ordenacion = false;
            }
            
        }
    }
    return ordenacion
}

let a = comprobarOrden(pruebaA)
console.log(a)

let b = comprobarOrden(pruebaB)
console.log(b)


// //  Escribir una función que reciba un array con nombres, y para cada nombre imprima el mensaje: Estimado (nombre) , vote por mí.

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

function votar(array){
    mensaje = "";
    for (let i = 0; i < array.length; i++) {
        console.log("Estimado " + array[i] + " vote por mi")
    }
}

votar(nombres)


//Teniendo 3 arrays: Cargarlos en una matriz y luego, hacer la suma de los valores horizontales de cada fila, los verticales de cada columna y las 2 diagonales, e imprimirlas por consola.

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

let matriz1 = [];
matriz1.push(fila1);
matriz1.push(fila2);
matriz1.push(fila3);

console.table(matriz1)


//sumar 1 fila
function sumarFila(matriz){
    let sumaHorizontal = 0
    for (let i= 0; i< matriz[0].length; i++) {
        sumaHorizontal = sumaHorizontal + matriz1[0][i]
}
return sumaHorizontal;
}

let suma = sumarFila(matriz1)
console.log(suma)


//muestra el resultado total de cada fila  
function sumarTodasLasFilas(matriz){
    let resultado = []
    for (let i= 0; i < matriz.length; i++) {
        let suma = 0
        for (let j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j]
        }
        resultado.push(suma)
    }
    return resultado
}

let totalFilas = sumarTodasLasFilas(matriz1)
console.log(totalFilas)

//hacer funcion total por fila y que me de 45 y otra de las columnas 


function diagonalPrincipal(matriz){
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

let primerdiagonal = diagonalPrincipal(matriz1)
console.log(primerdiagonal);


console.log("-------")



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