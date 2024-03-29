/*------------------ FUNCION MENU BURGER--------------- */
const listaDesordenada = document.querySelector(".listaDesordenada");
const burger = document.querySelector(".contenedorBurger");
const cerrarBurger = document.querySelector(".cerrarBurger");

/* activar burger */
burger.addEventListener("click", activarBurger);
function activarBurger() {
  listaDesordenada.style.display = "flex";
  listaDesordenada.style.top = "0";
  if (activarBurger) {
    burger.style.opacity = "0";
  }
}
/* cerrar burger */
cerrarBurger.addEventListener("click", cerrarBurgerFunction);
function cerrarBurgerFunction(e) {
  listaDesordenada.style.top = "-200%";
  if (cerrarBurgerFunction) {
    burger.style.opacity = "1";
  }
}

//EFECTO SCROLL UBUCACION PLANETA Y NAV
const header = document.querySelector(".header");
const navegador = document.querySelector(".navegador");
let planetaLogo = document.querySelector(".nubes");

window.addEventListener("scroll", function efectoScrollResponsive() {
  //Efecto scroll header
  let scrollenY = window.scrollY;
  let scrollenX = window.scrollX;
  let mediaCompu = window.matchMedia("(min-width: 990px)");
  let mediaMobil = window.matchMedia("(max-width: 990px)");
  let shortBp = matchMedia("(max-width:700px)");
  header.classList.toggle("scrollAbajo", window.scrollY > 0);
  if (window.innerWidth > 990 && scrollenY <= 105) {
    planetaLogo.style.marginRight = scrollenY * 8.3 + "px";
    planetaLogo.style.transition = "all .5s";
    listaDesordenada.style.marginTop = scrollenY * -0.85 + "px";
    listaDesordenada.style.marginRight = scrollenY * -3.5 + "px";
    listaDesordenada.style.transition = "all .5s";
    listaDesordenada.style.gap = "5rem";
    linkGaleria.classList.add("linkLiMod");
    linkInicio.classList.add("linkLiMod");
    linkNosotros.classList.add("linkLiMod");
    linkGaleria.classList.remove("linkLi");
    linkInicio.classList.remove("linkLi");
    linkNosotros.classList.remove("linkLi");
  } else if (scrollenY > 105) {
    planetaLogo.style.marginRight = "855px";
    planetaLogo.style.transition = "all .5s";
    listaDesordenada.style.marginTop = "-87.55px";
    listaDesordenada.style.marginRight = "-360px";
  }
  if (window.innerWidth < 990 && mediaMobil) {
    header.classList.toggle("scrollAbajoMod", window.scrollY > 0);
    planetaLogo.style.marginRight = "0px";
    planetaLogo.style.transition = "all .5s";
    listaDesordenada.style.marginTop = "0px";
    listaDesordenada.style.marginRight = "0px";
  } else {
    header.classList.remove("scrollAbajoMod");
  }
});
/*------------- FUNCION CAMBIAR FONDO MAIN -------------*/
//FONDO CAMBIANTE
let fondoArena = document.getElementById("fondoArena");
let imagenAtardecer = document.getElementById("imagenAtardecer");
let contenedorSelector = document.getElementById("selectorCont");
let camping = document.getElementById("selectorCamping");
let bosque = document.getElementById("selectorBosque");
let montana = document.getElementById("selectorMontana");
let playa = document.getElementById("selectorPlaya");
//links de listadesordenada
let linkInicio = document.getElementById("linkInicio");
let linkGaleria = document.getElementById("linkGaleria");
let linkNosotros = document.getElementById("linkNosotros");

//funcion fondo camping
camping.addEventListener("click", cambiarFondoCamping);
function cambiarFondoCamping() {
  linkInicio.classList.add("linkLi");
  linkGaleria.classList.add("linkLi");
  linkNosotros.classList.add("linkLi");
  fondoArena.style.backgroundImage = "url('imagenes/camping.jpg')";
  fondoArena.style.backgroundSize = "100% 120%";
  fondoArena.style.transition = "all .5s";
  if (window.innerWidth < 610) {
    fondoArena.style.backgroundSize = "115% 100%";
  }
}

//funcion fondo bosque
bosque.addEventListener("click", cambiarFondoBosque);
function cambiarFondoBosque() {
  fondoArena.style.backgroundImage = "url('imagenes/bosque.jpg')";
  fondoArena.style.backgroundSize = "100% 120%";
  fondoArena.style.transition = "all .5s";
  linkInicio.classList.remove("linkLi");
  linkInicio.classList.add("linkLiMod");
  linkInicio.classList.add("hoverLink");

  linkGaleria.classList.remove("linkLi");
  linkGaleria.classList.add("linkLiMod");
  linkGaleria.classList.add("hoverLink");

  linkNosotros.classList.remove("linkLi");
  linkNosotros.classList.add("linkLiMod");
  linkNosotros.classList.add("hoverLink");
  if (window.innerWidth < 610) {
    fondoArena.style.backgroundSize = "130% 100%";
  }
}

//funcion fondo montaña
montana.addEventListener("click", cambiarFondoMontana);
function cambiarFondoMontana() {
  fondoArena.style.backgroundImage = "url('imagenes/montana.jpg')";
  fondoArena.style.backgroundSize = "100% 120%";
  fondoArena.style.transition = "all .5s";

  linkInicio.classList.remove("linkLi");
  linkInicio.classList.add("linkLiMod");
  linkInicio.classList.add("hoverLink");

  linkGaleria.classList.remove("linkLi");
  linkGaleria.classList.add("linkLiMod");
  linkGaleria.classList.add("hoverLink");

  linkNosotros.classList.remove("linkLi");
  linkNosotros.classList.add("linkLiMod");
  linkNosotros.classList.add("hoverLink");
  if (window.innerWidth < 610) {
    fondoArena.style.backgroundSize = "130% 100%";
  }
}

//funcion fondo playita
playa.addEventListener("click", cambiarFondoPlaya);
function cambiarFondoPlaya() {
  linkInicio.classList.add("linkLi");
  linkGaleria.classList.add("linkLi");
  linkNosotros.classList.add("linkLi");

  fondoArena.style.backgroundImage = "url('imagenes/playita.jpg')";
  fondoArena.style.backgroundSize = "100% 120%";
  fondoArena.style.transition = "all .5s";
  if (window.innerWidth < 610) {
    fondoArena.style.backgroundSize = "154% 100%";
  }
}

/*------------- GENERADOR DE LUGARES -------------*/
let contenedorLugares = document.getElementById("contenedorLugares");
let lugaresCard = document.getElementById("lugaresCard");
let botonEmpezar = document.getElementById("botonEmpezar");
botonEmpezar.addEventListener("click", empezarFuncion);
function empezarFuncion() {
  lugaresCard.innerHTML = "";
  contenedorLugares.style.padding = "50px 0";
  for (const lugares of lugar) {
    let { id, pais, provincia, localidad, img } = lugares;
    let localesCont = document.createElement("div");
    localesCont.classList.add("cartaLugar");
    localesCont.innerHTML = `
        <div data-aos="zoom-in-up" class="cartaItems">
            <img src="${img}" alt="fotos de lugares hermosos para viajar">
            <div class="itemData">
                <h2>${pais}</h2>
                <h3>${provincia}</h3>
                <h4>${localidad}</h4>
                <button id='${id}' class= 'btnLugar'>Ver Mas</button>
            </div>
        </div>
        `;
    lugaresCard.append(localesCont);
  }
  /* scroll a lugares */
  window.scrollTo(0, 520);
  //MODAL DE LUGARES
  let botonesLugares = document.getElementsByClassName("btnLugar");
  for (const boton of botonesLugares) {
    boton.addEventListener("click", mostrarLugarSeleccionado);
    function mostrarLugarSeleccionado() {
      let seleccion = lugar.find((lugares) => lugares.id == this.id);
      let contenedorModal = document.getElementById("contenedorModal");
      let modalItem = document.createElement("div");
      modalItem.classList.add("modalItem");
      modalItem.innerHTML = `
            <img class="logoClose" id="logoClose" src="imagenes/closetransp.png">
            <div class="fotoLateral">
            <img src="${seleccion.imgLateral}">
            </div>
            <div class="modalInfo">
            <span class="modalTitulo">${seleccion.pais}</span>
            <div class="modalInfoLugar">
            <p class="modalUbicacion">Ubicado en ${seleccion.pais}</p>
            <p>La provincia/estado de ${seleccion.provincia}</p>
            <p>Localidad: ${seleccion.localidad}</p>
            </div>
            <div class="modalImg">
            <img src="${seleccion.img}">
            </div>
            </div>
            `;
      contenedorModal.append(modalItem);

      // ABRIR Y CERRAR MODAL
      /* abrir */
      let logoClose = document.getElementById("logoClose");
      contenedorModal.style.opacity = "1";
      contenedorModal.style.visibility = "visible";

      /* cerrar */
      logoClose.addEventListener("click", cerrarModal);
      function cerrarModal() {
        contenedorModal.style.opacity = "0";
        contenedorModal.style.visibility = "hidden";
        contenedorModal.innerHTML = "";
      }
      /* cerrar al apretar afuera del modal */
      window.addEventListener("click", function (e) {
        if (e.target == contenedorModal) {
          contenedorModal.style.opacity = "0";
          contenedorModal.style.visibility = "hidden";
          contenedorModal.innerHTML = "";
        }
      });
    }
  }
}
