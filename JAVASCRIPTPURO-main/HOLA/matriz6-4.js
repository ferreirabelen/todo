let matriz = [
    [1,2],
    [3,4]
]

//mostrar el elemento 1,1
console.log(matriz[1][1])


//cambiar el elemento 1,0 de la matriz 
matriz[1][0] = 10


// COMO MOSTRAR LA PRIMERA FILA DE LA MATRIZ i
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[0][i])
    
}

//COMO IMPRIMIR LA PRIMERA COLUMNA DE LA MATRIZ j
for (let j = 0; j < matriz.length; j++) {
    console.log(matriz[j][0])
    
}

console.log(".......")

//recorre la matriz completa 

for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j< matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}







// //ejemplo PG 
// let arrayMatriz = []
// let arrayX=["x0","x1","x2"]
// let arrayY=["y0","y1","y2"]
// arrayMatriz[0] = arrayX
// arrayMatriz[1] = arrayY
// console.table(arrayMatriz)


