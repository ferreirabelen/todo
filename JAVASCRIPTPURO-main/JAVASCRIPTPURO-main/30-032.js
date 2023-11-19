//arrays y clases
const arrayCuentas =[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$5.253,40",
    edadTitular: 33,
    tipoCuenta: "sueldo"
},
{
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3.229,45",
    edadTitular: 27,
    tipoCuenta: "sueldo"
},
{
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1.360,19",
    edadTitular: 34,
    tipoCuenta: "corriente"
},
{
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: "$7.627,12",
    edadTitular: 30,
    tipoCuenta: "sueldo"
}
]


function menoresde30(array){
    let nuevoarray = []
    for(i=0; i< array.length;i++){
        if( array[i].edadTitular < 30) 
            nuevoarray.push(array[i])
        }
        return nuevoarray;
    }

let menores30 = menoresde30(arrayCuentas)
console.log(menores30)


// mayores que 30
function mayor30(array){
    let nuevoArray2 = [];
    for(let i = 0; i< array.length; i++){
        if(array[i].edadTitular > 30){
            nuevoArray2.push(array[i])
        }
    }
    return nuevoArray2
}

let resultado = mayor30(arrayCuentas);
console.log(resultado)





// //exactamente 30 
function iguala30(array){
    let nuevoarray = []
    for(i=0; i< array.length;i++){
        if( array[i].edadTitular === 30) 
            nuevoarray.push(array[i])
        }
        return nuevoarray;
    }

let igual = iguala30(arrayCuentas)
console.log(igual)


// //ordenarlos por tipo de cuenta
function tipoDeCuenta(array){
    let corriente = [];
    let sueldo = [];
    let arraycontenedor = []
    for(i=0; i< array.length;i++){
        if (array[i].tipoCuenta == "corriente"){
            corriente.push(array[i])
        }else{
            sueldo.push(array[i])
        }
    }
    arraycontenedor.push(corriente)
    arraycontenedor.push(sueldo)
    return arraycontenedor;
}
let tipo = tipoDeCuenta(arrayCuentas)
console.log(tipo)
