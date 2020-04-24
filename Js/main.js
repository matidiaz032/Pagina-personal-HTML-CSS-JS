/* AOS */

  AOS.init();

/* Barra Navegacion */

var ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
    var desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
})

/* Menu */

var enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
var semaforo = true;

document.querySelector(".hamburguer").addEventListener("click", function (){
    if (semaforo) {
        document.querySelector(".hamburguer").style.color="white";
        semaforo= false;
    }else{
        document.querySelector(".hamburguer").style.color="black";
        semaforo= true;
    }
    enlacesHeader.classList.toggle("menu-dos");
})