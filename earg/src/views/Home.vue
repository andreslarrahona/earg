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
  <div class="carousel">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="image" />
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
  </div>
  <div class="cont-btn-historia">
    <div>
      <router-link to="/Meteorologia" class="btn btn-primary">
        <p>Conoce nuestra historia</p>
        <i class="fa-solid fa-arrow-right"></i>
      </router-link>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  height:66vh;
  background-color:$color-4;
  color:$color-3;
  padding-top:2vh;
  padding-bottom:8vh;


}

img {
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
  
  a{
    padding: 1em 2em;
    width:12em;
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
      background-color: $color-3;
      color: $color-2;
      padding: 0.5em;
    }
    &>p{
      max-width:60%;
      font-weight: $font-semibold;
    }
  }
  
  
}
.cont-btn-historia{
  height:10em;
  width:100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  padding:2em 0;
  //background-image:url(../assets/images/trama.png);

  background-color: $color-4;
  a{
    padding: 1em 2em;
    font-size:1.5em;
    width:19em;
    background-color:$color-1;
    color:$color-4;
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:all 0.3s;

    &:link, &:visited, &:hover, &:active {
      text-decoration: none;
      color:$color-4;
    }
    &:hover{
      scale:0.95;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.6);
    }

    &>p{
      font-weight: $font-semibold;
      width: 100%;
      text-align: center;
    }
  }
  
  
}
</style>