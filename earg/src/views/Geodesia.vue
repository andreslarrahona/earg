<script setup></script>
<template>
  <section>
    <div class="seccion">
      <div class="titulo-seccion">
        <h1>Contexto</h1>
        <div class="img-titulo">
          <a
            target="_blank"
            href="https://www.ign.gob.ar/category/tem%C3%A1tica/geodesia/posgar-07"
          >
            <img src="@/assets/images/logos/POSGAR07.png" />
          </a>
        </div>
      </div>
      <div class="texto-2col">
        <div class="col-texto">
          <p>
            Este programa se inició en 1984 con la participación en una campaña
            de mediciones Transit propuesta por la Facultad de Ciencias
            Astronómicas y Geofísicas de la UNLP (Depto. de Astrometría).
          </p>
          <p>
            Desde entonces este programa ha contribuido a vincular el territorio
            de la Isla Grande de Tierra del Fuego con redes geodésicas
            nacionales e internacionales.
          </p>
          <p>
            En 1993, conjuntamente con la entonces Dirección de Geodesia de la
            Provincia, dirigida por el Agr. Carlos Zampatti, se diseñó y midió
            la Red Geodésica Provincial.
          </p>
          <p>
            Esta Red, cuya versión inicial se denominó
            <strong style="color: $color-2">TDF95</strong>, constaba
            inicialmente de 23 pilares distribuidos en la Isla Grande de Tierra
            del Fuego. Hoy, ampliada y mejorada, se estima que su error es menor
            a los 10 milímetros en cualquiera de las tres coordenadas (Latitud,
            Longitud y Altura Elipsoidal).
          </p>
          <p>
            TDF95 materializaba el marco de referencia POSGAR94 (marco Oficial
            de la Rep. Argentina desde 1997 hasta mayo 2009) en la Isla Grande,
            hoy reemplazado por POSGAR 07 en Tierra del Fuego.
          </p>
        </div>
        <div class="col-img" id="img-geodesia">
          <img src="@/assets/images/fotos/12.jpg" />
        </div>
      </div>
    </div>
    <div class="seccion">
      <div class="cont-img-full">
        <img id="fagnano" src="@/assets/images/fagnano2.png" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

section {
  background-color: $color-1;

  .seccion {
    width: 100vw;

    .titulo-seccion {
      display: flex;
      max-height: 3em;
      width: calc(100% - 6em);
      justify-content: space-between;
      padding: 2em 3em;
      h1 {
        font-size: 2.3em;
      }
      .img-titulo {
        font-size: 2.3em;
        max-height: 100%;
        text-align: right;
        padding-right: 3em;
        a {
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            img {
              scale: 0.95;
            }
          }
        }
        img {
          transition: all 0.3s;
          max-height: 100%;
        }
      }
    }
    .texto-2col {
      display: flex;
      gap: 20px;
      align-items: start;
      padding-bottom: 2em;
      .col-texto {
        flex: 3;
        p {
          padding: 0.5em 3em;
        }
      }
      .col-img {
        flex: 2;
      }
      #img-geodesia {
        height: 350px;
        align-content: center;
        text-align: center;
        img {
          height: 90%;
          object-fit: contain;
        }
      }
    }

    .cont-img-full {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
#fagnano {
  width: 100%;
}
</style>
