function creaMatriz() {
    let matriz=[];
        for (let i = 0; i < 3; i++) {
            let fila=[];
        for (let j = 0; j < 3; j++) {
            fila.push(j+i+2);
        }
    matriz.push(fila);
    }
return matriz;
}


let miMatriz = creaMatriz();
console.table(miMatriz);



function esParOimpar(matriz){
    let par = false;
    suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j< matriz[i].length; j++) {
            suma = suma + matriz[i][j]
        }
    }
    if (suma % 2 === 0){
        par = true;
    }
    return par
}

let parONo = esParOimpar(miMatriz);
console.log(parONo)
