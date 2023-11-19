//bucles ejercicio 2
let numero = 5;
function tresEnTres(){
    for (i = 5; i < 20; i+=3){
        console.log(i)
    }
}
tresEnTres(20);


//bucle ejrcicio 3
function sumatoria(){
    let suma = 0;
    for (i = 0; i <= 100; i++){
        suma = suma+i;
    }
    console.log(suma) 
}

sumatoria();


// bucle 4
function factorial(numero){
    let multiplicar = 1;
    for(let i = 1; i <= numero; i++){
        multiplicar = multiplicar * i;
    }
return multiplicar;
}
console.log(factorial(6))

//mostrarme los 10 numeros siguientes
function siguiente(num){
    let resultado = num
    for (i = 0; i <= 10; i++){
        resultado = num+i
        console.log(resultado)
    }
}
siguiente(20);
//otra forma de hacerlo
// let numero = 20
// for(i=0; i<10; i++){
//     console.log(numero+i)
// }


//array con for
const myArray2 = [];
for(let i = 1; i < 10; i += 2){
myArray2.push(i);
}
console.log(myArray2)



//decreciente me tiene que mostrar 9,7,5,3,1
const myArray3 = [];
for(let i=9; i >= 1; i-=2){
myArray3.push(i)
}



//no pares de contar impares
function noParesDeContarImparesHasta(numero){
    let suma = 0;
    for(let i = 0; i <= numero; i++ ){
        let inpar = i%2;
        if (inpar == 1){
            suma++;
        }
    }
    return suma;
}
resultado = noParesDeContarImparesHasta(15);
console.log(resultado)





//array con while
const myArray = [];
let i = 5;
while (i > 0) {
myArray.push(i);
i--;
console.log(i)
}



//while 
function multiplicar(n){
    let i = 0
    while(i <= 10){
        let resultado = n * i
        console.log(n + "*" + i + "=" + resultado);
        i++
    }
}
multiplicar(5)



