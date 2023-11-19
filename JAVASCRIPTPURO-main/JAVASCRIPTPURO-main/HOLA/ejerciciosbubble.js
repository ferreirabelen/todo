//con bubble acomodarlos 

let likes = [
    {
        nombre : "Marcela",
        likes : 150
    },
    {
        nombre: "Gabi",
        likes : 54
    },
    {
        nombre : "Agustin",
        likes: 500
    }
]


function masLikes(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0;j < array.length - 1; j++) {
            if(array[j].likes < array[j+1].likes){
                let temporal = array[j]
                array[j] = array[j+1]
                array[j+1] = temporal
            }
        }
        
    }
    return array
}

let personaConMasLikes= masLikes(likes)
console.log(personaConMasLikes)


let climaSemana = [
    {
        dia : "Lunes",
        temMinima : 17,
        temMaxima : 28
    },
    {
        dia : "Martes",
        temMinima : 4,
        temMaxima : 16
    },
    {
        dia : "Miercoles",
        temMinima : 34,
        temMaxima : 20
    },
    {
        dia : "Jueves",
        temMinima : 12,
        temMaxima : 39
    },
    {
        dia : "Viernes",
        temMinima : 0,
        temMaxima : 26
    }

]

//ordenar temperatura minima de menor a mayor 
function temperaturaMin(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 ; j++) {
            if(array[j].temMinima > array[j+1].temMinima ){
                let temporal = array[j]
                array[j] = array[j+1]
                array[j+1] = temporal
            }
        }
    }
    return array
}

let resultadoTemMinima = temperaturaMin(climaSemana)
console.log("Dias ordenados por menor temperatura")
console.log(resultadoTemMinima)


//ordenar temperatura maxima de mayor a menor 
function temperaturaMax(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].temMaxima < array[j+1].temMaxima ){
                let temporal = array[j]
                array[j] = array[j+1]
                array[j+1] = temporal
            }
        }
    }
    return array
}
let resultadoTemMaxima = temperaturaMax(climaSemana)
console.log("Dias mas calurosos de mayor a menor ")
console.log(resultadoTemMaxima)























