//a los multiplos de 3 escribir fizz a los multiplos de 5 buzz y a los multiplos de ambos fizzbazz


// function fizzbuzz(n){
//     let mensaje;
//     for(let i = 0; i <= 100; i++){
//         if(n % 3 == 0 && n % 5 == 0){
//             mensaje = "fizzbuzz"
//         }else if( n % 3 == 0){
//             mensaje = "fizz"
//         }else if(n % 5 == 0){
//             mensaje = "buzz"
//         }
//     }
//     return mensaje
// }

// let respuesta = fizzbuzz(100)
// console.log(respuesta)


function fizzBuzz(n) {
    // Write your code here
    for(let i = 0; i < 20; i++){
        if( (i % 3 == 0) && (i % 5 ==0 )){
            console.log("fizzbuzz")
        }else if(i % 3 == 0){
            console.log("fizz")
        }else if(i%5 == 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }

}

fizzBuzz()



// let texto = "Aveces es cccccomplicado";
// let caracter = "c"
// contadorDeCaracter = 0

// for(let i = 0; i < texto.length - 1; i++){
//     if( caracter == texto[i]){
//         contadorDeCaracter = contadorDeCaracter + texto[i]
//     }
// }
