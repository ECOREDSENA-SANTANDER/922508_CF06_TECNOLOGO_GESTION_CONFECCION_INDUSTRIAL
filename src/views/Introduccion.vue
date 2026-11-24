<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-right") El costeo de la producción de prendas permite identificar y cuantificar los recursos requeridos para fabricar una referencia u orden de producción. Su estructuración comprende los materiales incorporados al producto, la mano de obra vinculada con las operaciones y los costos indirectos necesarios para mantener el funcionamiento del proceso productivo. La integración de estos elementos proporciona una base técnica para estimar el costo de fabricación bajo condiciones previamente definidas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El análisis comienza con la clasificación de los costos según su comportamiento y su relación con el producto. La distinción entre costos fijos y variables permite reconocer cómo se modifican ante cambios en el volumen de actividad, mientras que la diferenciación entre costos directos e indirectos orienta su identificación o distribución. La localización mediante centros de costo facilita el registro de los recursos consumidos por las áreas productivas y de apoyo, además de conservar la trazabilidad de las asignaciones realizadas.
    
    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-right")
      p.mb-0 La proyección final articula la capacidad operativa, los recursos productivos, las bases de distribución y el tiempo requerido para fabricar las prendas. A partir de esta información se calculan el valor minuto de planta, el valor minuto de mano de obra y el costo estimado de la orden de producción. Los resultados obtenidos permiten documentar los supuestos del cálculo, comparar alternativas productivas y establecer una referencia económica para el seguimiento de la ejecución.
      
    .row.justify-content-center.align-items-center(data-aos="fade-right")          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
