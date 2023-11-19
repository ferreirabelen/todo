//ejercicio 1 
// a - Los datos que contiene la variable alumnos es un array con objetos dentro que dentro contiene Id,strings(nombre y apellido), 
// number(legajo) y otro array que se encuetra vacio
// b - El archivo final.js es un array con objetos, una propiedad del array es la longitud, pero si vamos a los objetos estos tiene la propiedad clave valor,en este caso de cada alumno.
//punto 2 ejercicio 1
const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];

function ordenarPorLegajo(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 ; j++) {
            if(array[j].legajo > array[j+1].legajo){
                let temporal = array[j]
                array[j] = array[j+1]
                array[j+1] = temporal
            }
        }
    
    }
    return array
}
let ordenacion = ordenarPorLegajo(alumnos)
console.log(ordenacion)



//ejercicio 2 



let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

//Crear un método que retorne el promedio de notas. (*)
function promedioAlumno(array){
    let suma = 0;
    let promedio = 0;
    for(i = 0; i < alumno.notas.length; i++){
    suma = suma + array[i];
    let cant = array.length;
    promedio = suma / cant
}
return promedio;
}
let promedioFinal = promedioAlumno(alumno.notas);
console.log(" El promedio final es " + promedioFinal);


// Crear una función que ordene las notas del alumno de forma descendente. (*)
function ordenarNotas(){
    for (let c = 0; c < alumno.notas.length; c++) {
        for (let i = 0; i < alumno.notas.length - 1; i++) {
            if (alumno.notas[i] > alumno.notas[i + 1]) {
            let temporario = alumno.notas[i];
            alumno.notas[i] = alumno.notas[i + 1];
            alumno.notas[i + 1] = temporario;
            }
        }
    }
    return alumno;
}

let ordenacionNotas = ordenarNotas(alumno.notas);
console.log(ordenacionNotas)


// ejercicio 3 
//a
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

//b
function sumaMultiplos3(matriz){
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if( matriz[i][j] % 3 === 0){
                suma = suma + matriz[i][j]
            }
        }
    }
    return suma
}

let sumaMultiplos= sumaMultiplos3(miMatriz)
console.log(sumaMultiplos)


//c

function esParOimpar(matriz){
    let par = true;
    suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j]
            if(suma/2 === 0){
                par = false;
            }
        }
        
    }
    return par
}

let parONo = esParOimpar(miMatriz);
console.log(parONo)



//d
// Crear una función que retorne la suma de las diagonales de la matriz
function sumarDiagonal(matriz){
    let sumar = 0;
    for (let i= 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++){
            if (i === j){
                sumar = sumar + matriz[i][j]
            }
    }
}
return sumar;
}

let totalDiagonal = sumarDiagonal(miMatriz)
console.log(totalDiagonal);
