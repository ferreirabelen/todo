let matriz = [[1,2,3],[4,5,6]] 


for (let i=0  ; i < matriz[1].length ; i++) { //me estoy parando en la matriz 1 es decir en el index 1 de mi array por lo tanto me va mostrar [4,5,6]
    console.log(matriz[1][i]);                //si pusiera [0][i] me mostraria [1,2,3]
}        

console.log("--------------")


for (let i = 0  ; i < matriz.length ; i++) {  //me va a traer de todas las filas, todos los elementos de la columna 2 
    console.log(matriz[i][2]);              // me va a traer 3 y 6, si es [i][0] traeria 1 y 4 y si es [i][1] traeria 2 y 5 
}                                               

console.log("------------doble for--------------")  


//recorre TODA LA MATRIZ

let matrizDoble = [[6,7,8],[9,10,11]]
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j< matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}
// console.table(matrizDoble)
