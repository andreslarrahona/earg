<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  // Forzar un reflow antes de aplicar la animación
  requestAnimationFrame(() => {
    isMounted.value = true
  })
})

onUnmounted(() => {
  isMounted.value = false
})

</script>
<template>
  <section class="contenedor" :class="{ 'fade-in': isMounted }">
    
    <article class="sismos-article">
      <header class="article-header">
        <h1 class="article-title">Sismología</h1>
        <h2 class="article-subtitle">Monitoreo de sismicidad local y regional</h2>
      </header>
      

      <section class="article-section">
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/sismos.webp" alt="Sismología"/>
        </figure>
        <p>
          La Estación Astronómica Río Grande (EARG) monitorea la sismicidad local
          y regional desde 1999 mediante una red propia de sismómetros en la parte 
          argentina de la isla Grande de Tierra del Fuego.
        </p>
        <p>
          La isla representa una región tectónicamente muy compleja y es 
          un área clave en la investigación de la interacción geodinámica entre 
          las placas Sudamericana, Antártica y Scotia (véase <router-link to="/Geodesia"><i>Geodesia</i></router-link>).
        </p>
        <br>
        <h3>Etapa inicial</h3>
        <br>
        <p>
          La estación sismológica "Estancia Despedida" comenzó a operar en junio de 1999 equipada con un sensor 
          Lennartz 1Hz 3D con el propósito de caracterizar la sismicidad local. Desde entonces, numerosos eventos han sido detectados,
          entre locales de muy baja intensidad y grandes sismos en lugares alejados del planeta.
        </p>
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/estanciadespedida.jpg" alt="Estancia Despedida" />
          <figcaption>
            Estancia Despedida
          </figcaption>
        </figure>
        <p>
          La Estancia Despedida fue fundada en 1914 por José Menéndez, como parte de su primer establecimiento en 
          Tierra del Fuego (Sección Despedida de la estancia "Primera Argentina"). En la actualidad pertenece a la
          familia de Larminat, desde el año 1979, y se compone de dos secciones: Despedida propiamente dicha, en la zona
          de transición monte-estepa, y Orjain, en la cordillera, contra la frontera con Chile. Su actividad principal es 
          la cría de ganado vacuno. Posee un excelente coto de pesca de trucha sobre el Río Grande donde se practica fly-fishing.
        </p>      
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/lennartz.jpg" alt="Lennartz 1Hz 3D" />
          <figcaption>
            Sismómetro Lennartz 1Hz 3D
          </figcaption>
        </figure>
        <p>
          El primer evento que registró la Estación Despedida fue el 9 de junio de 1999. Correspondió a un sismo cuyo epicentro 
          se localizó 750 km al Este de las Islas Malvinas.
          Registrado a las 04:03:10 hs. (UTC), de una distancia de 1420 km., magnitud 5.8 y profundidad de 10 km., su epicentro 
          tomó lugar en 53.04S 46.84W (IRIS)
        </p>
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/sismo1.gif" alt="Primer sismo registrado por Estancia Despedida" />
          <figcaption>
            Primer sismo registrado por Estancia Despedida
          </figcaption>
        </figure>
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/sismo2.gif" alt="Primer sismo registrado por Estancia Despedida" />
          <figcaption>
            Mediciones del primer sismo registrado por Estancia Despedida
          </figcaption>
        </figure>
        <p>
          En noviembre de 2002, se instaló un sensor de banda ancha Güralp 3T provisto por el Istituto Nazionale di Oceanografia 
          e di Geofisica Sperimentale (OGS) de Trieste, Italia. Las instalaciones en Ea. Despdedida debieron ser ampliadas para 
          alojar el nuevo instrumental.
        </p>
        <p>
          El sensor Lennartz fue instalado en la zona de Termas del Río Valdez (estación TRVA) en enero del 2003, donde 
          funcionó por unos tres meses.
        </p>
        <figure class="article-inline-image">
          <img src="@/assets/images/sismos/guralp.jpg" alt="Sensor de banda ancha Güralp 3T instalado" />
          <figcaption>
            Sensor de banda ancha Güralp 3T instalado
          </figcaption>
        </figure>
        <p>
          Posteriormente fue trasladado a Río Grande e Isla de los Estados (noviembre 2003 a enero 2004). En febrero de 2004 
          volvió a ser instalado en Termas del Río Valdez. En el año 2005 fue reemplazado por el sensor Güralp 40T proveniente 
          de la estación USHU, y en febrero de 2006 se dotó a la estación TRVA de otro Güralp 3T provisto por OGS. Actualmente 
          la estación TRVA está equipada con un sismómetro Güralp 3ESPCDE (desde febrero 2013) y la estación Bahía Torito (BETA) 
          con el Güralp 40T.
        </p>
        <p>
          Los registros de la estación DSPA se reciben en la EARG, a través de un enlace punto a punto, en tiempo real. La estación 
          TRVA está enlazada con la oficina de Defensa Civil del Municipio de Tolhuin, a través de la cual llegan los datos a la EARG.
        </p>
        
      </section>
      <section class="article-section publicaciones-section">
        <h2>Publicaciones</h2>
        <p>Los sismos históricos y los eventos registrados en el período 1999-2020 pueden ser consultados en las siguientes publicaciones: </p>
        <ul>
          <li><a href="http://sedici.unlp.edu.ar/handle/10915/118869" target="_blank">Sabbione, N.C., Connon, G.C., Hormaechea, J.L., Buffoni, C. (2007). <strong>Tierra del Fuego Reference Standard Earthquake Catalogue.</strong> 
                          Congreso Internacional sobre Geología y Geofísica del Hemisferio Sur GEOSUR, 18-20 de noviembre de 2007, Santiago, Chile.</a></li>
          <li><a href="http://sedici.unlp.edu.ar/handle/10915/119480" target="_blank">Sabbione, N.C., Connon, G.C., Hormaechea, J.L., Buffoni, C. (2017). <strong>Complemento al Catálogo Sismológico de Referencia para Tierra del Fuego</strong></a></li>
          <li><a href="http://sedici.unlp.edu.ar/handle/10915/119549" target="_blank">Connon, G.C., Bollini, M.C., Sabbione, N.C., Hormaechea, J.L. (2021). <strong>Complemento 2017-2020 del Catálogo Sismológico de Referencia de Tierra del Fuego.</strong> </a></li>

        </ul>

      </section>
    </article>
    <article class="side-section">
      <div class="side-section-btn">
        <router-link to="/" class="btn btn-primary">
          <img src="@/assets/images/iconos/notas.png" alt="Link a Sismos">
          <p>Sismos registrados</p>
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>

    </article>
  </section>
</template>




<style scoped lang="scss">
@import "@/assets/styles/main.scss";




/* Base styles for a clean, readable article */
.contenedor{
  width:100vw;
  background-color: $color-1; /* Puedes aplicarlo también al html para mayor seguridad */
  display:flex;
  transform: translateY(10px);
  transition: 
  opacity 1s ease-out,
  transform 0.7s ease-out;
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  .side-section{
      margin-right:5vw;
      margin-top:5vh;
      width:250px;
      height:70vh;
      min-height:100px;
      display:flex;
      flex-direction:column;
      position:sticky;
      top: 20vh;
      opacity:0.95;
      .side-section-btn {
        height:10em;
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
        padding-top:2em;
        background-color: $color-1;
        padding-bottom:0;
        position:relative;
        a{
          padding: 1em 2em;
          width:100%;
          background-color:$color-5;
          color:$color-3;
          border-radius: 5px;
          display:flex;
          flex-direction: column;
          position:relative;
          transition:all 0.3s;
          &:link, &:visited, &:hover, &:active {
            text-decoration: none;
            color:$color-3;
          }
          &:hover{
            scale:0.95;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.6);
          }
          &>img{
            width: 3em;
            height: 3em;
            margin-right: 0.5em;
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
            margin-bottom: 0.5em;
          }
          &>i{
            position:absolute;
            right: 2em;
            top: 50%;
            // transform: translateY(-50%);
            border-radius: 50%;
            background-color: $color-1;
            color: $color-2;
            padding: 0.5em;
          }
          &>p{
            max-width:60%;
            font-weight: $font-semibold;
          }
        }
        
        
      }




    }
}
 
.sismos-article {
  font-family: $font-main;
  line-height: 1.6;
  color: #333;
  max-width: 800px; /* Adjusted max-width for article content */
  margin: 0 auto; /* Center the article on the page */
  padding: 20px;
  background-color: $color-1; /* White background for content */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  position:relative;
  @media (max-width: 768px) {
    padding: 15px;
  }
 
 
}
 ul, ol{margin:2em;}

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

  
}

/* Article Sections - Now primarily for containing flow text and inline images */
.article-section {
  margin-bottom: 30px; /* Space between sections */

  p {
    margin-bottom: 1em;
    font-size: 1.1em; /* Slightly larger text for readability */
    color: #444;
    text-indent:1em;

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
  margin: 40px -20px; 
  display: block; /* Ensures it takes full width */
  text-align: center; /* Centers the image */
  max-width: unset; /* Override any max-width from parent */

  @media (max-width: 768px) {
    margin: 20px -15px; /* Adjust margin for smaller screens */
  }

  img {
    width: 100%; /* Image takes 100% of its parent's width */
    max-width:500px;
    height: auto;
    display: block;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px; /* Slight roundness */
    justify-self:center;
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

.publicaciones-section{   
  ul{
      margin-left:2em;
      &>li {
        margin-bottom:0.5em;
        a{
        text-decoration:none;
        font-size:0.8em;
        line-height:0;
        transition:all 0.3s ease;
        &:hover{
          color:gray !important;
          
        }
        &:focus, &:link, &:visited{
          color:$color-4;
        }
      }}
    }
}


</style>
