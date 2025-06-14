<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import contenido from '/CONTENIDO/Lineas de trabajo/Atmosfera/Atmosfera.json'
const secciones = contenido.secciones
const isMounted = ref(false)
onMounted(() => {requestAnimationFrame(() => {isMounted.value = true})})
onUnmounted(() => {isMounted.value = false})

</script>
<template>
    <section class="contenedor" :class="{ 'fade-in': isMounted }">
        <header>
            <p class="breadcrumbs"><router-link to="/">Inicio</router-link> / {{contenido.titulo}}</p>
            <h1>{{contenido.titulo}}</h1>
        </header>
        <div class="ppal-cards">

            <router-link 
                v-for="card in secciones" 
                class="card" 
                :to="card.enlace"
            >
                <img :src="`/CONTENIDO/Lineas de trabajo/Atmosfera/${card.imagen}`" :alt="card.titulo">
                <h3>{{ card.titulo }}</h3>
                <p>{{ card.descripcion }}</p>
            </router-link>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
.contenedor{
    background-color:$color-1;
    color:$color-4;
    display:flex;
    flex-direction:column;
    header{
        border-bottom:solid 2px gray;
        height:15vh;
        h1{
            font-size:2em;
            color:$color-2;
            padding-top:1em;
            padding-bottom:0.5em;
            text-align:center;
            opacity:0.9;
        }
        
    }
    .ppal-cards {
        height:calc(100vh - 15vh - 17vh);
        display: flex;
        justify-content: center;
        gap: 16px;
        width: calc(100% - 2em);
        flex-wrap: wrap;
        @include margin-x(1em);
        padding-top:1em;
        .card{
            height:auto;
            max-height:75%;min-height:350px;
            min-width: 200px;max-width:300px;
        }
    }
}
</style>