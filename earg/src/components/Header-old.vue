<script setup>
import { ref } from 'vue'

defineProps({
  //msg: String,
})

</script>

<template>

  <header>
    <nav>
        <router-link class="cont-logo" to="/"><img src="@/assets/images/logos/logo10.png"></router-link>
        <div>
            <router-link to="/"><p>Acerca de</p></router-link>
            <router-link to="/atmosfericas"><p>Ciencias atmosféricas</p></router-link>
            <router-link to="/astronomia"><p>Astronomía</p></router-link>
            <router-link to="/tierra"><p>Ciencias de la tierra</p></router-link>
            <router-link to="/"><p>Información útil</p></router-link>
            <router-link to="/"><p>Servicios</p></router-link>
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
    background-image:url('@/assets/images/ai.png');
    background-size: cover;
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
                &:hover{
                    text-shadow: 2px 2px 5px $color-3;
                    scale:0.95;

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
