let mes = [
    [100,100,150,100,100,100,100],                        //semana 1  
    [50,50,50,50,50,50,50],                               //semana 2        
    [200,200,200,200,200,200,200],                       //semana 3  
    [1000,1000,1000,1000,1000,1000,1000]                //semana 4 
]
console.table(mes)


//sumar total de la semana 
function SumarSemana(matriz){
    let sumaSemana = 0;
    for (let i = 0; i < matriz[0].length; i++) {      //matriz[0] pq me estoy parando en esa semana quiero que me recorra esa semana 
            sumaSemana = sumaSemana + matriz[0][i]
        }
        return sumaSemana
    }
    


let total = SumarSemana(mes)
console.log(total)


// //saber cuanto gasté en el dia 3 del mes 
// console.log("En el dia 3 de la semana 1 gasté " +  mes[0][2])
// console.log("En el dia 3 de la semana 2 gasté " +  mes[1][2])
// console.log("En el dia 3  de la semana 3 gasté " +  mes[2][2])
// console.log("En el dia 3 de la semana 4 gasté " +  mes[3][2])




function totalMes(matriz){
    let resultado = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j= 0; j < matriz[i].length; j++) {
            resultado = resultado + matriz[i][j]
        }
    }
    return resultado
}

let gastoDelMes = totalMes(mes)
console.log(gastoDelMes)


// sumar lo gastado en la semama y fijarse que semana gasto mas en todo el mes 
let sumaSemana0 = 0;
let sumaSemana1 = 0;
let sumaSemana2 = 0;
let sumaSemana3 = 0;
    for(let i= 0 ; i <mes.length ; i++){
    for(let j = 0 ; j<mes[i].length ; j++){
        if( i == 0){
            sumaSemana0 = sumaSemana0 + mes[0][j]
        }
        else if(i == 1){
            sumaSemana1 += mes[1][j]
        }
        else if( i == 2){
            sumaSemana2 += mes[2][j]
        }
        else{
            sumaSemana3 += mes[3][j]
        }
    
    } 
}  
function encontrarGasto(){
    let gastoMaximo = Math.max(sumaSemana0,sumaSemana1,sumaSemana2,sumaSemana3);
    let mensaje = "";
    if (gastoMaximo == sumaSemana0){
        mensaje = "La primer semana se ha gastado mas"
    }
    else if(gastoMaximo == 1){
        mensaje = "La segunda semana se ha gastado mas"
    }
    else if(gastoMaximo == 2){
        mensaje = "La tercer mer semana se ha gastado mas"
    }
    else{
        mensaje = "La cuarta semana se ha gastado mas"
    }

    return mensaje;
    }



let semanaConMasGasto = encontrarGasto(mes);
console.log(semanaConMasGasto)




