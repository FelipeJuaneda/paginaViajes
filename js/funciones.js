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
let contenedorLugares= document.getElementById('contenedorLugares');
let botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.addEventListener('click', empezarFuncion)
function empezarFuncion(){
    /* contenedorLugares.innerHTML=""; */
    for (const lugares of lugar) {
        let { id, pais, provincia, localidad, img } = lugares;
        let localesCont = document.createElement("div");
        localesCont.innerHTML = 
        `
        <p>Pais: ${pais}<p>
        <p>provincia: ${provincia}<p>
        <p>localidad: ${localidad}<p>
        <p>img: <img src="${img}"><p>
        
        `;
        contenedorLugares.append(localesCont);
    }
}