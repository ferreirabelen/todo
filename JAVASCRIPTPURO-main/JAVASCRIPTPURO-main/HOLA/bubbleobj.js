let numeros = [
    {
      nombre: "Martin",
      legajo: 41
    },
    {
      nombre: "Juan",
      legajo: 14
    },
    {
      nombre: "Alan",
      legajo: 52
    },
    {
      nombre: "Lore",
      legajo: 5
    }
  ];

  for (let c = 0; c < numeros.length; c++) {
    for (let j = 0; j < numeros.length - 1; j++) {
      if (numeros[j].legajo > numeros[j + 1].legajo) {
        let temporario = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temporario;
      }
    }
  }
console.log(numeros)
