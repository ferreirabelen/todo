const prompt = require("prompt-sync")({sigint:true});

suma = (n1,n2) => n1 + n2;
console.log(suma(4,2));

dameCinco = () => [1,2,3,4,5]
console.log(dameCinco())

multiplicarPorDos = () => 123 * 2;
console.log(multiplicarPorDos())

mostrarNombre = () => "Mi nombre es hernán";
console.log(mostrarNombre())


//ejercicio 2
let nombre = prompt("Escriba su nombre: ");
console.log("Hola" + " " + nombre + "!");

//ejercicio 3
let numero1 = parseInt(prompt("Ingresar un numero: "));
let numero2 = parseInt(prompt("Ingresar un segundo numero: "));
let suma = numero1 + numero2;
console.log("La suma de los dos numeros ingresados es: " + suma);



// // //ejercicio 4
let anioNacimiento = parseInt(prompt("Ingresar el año que naciste: "));
let anioActual = 2022;
let edad = anioActual - anioNacimiento;
console.log("Tenes " + edad + " años de edad");



// DE 20 EN 20 HASTA EL NUMERO 100
for(i = 0; i <= 100; i+=20){
    console.log(i)
}

// //otra forma de hacer el ejercicio 3  del 18-03
function pares(){
    for (let i=0; i < 100; i++){
        let pares = i % 2;
        if(pares == 0){
            console.log(i)
        }
    }
}
pares()






