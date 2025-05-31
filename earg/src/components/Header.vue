<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

})

// Remueve el event listener antes de que el componente se desmonte
onBeforeUnmount(() => {
    document.removeEventListener('click', closeMenusOnClickOutside)
})
</script>

<template>

<header :style="{ backgroundImage: currentBackgroundImage }">
    <nav>
        <router-link class="cont-logo" to="/"><img src="@/assets/images/logos/logo9.png"></router-link>
        <div>
            <router-link to="/"><p>Acerca de la EARG</p></router-link>
            
                <div class="lista-menu" @click="toggleLineasMenu">
                    <p id="lineas">Líneas de trabajo <span style="font-size:0.8em;padding-left:0.2em;">∨</span></p>
                    <ul :class="{'lineas-menu': lineasMenu}">
                        <li value="" disabled selected hidden></li>
                        <router-link to="/Sismologia"><li value="sismologia">Sismología</li></router-link>
                        <router-link to="/Atmosfera"><li value="atmosfera">Atmósfera superior</li></router-link>
                        <router-link to="/Astronomia"><li value="astronomia">Astronomía</li></router-link>
                        <router-link to="/Geodesia"><li value="geodesia">Geodesia</li></router-link>
                        <router-link to="/Metrologia"><li value="meteorologia">Meteorología</li></router-link>
                        <router-link to="/Meteoros"><li value="meteoros">Meteoros</li></router-link>
                        <router-link to="/Geofisica"><li value="geofisica">Geofísica aplicada</li></router-link>
                    </ul>
                </div>
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
        <img src="@/assets/images/logos/logo3.png">
    </div>
  </header>
  
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
header {
    background-color:$color-1;
    color:$color-2;
    height:35vh;
    width:100vw;
    max-width:100vw;
    overflow-y:visible;

    

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
            a:link, a:visited{text-decoration:none;}

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
                    text-shadow: 2px 2px 2px $color-2;
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
        height: 10vh;
        margin-top:20vh;
        display:flex;
        align-items:center;
        justify-content:center;
        img{
            opacity:0.9;
            width:10%;
            min-width:500px;
            max-width:700px;
            margin-bottom:37vh;
        }
    }
}

</style>
