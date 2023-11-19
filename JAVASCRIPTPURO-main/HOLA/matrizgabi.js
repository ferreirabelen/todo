
let matriz = [
    [5, 1, 12, 24],
    [19, 2, 7, 11],
    [10, 3, 14, 27]
]

// CALCULAR LA SUMA TOTAL DE LA COLUMNA EN LA POSICION 1 ( RECORDA QUE EMPIEZA EN LA POSICION 0)

function sumaColumna(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
            suma = suma + matriz[i][1]
        }
        return suma;
    }

hola = sumaColumna(matriz);
console.log(hola)


//CALCULAR EL RESULTADO DE MULTIPLICAR TODO LOS ELEMENTOS DE LA FILA EN LA POSICION 2
function multiplicarFila(matriz){
    let multiplicacion = 1;
    for (let i = 0; i < matriz[2].length; i++) {
        multiplicacion = multiplicacion * matriz[2][i]
    }
    return multiplicacion
}

let resultadoMultiplicacion = multiplicarFila(matriz);
console.log(resultadoMultiplicacion)

//suma total de la matriz
function Suma(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j]
        }
        
    }
    return suma
}

let sumatotal = Suma(matriz)
console.log(sumatotal)


//matriz 5x5 con x numeros 
let nuevaMatriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]
console.table(nuevaMatriz)


// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS NUMEROS
function fullmulti(matriz){
    let resultado = 1;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
           resultado = resultado * matriz[i][j]
        }
        
    }
    return resultado
}

let multiMatriz = fullmulti(matriz);
console.log(multiMatriz)




