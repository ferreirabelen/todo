// Tenemos un array con palabras sueltas que, juntas, forman una gran frase,utilizando un método de array sobre arrayFrase,
// convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];
let fraseNueva = arrayFrase.join(" ");
console.log("la frase completa es: " + fraseNueva);

// Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
// Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
let estudiantes = [
    {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
    },
    {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
    },
    {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
    }
];

let alumnoEgresado = estudiantes.pop();
console.log(alumnoEgresado);

// Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
let estudiantes2 = [
    {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
    },
]

estudiantes2.push({
    nombre: 'Juan',
    promedio : 5,
    curso : 'iOS',
    });

console.log(estudiantes2);

//length, nos devuelve un numero
let texto = "hola soy un string";
console.log(texto.length);


//ejercicio string 
function reemplazoFastFast(){
    let texto = "soy un string";
    texto = texto.replace("string","variable");
    return texto;
}
let mostrar = reemplazoFastFast();
console.log(mostrar)


//me muestra que tipo de dato es 
function tipo(string){
    let tipo = typeof string;
    return tipo;
}

let M = tipo(true);
console.log(M)


// Realizar una función que, dada una lista, devuelva una nueva lista cuyo contenido sea igual a la original pero invertida.

let comprar= ["corrector de ojeras", "mascarillas", "serum"];

function reves(array){
    let comprarDeNuevo = []
    for(let i = 0;i < array.length; i++){
        comprarDeNuevo.unshift(array[i])
    }
    return comprarDeNuevo
}

let resultado = reves(comprar)
console.log(resultado)