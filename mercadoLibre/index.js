const primerasOfertas = [
    {
        img: "./img/celular.png",
        alt : "celular",
        precio : 44.700,
        texto : "Envio gratis full",
        descuento : "11% OFF"
    },
    {
        img : "./img/zapatilla.png",
        alt : "zapatilla",
        precio : 4.650,
        texto: "Envio gratis",
        descuento : "$5% OFF"
    },
    {
        img: "img/vangogh1.png",
        alt : "cuadro Van Gogh",
        precio : 7.204,
        texto : "Envio gratis full",
        descuento : "25% OFF"
    },
    {
        img : "img/compu.png",
        alt : "Computadora Gamer",
        precio : 124.217,
        texto : "Envio gratis",
        descuento : "30% OFF"
    },
    {
        img : "img/anteojos.png",
        alt : "anteojos",
        precio : 14.174,
        texto : "Envio gratis full",
        descuento : "9% OFF"
    }
]

primerasOfertas.forEach( oferta => {
        document.querySelector("article").innerHTML +=
        ` <section class="segundaseccion">
        <img src=${oferta.img} alt=${oferta.alt}>
        <p class="p"><strong>${oferta.precio}</strong> ${oferta.descuento}</p>
        <p>${oferta.texto}</p> 
        
        </section> 
    `
    })




const categoriasPopulares = [
    {
        img: "img/coche.png", 
        titulo : "Autos, Motos y Otros"  
    },
    {
        img: "img/computadora.png", 
        titulo : "Computación"  
    },
    {
        img: "img/electrodomestico.png", 
        titulo : "Electrodomésticos"  
    },
    {
        img: "img/pelota.png", 
        titulo : "Deportes y Fitness"  
    },
    {
        img: "img/edificios.png", 
        titulo : "Inmuebles"  
    },
    {
        img: "img/beauty.png", 
        titulo : "Belleza y cuidado Personal"  
    },
    {
        img: "img/phone.png", 
        titulo : "Celulares y Teléfonos"  
    },
    {
        img: "img/microphone.png", 
        titulo : "Electronica, Audio y Video"  
    },
    {
        img: "img/ropa.png", 
        titulo : "Ropa y Accesorios"  
    },
    {
        img: "img/sofa.png", 
        titulo : "Hogar, Muebles y Jardin"  
    },
    {
        img: "img/steering-wheel.png", 
        titulo : "Accesorios para Vehiculos"  
    },
    {
        img: "img/juego.png", 
        titulo : "Consolas y Videojuegos"  
    },
    {
        img: "img/alimentos.png", 
        titulo : "Alimentos y Bebidas"  
    },
]

categoriasPopulares.forEach( categoria => {
    document.querySelector(".todasLasSecciones").innerHTML +=
    `<section class="todasLasSecciones">
    <a class="categoriaPopular">
        <img src=${categoria.img} alt="coche" width="40px">
        ${categoria.titulo} 
    </a>
`
})


