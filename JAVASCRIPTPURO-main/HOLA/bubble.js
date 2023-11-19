//ordenar numeros de un array de menor a mayor con bubble
let numeros = [3,8,7,4,1,5,9,6,2];
for (let i = 0; i< numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if(numeros[j] > numeros[j+1]){
            let temporal = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = temporal;
        }
    }
}

console.log(numeros)

//ordenar de mayor a menor 
let numeros2 = [12, 5, 13, 25, 69, 87, 4];

for (let c = 0; c < numeros2.length; c++){
    for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] < numeros2[i + 1]) {
        let temporario = numeros2[i];
        numeros2[i] = numeros2[i + 1];
        numeros2[i + 1] = temporario;
        }
    }
}

console.log(numeros2);





//ordenar lista de nombre por orden alfabetico 
let nombres = ["agus", "ivan","anahi","tincho","juampi","desu"];
for (let i = 0; i< nombres.length; i++) {
    for (let j = 0; j < nombres.length - 1; j++) {
        if(nombres[j] > nombres[j+1]){
            let temporal = nombres[j]
            nombres[j] = nombres[j+1]
            nombres[j+1] = temporal;
        }
    }
}

console.log(nombres)





//FUNCIONA AUNQUE NO ENTIENDO POR QUE 
// let numeros2 = [12, 5, 13, 25, 69, 87, 4];

// for (let c = 0; c < numeros2.length - 1; c++){
//     for (let i = 0; i < numeros2.length - 1; i++) {
//     if (numeros2[i] > numeros2[i + 1]) {
//         let temporario = numeros2[i];
//         numeros2[i] = numeros2[i + 1];
//         numeros2[i + 1] = temporario;
//     }
// }
// }

// console.log(numeros2);