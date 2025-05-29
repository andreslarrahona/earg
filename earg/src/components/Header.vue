<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'

const backgroundImages = ref([
  'src/assets/images/ai2.png',
  'src/assets/images/polosur.jpg',
  'src/assets/images/ai.png'
]);

const currentImageIndex = ref(0);
let carouselInterval; // Variable para almacenar el ID del intervalo

// Propiedad computada que devuelve la URL de la imagen actual
const currentBackgroundImage = computed(() => {
  return `url(${backgroundImages.value[currentImageIndex.value]})`;
});

const changeBackgroundImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.value.length;
};


const lineasMenu = ref(true)
const extensionMenu = ref(true)
const serviciosMenu = ref(true)

const toggleLineasMenu = (event) => {
  event.stopPropagation()
  lineasMenu.value = !lineasMenu.value
  // Cierra los otros menús cuando se abre este
  extensionMenu.value = true
  serviciosMenu.value = true
}

const toggleExtensionMenu = (event) => {
  event.stopPropagation()
  extensionMenu.value = !extensionMenu.value
  // Cierra los otros menús cuando se abre este
  lineasMenu.value = true
  serviciosMenu.value = true
}

const toggleServiciosMenu = (event) => {
  event.stopPropagation()
  serviciosMenu.value = !serviciosMenu.value
  // Cierra los otros menús cuando se abre este
  lineasMenu.value = true
  extensionMenu.value = true
}

// Función para cerrar los menús si el clic es fuera
const closeMenusOnClickOutside = (event) => {
  const lineasMenuElement = document.getElementById('lineas').closest('.lista-menu')
  const extensionMenuElement = document.getElementById('extension').closest('.lista-menu')
  const serviciosMenuElement = document.getElementById('servicios').closest('.lista-menu')

  if (lineasMenuElement && !lineasMenuElement.contains(event.target)) {
    lineasMenu.value = true
  }
  if (extensionMenuElement && !extensionMenuElement.contains(event.target)) {
    extensionMenu.value = true
  }
  if (serviciosMenuElement && !serviciosMenuElement.contains(event.target)) {
    serviciosMenu.value = true
  }
}

// Agrega el event listener cuando el componente está montado
onMounted(() => {
    document.addEventListener('click', closeMenusOnClickOutside)
    carouselInterval = setInterval(changeBackgroundImage, 2000); // Cambia cada 5 segundos

})

// Remueve el event listener antes de que el componente se desmonte
onBeforeUnmount(() => {
    clearInterval(carouselInterval);
    document.removeEventListener('click', closeMenusOnClickOutside)
})
</script>

<template>

<header :style="{ backgroundImage: currentBackgroundImage }">
    <nav>
        <router-link class="cont-logo" to="/"><img src="@/assets/images/logos/logo10.png"></router-link>
        <div>
            <router-link to="/"><p>Acerca de la EARG</p></router-link>
            <router-link to="/">
                <div class="lista-menu" @click="toggleLineasMenu">
                    <p id="lineas">Líneas de trabajo <span style="font-size:0.8em;padding-left:0.2em;">∨</span></p>
                    <ul :class="{'lineas-menu': lineasMenu}">
                        <li value="" disabled selected hidden></li>
                        <li value="investigacion">Sismología</li>
                        <li value="produccion">Atmósfera superior</li>
                        <li value="marketing">Astronomía</li>
                        <li value="soporte">Geodesia</li>
                        <li value="gestion">Meteorología</li>
                        <li value="gestion">Meteoros</li>
                        <li value="gestion">Geofísica aplicada</li>
                    </ul>
                </div>
            </router-link>
            <router-link to="/">
                
                <div class="lista-menu" @click="toggleExtensionMenu">
                    <p id="extension">Extension <span style="font-size:0.8em;padding-left:0.2em;">∨</span></p>
                    <ul :class="{'extension-menu': extensionMenu}">
                        <li value="" disabled selected hidden></li>
                        <li value="investigacion">Sismología</li>
                        <li value="produccion">Atmósfera superior</li>
                        <li value="marketing">Astronomía</li>
                        <li value="soporte">Geodesia</li>
                        <li value="gestion">Meteorología</li>
                        <li value="gestion">Meteoros</li>
                        <li value="gestion">Geofísica aplicada</li>
                    </ul>
                </div>

            </router-link>
            <router-link to="/">
                <div class="lista-menu" @click="toggleServiciosMenu">
                    <p id="servicios">Servicios <span style="font-size:0.8em;padding-left:0.2em;">∨</span></p>
                    <ul :class="{'servicios-menu': serviciosMenu}">
                        <li value="" disabled selected hidden></li>
                        <li value="investigacion">Sismología</li>
                        <li value="produccion">Atmósfera superior</li>
                        <li value="marketing">Astronomía</li>
                        <li value="soporte">Geodesia</li>
                        <li value="gestion">Meteorología</li>
                        <li value="gestion">Meteoros</li>
                        <li value="gestion">Geofísica aplicada</li>
                    </ul>
                </div>
            </router-link>
            <router-link to="/"><p class="btn btn-1">Contacto</p></router-link>
        </div>
    </nav>
    <div class="cont-titulo-seccion">
        <img src="@/assets/images/logos/logo1.png">
    </div>
  </header>
  
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
header {
    transition: background-image 1s ease-in-out; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position:0 -200px;
    height:100vh;
    width:100vw;
    overflow:hidden;

    nav{
        height:15vh;
        display:flex;
        justify-content:space-between;
        @include padding-x(5%);
        width:calc(100vw - 10%);

        &>.cont-logo{
            height:70%;
            margin:auto 0;
            max-height:90%;
            cursor:pointer;
            transition:all 0.3s;
            
            &:hover{
                scale:0.9;
            }
            // border:dotted red 1px;
            img{
                max-height:100%;
                opacity:0.9;
            }
        }

        &>div{

            display:flex;
            // border:solid green 1px;
            gap:1em;
            align-items:center;
            p{
                // border:solid blue 1px;
                width:10em;
                max-width:10em;
                text-align:center;
                cursor:pointer;
                transition:all 0.2s;
                // border:solid red 1px;
                z-index:10;
                &:hover{
                    text-shadow: 2px 2px 5px $color-3;
                    scale:0.95;
                }

            }
            .lista-menu{
                position:relative;
                cursor:pointer;
                .lineas-menu, .extension-menu, .servicios-menu{
                    display:none;
                }
                
                &>ul{
                    position:absolute;
                    top:100%;
                    left:0;
                    width:100%;
                    background-color:$color-3;
                    color:$color-4;
                    padding:0;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    list-style:none;
                    z-index:10;

                    li{
                        padding:0.5em 1em;
                        cursor:pointer;
                        font-size:0.8em;
                        &:hover{
                            background-color:$color-4;
                            color:$color-3;
                        }
                    }
                }
            }

            
            
        }
    }
    .cont-titulo-seccion{
        width:100%;
        height: 85vh;
        display:flex;
        align-items:center;
        justify-content:center;
        img{
            opacity:0.9;
            width:50%;
            min-width:500px;
            max-width:700px;
            margin-bottom:30vh;
        }
    }
}

</style>
