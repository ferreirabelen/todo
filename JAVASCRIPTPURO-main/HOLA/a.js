let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

function ordenarNotas(){
    for (let c = 0; c < alumno.notas.length; c++) {
        for (let i = 0; i < alumno.notas.length - 1; i++) {
            if (alumno.notas[i] > alumno.notas[i + 1]) {
            let temporario2 = alumno.notas[i];
            alumno.notas[i] = alumno.notas[i + 1];
            alumno.notas[i + 1] = temporario2;
            }
        }
    }
    return alumno;
}



let ordenacion = ordenarNotas(alumno.notas);
console.log(ordenacion)