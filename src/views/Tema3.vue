<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Asignación técnica de recursos





    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Recursos productivos y capacidad operativa
    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Criterios de distribución del costo



    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 

      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
