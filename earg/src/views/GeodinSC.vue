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

</script>
<template>
  <section class="contenedor" :class="{ 'fade-in': isMounted }">
  <article class="movimiento-article">
    <header class="article-header">
      <p class="breadcrumbs" style="top:0 !important;">
                <router-link to="/">Inicio</router-link> / 
                <router-link to="/Geodesia">Geodesia</router-link> / 
                <router-link to="/Geodinamica">Geodinamica</router-link>
            </p>
      <h1 class="article-title">Geodinámica en Santa Cruz</h1>
      <h2 class="article-subtitle">Subtitulo</h2>
      
    </header>

    <section class="article-section">
      <figure class="article-inline-image">
        <img src="@/assets/images/default.webp" alt="Imagen default" style="height:350px;width:auto;"/>
      </figure>
      <h3>Titulo seccion 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
        nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt,
         nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, 
         nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, 
         nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl
        eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl
        eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl 
        eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.


      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor, 
        nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl 
        eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed euismod, nisl eget 
        ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.


      </p>
      <h3>Titulo seccion 2</h3>
      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.
        Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh.
      </p>
      <p>
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id 
        imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan
        tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
      </p>
      <p>
        Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. 
        Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
      </p>
      
      <figure class="article-inline-image">
        <img src="@/assets/images/default.webp" alt="Imagen default 2" />
        <figcaption>
          Epigrafe de la imagen
        </figcaption>
      </figure>
      <p>
        Caelum ipsum fervet, solis radiis illustrata, dum aura lenis per arbores susurrat. Montes altissimi, valle profundae,
        naturae opus mirabile narrant. Flumina currunt sine fine, per saecula saeculorum, vitae similitudinem praebentia..."
      </p>
          

    </section>
  </article>
  </section>
</template>




<style scoped lang="scss">
@import "@/assets/styles/main.scss";
/* Base styles for a clean, readable article */
.contenedor{
  width:100vw;
  background-color: $color-1; /* Puedes aplicarlo también al html para mayor seguridad */
  opacity: 0;
  transform: translateY(10px);
  transition: 
    opacity 1s ease-out,
    transform 0.7s ease-out;
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

}
.movimiento-article {
  font-family: $font-main;
  line-height: 1.6;
  color: #333;
  max-width: 800px; /* Adjusted max-width for article content */
  margin: 0 auto; /* Center the article on the page */
  padding: 20px;
  background-color: $color-1; /* White background for content */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */

  @media (max-width: 768px) {
    padding: 15px;
  }
 
}
 ul, ol{margin:2em;}

/* Article Header */
.article-header {
  text-align: left;
  margin-bottom: 40px;

  .article-title {
    font-family: "Helvetica Neue", Arial, sans-serif; /* Modern font for titles */
    font-size: 2.8em;
    font-weight: 700;
    color: #1a2a4b; /* Dark blue for a strong presence */
    margin-bottom: 10px; /* Reduced margin to bring logo closer */

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
  /* Subtítulo del Artículo */
.article-subtitle {
  font-family: "Helvetica Neue", Arial, sans-serif; /* Consistente con el título principal */
  font-size: 1.8em; /* Un tamaño generoso pero menor que el título principal */
  font-weight: 600; /* Un poco menos negrita que el título */
  color: #2c3e50; /* Un tono oscuro pero ligeramente diferente al título */
  margin-top: 0; /* Espacio superior para separarlo del párrafo anterior */
  margin-bottom: 20px; /* Espacio inferior para separarlo del contenido siguiente */
  line-height: 1.3; /* Mejor legibilidad para el texto */

  @media (max-width: 768px) {
    font-size: 1.5em; /* Ajuste para pantallas más pequeñas */
    margin-top: 25px;
    margin-bottom: 15px;
  }
}

  
}

/* Article Sections - Now primarily for containing flow text and inline images */
.article-section {
  margin-bottom: 30px; /* Space between sections */

  p {
    margin-bottom: 1em;
    font-size: 1.1em; /* Slightly larger text for readability */
    color: #444;
    text-indent:1em;

    i {
      font-style: italic;
      color: #666;
    }
  }
  .text-highlight {
    color: $color-2; /* A distinct color for highlighted text */
    font-weight: bold;
  }
}

/* Inline Image Styling */
.article-inline-image {
  margin: 40px -20px; /* Pulls image slightly out to the sides if padding is present on .movimiento-article */
  display: block; /* Ensures it takes full width */
  text-align: center; /* Centers the image */
  max-width: unset; /* Override any max-width from parent */

  @media (max-width: 768px) {
    margin: 20px -15px; /* Adjust margin for smaller screens */
  }

  img {
    width: 100%; /* Image takes 100% of its parent's width */
    max-width:500px;
    height: auto;
    display: block;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px; /* Slight roundness */
    justify-self:center;
  }

  figcaption {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
    font-style: italic;
    padding: 0 20px; /* Add padding to figcaption if image margins are negative */
    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}
h2 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 2.2em;
  color: #1a2a4b;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: left; /* Default alignment for subheadings */
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
}

p {
  margin-bottom: 1em;
  font-size: 1.1em;
}


</style>
