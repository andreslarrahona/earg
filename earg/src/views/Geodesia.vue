<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMounted = ref(false)
onMounted(() => {requestAnimationFrame(() => {isMounted.value = true})})
onUnmounted(() => {isMounted.value = false})

</script>
<template>
    <section class="contenedor" :class="{ 'fade-in': isMounted }">
        <header>
            <h1>Geodesia</h1>
        </header>
        <div class="ppal-cards">
            <div class="card">
                <img src="@/assets/images/geodesia/glacio.png" alt="Ajuste glacio-isostático">
                <h3>Geodinámica</h3>
                <p>Registros relacionados con el ascenso de la corteza terrestre tras el 
                    retroceso de los hielos. Información de variaciones en altura vinculadas 
                    al ajuste isostático en zonas previamente glaciadas.</p>
            </div>
            <div class="card">
                <img src="@/assets/images/geodesia/gravimetria.jpg" alt="Gravimetría">
                <h3>Gravimetría</h3>
                <p>Estudio y medición del campo gravitacional terrestre; mediciones de reflexiones
                    terrestres de señales GNSS y campañas para la determinación de forma y estructura 
                    interna de la Tierra</p>
            </div>
            <div class="card">
                <img src="@/assets/images/fotos/20180710_123307.jpg" alt="Estaciones geodésicas permanentes">
                <h3>Estaciones permanentes</h3>
                <p>Equipos de monitoreo continuo delaposición terrestre y la obtención de datos 
                    astronómicos y geoespaciales, contribuyendo a la actualización de marcos de referencia 
                    geodésicos nacionales e internacionales.</p>
            </div>
            <div class="card">
                <img src="@/assets/images/geodesia/marcos.jpg" alt="Marcos de referencia geodésica ">
                <h3>Marcos de referencia</h3>
                <p>Sistemas de coordenadas que permiten determinar posiciones precisas sobre la 
                    superficie terrestre, esenciales para la geodesia, cartografía, navegación y 
                    diversas aplicaciones científicas. </p>
            </div>
            <div class="card">
                <img src="@/assets/images/fotos/IMG_20190416_161430.jpg" alt="Campañas geodésicas">
                <h3>Trabajos y campañas históricas</h3>
                <p>Aportes al desarrollo y consolidación del marco geodésico nacional sobre redes 
                    geodésicas fijas y móviles, permitiendo la integración de la red nacional con 
                    iniciativas regionales e internacionales.</p>
            </div>
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
        justify-content: space-between;
        gap: 16px;
        width: calc(100% - 2em);
        flex-wrap: wrap;
        @include margin-x(1em);
        padding-top:1em;

        .card {
            flex: 1;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-height:350px;
            height:80%;
            min-width: 200px;

            img {
            width: 100%;
            height: auto;
            margin-bottom: 8px;
            object-fit:cover;
            max-height:30%;
            }

            h3 {
            margin: 8px 0 4px;
            font-size: 1.1rem;
            }

            p {
            font-size: 0.9rem;
            color: #555;
            }
        }
        }

    
}
</style>