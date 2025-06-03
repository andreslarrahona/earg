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
      <hr />
      <div class="texto-2col">
        <div class="col-texto">
          <p>
            La EARG remide regularmente esta red a los efectos de estudiar su
            estabilidad y ensayar diferentes métodos de medición y
            procesamiento. Estas remediciones revisten especial interés pues
            Tierra del Fuego es la única provincia argentina que trasciende la
            Placa Sudamericana, tal como se observa en el mapa de la derecha.
          </p>
          <p>
            Se puede apreciar que la zona al sur del Lago Fagnano pertenece a la
            Placa de Scotia. El procesamiento de las mediciones efectuadas desde
            1993 sugiere la existencia de un desplazamiento relativo de más de 5
            mm/año en el período considerado
            <i
              >(Del Cogliano et al., 2000 resumen disponible, Perdomo et al.,
              2002, Hormaechea et al., 2004).</i
            >
          </p>
        </div>
        <div class="col-img" id="mapa-geodesia">
          <div id="sombra-geodesia">
            <p>
              AMPLIAR
              <i style="margin-left: 0.5em" class="fa-solid fa-expand"></i>
            </p>
          </div>
          <img src="@/assets/images/geodesia.jpg" />
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
    hr {
      margin: 1em 10vw 2em 5vw;
    }
    .titulo-seccion {
      display: flex;
      max-height: 3em;
      width: calc(100% - 6em);
      justify-content: space-between;
      padding: 2em 3em;
      h1 {
        margin-left: 0.5em;
        font-size: 2.3em;
      }
      .img-titulo {
        font-size: 2.3em;
        max-height: 100%;
        text-align: right;
        padding-right: 3em;
        width: 300px;
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
      height: auto;
      margin: 0 3vw;
      .col-texto {
        flex: 3;
        text-align: justify;
        p {
          padding: 0.5em 1em;
          text-indent: 1em;
        }
      }
      .col-img {
        flex: 2;
      }
      #img-geodesia {
        align-content: center;
        text-align: center;
        align-self: center;
        img {
          width: 25vw;
          min-width: 350px;
          object-fit: contain;
        }
      }
      #mapa-geodesia {
        height: 100%;
        max-height: 200px;
        overflow: hidden;
        align-self: center;
        width: calc(25vw - 100px);
        min-width: 350px;
        align-content: center;
        text-align: center;
        border-radius: 8px;
        position: relative;
        cursor: pointer;
        margin: 0;

        &:hover p {
          scale: 0.95;
        }
        &:hover img {
          opacity: 0.3;
        }
        #sombra-geodesia {
          position: absolute;
          width: 100%;
          left: 0;
          height: 100%;
          border-radius: 8px;
          background-color: rgba(231, 223, 220, 0.3);
          color: rgb(74, 74, 66);
          font-size: 30px;
          text-justify: center;
          align-content: center;
          z-index: 10;

          p {
            transition: all 0.3s;
          }
        }
        img {
          max-height: 100%;
          width: 25vw;
          min-width: 350px;
          border-radius: 8px;
          opacity: 0.7;
          transition: all 0.3s;
          object-fit: cover;
          object-position: 0 -20px;
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
