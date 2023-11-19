let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];

let banco = {
    clientes : arrayCuentas,
    consultarCliente : function(nombre){
        let clienteEncontrado;
        for(i=0; i < this.clientes.length;i++){
            if(this.clientes[i].titularCuenta === nombre){
                clienteEncontrado = this.clientes[i]
                return clienteEncontrado
        }
    }
    
    },deposito: function (nombre, cantDeposito) {
        let clienteEncontrado = this.consultarCliente(nombre);
        let mensaje;
        if (typeof clienteEncontrado !== "string") {
        clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos +  cantDeposito;
        mensaje = "Deposito realizado correctamente. su nuevo saldo es: " + clienteEncontrado.saldoEnPesos;
        } else {
        mensaje = "No se encontro ninguna coincidencia, por favor verifique los datos ingresados.";
        }
        return mensaje;
    },extraccion : function(nombre, sacar){
        let clienteEncontrado = this.consultarCliente(nombre)
        let mensaje;
        if (typeof clienteEncontrado !== "string"){
            clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos - sacar;
            mensaje = "extraccion realizada con exito tu saldo actual es de: " + clienteEncontrado.saldoEnPesos;
        }else{
            mensaje = "fondos insuficientes";
        }
        return mensaje;
    }

}

// console.log(banco.consultarCliente("Ramon Connell"));
// console.log(banco.deposito("Ansel Ardley",5));
console.log(banco.extraccion("Ansel Ardley", 32000))

