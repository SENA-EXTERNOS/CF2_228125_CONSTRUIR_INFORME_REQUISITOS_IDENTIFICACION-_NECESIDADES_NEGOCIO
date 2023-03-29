<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo, donde tendremos la oportunidad de explorar, a través de diferentes conceptos, las principales metodologías de desarrollo ágil y sus tipos; así mismo, el buen uso de la documentación en los proyectos ágiles, los tipos de lenguaje modelado, sus técnicas de análisis, características, ventajas y desventajas. Y, por último, tener en cuenta los requisitos de #[em software], necesarios para un buen desarrollo.
      br
      br
      |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
  
    .row(data-aos="zoom-out")
      figure.mb-5.mt-5
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/F_sGSI26q88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
