
// let array1 = [false,1,0,1,2,0,1,3,"a"];

// function moverCeros (arr){
//     let primerArreglo = [];
//     let segundoArreglo = [];
//     let arregloFinal = [];
//     for( let i= 0 ; i < arr.length ; i++){
//         if( arr[i] === 0){
//             segundoArreglo.push(arr[i])
//         }
//     else {
//         primerArreglo.push(arr[i]);
//     }
//     arregloFinal = primerArreglo.concat(segundoArreglo);
//     }
//     return arregloFinal
// }

// console.log(moverCeros(array1))



// mostrar los numeros impares del 1 al 10
const myArray = [];
for(let i = 1; i < 10; i +=2){
    myArray.push(i);
}
console.log(myArray)



// desender en numeros impares
const myArray1 = [];
for (let i = 9; i >= 1; i -=2) {
    myArray1.push(i);
}
console.log(myArray1)

//CONTAR ELEMENTOS DE UN ARRAY
let NUEVOARRAY = [10,10,10]
let total = 0;
for (let i = 0; i < NUEVOARRAY.length; i++) {
    total += NUEVOARRAY[i];
}
console.log(total)
