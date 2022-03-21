//FONDO CAMBIANTE
let fondoArena = document.getElementById('fondoArena');
let contenedorSelector = document.getElementById('selectorCont');
let camping = document.getElementById('selectorCamping');
let bosque = document.getElementById('selectorBosque');
let montana = document.getElementById('selectorMontana');
let playa = document.getElementById('selectorPlaya')
//links de listadesordenada
let linkInicio = document.getElementById('linkInicio');
let linkGaleria = document.getElementById('linkGaleria');
let linkNosotros = document.getElementById('linkNosotros');


//funcion fondo camping
camping.addEventListener('click', cambiarFondoCamping);
function cambiarFondoCamping() {
    linkInicio.classList.add('linkLi');
    linkGaleria.classList.add('linkLi');
    linkNosotros.classList.add('linkLi');
    fondoArena.style.backgroundImage = "url('../imagenes/camping.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition= "all .5s"
    
};

//funcion fondo bosque
bosque.addEventListener('click', cambiarFondoBosque);
function cambiarFondoBosque() {
    fondoArena.style.backgroundImage = "url('../imagenes/bosque.jpg')";
    fondoArena.style.backgroundSize = "100% 120%";
    fondoArena.style.transition= "all .5s"
    linkInicio.classList.remove('linkLi');
    linkInicio.classList.add('linkLiMod');
    linkInicio.classList.add('hoverLink');

    linkGaleria.classList.remove('linkLi');
    linkGaleria.classList.add('linkLiMod');
    linkGaleria.classList.add('hoverLink');

    linkNosotros.classList.remove('linkLi');
    linkNosotros.classList.add('linkLiMod');
    linkNosotros.classList.add('hoverLink');
}

//funcion fondo montaña
montana.addEventListener('click', cambiarFondoMontana);
function cambiarFondoMontana() {
    fondoArena.style.backgroundImage = "url('../imagenes/montana.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition= "all .5s"

    linkInicio.classList.remove('linkLi');
    linkInicio.classList.add('linkLiMod');
    linkInicio.classList.add('hoverLink');

    linkGaleria.classList.remove('linkLi');
    linkGaleria.classList.add('linkLiMod');
    linkGaleria.classList.add('hoverLink');

    linkNosotros.classList.remove('linkLi');
    linkNosotros.classList.add('linkLiMod');
    linkNosotros.classList.add('hoverLink');
};

//funcion fondo playita
playa.addEventListener('click', cambiarFondoPlaya);
function cambiarFondoPlaya() {
    linkInicio.classList.add('linkLi');
    linkGaleria.classList.add('linkLi');
    linkNosotros.classList.add('linkLi');
    
    fondoArena.style.backgroundImage = "url('../imagenes/playita.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition= "all .5s"
};