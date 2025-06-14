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

defineProps({
  //msg: String,
})

</script>

<template>

  <footer  :class="{ 'fade-in': isMounted }">
    <div class="cont-mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4989.728003116654!2d-67.7512594897972!3d-53.786900351694314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b1535fc65a2d9%3A0x5d1dce7e7ab6c1f8!2sEstaci%C3%B3n%20Astron%C3%B3mica%20R%C3%ADo%20Grande!5e0!3m2!1ses!2sar!4v1749868798876!5m2!1ses!2sar"
              width="280"
              height="380"
              frameborder="0"
              style="border:0"
              allowfullscreen="">
      </iframe>
    </div>
    <div class="cont-contacto">
      <div>
        <h2>Dirección</h2>
        <p>Acceso Aeropuerto</p>
        <p>V9420EAR Río Grande, Tierra del Fuego</p>
        <p>Argentina</p>
      </div>
      <div>
        <h2>Teléfono</h2>
        <p>(+54) 2964 430123 / 433930</p>
        <div class="redes"><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-youtube"></i></div>
      </div>
    </div>
    <div class="cont-indice">
      <div class="indice">
        <div>
          <p class="i-titulo">Acerca de la EARG</p>
          <p class="i-titulo" style="cursor:text !important">Líneas de trabajo</p>
          <p class="i1">Sismología</p>
            <p>Estaciones sismológicas</p>
            <p>Sismicidad en TIerra del Fuego</p>
            <p>Registros sísmicos</p>
          <p class="i1">Atmósfera superior</p>
            <p>Monitoreo atmsférico con CORAL</p>
            <p>Mapeo avanzado de la temperatura mesosférica</p>
            <p>Vientos de la mesósfera</p>
        </div>
        <div>
          <p class="i-titulo" style="cursor:text !important">Líneas de trabajo</p>
          <p class="i1">Geodesia</p>
            <p>Geodinámica</p>
            <p>Gravimetría</p>
            <p>Estaciones permanentes</p>
            <p>Marcos de referencia</p>
            <p>Trabajos y campañas históricas</p>
          <p class="i1">Meteorología</p>
          <p class="i1">Astronomía de meteoros</p>
        </div>
        <div>
          <p class="i-titulo" style="cursor:text !important">Extensión</p>
        </div>
        <div>
          <p class="i-titulo" style="cursor:text !important">Servicios</p>
          <p>Geofísica aplicada</p>
        </div>
        <div>
          <p class="i-titulo" style="cursor:text !important">Recursos</p>
          <p>Material didáctico</p>
          <p>Calculador de altura geoidal</p>
          <p>Salida y puesta del sol</p>
          <p>Salida y puesta de la luna</p>
          <p>Fases de la luna</p>
          <p>Publicaciones</p>
          <p>Transformación de coordenadas geodésicas</p>
          <p>Cartesianas geocéntricas a geográficas</p>
          <p>Conversor Gauss-Kruger / UTM a geográficas</p>
        </div>
      </div>

    </div>

  </footer>
  
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
footer{
  height:350px;
  width:100vw;
  display: flex;
  background-color:$color-2;
  color:$color-1;
  .cont-mapa{
    flex:1;
    align-self:center;
    height:100%;
    display: flex;

    iframe{
      margin:auto 5vw;
      width:250px;
      height:250px;
      border-radius:50%;
    }
  }
  .cont-contacto{
    font-size:0.8em;
    display:flex;
    flex-direction:column;
    justify-content: center;
    flex:1;
    min-width:320px;
    & > div{
      flex:1;
      margin:0 1em;
      &:first-of-type{
        align-content:flex-end;
        padding-bottom:1em;
      } 
    }
    .redes{
      display:flex;
      justify-content:space-between;
      width:10em;
      margin-top:1.8em;
      i{
        transition:all 0.3s ease;
        font-size:2em;
        cursor:pointer;
        &:hover{
          color:$color-3;
          scale:0.95;
        }
      }
    }
    
  }
  .cont-indice{
    padding:1em;
    flex:3;
    min-width:250px;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    padding-top:2em;
    .indice{
      display:flex;
      width:100%;
      height:calc(100% - 3em);
      flex-wrap:wrap;
      gap:1em;
      padding-right: 1em;
      &>div{
        flex:1;
        overflow:visible;
        p{
          font-size:0.7em;
          width:100%;
          transition:all 0.3s ease;
          cursor:pointer;
          &:hover{
            color:$color-3;
            scale:0.98;
          }
        }
        h2{
          font-size:1.2em;
          text-align:left;

          
        }
        .i-titulo{
          font-weight: $font-semibold;
          margin:1em 0 0.5em 0;
          font-size:0.9em;
        }
        .i1{
          margin:0.5em 0;
          font-weight:bold;
          
        }
      
      }
      

      
    }

    
  }

}

</style>
