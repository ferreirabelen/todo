const prompt = require("prompt-sync")({sigint:true});
//if ternario
let fruta = "manzana";
let resultado = fruta == "manzana" ? "que bueno, me gustan las manzanas" : "mal ahi, queria manzana";
console.log(resultado);

let dia2 = "viernes";
let resolver = dia2 == "Lunes" ? "no se sale, es lunes" : "se puede salir";
console.log(resolver);

//clase en vivo flujo de aplicaciones 14-03 
//agrega caminos
let edad = 21;

if (edad < 18){
    console.log("no podes pasar al bar");
}else if(edad < 21){
    console.log("Podes pasar al bar, pero no podes tomar alcohol");
}else if(edad <= 0){
    console.log("Error edad invalida, Por favor ingrese un numero valido")
} else{
    console.log("Felicidades, ya sos mayor de edad!! Podes pasar al bar y tomar alcohol")
}

//ABRIR PARACAIDAS

function abrirParacaidas(velocidad,altura){
    if (velocidad < 1000 && altura >= 2000 && altura < 3000){
        console.log("El paracaidas debe abrirse");
    }else{
        console.log("el paracaidas no se tiene que abrir")
    }
}

abrirParacaidas(900, 2000)


//traductor condicional
let valor = prompt("ingresar un valor : ")
switch(valor){
    case "casa":
        console.log("Home");
        break;
    case "perro":
        console.log("dog");
        break;
    case "pelota":
        console.log("ball");
        break;
    case "arbol":
        console.log("tree");
        break;
    case "genio":
        console.log("ginius");
        break;
    default:
        console.log("la palabra ingresada no es valida");

}

//valoracion de peliculas
let opinion =  prompt("ingresar su calificacion: ")
function valoracionPelicula(){
    switch(opinion){
        case "Muy mala":
            console.log("Calificaste la pelicula Muy mala. Lo lamentamos mucho");
            break;
        case "Mala":
            console.log("Calificaste la pelicula Mala, lo lamentamos mucho");
            break;
        case "Mediocre":
            console.log("Calificaste la pelicula Mediocre, lo lamentamos mucho");
            break;
        case "Buena":
            console.log("Calificaste la pelicula Buena, nos alegra que te haya gustado");
            break;
        case "Muy buena":
            console.log("Calificaste la pelucla muy buena, nos alegra mucho!!!!");
            break;
        default:
            console.log("Ingresaste un valor invalido");

    }
    console.log("Gracias por tu valoracion")
}

valoracionPelicula()



function totalAPagar(vehiculo,litrosConsumidos){
    vehiculo = prompt("vehiculo en uso: ");
    litrosConsumidos =  prompt("Litros usados: ");
    if (vehiculo == "coche"){
    pagar = 86 * litrosConsumidos;
    total = "el total a pagar va a ser " + pagar;
    console.log(total);
}else if(vehiculo == "moto"){
    pagar = 70 * litrosConsumidos;
    total = "el total a pagar va a ser " + pagar;
    console.log(total);
}else if (vehiculo == "autobus"){
    pagar = 55 * litrosConsumidos;
    total = "el total a pagar va a ser " + pagar;
    console.log(total);
}
}
totalAPagar()



//EJEMPLOS SWITCH EN FUNCIONES 
//switch 
let dia = 'lunes'
function finDeSemana (dia) {	
	switch (dia){
		case'viernes':
    		console.log('buen finde');
			break;
		case'lunes':
    		console.log('buena semana');
			break;
		default:
    		console.log('buen dia')
	}
	}

//switch otro ejemplo

let horario = "mediodia";
function tiempo(horario){
    switch(horario){
        case "de dia":
            console.log("es de dia")
            break;
        case "mediodia":
            console.log("es mediodia")
            break;
        case "noche":
            console.log("es d noche");
            break;
        default:
            console.log("intente nuevamente");
    }
}
tiempo(horario)

