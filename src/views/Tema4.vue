<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cálculo y proyección

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El cálculo del costo convierte los consumos físicos, tiempos estándar y recursos asignados en valores monetarios. Para proyectar una orden de producción se requiere definir la cantidad, los materiales, el contenido de trabajo, la capacidad utilizada, las tasas de distribución y el periodo al que corresponden los precios. La ausencia de alguno de estos datos obliga a utilizar supuestos que deben quedar identificados en la hoja de costos.
            br 
            br 
            p.mb-0 La proyección no consiste en aplicar porcentajes generales al valor de los materiales. Cada elemento debe calcularse mediante una relación verificable entre cantidad y tarifa: metros por precio unitario, minutos por valor minuto, unidades por costo del insumo o servicios por tarifa contratada. Este procedimiento permite reconocer qué variable origina una diferencia cuando cambian los precios, el consumo, el SAM, la eficiencia o el volumen de la orden.

    p.mb-5(data-aos="fade-right") El costo estimado se determina antes de ejecutar la producción y se sustenta en valores técnicos y económicos vigentes. Durante la fabricación, los costos pueden aplicarse mediante tasas predeterminadas; al cierre, deben compararse con los consumos y valores reales. Datar y Rajan (2021) diferencian estas mediciones porque cumplen propósitos distintos: proyectar, acumular y controlar.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Información necesaria para proyectar el costo de una orden

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Identificación")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe contener número de orden, referencia, versión, talla, color, cantidad y periodo.
                  p.mb-0 #[b Aplicación:] permite delimitar el objeto de costo.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Materiales")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe incluir consumos unitarios, cantidades, unidades de medida y precios.
                  p.mb-0 #[b Aplicación:] permite calcular el costo de los materiales directos.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Tiempo estándar")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe indicar el SAM vigente y su distribución por centros u operaciones.
                  p.mb-0 #[b Aplicación:] permite valorar el contenido de transformación.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Mano de obra")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe contener el costo laboral aplicable y la capacidad productiva prevista.
                  p.mb-0 #[b Aplicación:] permite determinar el valor minuto de mano de obra.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Costos de planta")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe incluir los costos indirectos productivos fijos y variables.
                  p.mb-0 #[b Aplicación:] permite establecer el valor minuto de planta.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Capacidad")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe identificar capacidad normal, disponibilidad prevista y eficiencia utilizada.
                  p.mb-0 #[b Aplicación:] evita distribuir costos fijos sobre niveles anormales de actividad.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Servicios externos")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe incluir tarifas de bordado, estampación, lavado u otros procesos contratados.
                  p.mb-0 #[b Aplicación:] permite reconocer costos directos adicionales.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Criterios de exclusión")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe identificar costos administrativos, comerciales, financieros o anormales.
                  p.mb-0 #[b Aplicación:] evita incorporar valores que no corresponden al costo de producción.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')
          .row.justify-content-center.align-items-center(titulo="Fecha de valoración")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Datos requeridos:] debe establecer la vigencia de precios, tasas y cotizaciones.
                  p.mb-0 #[b Aplicación:] permite controlar la actualización de la proyección.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema4/2.png')

    .cajon.color-acento-contenido.p-4.mb-0(data-aos="fade-left")
      h4.mb-3 Principio de proyección
      p.mb-0 Una cifra proyectada debe conservar relación con una cantidad, una tarifa, una fuente y un periodo. Los porcentajes globales sin base identificable reducen la trazabilidad y dificultan explicar las variaciones posteriores.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Valor minuto de planta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/11.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/12.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 El valor minuto de planta representa el costo de disponer de la infraestructura, los equipos y los servicios indirectos necesarios para desarrollar la producción durante un minuto de capacidad. Puede integrar depreciación, mantenimiento, energía indirecta, arrendamiento productivo, supervisión, control de calidad, manejo interno y otros costos indirectos relacionados con la transformación.
        p.mb-0 La expresión no posee una composición universal. Algunas organizaciones calculan un minuto de fábrica que incluye mano de obra directa y costos indirectos; otras separan ambos valores. Para evitar duplicidades, en el procedimiento desarrollado a continuación el valor minuto de planta comprende únicamente los costos indirectos de fabricación. La mano de obra directa se calcula de manera independiente en el apartado 4.2.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Delimitación del valor minuto de planta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .tarjet.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Depreciación de maquinaria productiva
                    p.mb-4 Tratamiento: se incluye como costo indirecto fijo asociado con la capacidad de los equipos.
                    h4.mb-4 Mantenimiento de planta y equipos
                    p.mb-0 Tratamiento: se incluye según su clasificación fija o variable y la distribución entre centros.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/13.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Arrendamiento del área productiva
                    p.mb-4 Tratamiento: se incluye en la proporción correspondiente a las áreas de fabricación.
                    h4.mb-4 Energía de maquinaria
                    p.mb-0 Tratamiento: se incluye como costo variable o mixto según su comportamiento y medición.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/14.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Supervisión de producción
                    p.mb-4 Tratamiento: se incluye cuando no puede trazarse directamente a una orden específica.
                    h4.mb-4 Control de calidad productivo
                    p.mb-0 Tratamiento: se incluye en la medida en que apoye la transformación y liberación del producto.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/15.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Manejo interno de materiales
                    p.mb-4 Tratamiento: se incluye cuando corresponde al flujo dentro de la producción.
                    h4.mb-4 Mano de obra directa
                    p.mb-0 Tratamiento: se excluye porque se determina mediante el valor minuto de mano de obra.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/16.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Materiales directos
                    p.mb-4 Tratamiento: se excluyen porque se valoran según el consumo específico de la orden.
                    h4.mb-4 Administración general
                    p.mb-0 Tratamiento: se excluye cuando no contribuye a llevar el inventario a su ubicación y condición actuales.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/17.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Comercialización y ventas
                    p.mb-4 Tratamiento: se excluyen porque no corresponden a la transformación del producto.
                    h4.mb-4 Costos financieros
                    p.mb-0 Tratamiento: se excluyen del valor minuto operativo, salvo un tratamiento contable específico aplicable.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/18.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Utilidad
                    p.mb-0 Tratamiento: se excluye porque corresponde al resultado esperado y no a un recurso consumido.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema4/19.png")

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Minutos de capacidad

    p.mb-5(data-aos="fade-left") El denominador debe representar la capacidad sobre la cual se espera distribuir el costo. Para los costos indirectos fijos se emplea la capacidad normal, mientras que los costos variables se relacionan con el uso previsto o real de los recursos productivos. La NIC 2 establece que los costos indirectos fijos se asignan con base en la capacidad normal y que la baja producción no debe incrementar el valor fijo distribuido a cada unidad (IFRS Foundation, 2025).

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 Los minutos nominales pueden calcularse así:
              p.mb-4 #[b MN = N × D × H × 60]
              p.mb-0 Donde:
              p.mb-0 #[b • MN] corresponde a los minutos nominales.
              p.mb-0 #[b • N] representa el número de recursos productivos equivalentes.
              p.mb-0 #[b • D] indica los días previstos.
              p.mb-4 #[b • H] corresponde a las horas programadas por día.
              p.mb-4 Si se reconocen interrupciones programadas, restricciones operativas o una eficiencia planificada, deben obtenerse los minutos productivos.
              p.mb-4 #[b MP = MN × Fd × Ep]
              p.mb-0 Donde:
              p.mb-0 #[b • MP] corresponde a los minutos productivos.
              p.mb-0 #[b • MN] representa los minutos nominales.
              p.mb-0 #[b • Fd] indica el factor de disponibilidad.
              p.mb-4 #[b • Ep] corresponde a la eficiencia planificada expresada en forma decimal.
              p.mb-4 El factor de disponibilidad y la eficiencia no deben aplicarse dos veces. Si el sistema ya registra directamente minutos productivos o minutos estándar esperados, no es necesario volver a ajustar el denominador.
              p.mb-0 Los siguientes valores son hipotéticos.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema4/20.png')

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Construcción hipotética de los minutos productivos de planta

    .row.justify-content-center.align-items-stretch.mb-lg-4.mb-0(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Recursos productivos equivalentes
          p.mb-0 40 recursos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Días programados
          p.mb-0 22 días.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Horas por día
          p.mb-0 8 horas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Minutos nominales
          p.mb-0 422.400 minutos.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Factor de disponibilidad
          p.mb-0 92 %.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Tarjeta 6 - Minutos disponibles
          p.mb-0 388.608 minutos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Eficiencia planificada
          p.mb-0 82 %.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center 
          h4.mb-4 Minutos productivos proyectados
          p.mb-0 318.658,56 minutos estándar.

    p.mb-4(data-aos="fade-right") #[b 40 × 22 × 8 × 60 × 0,92 × 0,82 = 318.658,56 minutos estándar.]

    p.mb-5(data-aos="fade-right") La capacidad expresada en minutos debe corresponder con los costos incluidos en el numerador. Si los costos pertenecen únicamente al centro de ensamble, el denominador no puede incorporar minutos de corte, terminación u otras áreas. De igual manera, una tasa calculada para toda la planta requiere que los costos y la capacidad comprendan el mismo alcance.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Cálculo del valor minuto

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema4/21.png')
            .col-lg-5
              p.mb-4 Una fórmula simplificada puede expresarse así:
              p.mb-4 #[b VMP = CIP / MP]
              p.mb-0 Donde:
              p.mb-0 #[b • VMP] corresponde al valor minuto de planta.
              p.mb-0 #[b • CIP] representa los costos indirectos productivos distribuibles.
              p.mb-4 #[b • MP] indica los minutos productivos utilizados como base.
              p.mb-4 No obstante, resulta técnicamente más consistente separar los costos fijos de los variables:
              p.mb-4 #[b Ecuación editable: VMP = (CIFf / MCN) + (CIFv / MPp)]
              p.mb-0 Donde:
              p.mb-0 #[b • CIFf] corresponde a los costos indirectos fijos de fabricación.
              p.mb-0 #[b • MCN] representa los minutos asociados con la capacidad normal.
              p.mb-0 #[b • CIFv] corresponde a los costos indirectos variables presupuestados.
              p.mb-0 #[b • MPp] representa los minutos productivos previstos.

    p.mb-5(data-aos="fade-left") La separación evita que un nivel reducido de actividad aumente el costo fijo por minuto y permite actualizar el componente variable cuando cambian el consumo de energía, los materiales indirectos o los servicios relacionados con la actividad.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de valor minuto de planta
    
    p.mb-4(data-aos="fade-left") Supóngase que la planta proyecta costos indirectos fijos por $52.000.000 y costos indirectos variables por $16.000.000. La capacidad normal corresponde a 300.000 minutos estándar y la actividad prevista a 260.000 minutos.
    p.mb-4(data-aos="fade-left") #[b VMP = ($52.000.000 / 300.000) + ($16.000.000 / 260.000) = $173,33 + $61,54 = $234,87 por minuto.]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Cálculo hipotético del valor minuto de planta
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tabla-a.tab10.mb-0
              table
                thead
                  tr
                    th Componente
                    th Costo proyectado
                    th Base utilizada
                    th Valor por minuto
                tbody
                  tr
                    td Costos indirectos fijos
                    td.text-center $52.000.000.
                    td 300.000 minutos de capacidad normal.
                    td.text-center $173,33.
                  tr
                    td Costos indirectos variables
                    td.text-center $16.000.000.
                    td 260.000 minutos productivos previstos.
                    td.text-center $61,54.
                  tr
                    td Costos indirectos variables
                    td.text-center No aplica.
                    td No aplica.
                    td.text-center $234,87.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema4/22.png')

    p.mb-5(data-aos="fade-left") El valor de $234,87 representa el costo indirecto productivo asignable por cada minuto estándar, bajo las condiciones y bases declaradas. No incluye materiales directos, mano de obra directa, gastos comerciales, costos financieros ni utilidad.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Control de alcance
      p.mb-0 Si el valor minuto de planta se calcula incluyendo la mano de obra directa, no debe adicionarse posteriormente el valor minuto de mano de obra. Antes de emplear una tasa es indispensable revisar los conceptos incorporados en el numerador.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Valor minuto general o por centro

    p.mb-5(data-aos="fade-left") Una tasa general simplifica el cálculo, pero supone que todas las órdenes consumen la infraestructura de manera semejante. Cuando corte, ensamble y acabado presentan estructuras de costo distintas, resulta más preciso calcular valores por centro.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de valor minuto de planta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/23.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Valor minuto general")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Aplicación:] utiliza los costos y minutos consolidados de la planta.
                p.mb-4 #[b Ventaja:] facilita la proyección cuando las referencias siguen recorridos semejantes.
                p.mb-0 #[b Limitación:] puede distribuir de manera uniforme costos generados por recursos diferentes.
          .tarjeta.color-a.p-4(titulo="Valor minuto por centro")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Aplicación:] calcula una tasa para corte, ensamble, acabado u otra unidad.
                p.mb-4 #[b Ventaja:] reconoce diferencias de maquinaria, infraestructura y servicios.
                p.mb-0 #[b Limitación:] exige desagregar costos, capacidad y tiempo estándar por centro.
          .tarjeta.color-a.p-4(titulo="Valor minuto por agrupación homogénea")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Aplicación:] separa recursos con factores de consumo similares.
                p.mb-4 #[b Ventaja:] mejora la relación entre el costo y la actividad que lo origina.
                p.mb-0 #[b Limitación:] requiere registros más detallados y bases consistentes.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-9
        .row.mb-0
          .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema4/25.svg', alt="")
          .col-lg-6(data-aos="fade-left")
            .bg88.p-4.cen
              p.mb-4.mx-lg-2 Cuando se utilizan valores por centro, el costo indirecto de la orden se obtiene sumando los valores parciales:
              p.mb-4.mx-lg-2 #[b CIPo = ∑ (SAMj × Q × VMPj)]
              p.mb-0.mx-lg-2 Donde:
              p.mb-0.mx-lg-2 #[b • CIPo] corresponde al costo indirecto productivo de la orden.
              p.mb-0.mx-lg-2 #[b • SAMj] representa el tiempo estándar de la orden en el centro j.
              p.mb-0.mx-lg-2 #[b • Q] indica la cantidad de unidades.
              p.mb-0.mx-lg-2 #[b • VMPj] corresponde al valor minuto del centro j.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/24.png', alt="")


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Valor minuto de mano de obra

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/26.png')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/27.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 El valor minuto de mano de obra representa el costo laboral directo asociado con un minuto productivo o estándar. Su cálculo requiere determinar el costo total del personal directamente vinculado con la transformación y dividirlo entre la capacidad productiva correspondiente al mismo periodo.
        p.mb-0 El costo laboral utilizado en el numerador debe proceder de la nómina, las provisiones, los aportes y las políticas vigentes. No debe calcularse a partir del salario básico de una sola persona cuando la orden será ejecutada por un grupo con remuneraciones, jornadas o condiciones diferentes. Tampoco deben incorporarse costos indirectos de supervisión, mantenimiento o apoyo si estos ya forman parte del valor minuto de planta.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Elementos para calcular el valor minuto de mano de obra

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema4/28.png')
          .col-lg-8
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/29.svg')
                h4.mb-3 Remuneración ordinaria del personal directo
                p.mb-0 Tratamiento: se incluye por el valor correspondiente al periodo analizado.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/30.svg')
                h4.mb-3 Prestaciones y provisiones aplicables
                p.mb-0 Tratamiento: se incluyen con base en la normativa y las políticas vigentes.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/31.svg')
                h4.mb-3 Aportes a cargo de la organización
                p.mb-0 Tratamiento: se incluyen cuando forman parte del costo laboral asumido.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/32.svg')
                h4.mb-3 Bonificaciones asociadas con la producción
                p.mb-0 Tratamiento: se incluyen según su naturaleza y criterio de reconocimiento.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/33.svg')
                h4.mb-3 Recargos y trabajo suplementario previsto
                p.mb-0 Tratamiento: se incluyen únicamente cuando forman parte de la programación sustentada.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/34.svg')
                h4.mb-3 Ausencias remuneradas previstas
                p.mb-0 Tratamiento: se consideran al determinar el costo o la disponibilidad, evitando doble contabilización.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/35.svg')
                h4.mb-3 Supervisión de varias órdenes
                p.mb-0 Tratamiento: se excluye del costo directo y se registra como costo indirecto cuando no es trazable.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/36.svg')
                h4.mb-3 Personal de mantenimiento y calidad
                p.mb-0 Tratamiento: se excluye del valor minuto directo y se incorpora al centro de servicio correspondiente.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema4/37.svg')
                h4.mb-3 Pagos no productivos extraordinarios
                p.mb-0 Tratamiento: se analizan por separado para determinar si corresponden al periodo o constituyen una anomalía.

    p.mb-5(data-aos="fade-left") Los porcentajes y conceptos laborales deben comprobarse con la normativa aplicable al periodo de la proyección.

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 Los minutos nominales de mano de obra se calculan a partir del número de personas, los días y la duración de la jornada:
              p.mb-4 #[b MNL = P × H × 60]
              p.mb-0 Donde:
              p.mb-0 #[b • MNL] corresponde a los minutos nominales de mano de obra.
              p.mb-0 #[b • P] representa el número de personas directamente vinculadas.
              p.mb-0 #[b • D] indica los días laborables.
              p.mb-4 #[b • H] corresponde a las horas programadas por día.
              p.mb-4 Cuando el valor minuto se utilizará con el SAM, el denominador debe expresarse en minutos estándar esperados:
              p.mb-4 #[b MPE = MNL × Fd × Ep]
              p.mb-0 Donde:
              p.mb-0 #[b • MPE] corresponde a los minutos productivos equivalentes.
              p.mb-0 #[b • Fd] representa el factor de disponibilidad.
              p.mb-4 #[b • Ep] indica la eficiencia planificada.
              p.mb-0 El valor minuto de mano de obra se obtiene así:
              p.mb-4 #[b VMMO = CLD / MPE]
              p.mb-0 Donde:
              p.mb-0 #[b • VMMO] corresponde al valor minuto de mano de obra.
              p.mb-0 #[b • CLD] representa el costo laboral directo del periodo.
              p.mb-0 #[b • MPE] indica los minutos productivos equivalentes del mismo periodo.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema4/38.png')

    p.mb-5(data-aos="fade-left") La guía de costeo del International Trade Centre relaciona el costo laboral de la prenda con los minutos requeridos y el costo por minuto. El SAM permite expresar el contenido de trabajo en una unidad común para estimar el costo de transformación (International Trade Centre, 2022). 
  
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de valor minuto de mano de obra

    p.mb-4(data-aos="fade-left") Supóngase una planta con 30 personas vinculadas directamente con la producción, 22 días programados y jornadas de 8 horas. El costo laboral directo proyectado es de $78.000.000 y la eficiencia planificada corresponde al 82 %.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9
        .row.mb-0
          .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema4/39.svg', alt="")
          .col-lg-6(data-aos="fade-left")
            .bg88.p-4.cen
              p.mb-4.mx-lg-2 Los minutos nominales son:
              p.mb-4.mx-lg-2 #[b 30 × 22 × 8 × 60 = 316.800 minutos]
              p.mb-4.mx-lg-2 Los minutos productivos equivalentes son:
              p.mb-4.mx-lg-2 #[b 316.800 × 0,82 = 259.776 minutos estándar]
              p.mb-4.mx-lg-2 El valor minuto de mano de obra será:
              p.mb-0.mx-lg-2 #[b VMMO = $78.000.000 / 259.776 = $300,26 por minuto estándar]
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/40.png', alt="")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Cálculo hipotético del valor minuto de mano de obra
        .tabla-a.tab11.mb-0
          table
            thead
              tr
                th Variable
                th Valor
            tbody
              tr
                td Personal directo.
                td 30 personas.
              tr
                td Días programados.
                td 22 días.
              tr
                td Jornada diaria.
                td 8 horas.
              tr
                td Minutos nominales.
                td 316.800 minutos.
              tr
                td Eficiencia planificada.
                td 82 %.
              tr
                td Minutos productivos equivalentes.
                td 259.776 minutos estándar.
              tr
                td Costo laboral directo.
                td $78.000.000.
              tr
                td Valor minuto de mano de obra.
                td $300,26 por minuto estándar.

    p.mb-4(data-aos="fade-left") Los valores son hipotéticos y no representan salarios ni costos laborales vigentes.

    p.mb-5(data-aos="fade-left") El valor obtenido ya incorpora el efecto de la eficiencia porque el denominador fue ajustado al 82 %. Por esta razón, no debe dividirse nuevamente el costo de la orden entre la eficiencia. Hacerlo produciría una doble corrección y sobreestimaría el valor de la mano de obra.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Prevención de duplicidad
      p.mb-0 Cuando el valor minuto se calcula con minutos productivos ajustados por eficiencia, el costo se obtiene multiplicando directamente el SAM por el valor minuto. Si la tasa se calcula con minutos nominales, el efecto de la eficiencia debe incorporarse posteriormente. Los dos procedimientos no deben aplicarse de manera simultánea.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Costo laboral de una orden

    p.mb-5(data-aos="fade-left") El costo estimado de mano de obra se calcula mediante la cantidad, el SAM y el valor minuto:

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema4/41.png')
            .col-lg-5
              p.mb-4 El costo estimado de mano de obra se calcula mediante la cantidad, el SAM y el valor minuto:
              p.mb-4 #[b CMOo = Q × SAM × VMMO]
              p.mb-0 Donde:
              p.mb-0 #[b • CMOo] corresponde al costo de mano de obra de la orden.
              p.mb-0 #[b • Q] representa la cantidad programada.
              p.mb-0 #[b • SAM] indica el tiempo estándar por unidad.
              p.mb-0 #[b • VMMO] corresponde al valor minuto de mano de obra.
              p.mb-4 • Para una orden de 1.200 prendas con un SAM de 18 minutos:
              p.mb-4 #[b 1.200 × 18 = 21.60 0minutos estándar]
              p.mb-4 #[b 21.600 × $300,26 = $6.485.616]
              p.mb-4 El costo unitario estimado de mano de obra será:
              p.mb-0 18 × $300,26 = $5.404,68 por prenda

    p.mb-5(data-aos="fade-left") La utilización del SAM en la planeación permite relacionar el contenido técnico de la prenda con la capacidad y el costo de transformación. Su confiabilidad depende de que corresponda con el método, los equipos y la versión vigente del producto (Abtew et al., 2020). 

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Factores que modifican el valor minuto de mano de obra

    .row.fd3.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/42.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Aumento del costo laboral
                p.mb-0.text-center Efecto esperado: incrementa el numerador y eleva el valor minuto si la capacidad permanece estable.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/43.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Disminución de la eficiencia
                p.mb-0.text-center Efecto esperado: reduce los minutos productivos y eleva el costo por minuto estándar.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/44.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Incremento de la eficiencia
                p.mb-0.text-center Efecto esperado: aumenta los minutos productivos y reduce el costo por minuto, dentro de condiciones sostenibles.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/45.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Cambio en la dotación
                p.mb-0.text-center Efecto esperado: modifica simultáneamente el costo laboral y la capacidad disponible.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/46.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Ausencias no reemplazadas
                p.mb-0.text-center Efecto esperado: reducen la disponibilidad y pueden incrementar el valor minuto efectivo.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/47.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Trabajo suplementario
                p.mb-0.text-center Efecto esperado: modifica el costo y los minutos; su efecto depende de los recargos y de la producción obtenida.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/48.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Cambio de referencia
                p.mb-0.text-center Efecto esperado: no modifica necesariamente la tasa, pero altera los minutos requeridos por unidad.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/49.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Reproceso
                p.mb-0.text-center Efecto esperado: consume minutos adicionales que no deben ocultarse dentro del SAM aprobado.
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/50.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Modificación del periodo
                p.mb-0.text-center Efecto esperado: aumenta los minutos productivos y reduce el costo por minuto, dentro de condiciones sostenibles.


    separador 
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Costo estimado de la orden de producción

    p.mb-5(data-aos="fade-left") El costo estimado de la orden reúne los materiales directos, la mano de obra directa, los costos indirectos de fabricación aplicados y otros costos productivos identificables. Su estructura debe conservar correspondencia con la cantidad programada, la versión técnica del producto y las tasas vigentes en la fecha de valoración.

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 #[b CEOP = MD + MOD + CIFa + ODP]
              p.mb-0 Donde:
              p.mb-0 #[b • CEOP] corresponde al costo estimado de la orden de producción.
              p.mb-0 #[b • MD] representa los materiales directos.
              p.mb-0 #[b • MOD] corresponde a la mano de obra directa.
              p.mb-0 #[b • CIFa] indica los costos indirectos de fabricación aplicados.
              p.mb-4 #[b • ODP] representa otros costos directos productivos.
              p.mb-4 El costo estimado por unidad se obtiene así:
              p.mb-4 #[b CEU = CEOP / Q]
              p.mb-0 Donde:
              p.mb-0 #[b • CEU] corresponde al costo estimado unitario.
              p.mb-0 #[b • CEOP] representa el costo estimado total de la orden.
              p.mb-0 #[b • Q] indica la cantidad prevista de unidades conformes.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema4/51.png')
    
    p.mb-5(data-aos="fade-left") La estructura anterior corresponde al costo de producción. No representa automáticamente el precio de venta. Para establecer un precio deben considerarse por separado los gastos no productivos, las condiciones comerciales, los impuestos aplicables, el riesgo y el margen esperado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema4/52.png')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: ¿Cuánto cuesta realmente producir una prenda?"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-4
                p.mb-0 Escuche el siguiente pódcast para reconocer los elementos que intervienen en el costo estimado de una orden de producción y su diferencia frente al precio de venta.

    p.mb-5(data-aos="fade-left") La estimación adquiere validez técnica cuando cada elemento puede relacionarse con su fuente, unidad de medida, criterio de asignación y periodo de vigencia. Por esta razón, cualquier modificación en la cantidad programada, el consumo de materiales, el SAM, los precios, las tasas aplicadas o los servicios externos exige actualizar el cálculo y conservar la trazabilidad de la nueva versión.

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema4/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-lg-0.mb-4.mx-lg-4
              h4.mb-3 Consultar anexo: Anexo_01_Calculo_de_costos_de_produccion.
              p.mb-0 Para profundizar en la aplicación de los procedimientos estudiados, se recomienda consultar el Anexo 1, que presenta un caso práctico de cálculo y análisis de los costos de una orden de producción.
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_01_Calculo_de_costos_de_produccion.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


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
