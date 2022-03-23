/*------------------ FUNCION MENU BURGER--------------- */
const listaDesordenada = document.querySelector('.listaDesordenada');
const burger = document.querySelector('.contenedorBurger');
const cerrarBurger = document.querySelector('.cerrarBurger');

/* activar burger */
burger.addEventListener('click', activarBurger);
function activarBurger() {
    listaDesordenada.style.display = "flex";
    listaDesordenada.style.top = "0";
    if (activarBurger) {
        burger.style.opacity = "0"
    }
}
/* cerrar burger */
cerrarBurger.addEventListener('click', cerrarBurgerFunction);
function cerrarBurgerFunction(e) {
    listaDesordenada.style.top = "-730px";
    if (cerrarBurgerFunction) {
        burger.style.opacity = "1"
    }
}

//Efecto scroll header
const header = document.querySelector('.header');
const navegador = document.querySelector('.navegador');
window.addEventListener('scroll', function () {
    header.classList.toggle("scrollAbajo", window.scrollY > 0)
    if(window.matchMedia("(max-width: 600px)").matches){
        header.style.backgroundColor = "var(--color-blanco)";
        
    }
})

//EFECTO SCROLL UBUCACION PLANETA Y NAV
let planetaLogo = document.querySelector('.nubes');
// listaDesordenada
window.addEventListener('scroll', function () {
    let scrollenY = window.scrollY;
    let scrollenX = window.scrollX;
    //validacion 
    if (scrollenY <= 100) {
        planetaLogo.style.marginRight = scrollenY * 8.30 + "px";
        planetaLogo.style.transition = "all .5s";
        listaDesordenada.style.marginTop = scrollenY * -0.85 + "px";
        listaDesordenada.style.marginRight = scrollenY * -3.50 + "px";
        listaDesordenada.style.transition = "all .5s";
        listaDesordenada.style.gap = "5rem";
        linkGaleria.classList.add('linkLiMod')
        linkInicio.classList.add('linkLiMod')
        linkNosotros.classList.add('linkLiMod')

    }
    if((scrollenY <= 100)&&(window.matchMedia("(max-width: 988px)").matches)){
        planetaLogo.style.marginRight =  "634px";
        planetaLogo.style.transition = "all .5s";
        listaDesordenada.style.marginTop = "-87px";
        listaDesordenada.style.marginRight = "-271px";
        listaDesordenada.style.transition = "all .5s";
    }else if(window.matchMedia("(max-width: 600px)").matches){
        planetaLogo.style.marginRight =  "0px";
        planetaLogo.style.transition = "all .5s";
        listaDesordenada.style.marginTop = "0px";
        listaDesordenada.style.marginRight = "0px";
        listaDesordenada.style.transition = "all .5s";
    }
})

/*------------- FUNCION CAMBIAR FONDO MAIN -------------*/
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
    fondoArena.style.backgroundImage = "url('imagenes/camping.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition = "all .5s"
};

//funcion fondo bosque
bosque.addEventListener('click', cambiarFondoBosque);
function cambiarFondoBosque() {
    fondoArena.style.backgroundImage = "url('imagenes/bosque.jpg')";
    fondoArena.style.backgroundSize = "100% 120%";
    fondoArena.style.transition = "all .5s"
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
    fondoArena.style.backgroundImage = "url('imagenes/montana.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition = "all .5s"

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

    fondoArena.style.backgroundImage = "url('imagenes/playita.jpg')";
    fondoArena.style.backgroundSize = "100% 120%"
    fondoArena.style.transition = "all .5s"
};



/*------------- GENERADOR DE LUGARES -------------*/
let contenedorLugares = document.getElementById('contenedorLugares');
let lugaresCard = document.getElementById('lugaresCard');
let botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.addEventListener('click', empezarFuncion)
function empezarFuncion() {
    /* contenedorLugares.innerHTML=""; */
    for (const lugares of lugar) {
        let { id, pais, provincia, localidad, img } = lugares;
        let localesCont = document.createElement("div");
        localesCont.classList.add('cartaLugar');
        localesCont.innerHTML =
            `
        <div class="cartaItems">
            <img src="${img}" alt="fotos de lugares hermosos para viajar">
            <div class="itemData">
                <h2>${pais}<h2>
                <h3>${provincia}<h3>
                <h4>${localidad}<h4>
            </div>
        </div>
        `;
        lugaresCard.append(localesCont);
    }
}