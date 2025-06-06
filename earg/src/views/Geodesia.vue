<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const puntosMapa = [
  {imagen: 'src/assets/images/puntos/01.jpg', id: 1},
  {imagen: 'src/assets/images/puntos/02.jpg', id: 2}, 
  {imagen: 'src/assets/images/puntos/03.jpg', id: 3},
  {imagen: 'src/assets/images/puntos/04.jpg', id: 4},
  {imagen: 'src/assets/images/puntos/05.jpg', id: 5},
  {imagen: 'src/assets/images/puntos/06.jpg', id: 6},
  {imagen: 'src/assets/images/puntos/07.jpg', id: 7},
  {imagen: 'src/assets/images/puntos/08.jpg', id: 8},
  {imagen: 'src/assets/images/puntos/09.jpg', id: 9},
  {imagen: 'src/assets/images/puntos/10.jpg', id: 10},
  {imagen: 'src/assets/images/puntos/11.jpg', id: 11},
  {imagen: 'src/assets/images/puntos/12.jpg', id: 12}
]

const popupAbierto = ref(false)
const imagenActual = ref('')
const popupX = ref(-9999)
const popupY = ref(-9999)
const popupRef = ref(null)


function abrirPopup(index, event) {
  imagenActual.value = puntosMapa[index].imagen
  popupAbierto.value = true

  const popupWidth = 600
  const popupHeight = 400
  const padding = 10

  const x = event.clientX + padding
  const y = event.clientY + padding

  const maxX = window.innerWidth - popupWidth - padding
  const maxY = window.innerHeight - popupHeight - padding

  popupX.value = Math.min(x, maxX)
  popupY.value = Math.min(y, maxY)
}


function cerrarPopup() {
  popupAbierto.value = false
}
function handleClickOutside(event) {
  if (!popupRef.value) return

  const popup = popupRef.value
  const isClickInsidePopup = popup.contains(event.target)
  const isClickOnPin = event.target.closest('.pin') !== null

  if (!isClickInsidePopup && !isClickOnPin) {
    cerrarPopup()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>
<template>
  <section>
    <div class="seccion">
      <div class="titulo-seccion">
        <h1>Contexto</h1>
        <div class="img-titulo">
          <a
            target="_blank"
            href="https://www.ign.gob.ar/category/tem%C3%A1tica/geodesia/posgar-07"
          >
            <img src="@/assets/images/logos/POSGAR07.png" />
          </a>
        </div>
      </div>
      <div class="texto-2col">
        <div class="col-texto">
          <p>
            Este programa se inició en 1984 con la participación en una campaña
            de mediciones Transit propuesta por la Facultad de Ciencias
            Astronómicas y Geofísicas de la UNLP (Depto. de Astrometría).
          </p>
          <p>
            Desde entonces este programa ha contribuido a vincular el territorio
            de la Isla Grande de Tierra del Fuego con redes geodésicas
            nacionales e internacionales.
          </p>
          <p>
            En 1993, conjuntamente con la entonces Dirección de Geodesia de la
            Provincia, dirigida por el Agr. Carlos Zampatti, se diseñó y midió
            la Red Geodésica Provincial.
          </p>
          <p>
            Esta Red, cuya versión inicial se denominó
            <strong style="color: $color-2">TDF95</strong>, constaba
            inicialmente de 23 pilares distribuidos en la Isla Grande de Tierra
            del Fuego. Hoy, ampliada y mejorada, se estima que su error es menor
            a los 10 milímetros en cualquiera de las tres coordenadas (Latitud,
            Longitud y Altura Elipsoidal).
          </p>
          <p>
            TDF95 materializaba el marco de referencia POSGAR94 (marco Oficial
            de la Rep. Argentina desde 1997 hasta mayo 2009) en la Isla Grande,
            hoy reemplazado por POSGAR 07 en Tierra del Fuego.
          </p>
        </div>
        <div class="col-img" id="img-geodesia">
          <img src="@/assets/images/fotos/12.jpg" />
        </div>
      </div>
      <hr />
      <div class="texto-2col">
        <div class="col-texto">
          <p>
            La EARG remide regularmente esta red a los efectos de estudiar su
            estabilidad y ensayar diferentes métodos de medición y
            procesamiento. Estas remediciones revisten especial interés pues
            Tierra del Fuego es la única provincia argentina que trasciende la
            Placa Sudamericana, tal como se observa en el mapa de la derecha.
          </p>
          <p>
            Se puede apreciar que la zona al sur del Lago Fagnano pertenece a la
            Placa de Scotia. El procesamiento de las mediciones efectuadas desde
            1993 sugiere la existencia de un desplazamiento relativo de más de 5
            mm/año en el período considerado
            <i
              >(Del Cogliano et al., 2000 resumen disponible, Perdomo et al.,
              2002, Hormaechea et al., 2004).</i
            >
          </p>
        </div>
        <div class="col-img" id="mapa-geodesia">
          <div id="sombra-geodesia">
            <p>
              AMPLIAR
              <i style="margin-left: 0.5em" class="fa-solid fa-expand"></i>
            </p>
          </div>
          <img src="@/assets/images/geodesia.jpg" />
        </div>
      </div>
    </div>
    <div class="seccion">
      <div class="cont-img-full">
        <h1>Perfiles batimétricos en el Lago Fagnano</h1>
        <img id="fagnano" src="@/assets/images/fagnano2.png" />
        <div v-for="(p, index) in puntosMapa"
          :key="index"
          class="pin"
          :id="`pin-${index+1}`"
          @click.stop="abrirPopup(index, $event)"
        >
          <p><i class="fa-solid fa-camera"></i></p>
        </div>
        <transition name="fade">
        <div
          v-if="popupAbierto"
          class="popup-imagen"
          :style="{ top: `${popupY}px`, left: `${popupX}px` }"
          ref="popupRef"
        >
          <img :src="imagenActual" />
        </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

section {
  background-color: $color-1;

  .seccion {
    width: 100vw;
    hr {
      margin: 1em 10vw 2em 5vw;
    }
    .titulo-seccion {
      display: flex;
      max-height: 3em;
      width: calc(100% - 6em);
      justify-content: space-between;
      padding: 2em 3em;
      h1 {
        margin-left: 0.5em;
        font-size: 2.3em;
      }
      .img-titulo {
        font-size: 2.3em;
        max-height: 100%;
        text-align: right;
        padding-right: 3em;
        width: 300px;
        a {
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            img {
              scale: 0.95;
            }
          }
        }
        img {
          transition: all 0.3s;
          max-height: 100%;
        }
      }
    }
    .texto-2col {
      display: flex;
      gap: 20px;
      align-items: start;
      padding-bottom: 2em;
      height: auto;
      margin: 0 3vw;
      .col-texto {
        flex: 3;
        text-align: justify;
        p {
          padding: 0.5em 1em;
          text-indent: 1em;
        }
      }
      .col-img {
        flex: 2;
      }
      #img-geodesia {
        align-content: center;
        text-align: center;
        align-self: center;
        img {
          width: 25vw;
          min-width: 350px;
          object-fit: contain;
        }
      }
      #mapa-geodesia {
        height: 100%;
        max-height: 200px;
        overflow: hidden;
        align-self: center;
        width: calc(25vw - 100px);
        min-width: 350px;
        align-content: center;
        text-align: center;
        border-radius: 8px;
        position: relative;
        cursor: pointer;
        margin: 0;

        &:hover p {
          scale: 0.95;
        }
        &:hover img {
          opacity: 0.3;
        }
        #sombra-geodesia {
          position: absolute;
          width: 100%;
          left: 0;
          height: 100%;
          border-radius: 8px;
          background-color: rgba(231, 223, 220, 0.3);
          color: $color-6;
          font-size: 30px;
          text-justify: center;
          align-content: center;
          z-index: 10;

          p {
            transition: all 0.3s;
          }
        }
        img {
          max-height: 100%;
          width: 25vw;
          min-width: 350px;
          border-radius: 8px;
          opacity: 0.7;
          transition: all 0.3s;
          object-fit: cover;
          object-position: 0 -20px;
        }
      }
    }

    .cont-img-full {
      width: 100vw;
      position: relative;
      height: 0; /* Necesario cuando uso padding-bottom para controlar la altura */
      padding-bottom: 42.26%; /* Valor para mantener la relación de aspecto */
      overflow: hidden;
      .popup-imagen {
        position: fixed;
        width:50%;
        height:40%;
        max-width:500px;
        max-height:40%;
        // margin-left: max(30%, 400px);
        // margin-top: 10%;
        border-radius:8px;
        padding: 5px;
        z-index: 10;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
      }

      .popup-imagen img {
        width: 100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;

      }
      h1{
        z-index:10;
        color:$color-1;
        position:absolute;
        top:2em;
        font-size:1.9em;
        right:2.5em;
        width:50%;
        text-align: right;
        max-width:50%;
        text-shadow:6px 6px 10px $color-6;
        opacity:0.95;
      }
      img {
        width: 100%;
        position:absolute;
        top:0;
        left:0;
        height:100%;
        object-fit:cover;
        display: block;
      }
      .pin {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: $color-1;
        transform: translate(-50%, -50%) rotate(45deg); 
        box-shadow: 5px 5px 10px $color-4;
        cursor: pointer;
        transition: all 0.3s;
        outline: 1px solid $color-6; /* El borde que quieres ver */
        outline-offset: -3px;
        opacity:0.4;
        &:hover {
          margin-top: -0.7em;
          box-shadow: 0.7em 0.7em 10px $color-4;
          opacity:1;
        }
        p {
          font-style: italic;
          transform: rotate(-45deg);
          text-align: center;
          width: 50%;
          justify-self: center;
          font-weight: bold;
          position:absolute;
          top:0.4em;
          left:0.6em;
          color:$color-6;
          opacity:0.9;
        }
      }
      #pin-1 {top: 35%;left: 5%;}
      #pin-2 {top: 40%;left: 22%;}
      #pin-3 {top: 32%;left: 50%;}
      #pin-4 {top: 38%;left: 64%;}
      #pin-5 {top: 34%;left: 79%;}
      #pin-6 {top: 43%;left: 80%;}
      #pin-7 {top: 56%;left: 66%;}
      #pin-8 {top: 53%;left: 54%;}
      #pin-9 {top: 53%;left: 33%;}
      #pin-10 {top: 56%;left: 24%;}
      #pin-11 {top: 54%;left: 18%;}
      #pin-12 {top: 49%;left: 10%;}
      
    }
  }
}
#fagnano {
  width: 100%;
}
</style>
