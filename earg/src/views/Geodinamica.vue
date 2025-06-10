<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMounted = ref(false)
onMounted(() => {requestAnimationFrame(() => {isMounted.value = true})})
onUnmounted(() => {isMounted.value = false})

</script>
<template>
    <section class="contenedor" :class="{ 'fade-in': isMounted }">
        <header>
            <p class="breadcrumbs"><router-link to="/">Inicio</router-link> /
            <router-link to="/Geodesia">Geodesia</router-link> / Geodinámica</p>
            <h1>Geodinámica</h1>
        </header>
        <div class="ppal-cards">
            <router-link to="/GeodinTdf" class="card">
                <img src="@/assets/images/default.webp" alt="Descripcion imagen 1">
                <h3>Geodinámica en Tierra del Fuego</h3>
                <p>Descripcion ....</p>
            </router-link>
            <router-link to="/" class="card">
                <img src="@/assets/images/default.webp" alt="Descripcion imagen 2">
                <h3>Geodinámica en Santa Cruz</h3>
                <p>Descripcion .....</p>
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
        justify-content: space-around;
        gap: 16px;
        width: calc(100% - 2em);
        flex-wrap: wrap;
        @include margin-x(1em);
        padding-top:1em;
        .card{
            height:auto;
            max-height:60%;min-height:300px;
            min-width: 300px;max-width:500px;
        }
    }
}
</style>