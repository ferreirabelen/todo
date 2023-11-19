const nombre = (name = "usuario") => "bienvenido! " + name;
console.log(nombre("belen"));
console.log(nombre());


const hola = saludo => "me voy " + saludo;
console.log(hola("nos vemos"))


//como copiar un array
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];  // Cambia esta línea
console.log(arr1);
console.log(arr2);