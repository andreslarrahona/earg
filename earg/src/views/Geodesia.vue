<script setup>
</script>
<template>
    <section>
        <div>
            <h1>Contexto</h1>
            <div>
            <p>
                Este programa se inició en 1984 con la participación en una
                campaña de mediciones Transit propuesta por la Facultad de 
                Ciencias Astronómicas y Geofísicas de la UNLP (Depto. de Astrometría).
            </p>
            <p>
                Desde entonces este programa ha contribuido a vincular el territorio 
                de la Isla Grande de Tierra del Fuego con redes geodésicas nacionales e internacionales.
            </p>
            <p>
                En 1993, conjuntamente con la entonces Dirección de Geodesia de la Provincia, dirigida por
                el Agr. Carlos Zampatti, se diseñó y midió la Red Geodésica Provincial. 
            </p>
            <p>
                Esta Red, cuya versión inicial se denominó <strong style="color:$color-2">TDF95</strong>,
                constaba inicialmente de 23 pilares distribuidos en la Isla Grande de Tierra del Fuego.
                Hoy, ampliada y mejorada, se estima que su error es menor a los 10 milímetros en cualquiera de las tres
                coordenadas (Latitud, Longitud y Altura Elipsoidal).
            </p>
            <p>
                TDF95 materializaba el marco de referencia POSGAR94 (marco Oficial de la Rep. Argentina desde 1997 hasta mayo 2009)
                en la Isla Grande, hoy reemplazado por POSGAR 07 en Tierra del Fuego.
            </p>
            </div>
            <div>
                <img src="@/assets/images/logos/POSGAR07.png">
            </div>

        </div>
        <img id="fagnano" src="@/assets/images/fagnano2.png">
    </section>
</template>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
section{
    background-color:$color-1;
    div{
        width:100%;
        height:80vh;
    }
}
#fagnano{
    width:100%;
}
</style>