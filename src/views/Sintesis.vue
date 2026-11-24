<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El costeo de la producción de prendas permite identificar, clasificar y valorar los materiales, la mano de obra y los costos indirectos necesarios para fabricar un producto. Este proceso comprende la localización de costos por centros, la asignación técnica de recursos y la distribución de costos compartidos según criterios verificables. Asimismo, incluye el cálculo del valor minuto de planta y de mano de obra, considerando la capacidad y la eficiencia productiva. Finalmente, estos elementos permiten estimar el costo total y unitario de una orden, analizar variaciones y comparar los costos estimados, aplicados y reales, facilitando la planeación, el control y la toma de decisiones en la producción. 
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del costeo de prendas, organizado en cuatro temas: estructura, clasificación de costos, asignación de recursos y cálculo.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
