<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMounted = ref(false)
onMounted(() => {requestAnimationFrame(() => {isMounted.value = true})})
onUnmounted(() => {isMounted.value = false})

</script>
<template>
    <section class="contenedor" :class="{ 'fade-in': isMounted }">
        <header>
            <p class="breadcrumbs"><router-link to="/">Inicio</router-link> / Calculador de altura geoidal</p>
            <h1>Calculador de altura geoidal</h1>
            <p>Aplicación tdaTDF del Grupo de Geodesia Espacial y Astrometría de la UNLP</p>
        </header>
        <iframe
            src="http://astrogeo3.fcaglp.unlp.edu.ar/tdaTDF/"
            title="TdaTDF" >
        </iframe>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
.contenedor{
    background-color:$color-1;
    color:$color-4;
    header{
        border-bottom:solid 2px gray;
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
    iframe{
        width: 100%;
        height: 65vh;
        border: none;
    }  
}
</style>