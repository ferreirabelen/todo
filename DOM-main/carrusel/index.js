const carrusel = document.querySelector(".carrusel-items");


let limiteDeScroll = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let velocidad = 6;

function empezar(){
    intervalo = setInterval ( function (){
        carrusel.scrollLeft = carrusel.scrollLeft + velocidad;
        if(carrusel.scrollLeft === limiteDeScroll){
            velocidad = -6
        }else if(carrusel.scrollLeft === 0){
            velocidad = 6;
        }
    }, 10)
}

empezar()

function parar(){
    clearInterval(intervalo);
}

carrusel.addEventListener("mouseover", function (){
    parar()
    
})

carrusel.addEventListener("mouseout", function(){
    empezar()
})


