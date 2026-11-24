<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación y localización de costos




    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Costos fijos y variables
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Costos directos e indirectos
    separador 
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Centros de costo



    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
