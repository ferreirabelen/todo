function mayorDos(a,b){
    let resultado;
    if ( a > b){
        resultado = a
    }
    else{
        resultado = b
    }
    return resultado;
}

let numMayor = mayorDos(2,4)
console.log(numMayor)


console.log("-------")


//usar la funcion anterior 
function mayor3(a,b,c){
    return mayorDos(mayorDos(a,b),c)
}

let mayorDe3 = mayor3(1,2,3)
console.log(mayorDe3)



console.log("-------")


function mayor4(a,b,c,d){
    return mayorDos(mayor3(a,b,c),d)
}

let mayorDe4 = mayor4(10,20,30,40)
console.log(mayorDe4)