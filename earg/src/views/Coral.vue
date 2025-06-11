<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import contenido from '/CONTENIDO/Lineas de trabajo/Atmosfera/Monitoreo atmosferico con CORAL/Coral.json'
const isMounted = ref(false)
onMounted(() => {requestAnimationFrame(() => {isMounted.value = true})})
onUnmounted(() => {isMounted.value = false})

</script>
<template>
    <section class="contenedor" :class="{ 'fade-in': isMounted }">
        <header>
            <p class="breadcrumbs"><router-link to="/">Inicio</router-link> / {{contenido.titulo}}</p>
            
        </header>
        <div class="cont-iframe">
          <iframe src="https://hyper-bicycle-a64.notion.site/ebd/20fc469761cc80d5bd36d76d7340b512"
          width="100%"
          height="800" frameborder="0" allowfullscreen />
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
.contenedor{
    background-color:$color-4;
    color:$color-3;
    header{
        //border-bottom:solid 2px rgba(255,255,255,0.1);
        //border-bottom:solid 7px $color-1;

        h1{
            font-size:2em;
            color:$color-2;
            padding-top:1em;
            padding-bottom:0.5em;
            text-align:center;
            opacity:0.9;
        }
        p{
            font-size:1em;
            text-align:center;
            margin:0 2em 0.5em 2em;
            padding-bottom:1em;
            opacity:0.8;
        }
    }
    .cont-iframe{
        width:100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3em 0;
        .iframe{
          display: block;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          border: none;
          height: 75vh;;
        } 
    }
     
}
</style>