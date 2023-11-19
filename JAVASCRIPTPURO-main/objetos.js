let pais = {
    nombre : "argentina",
    poblacion : 4000,
    capital : "buenos aires",
    numero : function(){
        return "hola soy " + this.nombre;
    }
}
console.log("El pais es " + pais.nombre + " y la capital es " + pais.capital)
console.log(pais.numero())


//
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = this.energia - (horas * 5);
        console.log(this.energia);
        this.experiencia = this.experiencia + (horas * 2);
        console.log(this.experiencia);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


