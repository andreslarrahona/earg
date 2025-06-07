<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

 const images = Array.from({ length: 8 }, (_, i) => ({
   id: i + 1,
   url: new URL(`../assets/images/fotos/${String(i+1).padStart(2,'0')}.jpg`, import.meta.url).href,
 }))



const config = {
  height: 200,
  itemsToShow: 2,
  gap: 5,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}
</script>

<template>
  <section>
  <div class="carousel">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img class="img-carousel" :src="image.url" alt="image" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div class="cont-btn-home">
    <div>
      <router-link to="/Meteorologia" class="btn btn-primary">
        <img src="@/assets/images/iconos/weather.png" alt="Meteorología">
        <p>Información Meteorológica</p>
        <i class="fa-solid fa-arrow-right"></i>
      </router-link>
    </div>
    <div>
      <router-link to="/Sismologia" class="btn btn-primary">
        <img src="@/assets/images/iconos/sismos.png" alt="Meteorología">
        <p>Información sobre Sismos</p>
        <i class="fa-solid fa-arrow-right"></i>
      </router-link>
    </div>
    <div>
      <router-link to="/Meteorologia" class="btn btn-primary lastcard ">
        <img src="@/assets/images/iconos/estacion.png" alt="Historia">
        <p>Conocé nuestra Historia</p>
        <i class="fa-solid fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
  <div class="cont-mas-links">
      <router-link to="/Geodesia" class="card card1">
        <img src="@/assets/images/fotos/geodesia.jpg">
        <div class="sombra-card"></div>
        <p>Modelo de geoide</p>
      </router-link>    
      <router-link to="/Sitios" class="card card1">
        <img src="@/assets/images/cadic.jpg">
        <div class="sombra-card"></div>
        <p>Sitios de interés</p>
      </router-link> 
      <router-link to="/Didactico" class="card card1">
        <img src="@/assets/images/escuelas.jpg">
        <div class="sombra-card"></div>
        <p>Material didáctico para escuelas</p>
      </router-link> 
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
section{
  display:flex;
  flex-direction:column;
  margin-top:17vh;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  height:66vh;
  background-color:$color-4;
  color:$color-3;
  padding-top:2vh;
  padding-bottom:8vh;
  

}

.img-carousel {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cont-btn-home{
  height:10em;
  width:100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding-top:2em;
  background-color: $color-1;
  padding-bottom:0;
  position:relative;
  margin-top:15vh;

  a{
    padding: 1em 2em;
    width:calc(300px - 4em);
    background-color:$color-2;
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
  .lastcard{background-color:$color-5;}
  
  
}
.cont-btn-historia{
  height:5em;
  width:100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  padding:2em 0;
  background-color: $color-1;
  position: relative; 
  // &::before {
  //     content: ""; // Necesario para pseudo-elementos
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background-image: url(../assets/images/trama2.png);
  //     background-size: auto; // Opcional: ajusta la imagen para cubrir el área
  //     background-repeat: repeat;
  //     background-position: center; // Opcional: centra la imagen
  //     opacity: 0.1; // La opacidad del 20%
  //     z-index: 0; // Asegura que esté debajo del contenido del div
  //   }
  
  a{
    padding: 1em 2em;
    font-size:1.5em;
    width:19em;
    background-color:$color-5;
    color:$color-1;
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:all 0.3s;
    position:relative;
    z-index:1;

    &:link, &:visited, &:hover, &:active {
      text-decoration: none;
      color:$color-1;
    }
    &:hover{
      scale:0.95;
      box-shadow: 2px 2px 15px rgba(255, 255, 255, 0.4);
    }

    &>p{
      font-weight: $font-semibold;
      width: 100%;
      text-align: center;
    }
  }
  
  
}
.cont-mas-links{
  width:100vw;
  height:40vh;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:2em;
  background-color:$color-1;
  position:relative;
  padding-bottom:1em;
    .card{
    
    height:90%;
    width:300px;
    position:relative;
    background-color:$color-4;
    align-content:center;
    transition:all 0.3s;
    &:hover{
      scale:0.95;
      box-shadow:5px 5px 10px rgba(0,0,0,0.3);
    }
    &>div{
      z-index:1;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, $color-4 100%);
      width:100%;
      height:100%;
      opacity:1;
      position:absolute;
      top:0;
      left:0;
      overflow: hidden;
    }
    &>img{
      width:100%;
      height:100%;
      opacity:1;
      object-fit: cover;
      z-index:0;
    }
    &>p{
      position:absolute;
      bottom:1em;
      width:100%;
      text-align:center;
      z-index:2;
      color:$color-3;
      font-weight:$font-semibold;
      &:hover, &:focus, &:visited{
        color:$color-3;
        text-decoration:none;
      }
    }
  }
}
</style>