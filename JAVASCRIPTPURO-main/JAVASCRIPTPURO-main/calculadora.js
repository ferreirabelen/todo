const prompt = require("prompt-sync")({sigint:true});

let sumar = (numeroA, numeroB) => numeroA + numeroB;
let resta = (numeroC, numeroD)  => numeroC - numeroD;
let multiplicacion = (numeroE, numeroF) => numeroE * numeroF;
let division = (numeroG, numeroH) => numeroG / numeroH;

//suma

let numeroA = parseInt(prompt("ingresar el primer numero: "));
let numeroB = parseInt(prompt("ingresar el segundo numero: "));
resultadoSuma = sumar(numeroA, numeroB)
console.log("el resultado de la suma es: " +  resultadoSuma);

//resta

let numeroC = parseInt(prompt("ingresar el primer numero: "));
let numeroD = parseInt(prompt("ingresar el segundo numero: "));
resultadoResta = resta(numeroC, numeroD)
console.log("el resultado de la resta es: " +  resultadoResta);

//multiplicacion 
let numeroE = parseInt(prompt("ingresar el primer numero: "));
let numeroF = parseInt(prompt("ingresar el segundo numero: "));
resultadoMultiplicacion = multiplicacion(numeroE, numeroF)
console.log("el resultado de la multiplicacion es: " +  resultadoMultiplicacion);

division

let numeroG = parseInt(prompt("ingresar el primer numero: "));
let numeroH = parseInt(prompt("ingresar el segundo numero: "));
resultadoDivision = division(numeroG, numeroH)
console.log("el resultado de la division es: " +  resultadoDivision);
