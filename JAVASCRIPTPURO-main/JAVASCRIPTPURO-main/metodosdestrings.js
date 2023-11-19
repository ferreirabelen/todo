//METODOS DE CADENAS

//concat
let cadena = " cadena de prueba";
let cadena2 = " y segunda cadena de prueba";

resultado = cadena.concat(cadena2);
document.write(resultado + "<br>");

///includes
let cadena3 = "soy dalto js";           //nos muestra true o false, dependiendo si una palabra esta en AMBAS cadenas sin importar el order mientras este 
let cadena4 = "dalto";

resultado = cadena3.includes(cadena4);
document.write(resultado + "<br>");

//index off 

let cadena5 = "pedazo de bobo";        // nos muestra en numeros en qué POSICION EMPIEZA la palabra que buscamos
let  cadena6 = "";  
resultado = cadena5.indexOf("bobo")
document.write(resultado + "<br>");

//Last index off 

let cadena7 = "pedazo de bobo bobo bobo bobo";        // nos muestra en numeros en qué POSICION TERMINA la palabra que buscamos
let  cadena8 = "";  
resultado = cadena7.lastIndexOf("bobo")
document.write(resultado + "<br>");

//repeat 
let cadena9 = "12345 ";                       
resultado = cadena9.repeat(2);                      // repite mi cadena las veces que quieras 
document.write(resultado  + "<br>")


//split 
let cadena10 = "Hola como estas";
resultado = cadena10.split(" ");                    // separa la cadena como yo quiero en este caso se separa por cada espacio q hay entre las palabras
document.write(resultado + "<br>"  )

//substrings 
let cadena11 = "ABCDEFHIJK";
resultado = cadena11.substring(0, 4);         // trae los caracteres desde 0 hasta el 4 sin incluir el 4,1er parametro donde empieza y el ultimo donde terminaS
document.write(resultado  + "<br>" );


// minuscula y mayuscula  toLowerCase y toUpperCase


//ARRAYS

//push 
let nombres1 = ["pedro", "maria", "jorge"];
let resultado1 = nombres1.push("matias");   //agrega un nuevo elemento a lo ultimo del array
console.log(resultado1)

//pop
let nombres2 = ["pedro", "maria", "jorge"];
let resultado2 = nombres2.pop()    //elimina el ultimo elemento y nos lo muestra
console.log(resultado2);

//unshift 
let numeros = [3, 4, 5];
numeros.unshift(0, 1,2);    //agrega elementos al inicio del array
console.log(numeros);


//shift 
let nombres3 = ["pedro", "maria", "jorge"];
let resultado3 = nombres3.shift()    //elimina el primer elemento y nos lo muestra
document.write(resultado3);







//reverse 
let numeros1 = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros1);

//join
let random = ["abecedario", "manzana", "pedro", "bobo"];
let resultadorandom = random.join(" - ");   //agrega una separacion entre los elementos, ,la q elijamos
console.log(resultado)

//slice
let hola2 = ["abecedario", "manzana", "pedro", "bobo"];
let resultado = hola2.slice(0, 2);   //nos muestra los elementos desde 0 hasta el 2 sin incluir el 2, seria 0 y 1
console.log(resultado)
