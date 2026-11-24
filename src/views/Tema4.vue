<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cálculo y proyección



    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Valor minuto de planta
    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Valor minuto de mano de obra
    separador 
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Costo estimado de la orden de producción


    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
