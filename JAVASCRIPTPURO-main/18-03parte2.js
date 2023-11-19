const prompt = require("prompt-sync")({sigint:true});


//ejercicio 1
let  primerNota = parseInt(prompt("Ingresar primera nota:"));
let  segundaNota = parseInt(prompt("Ingresar segunda nota:"));
let  tercerNota = parseInt(prompt("Ingresar tercer nota:"));

function promedio(){
    let promedio = (primerNota + segundaNota + tercerNota)/3;
    let msj;
    if (promedio >= 7){
        msj= "Pasaste la materia con una nnota final de " + promedio

    }else{
        msj = "No llegaste a cumplir los requisitos para pasar la materia"
    }
    return msj;
}
let notaFinal = promedio(primerNota,segundaNota,tercerNota)
console.log("El comunicado es : " + notaFinal)





//jercicio2 ;
let dolarBlue = 202.50;
let dolarOficial = 115;
let pesos = parseInt(prompt("Ingresar pesos argentinos: "));


function pesosADolares(pesos,dolar){
    let calcular = pesos/dolar;
    let cambio = calcular;
    console.log(cambio)

}
pesosADolares(pesos,dolarBlue);
pesosADolares(pesos,dolarOficial);





//ejercicio 3
for(let i=0; i <= 10; i++){
    if( i%2 == 0){
        console.log("tu numero es par " + i);
    }else{
        console.log("tu numero es impar " + i);
    }
}

//ejercicio 5
let numero = parseInt(prompt("Ingresar un numero: "))

if (numero%2 == 0){
    console.log("El numero que ingresaste es par")
}else{
    console.log("El numero que ingresaste es impar")
}

// //ejercicio 6
let usuario = prompt("Ingrese usuario: ");
let clave = parseInt(prompt("Ingrese clave: "))
function acceso(){
    if (usuario == "ADMIN" && clave == "123456"){
        console.log("ACCESO PERMITIDO");
    }else {
        console.log("ACCESO DENEGADO");
    }
}
acceso(usuario,clave);



//LISTAR NUMEROS 
let numeroIngresado = parseInt(prompt("Ingrese un numero: "))
for(let i=0; i <= numeroIngresado; i++){
    console.log(i)
}




//colocar en mi nuevo array numeros de dos en dos hasta llegar al 10
const myArray = [];
for(let i = 1; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray)
