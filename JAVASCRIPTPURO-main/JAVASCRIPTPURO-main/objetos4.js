let misMascotas = [];

let gato = {
    nombre : "michi",
    raza : "michi",
    edad : 4,
    sonido : "miau",
    hacersonido : function(){
        return this.sonido + this.sonido;
    }
}
let perro = {
    nombre : "navi",
    raza : "caniche",
    edad : 3,
    sonido : "wof",
    hacersonido : function(){
        return this.sonido + this.sonido;
    }
}
let canario = {
    nombre : "tuito",
    raza : "canario",
    edad : 25,
    sonido : "pio pio",
    hacersonido : function(){
        return this.sonido + this.sonido;
    }
}

misMascotas.push(gato);
misMascotas.push(perro);
misMascotas.push(canario);
console.log(misMascotas)

//aumenta la edad de todos en 1 
function aumentarEdad(array){
    for(i=0; i<array.length; i++){
        array[i].edad = array[i].edad + 1
    }
    return array;
}
// misMascotasModificadas = aumentarEdad(misMascotas)
// // console.log(misMascotasModificadas)



//aumenta la edad dependiendo la edad de la mascota

function aumentarEdad2(array){
    for(i=0; i<array.length; i++){
        if(array[i].edad < 6){
            array[i].edad = array[i].edad + 1
        }
        else if(array[i].edad >= 6 && array[i].edad <= 10){
            array[i].edad = array[i].edad + 2;

        }
        else{
            let mitad = array[i].edad / 2
            array[i].edad = array[i].edad + mitad ;
        }
    }
    return array;
}
// misMascotasModificadas2 = aumentarEdad2(misMascotas)
// console.log(misMascotasModificadas2)


//agregar un identificador
function agregarID(array){
    for(i = 0; i < array.length; i++){
        array[i].identificador = i + 1
    }
    return array;
}
let h = agregarID(misMascotas);
console.log(h)


//eliminar a una mascota
function eliminarRaza(array){
    for(i=0; i<array.length; i++){
        delete array[i].raza;
    }
    return array;
}
let a = eliminarRaza(misMascotas);
console.log(a)