<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import perfil1 from '@/assets/images/puntos/perfiles/perfil1.gif';
import perfil2 from '@/assets/images/puntos/perfiles/perfil2.gif';
import perfil3 from '@/assets/images/puntos/perfiles/perfil3.gif';
import perfil4 from '@/assets/images/puntos/perfiles/perfil4.gif';
import perfil6 from '@/assets/images/puntos/perfiles/perfil6.gif';
import perfil7 from '@/assets/images/puntos/perfiles/perfil7.gif';
import perfil8 from '@/assets/images/puntos/perfiles/perfil8.gif';
import perfil9 from '@/assets/images/puntos/perfiles/perfil9.gif';
import perfil10 from '@/assets/images/puntos/perfiles/perfil10.gif';
import perfil11 from '@/assets/images/puntos/perfiles/perfil11.gif';
import perfil12 from '@/assets/images/puntos/perfiles/perfil12.gif';
import perfil13 from '@/assets/images/puntos/perfiles/perfil13.gif';
import perfil14 from '@/assets/images/puntos/perfiles/perfil14.gif';
import perfil15 from '@/assets/images/puntos/perfiles/perfil15.gif';
import perfil16 from '@/assets/images/puntos/perfiles/perfil16.gif';
import perfil17 from '@/assets/images/puntos/perfiles/perfil17.gif';
import perfil18 from '@/assets/images/puntos/perfiles/perfil18.gif';


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
const imagenGeodesia = ref(false)


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

const handleKeydown = (event) => {
  if (imagenGeodesia.value && event.key === 'Escape') {
    imagenGeodesia.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown);

})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown);

})

const perfilSeleccionado = ref('')
const perfiles = [
  { id: 1, name: 'Perfil 1', url: perfil1, filename: 'perfil1.gif' },
  { id: 2, name: 'Perfil 2', url: perfil2, filename: 'perfil2.gif' },
  { id: 3, name: 'Perfil 3', url: perfil3, filename: 'perfil3.gif' },
  { id: 4, name: 'Perfil 4', url: perfil4, filename: 'perfil4.gif' },
  { id: 6, name: 'Perfil 6', url: perfil6, filename: 'perfil6.gif' },
  { id: 7, name: 'Perfil 7', url: perfil7, filename: 'perfil7.gif' },
  { id: 8, name: 'Perfil 8', url: perfil8, filename: 'perfil8.gif' },
  { id: 9, name: 'Perfil 9', url: perfil9, filename: 'perfil9.gif' },
  { id: 10, name: 'Perfil 10', url: perfil10, filename: 'perfil10.gif' },
  { id: 11, name: 'Perfil 11', url: perfil11, filename: 'perfil11.gif' },
  { id: 12, name: 'Perfil 12', url: perfil12, filename: 'perfil12.gif' },
  { id: 13, name: 'Perfil 13', url: perfil13, filename: 'perfil13.gif' },
  { id: 14, name: 'Perfil 14', url: perfil14, filename: 'perfil14.gif' },
  { id: 15, name: 'Perfil 15', url: perfil15, filename: 'perfil15.gif' },
  { id: 16, name: 'Perfil 16', url: perfil16, filename: 'perfil16.gif' },
  { id: 17, name: 'Perfil 17', url: perfil17, filename: 'perfil17.gif' },
  { id: 18, name: 'Perfil 18', url: perfil18, filename: 'perfil18.gif' }
];
    const descargarPerfil = () => {
    // Accede a perfilSeleccionado.value para obtener su valor
    if (perfilSeleccionado.value) {
      // Encuentra el objeto de perfil completo usando la URL seleccionada
      const selectedPerfilObject = perfiles.find(perfil => perfil.url === perfilSeleccionado.value);

      if (selectedPerfilObject) {
        const link = document.createElement('a');
        link.href = selectedPerfilObject.url;
        // Añade el atributo download para sugerir un nombre de archivo
        link.download = selectedPerfilObject.filename || 'descarga.jpg'; // Usa el nombre de archivo definido o uno por defecto
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

</script>
<template>
  <section class="contenedor">
  <article class="geodesy-article">
    <header class="article-header">
      <h1 class="article-title">Geodesia</h1>
      <h2 class="article-subtitle">Programa de Geodesia Satelitaria</h2>
      <div class="posgar-logo-container">
        <a
          href="https://www.ign.gob.ar/category/tem%C3%A1tica/geodesia/posgar-07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/images/logos/POSGAR07.png" alt="Logo POSGAR07" />
        </a>
      </div>
    </header>

    <section class="article-section">
      <p>
        Este programa se inició en 1984 con la participación en una campaña de
        mediciones Transit propuesta por la Facultad de Ciencias Astronómicas y
        Geofísicas de la UNLP (Depto. de Astrometría).
      </p>
      <p>
        Desde entonces, este programa ha contribuido a vincular el territorio
        de la Isla Grande de Tierra del Fuego con redes geodésicas nacionales e
        internacionales.
      </p>
      <p>
        En 1993, conjuntamente con la entonces Dirección de Geodesia de la
        Provincia, dirigida por el Agr. Carlos Zampatti, se diseñó y midió la
        Red Geodésica Provincial.
      </p>
      <p>
        Esta Red, cuya versión inicial se denominó
        <strong class="text-highlight">TDF95</strong>, constaba inicialmente
        de 23 pilares distribuidos en la Isla Grande de Tierra del Fuego. Hoy,
        ampliada y mejorada, se estima que su error es menor a los 10
        milímetros en cualquiera de las tres coordenadas (Latitud, Longitud y
        Altura Elipsoidal).
      </p>
      <p>
        TDF95 materializaba el marco de referencia POSGAR94 (marco Oficial de
        la Rep. Argentina desde 1997 hasta mayo 2009) en la Isla Grande, hoy
        reemplazado por POSGAR 07 en Tierra del Fuego.
      </p>

      <figure class="article-inline-image">
        <img src="@/assets/images/fotos/17.jpg" alt="Fotografías de mediciones geodésicas" />
      </figure>

      <p>
        La EARG remide regularmente esta red a los efectos de estudiar su
        estabilidad y ensayar diferentes métodos de medición y procesamiento.
        Estas remediciones revisten especial interés pues Tierra del Fuego es
        la única provincia argentina que trasciende la Placa Sudamericana, tal
        como se observa en el siguiente mapa.
      </p>
      <figure class="article-inline-image">
        <img src="@/assets/images/geodesia.jpg" alt="Mapa de Geodesia" />
        <figcaption>
          Representación de las placas tectónicas en la región de Tierra del Fuego.
        </figcaption>
      </figure>
      <p>
        Se puede apreciar que la zona al sur del Lago Fagnano pertenece a la
        Placa de Scotia. El procesamiento de las mediciones efectuadas desde
        1993 sugiere la existencia de un desplazamiento relativo de más de 5
        mm/año en el período considerado
        <i
          >(Del Cogliano et al., 2000 resumen disponible, Perdomo et al., 2002,
          Hormaechea et al., 2004).</i
        >
      </p>
      <p>
        Actualmente, la EARG mantiene cuatro estaciones fijas: una del sistema DORIS 
        (RIOA desde 1990 hasta 1995, RIOB desde 1995 hasta enero del 2001, RIPB en la actualidad)
         y tres GNSS (RIO2 desde 1996, RGDG (CNES) y RIOZ (CAS)). Esto permite contar con 
         coordenadas milimétricas en el sistema de referencia geocéntrico ITRF.

      </p>
    </section>
    
    <section class="article-section team-section">
      <h2 class="section-title">Equipo de trabajo</h2>
      <div class="team-members">
        <div class="team-group">
          <strong>EARG</strong>
          <ul>
            <li>José Luis Hormaechea</li>
            <li>Carlos Ferrer</li>
            <li>Gerardo Connon</li>
            <li>Luis Barbero</li>
          </ul>
        </div>
        <div class="team-group">
          <strong>OGS</strong>
          <ul>
            <li>Emanuele Lodolo</li>
          </ul>
        </div>
        <div class="team-group">
          <strong>UBA-CONICET</strong>
          <ul>
            <li>Alejandro Tassone</li>
            <li>Horacio Lippai</li>
          </ul>
        </div>
        <div class="team-group">
          <strong>PNA</strong>
          <ul>
            <li>Personal Destacamento Lago Fagnano</li>
          </ul>
        </div>
      </div>
      <p>
        Los primeros estudios batimétricos fueron realizados en noviembre del
        2000 y abril del 2001 con la invaluable colaboración de la Prefectura
        Naval Argentina.
      </p>
      <p>
        La EARG agradece especialmente a Fabian Gouget por el apoyo logístico
        en el campamento de Laguna Bombilla. Un Panorama más completo de las
        Investigaciones en el área se describe en la presentación en el
        "Antartic Neotectonic Workshop" de Siena, Italia (2001), "Neotectonics
        at the Magallanes-Fagnano fault system".
      </p>
    </section>
    <section class="article-section">
      <p>
        A partir de 2003, en colaboración con la Universidad Técnica de Dresden
        (Alemania), se densificó la red geodinámica, alcanzándose mayor detalle
        y exactitud en la determinación de la cinemática del límite
        transformante en Tierra del Fuego (ver Mendoza et al., 2011, Mendoza et
        al., 2015 y Mendoza et al., 2021).
      </p>
      </section>
      <div id="cont-fagnano">
        <h1>Perfiles batimétricos en el Lago Fagnano</h1>
        <h3>TU Dresden IPG - UNLP FCAG EARG</h3>
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

      <section>
      <p>
        Utilizando GPS diferencial para la georreferenciación y una ecosonda
        Raytheon L265 F, se realizaron 18 perfiles operando desde el
        destacamento Lago Fagnano de la PNA (nov. 2000) y desde Laguna Bombilla
        (abr. 2001).
      </p>
      <p>A continuación, los primeros 18 perfiles realizados:</p>
      <figure class="article-inline-image">
        <img src="@/assets/images/puntos/batimetria.gif" alt="Perfiles batimétricos" />
        <figcaption>
          <div id="cont-perfiles">
              <select v-model="perfilSeleccionado" @change="descargarPerfil">
                <option disabled selected value="">Descargar perfiles</option> 
                <option v-for="perfil in perfiles" :key="perfil.id" :value="perfil.url">
                  {{ perfil.name }} ↓
                </option>
              </select>
            </div>
        </figcaption>
      </figure>
      
      <p>
        El punto de mayor profundidad se registró en el perfil N°3 a 2800 m de
        la margen norte (unos 500 m al este del perfil 13) donde el sondeo
        indicó 201 m.
      </p>
      <p>
        Posteriormente, se realizaron dos campañas adicionales hasta totalizar
        45 perfiles (marzo 2004). La Dirección de Planeamiento Territorial e
        Información Geográfica de la Provincia de Tierra del Fuego confeccionó
        una carta del lago Fagnano (diciembre 2004) incluyendo la información
        batimétrica obtenida en el marco de estas campañas.
      </p>
    </section>
    <section class="article-section redes-section">
      <h2>Redes y servicios</h2>
      <p>Estas son las redes y servicios a los que las estaciones fijas de la EARG pertenecen y aportan datos: </p>
      <div class="cont-logos-geodesia">
        <div><img src="@/assets/images/logos/igs.png"></div>
        <div><img src="@/assets/images/logos/iers.png"></div>
        <div><img src="@/assets/images/logos/gfz.png"></div>
        <div><img src="@/assets/images/logos/ign.png"></div>
        <div><img src="@/assets/images/logos/ids.png"></div>
      </div>
      <h2>Enlaces relacionados</h2>
      <ul>
        <li><a href="">Red Geodésica de Tierra del Fuego (oficial)</a></li>
        <li><a href="">Transformación de Coordenadas Geodésicas (Gauss-Kruger / UTM & Geográficas)</a></li>
        <li><a href="">Transformación de Coordenadas Geodésicas (E.A.R.G.)</a></li>
        <li><a href="">TDF95 (POSGAR94) a POSGAR07 en Tierra del Fuego</a></li>
        <li><a href="">Transformación de Proyecciones planas</a></li>
        <li><a href="">Cartesianas geocéntricas a geográficas</a></li>
        <li><a href="">Transformación de Grass-Kruger a Geográficas</a></li>
        <li><a href="">Proyección Grass-Kruger</a></li>
        <li><a href="">Publicaciones</a></li>

      </ul>

    </section>
  </article>
  </section>
</template>




<style scoped lang="scss">
@import "@/assets/styles/main.scss";
/* Base styles for a clean, readable article */
.contenedor{
  width:100vw;
  background-color: $color-1; /* Puedes aplicarlo también al html para mayor seguridad */

}
.geodesy-article {
  font-family: $font-main;
  line-height: 1.6;
  color: #333;
  max-width: 800px; /* Adjusted max-width for article content */
  margin: 0 auto; /* Center the article on the page */
  padding: 20px;
  background-color: $color-1; /* White background for content */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */

  @media (max-width: 768px) {
    padding: 15px;
  }
}

/* Article Header */
.article-header {
  text-align: left;
  margin-bottom: 40px;

  .article-title {
    font-family: "Helvetica Neue", Arial, sans-serif; /* Modern font for titles */
    font-size: 2.8em;
    font-weight: 700;
    color: #1a2a4b; /* Dark blue for a strong presence */
    margin-bottom: 10px; /* Reduced margin to bring logo closer */

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  /* Subtítulo del Artículo */
.article-subtitle {
  font-family: "Helvetica Neue", Arial, sans-serif; /* Consistente con el título principal */
  font-size: 1.8em; /* Un tamaño generoso pero menor que el título principal */
  font-weight: 600; /* Un poco menos negrita que el título */
  color: #2c3e50; /* Un tono oscuro pero ligeramente diferente al título */
  margin-top: 0; /* Espacio superior para separarlo del párrafo anterior */
  margin-bottom: 20px; /* Espacio inferior para separarlo del contenido siguiente */
  line-height: 1.3; /* Mejor legibilidad para el texto */

  @media (max-width: 768px) {
    font-size: 1.5em; /* Ajuste para pantallas más pequeñas */
    margin-top: 25px;
    margin-bottom: 15px;
  }
}

  .posgar-logo-container {
    margin-bottom: 20px; /* Space below the logo */

    a {
      display: inline-block; /* Allows for small margins/padding */
      padding: 5px 10px;
      border-radius: 5px;
    }

    img {
      max-width: 100px; /* Smaller size for the logo */
      height: auto;
      display: block; /* Ensures it takes up its own line */
      margin: 0 auto; /* Center the image within its container */
      opacity: 0.8; /* Slight transparency for subtlety */
      transition: all 0.3s ease; /* Smooth transition on hover */

      &:hover {
        opacity: 1;
        scale:1.1;
      }

      @media (max-width: 768px) {
        max-width: 80px; /* Even smaller on mobile */
      }
    }
  }
}

/* Article Sections - Now primarily for containing flow text and inline images */
.article-section {
  margin-bottom: 30px; /* Space between sections */

  p {
    margin-bottom: 1em;
    font-size: 1.1em; /* Slightly larger text for readability */
    color: #444;

    i {
      font-style: italic;
      color: #666;
    }
  }
  .text-highlight {
    color: $color-2; /* A distinct color for highlighted text */
    font-weight: bold;
  }
}

/* Inline Image Styling */
.article-inline-image {
  margin: 40px -20px; /* Pulls image slightly out to the sides if padding is present on .geodesy-article */
  display: block; /* Ensures it takes full width */
  text-align: center; /* Centers the image */
  max-width: unset; /* Override any max-width from parent */

  @media (max-width: 768px) {
    margin: 20px -15px; /* Adjust margin for smaller screens */
  }

  img {
    width: 100%; /* Image takes 100% of its parent's width */
    height: auto;
    display: block;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px; /* Slight roundness */
  }

  figcaption {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
    font-style: italic;
    padding: 0 20px; /* Add padding to figcaption if image margins are negative */
    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}

/* Team Section */
.team-section {
  margin-top: 40px;
  padding: 30px;
  background-color: #f8f8f8; /* Light background for team section */
  border-left: 5px solid $color-2; /* A distinct border */
  border-radius: 0 8px 8px 0; /* Rounded corners on one side */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  .section-title {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 2em;
    color: #2c3e50;
    margin-bottom: 25px;
    text-align: center;
  }

  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;

    .team-group {
      background-color: #eaf3f8;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      text-align: center;
      min-width: 150px;

      strong {
        display: block;
        font-size: 1.2em;
        color: #34495e;
        margin-bottom: 10px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-size: 0.95em;
          color: #555;
          margin-bottom: 5px;
        }
      }
    }
  }

  p {
    font-size: 1.05em;
    color: #555;
  }
}

/* General text elements */
h2 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 2.2em;
  color: #1a2a4b;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: left; /* Default alignment for subheadings */
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
}

p {
  margin-bottom: 1em;
  font-size: 1.1em;
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
    #cont-perfiles {
          display: flex;
          justify-content: right;
          margin:0;
          font-size:0.8em;
          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: transparent;
            border: none; 
            padding: 8px 12px 8px 0; 
            font-size: 1em;
            color: $color-4;
            cursor: pointer;
            outline: none;
            text-align: left; 
            width: auto;
            min-width: 160px; 
            max-width: 100%;
            font-family:$font-main;
            background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
            background-repeat: no-repeat;
            background-position: right 0px center;
            background-size: 16px;
            padding-left:1em;
            margin-top:1em;
            &:hover {
              color: $color-6; 
            }
            &:focus {
              border-bottom: 1px solid $color-6;
            }
            option {
              background-color: $color-4;
              color: $color-3;
              padding: 8px 15px;
              font-size: 1em;
              border-bottom: 1px solid $color-6;
              &:hover {
                background-color: $color-7; // Un verde ligeramente más oscuro al pasar el mouse
              }
              &:checked {
                background-color: $color-6; // Fondo verde oscuro para la opción seleccionada
              }
            }
            option[disabled] {
              background-color: transparent; // O un gris muy oscuro si el select se abre sobre un fondo oscuro
              color: rgba(0, 0, 0, 0.7); // Un blanco más tenue
              font-weight: bold; // Opcional: hacer el texto más grueso
              padding-right: 0;
            }
          }
        }
        .redes-section{
          .cont-logos-geodesia{
            display:flex;
            padding-right:1em;
            width:100%;
            justify-content:center;
            gap:1em;
            div{
              border-radius:50%;
              height:130px;
              width:130px;
              box-shadow:5px 5px 10px rgba(0, 0, 0, 0.4);
              display:flex;
              align-items:center;
              justify-content:center;
              transition:all 0.3s ease;
              cursor:pointer;
              img{
                max-height:75%;
                max-width:75%;
                opacity:0.9;
                transition:all 0.3s ease;
              }
              &:hover{
                scale:0.95;
                img{opacity:1;}
              }
            }
            
          }
          ul{
              list-style:none;
              margin-left:1em;
              &>li a{
                text-decoration:none;
                &:hover{
                  color:$color-6;
                  font-weight:bold;
                  
                }
                &:focus, &:link, &:visited{
                  color:$color-4;
                }
              }
            }
        }
        #cont-fagnano{
            width:100vw;
            position:relative;
            height: 0; /* Necesario cuando uso padding-bottom para controlar la altura */
            padding-bottom: 42.26vw; /* Valor para mantener la relación de aspecto */  
            overflow: hidden;
            margin-left:calc((-100vw + 800px)/2);
            margin-top:2em;
            @include margin-y(2em);
            @media (max-width: 820px) {
                margin-left:-1.8em;
            }
            @media (max-width:600px){
              .pin{display:none;}
            }

            
            
            .popup-imagen {
              position: fixed;
              width:50%;
              height:40%;
              max-width:500px;
              max-height:40%;
              border-radius:8px;
              padding: 0;
              z-index: 10;
              box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
            }

            .popup-imagen img {
              width: 100%;
              height:100%;
              object-fit:cover;
              border-radius:8px;

            }
            #fagnano{
              width:100%;
              position:absolute;
              top:0;
              left:0;
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
        
</style>
