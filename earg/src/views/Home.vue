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
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  height:65vh;
  background-color:$color-1;
  color:$color-2;
  padding-bottom:10vh;
  
  


}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>