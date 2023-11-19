function miPiramide() {
    let string = "";
    for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        string = string + i;
}
    string = string +  "\n";
    }
    return string;
};
console.log(miPiramide())


console.log("--------")

/*** Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6). 
666666 
55555 
4444 
333 
22 */

function piramideInvertida(n) {
    let string = "";
    for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 0; j--) {
        string = string + i;
}
    string = string +  "\n";
    }
    return string;
};

let piramide = piramideInvertida(6);
console.log(piramide)