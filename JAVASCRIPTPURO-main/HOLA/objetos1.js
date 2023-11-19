let primerObjeto = {
    nombre : "Belén",
    apellido : "Ferreira",
    curso : "Certified Tech Developer en digital House"
}

let {curso} = primerObjeto;  //destructura de objetos desastruring
console.log(curso)


//dos formas diferentes de hacer lo mismo 
console.log(primerObjeto.apellido);
console.log(primerObjeto["apellido"]); 