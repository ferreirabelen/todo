const imagen2 = document.querySelector(".imagen2");


window.addEventListener("mousemove", e => {
    imagen2.style.left = e.clientX + "px";
});