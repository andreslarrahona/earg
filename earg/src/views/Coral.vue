<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isMounted = ref(false)

import image01 from '@/assets/images/meteoros/01.png';
import image02 from '@/assets/images/meteoros/02.png';
import image03 from '@/assets/images/meteoros/03.png';
import image04 from '@/assets/images/meteoros/04.png';
const imageUrl = ref('@/assets/images/meteoros/01.png');
const imageIndex = ref(0);
const images = [
  image01,
  image02,
  image03,
  image04,
];
let intervalId = null;

const changeImage = () => {
  imageIndex.value = (imageIndex.value + 1) % images.length;
  imageUrl.value = images[imageIndex.value];
};

onMounted(() => {
  intervalId = setInterval(changeImage, 2000);
  requestAnimationFrame(() => {
      isMounted.value = true
    })
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  isMounted.value = false
});

</script>
<template>
  <section class="contenedor" :class="{ 'fade-in': isMounted }">
  <article class="geodesy-article">
    <header class="article-header">
      <h1 class="article-title">Monitoreo atmosférico con CORAL</h1>
      <h2 class="article-subtitle">Compact Rayleigh Autonomous Lidar</h2>
      
    </header>

    <section class="article-section">
      <figure class="article-inline-image">
        <img src="@/assets/images/meteoros/meteoros.jpg" alt="Lluvia de estrellas" />
      </figure>
      <p>
La Estación Astronómica Río Grande (EARG) es conocida por su monitoreo constante de la rotación de la Tierra y el movimiento del polo. También ha trascendido por sus precisas mediciones de la deformación de la corteza relacionada con el sistema de fallas Magallanes-Fagnano y por los estudios de sismicidad mediante su red de estaciones sismológicas.
      </p>
      <p>
Pero desde mayo de 2008 incursiona además en estudios de la alta atmósfera y del flujo de meteoros que ingresan a la atmósfera terrestre. Gracias a la iniciativa e impulso del Dr. Diego Janches, físico argentino que actualmente trabaja en el Goddard Space Flight Center de NASA, en las cercanías de Washington y en colaboración con varias instituciones extranjeras, día a día se colecta información sobre las partículas que ingresan en nuestra atmósfera en el hemisferio sur. Muchas pasan desapercibidas pero algunas conforman lo que comúnmente llamamos estrellas fugaces.
      </p>
      
      <p>
       Estas partículas ingresan a la atmósfera a velocidades de entre 40000 y 250000 km/h y dejan a su paso una traza de átomos ionizados. Esta traza es detectada y su evolución es seguida hasta su desvanecimiento, típicamente en pocos segundos. Esto ocurre entre los 80 y 100 km de altura en número de miles de veces por día. Este proceso brinda información muy útil de la dinámica de la atmósfera superior.

      </p>
      <figure class="article-inline-image">
        <img :src="imageUrl" alt="Meteoros" />
        <figcaption>
En esta secuencia se ve la trayectoria del primer meteoro fotografiado con la cámara especial instalada en la EARG, durante la noche del 2 al 3 de agosto de 2011. Gentileza de Marilia Samara and Robert Mitchell, SouthWest Research Institute.
        </figcaption>
      </figure>
      <p>
Río Grande está en una situación privilegiada para este tipo de estudios. En efecto, si miramos el globo terráqueo notaremos que no hay prácticamente continentes en la franja de 55 grados de latitud sur. Esta característica permite la formación y circulación de importantes corrientes de aire, vientos, que recorren el planeta a esta latitud. Gracias a los meteoros que ingresan a la atmósfera y al detector que funciona en la EARG, estos fuertes vientos a más de 80 km de altura y sus variaciones diarias y estacionales pueden ser medidos. Por otra parte, el mítico viento sureño, el que nos acompaña gran parte del año y da una impronta especial a la vida en la Patagonia, también produce un efecto al atravesar los Andes Fueguinos. Este efecto, llamado ondas de montaña, consiste en una perturbación que se transmite verticalmente y que también es detectada con el instrumental en la EARG. Estas ondas son un caso especial de un fenómeno más general denominado ondas de gravedad.
      </p>
      <p>
El año pasado se instalaron dos estaciones remotas que permiten calcular las órbitas de los meteoros que alcanzan nuestro planeta. Estas estaciones remotas están ubicadas a 14 km al Norte de Río Grande, la primera, y a 7 km al Oeste, la segunda. Con esta configuración, investigadores y estudiantes de doctorado argentinos podrán trabajar con datos de primera de un instrumento prácticamente único en el mundo. Otra aplicación de la que ya hay resultados preliminares es la identificación de radiantes de lluvias de meteoros. Se espera que puedan identificarse lluvias nunca antes individualizadas.
      </p>
      <p>
Para complementar estas mediciones, durante algunas semanas en agosto de 2011 se instaló en la estación remota Oeste una cámara especial para fotografiar meteoros. La primera imagen es la que se reproduce en esta página.
      </p>
      
      
      

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
  opacity: 0;
  transform: translateY(10px);
  transition: 
    opacity 1s ease-out,
    transform 0.7s ease-out;
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

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
