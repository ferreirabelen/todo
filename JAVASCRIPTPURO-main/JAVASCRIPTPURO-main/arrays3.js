//mi forma 
let alicia = [ 10, 80, 75];
let bob = [ 90, 20, 25];

function encontrarGanador(a,b){
    puntosAlicia = 0;
    puntosBob = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] < b[i]){
            puntosBob = puntosBob + 1;
        }
        else if(a[i] > b[i]){
            puntosAlicia = puntosAlicia + 1;
        }
    }
    if(puntosAlicia > puntosBob ){
        console.log("alicia gano con " + puntosAlicia + " puntos");
    }else if(puntosAlicia < puntosBob ) {
        console.log("bob gano con " + puntosBob + " puntos");
    }else{
        console.log("que se haga un nuevo concurso");
    }
}
encontrarGanador(alicia,bob);





function digitalHouse(a, b) {
    for (let i = 1; i <= 100; i++) {
    let resultado = i;
    if (i % a === 0 && i % b === 0) {
    resultado = "Digital House";
    } else if (i % a === 0) {
    resultado = "Digital";
    } else if (i % b === 0) {
    resultado = "House";
    }
    console.log(resultado);
    }
    }

digitalHouse(2,7)


//loop de pares
function pares(n){
    for(i = 0; i < 100;i++){
        let suma = i + n;
        let total = suma % 2
        if(total == 0){
            console.log("el numero " + suma+ " es par")
        }else{
            console.log(i)
        }
    }
}
pares(6)



//nuevo arreglo
const array = [];
function nuevoArreglo(num){
    for(i = 0; i <= num;i++){
        array.push(i);
    }
    console.log(array);

}
nuevoArreglo(10);
nuevoArreglo(15);





//loop impares 
function impares(n,str){
    for(i = 0; i < 100;i++){ 
        suma = i + n
        total = suma % 2
        if(total != 0){
            console.log(str)
        }else{
            console.log(i)
        }
    }
}
impares(4,"hola")

//sumaria 
function sumatoria(num){
    let contador = 0;
    for(let i = 1; i <= num; i++){
    contador = contador + i;
    }
    return contador;
    }
total = sumatoria(7)
console.log(total)

//funcion split
function split(str){
    let array = [];
    for(let i = 0; i < str.length; i++){
        array.push(str[i])
    }
    console.log(array)

}

split("hola")