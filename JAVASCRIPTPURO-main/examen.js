const prompt = require("prompt-sync")({sigint:true});

let estudiante = {
    nombre : "Belen",
    apellido : "Ferreira",
    camada : 5,
    esParcial : true,
}


let nota = parseInt(prompt("Ingresar nota: "))
function situacionAlumno(nota){
    let mensaje;
    if (nota  >= 7 ){
        mensaje =  "Promocionado"
    }else if(nota >= 4 && nota < 7 ){
        mensaje ="debe rendir el examen final";
    }else{
        mensaje = "desaprobado";
    }
    return mensaje;
}

let condicionAlumno = situacionAlumno(nota)
console.log("El alumno obtuvo una nota igual a " + nota + "por lo tanto su condicion es "+ condicionAlumno)



//ejercicio 2
let clase = []

companiero1 = {
nombre : "Esteban",
apellido : "Piazza",
bimestre : 1
}

companiero2 = {
nombre : "Leandro",
apellido : "Borrelli",
bimestre : 1
}

companiero3 = {
nombre : "Martin",
apellido : "Cejas",
bimestre : 1
}

clase.push(companiero1);
clase.push(companiero2);
clase.push(companiero3);
console.log(clase);  //clase sin modificar nada 



function siguienteCursada(array){
    for (i=0; i<array.length; i++){
        array[i].bimestre = array[i].bimestre + 1
    }
    return array;
}
console.log(clase);  //clase sin modificar nada 
let incrementarBimestre = siguienteCursada(clase);
console.log(incrementarBimestre);




//tercer ejercicio 

function progresoAlumno(num,bool){
    const asistenciaMinima = 23;
    let mensaje;
    if(num < asistenciaMinima && bool == true){
        mensaje = "Aprobado"; 
    }else{
        mensaje = "Desaprobado"
    }
    return mensaje;
}

let resultado = progresoAlumno(15,true)
console.log(resultado)

