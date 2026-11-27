<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación y localización de costos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema2/1.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg22.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema2/2.svg')
          p.mb-4.mx-lg-2 La clasificación de los costos permite ordenar los recursos consumidos de acuerdo con criterios definidos, como su comportamiento frente al nivel de actividad o la posibilidad de asociarlos con una orden de producción. La localización, por su parte, identifica el área, proceso o centro en el que se originan o acumulan. Ambas perspectivas son complementarias: clasificar responde qué tipo de costo se está analizando, mientras que localizar establece dónde se incurrió y quién tiene responsabilidad sobre su registro.
          p.mb-0.mx-lg-2 Un mismo costo puede recibir varias clasificaciones simultáneas. El tejido principal utilizado en una referencia suele considerarse directo respecto de la orden y variable frente a la cantidad fabricada. En cambio, la depreciación de una máquina compartida puede ser indirecta para una orden específica y fija dentro de un intervalo de actividad. Por esta razón, la denominación asignada debe indicar el objeto de costo, el periodo analizado y la variable de actividad utilizada como referencia (Datar & Rajan, 2021). 

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Criterios de clasificación y localización de costos

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center  Comportamiento
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿Cómo cambia el costo cuando varía el nivel de actividad?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite distinguir costos fijos, variables, mixtos y escalonados.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Trazabilidad
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿El costo puede asociarse de manera técnica y económicamente viable con el objeto analizado?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite diferenciar costos directos e indirectos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center  Función
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿En qué actividad general se origina el costo?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite separar producción, administración, comercialización y financiación.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Localización
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿En qué área o unidad se acumula el costo?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite identificar centros de producción y centros de servicios.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Elemento
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿Qué recurso productivo representa?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite diferenciar materiales, mano de obra y costos indirectos de fabricación.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Responsabilidad
          p.mb-0 #[b Pregunta que responde]
          p.mb-4 ¿Qué unidad registra, administra o controla el recurso?
          p.mb-0 #[b Clasificaciones o resultados]
          p.mb-0 Permite asignar responsables y establecer trazabilidad sobre las variaciones.

    .cajon.color-acento-b.p-4.mb-0(data-aos="fade-left")
      h4.mb-3 Principio de clasificación
      p.mb-0 La naturaleza del recurso no determina por sí sola su clasificación. Antes de calificar un costo debe definirse el objeto de costo, el periodo de análisis, el nivel de actividad y la viabilidad de su trazabilidad.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Costos fijos y variables

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/4.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La clasificación entre costos fijos y variables analiza el comportamiento del costo frente a modificaciones en el nivel de actividad. En confección, dicha actividad puede expresarse mediante prendas terminadas, unidades procesadas, minutos estándar, horas de mano de obra, horas-máquina, lotes u órdenes de producción. La base seleccionada debe conservar una relación lógica con el recurso estudiado.
        p.mb-0 Un costo variable cambia en términos totales cuando se modifica el nivel de actividad. Bajo un comportamiento proporcional, su valor por unidad permanece constante dentro del intervalo analizado. El consumo de tejido, los insumos incorporados a la prenda y determinados materiales de empaque suelen presentar este comportamiento cuando las especificaciones y los precios permanecen estables.

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 El costo variable total se expresa mediante la siguiente relación:
              p.mb-4 #[b CVT = cv × Q]
              p.mb-4 Donde:
              p.mb-0 • CVT corresponde al costo variable total.
              p.mb-0 • cv representa el costo variable por unidad.
              p.mb-0 • Q indica la cantidad producida o el nivel de actividad.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema2/5.png')

    p.mb-5(data-aos="fade-left") El costo fijo permanece constante en términos totales durante un periodo y dentro de un intervalo de actividad determinado. Esto no significa que sea inalterable de manera indefinida. Los cánones de arrendamiento pueden actualizarse; la depreciación cambia cuando se incorporan activos, y la supervisión puede requerir personal adicional si la operación supera la capacidad atendida. La condición fija solo se mantiene mientras no cambien las condiciones que sustentan el costo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Comportamiento de costos frecuentes en una planta de confección
        .tabla-a.tab4.mb-0
          table
            thead
              tr
                th Concepto
                th Comportamiento inicial
                th Fundamento técnico
            tbody
              tr
                td Tejido principal
                td Variable.
                td El consumo total aumenta con la cantidad de prendas, siempre que permanezcan estables el consumo unitario, la mezcla de tallas y el nivel de pérdida previsto.        
              tr
                td Cremalleras, botones o etiquetas
                td Variable.
                td La cantidad requerida guarda relación con el número de unidades y con la lista de materiales de la referencia.        
              tr
                td Empaque individual
                td Variable.
                td Cada unidad terminada requiere los elementos definidos en la especificación de presentación.        
              tr
                td Arrendamiento de la planta
                td Fijo.
                td El valor del periodo no cambia por pequeñas variaciones del volumen dentro de la capacidad contratada.        
              tr
                td Depreciación lineal de maquinaria
                td Fijo.
                td El cargo periódico permanece estable mientras no cambien la base depreciable, la vida útil o los activos utilizados.        
              tr
                td Remuneración fija de supervisión
                td Fijo dentro de un intervalo.
                td El valor se mantiene mientras la estructura de supervisión pueda atender el nivel de actividad observado.        
              tr
                td Energía de accionamiento
                td Variable o mixta.
                td Una parte puede depender del uso de los equipos, mientras otra corresponde a cargos mínimos o consumos independientes del volumen.        
              tr
                td Mantenimiento contratado
                td Mixto.
                td Puede incluir una tarifa periódica y cobros adicionales por intervenciones, repuestos u horas de servicio.        
              tr
                td Alquiler temporal de un equipo por orden
                td Fijo respecto de las unidades de la orden.
                td El valor contratado puede permanecer constante aunque cambie la cantidad procesada dentro del periodo acordado.

    p.mb-5(data-aos="fade-left") La clasificación debe efectuarse dentro de un intervalo relevante, entendido com o el rango de actividad en el que se mantienen las condiciones que explican el comportamiento del costo. Si una línea puede operar con una persona responsable de supervisión hasta determinado número de puestos, el salario conserva un comportamiento fijo dentro de ese rango. Al superar el límite y requerirse una segunda persona, el costo aumenta por escalones.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Comportamiento total y unitario
    
    p.mb-4(data-aos="fade-left") La lectura del costo cambia cuando se analiza su valor total o su valor por unidad. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Comportamiento total y unitario de los costos
        .tabla-a.tab5.mb-0
          table
            thead
              tr
                th Clasificación
                th Comportamiento total
                th Comportamiento por unidad
            tbody
              tr
                td Costo variable
                td Aumenta o disminuye en función del nivel de actividad.
                td Permanece constante bajo el supuesto de proporcionalidad y dentro del intervalo relevante.
              tr
                td Costo fijo
                td Permanece constante durante el periodo y dentro del intervalo definido.
                td Disminuye al aumentar la cantidad y aumenta cuando se reduce el volumen.
              tr
                td Costo mixto
                td Integra un valor fijo y otro que cambia con la actividad.
                td Varía según la proporción que representen sus componentes fijo y variable.
              tr
                td Costo escalonado
                td Permanece estable dentro de cada rango y aumenta al superar determinados límites.
                td Permanece estable dentro de cada rango y aumenta al superar determinados límites.

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema2/6.png')
            .col-lg-5
              p.mb-4 El costo total puede representarse mediante una función que integra el componente fijo y el variable:
              p.mb-4 #[b CT = CF + (cv × Q)]
              p.mb-4 Donde:
              p.mb-0 • CT corresponde al costo total.
              p.mb-0 • CF representa el costo fijo total.
              p.mb-0 • cv corresponde al costo variable por unidad.
              p.mb-4 • Q indica la cantidad o el nivel de actividad.
              p.mb-4 El costo unitario se calcula de la siguiente manera:
              p.mb-4 #[b CU = CF / Q + cv]
              p.mb-0 Esta expresión permite observar que el costo fijo unitario depende de la cantidad producida. Por consiguiente, un costo unitario calculado con un volumen elevado no debe aplicarse automáticamente a una orden pequeña, porque la proporción de costo fijo asignada a cada prenda será diferente.
            
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de comportamiento del costo

    p.mb-4(data-aos="fade-left") Considérese una estructura hipotética con costos fijos mensuales de $18.000.000 y un costo variable de $42.000 por prenda.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Comportamiento del costo ante diferentes niveles de producción
        .tabla-a.tab6.mb-0
          table
            thead
              tr
                th Producción mensual
                th Costo fijo total
                th Costo variable total
                th Costo total
                th Costo fijo por unidad
                th Costo total por unidad
            tbody
              tr
                td 600 prendas
                td $18.000.000
                td $25.200.000
                td $43.200.000
                td $68.400.000
                td $72.000

              tr
                td 900 prendas
                td $18.000.000
                td $37.800.000
                td $55.800.000
                td $20.000
                td $62.000

              tr
                td 1.200 prendas
                td $18.000.000
                td $37.800.000
                td $68.400.000
                td $15.000
                td $15.000

    p.mb-5(data-aos="fade-left") El costo total aumenta desde $43.200.000 hasta $68.400.000 porque el componente variable crece con la producción. Sin embargo, el costo por prenda disminuye, debido a que los $18.000.000 de costo fijo se distribuyen entre una cantidad mayor de unidades. Esta reducción no implica que el costo variable unitario haya cambiado.

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Precaución en la interpretación
      p.mb-0 La disminución del costo fijo unitario no garantiza una reducción real del costo total de cada prenda. El análisis debe comprobar que no existan horas suplementarias, desperdicios, reprocesos, compras urgentes, pérdidas de eficiencia o ampliaciones de capacidad que modifiquen la estructura inicial.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Costos mixtos y escalonados

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 Algunos costos no responden de manera completamente fija ni variable. Un servicio de energía puede incluir un cargo básico independiente del consumo y otro asociado con la cantidad utilizada. Del mismo modo, un contrato de mantenimiento puede establecer una tarifa mensual más un valor por intervención.
              p.mb-4 El costo mixto conserva la estructura:
              p.mb-4 #[b CM = CF + (t × A)]
              p.mb-0 Donde:
              p.mb-0 • CM representa el costo mixto total.
              p.mb-0 • CF corresponde al componente fijo.
              p.mb-0 • t indica la tarifa variable por unidad de actividad.
              p.mb-4 • A representa la actividad consumida.
              p.mb-0 Los costos escalonados permanecen fijos dentro de determinados rangos, pero aumentan cuando la actividad supera la capacidad disponible. Puede ocurrir con la supervisión, el transporte interno, el almacenamiento o el alquiler de equipos adicionales.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema2/7.png')

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/8.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Cargo básico de energía más consumo medido
                p.mb-4 #[b Clasificación:] costo mixto.
                p.mb-0 #[b Tratamiento para el análisis:] debe separarse el componente fijo del valor asociado con el consumo.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/9.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Contrato de mantenimiento más repuestos utilizados
                p.mb-4 #[b Clasificación:] costo mixto.
                p.mb-0 #[b Tratamiento para el análisis:] debe diferenciarse la tarifa periódica de las intervenciones y materiales adicionales.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/10.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Una persona de supervisión por cada rango de puestos
                p.mb-4 #[b Clasificación:] costo escalonado.
                p.mb-0 #[b Tratamiento para el análisis:] debe identificarse el límite a partir del cual se requiere un recurso adicional.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/11.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Arrendamiento de una segunda bodega al superar la capacidad instalada
                p.mb-4 #[b Clasificación:] costo escalonado.
                p.mb-0 #[b Tratamiento para el análisis:] debe reconocerse el nuevo nivel de costo desde el momento en que se amplía el espacio.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/12.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Precio del material reducido por volumen de compra
                p.mb-4 #[b Clasificación:] costo variable no proporcional.
                p.mb-0 #[b Tratamiento para el análisis:] deben aplicarse los precios correspondientes a cada rango de adquisición.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/13.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Trabajo suplementario ocasionado por un aumento extraordinario del volumen
                p.mb-4 #[b Clasificación:] costo variable con tarifa diferenciada.
                p.mb-0 #[b Tratamiento para el análisis:] deben separarse las horas ordinarias y suplementarias según el valor aplicable.
    
    p.mb-0(data-aos="fade-right") La identificación del comportamiento debe basarse en registros históricos, condiciones contractuales y relaciones técnicas, no únicamente en la denominación contable. La energía, por ejemplo, no debe clasificarse siempre como variable: una parte puede permanecer estable, aunque se reduzca la producción. De igual manera, un salario mensual puede comportarse como fijo durante el periodo, aunque corresponda a una actividad necesaria para fabricar las prendas.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Costos directos e indirectos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/14.png')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/15.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La clasificación entre costos directos e indirectos depende de la relación con el objeto de costo. Este puede ser una prenda, referencia, lote, orden de producción, proceso, línea, módulo o centro. Un costo es directo cuando puede asociarse con dicho objeto mediante una medición técnicamente sustentada y económicamente viable. Es indirecto cuando beneficia a varios objetos, no puede identificarse de forma exclusiva o su medición individual resulta desproporcionada frente a la utilidad de la información.
        p.mb-0 La trazabilidad no debe confundirse con la presencia física del recurso en el producto. Un material puede incorporarse a la prenda y tratarse como indirecto cuando su consumo individual es mínimo y no existe un sistema razonable para medirlo por orden. En sentido contrario, el alquiler de una máquina contratada exclusivamente para una orden puede ser directo respecto de ella, aunque el recurso no forme parte física del producto.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Criterios para determinar la trazabilidad de un costo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Identificación")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿el recurso puede relacionarse con una orden, referencia o lote específico?
                  p.mb-0 #[b Resultado esperado:] la relación debe demostrarse mediante documentos, registros o mediciones.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/16.png')
          .row.justify-content-center.align-items-center(titulo="Medición")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿existe una unidad que permita cuantificar el consumo?
                  p.mb-0 #[b Resultado esperado:] el costo debe expresarse mediante cantidades y valores verificables.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/17.png')
          .row.justify-content-center.align-items-center(titulo="Exclusividad")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿el recurso beneficia únicamente al objeto analizado?
                  p.mb-0 #[b Resultado esperado:] la exclusividad facilita su reconocimiento como costo directo.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/18.png')
          .row.justify-content-center.align-items-center(titulo="Viabilidad económica")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿el beneficio de medir el consumo supera el costo de obtener la información?
                  p.mb-0 #[b Resultado esperado:] la trazabilidad debe ser útil sin imponer un sistema desproporcionado.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/19.png')
          .row.justify-content-center.align-items-center(titulo="Consistencia")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿el criterio se aplica de igual manera a objetos y periodos comparables?
                  p.mb-0 #[b Resultado esperado:] la clasificación debe conservar reglas estables y documentadas.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/20.png')
          .row.justify-content-center.align-items-center(titulo="Materialidad")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Pregunta de verificación:] ¿el valor justifica un seguimiento individual?
                  p.mb-0 #[b Resultado esperado:] los recursos de valor poco significativo pueden agruparse como indirectos según la política definida.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/21.png')

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Clasificación según el objeto de costo
    
    p.mb-5(data-aos="fade-left") Una misma erogación puede ser directa para un centro e indirecta para una orden. El salario de la persona responsable de una línea es identificable directamente con esa línea, pero requiere distribución cuando la línea procesa varias órdenes. La depreciación de una cortadora puede asociarse con el centro de corte; sin embargo, su incorporación al costo de cada referencia exige utilizar un criterio de asignación.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Variación de la clasificación según el objeto de costo
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder2").bg3.p-lg-5.p-4

    p.mb-4(data-aos="fade-right") El costo de una orden puede expresarse como la suma de los costos directamente identificados y los costos indirectos asignados:
    p.mb-4(data-aos="fade-right") #[b CO = CD + CIA]
    p.mb-4(data-aos="fade-right") Donde:
    p.mb-0(data-aos="fade-right") #[b • CO] corresponde al costo de la orden.
    p.mb-0(data-aos="fade-right") #[b • CD] representa los costos directos acumulados.
    p.mb-4(data-aos="fade-right") #[b • CIA] indica los costos indirectos asignados.
    p.mb-4(data-aos="fade-right") Esta relación no establece todavía cómo deben distribuirse los costos indirectos. Primero se requiere identificar su origen y acumularlos en el centro correspondiente. 
    p.mb-5(data-aos="fade-right") Posteriormente se selecciona una base que represente de manera razonable el consumo de los recursos.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Relación entre trazabilidad y comportamiento
    
    p.mb-5(data-aos="fade-right") Las clasificaciones directo–indirecto y fijo–variable corresponden a preguntas diferentes. La primera analiza la posibilidad de asociar el costo con un objeto; la segunda observa su comportamiento ante cambios en la actividad. Por consiguiente, un costo indirecto no es necesariamente fijo y uno directo no tiene que ser variable.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Matriz de clasificación según trazabilidad y comportamiento

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/31.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Directo y variable
                p.mb-4 #[b Ejemplo aplicado a confección:] tejido consumido por una orden identificada.
                p.mb-0 #[b Explicación:] puede trazarse a la orden y su valor total cambia con la cantidad requerida.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/32.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Directo y fijo
                p.mb-4 #[b Ejemplo aplicado a confección:] alquiler de un equipo exclusivo para una orden durante un periodo acordado.
                p.mb-0 #[b Explicación:] se identifica con la orden, pero su valor no cambia dentro del rango contratado.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/33.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Indirecto y variable
                p.mb-4 #[b Ejemplo aplicado a confección:] energía de accionamiento de máquinas compartidas.
                p.mb-0 #[b Explicación:] el consumo puede aumentar con la actividad, aunque no se mida directamente por prenda.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/34.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Indirecto y fijo
                p.mb-4 #[b Ejemplo aplicado a confección:] arrendamiento del área productiva.
                p.mb-0 #[b Explicación:] beneficia a varias órdenes y permanece estable dentro del periodo contractual.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/35.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Indirecto y mixto
                p.mb-4 #[b Ejemplo aplicado a confección:] servicio de mantenimiento con tarifa fija y cobros por intervención.
                p.mb-0 #[b Explicación:] beneficia a distintos objetos e integra componentes con comportamientos diferentes.
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/36.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Indirecto y escalonado
                p.mb-4 #[b Ejemplo aplicado a confección:] supervisión adicional requerida al ampliar el número de líneas.
                p.mb-0 #[b Explicación:] no se identifica con una sola orden y aumenta al superar determinados rangos.

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Diferencia esencial
      p.mb-0 “Directo” no significa más importante y “indirecto” no significa prescindible. Estas denominaciones describen la posibilidad de relacionar el costo con un objeto específico. La relevancia operativa o monetaria debe analizarse por separado.

    p.mb-0(data-aos="fade-left") La NIC 2 establece que el costo de transformación incluye los costos directamente relacionados con las unidades producidas y una asignación sistemática de los costos indirectos de producción, tanto fijos como variables. Esto exige distinguir la trazabilidad del comportamiento antes de incorporar los recursos al costo de los inventarios (IFRS Foundation, 2025). 


    separador 
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Centros de costo

    p.mb-5(data-aos="fade-right") Esta distinción resulta necesaria porque los costos acumulados en las unidades de apoyo deben trasladarse posteriormente a los centros beneficiados mediante criterios técnicamente sustentados. Los costos de los centros de servicios se asignan a los centros de producción que reciben su apoyo antes de incorporarlos al costo de las órdenes o productos, mediante bases que representen el uso del recurso o el beneficio recibido (Datar & Rajan, 2021).

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Criterios para definir un centro de costo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjet.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Homogeneidad operativa
                    p.mb-4 Aplicación: el centro debe reunir actividades con características técnicas y recursos relacionados.
                    h4.mb-4 Responsabilidad
                    p.mb-0 Aplicación: debe existir una persona o unidad encargada de validar los consumos y sus variaciones.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/37.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Medición
                    p.mb-4 Aplicación: los costos acumulados deben proceder de documentos o registros verificables.
                    h4.mb-4 Localización
                    p.mb-0 Aplicación: la delimitación debe permitir identificar dónde se consume el recurso.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/38.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Relevancia
                    p.mb-4 Aplicación: el nivel de detalle debe aportar información útil para el control y la proyección.
                    h4.mb-4 Permanencia
                    p.mb-0 Aplicación: la codificación debe conservar estabilidad suficiente para comparar periodos.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/39.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Relación con la producción
                    p.mb-4 Aplicación: debe identificarse si el centro transforma el producto o presta apoyo a otros centros.
                    h4.mb-4 Compatibilidad documental
                    p.mb-0 Aplicación: las órdenes, requisiciones, reportes y comprobantes deben incluir el código correspondiente.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/40.png")

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Centros de producción y de servicios

    p.mb-4(data-aos="fade-left") Los centros de producción intervienen directamente en la transformación de materiales o en la ejecución de operaciones requeridas para obtener la prenda. Los centros de servicios respaldan el funcionamiento de los centros productivos, aunque no transforman directamente el producto final.

    p.mb-5(data-aos="fade-right") Esta distinción resulta necesaria porque los costos acumulados en las unidades de apoyo deben trasladarse posteriormente a los centros beneficiados mediante criterios técnicamente sustentados. La literatura contable reconoce que los centros de servicios atienden a otras unidades y que sus costos deben redistribuirse hacia los centros de producción antes de su incorporación al producto. 

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Posible estructura de centros de costo en una planta de confección

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Centros de producción")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Corte]
                p.mb-0 Recursos que puede acumular: mano de obra del área, depreciación de equipos, energía, mantenimiento y materiales auxiliares utilizados en el proceso.
                p.mb-4 Relación con la producción: prepara las piezas requeridas por las órdenes de producción.
                p.mb-0 #[b Ensamble de tejido plano]
                p.mb-0 Recursos que puede acumular: mano de obra, maquinaria, aditamentos, energía y costos indirectos del área.
                p.mb-4 Relación con la producción: ejecuta las operaciones de unión correspondientes a referencias de tejido plano.
                p.mb-0 #[b Ensamble de tejido de punto]
                p.mb-0 Recursos que puede acumular: mano de obra, equipos especializados, energía y recursos auxiliares.
                p.mb-4 Relación con la producción: ejecuta operaciones asociadas con referencias de tejido de punto.
                p.mb-0 #[b Terminación y acabado]
                p.mb-0 Recursos que puede acumular: mano de obra, equipos de planchado, energía, limpieza y materiales auxiliares.
                p.mb-4 Relación con la producción: completa las condiciones de presentación previstas para el producto.
                p.mb-0 #[b Empaque]
                p.mb-0 Recursos que puede acumular: mano de obra, equipos auxiliares y recursos indirectos del área.
                p.mb-0 Relación con la producción: prepara las unidades para almacenamiento o entrega.
          .tarjeta.color-a.p-4(titulo="Centros de servicios")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Mantenimiento]
                p.mb-0 Recursos que puede acumular: personal técnico, herramientas, repuestos de uso general, contratos y equipos de diagnóstico.
                p.mb-4 Relación con la producción: conserva la disponibilidad de los recursos utilizados por otros centros.
                p.mb-0 #[b Control de calidad]
                p.mb-0 Recursos que puede acumular: personal de inspección, instrumentos, calibraciones y materiales de verificación.
                p.mb-4 Relación con la producción: apoya la comprobación de los requisitos en diferentes etapas.
                p.mb-0 #[b Almacén de materiales]
                p.mb-0 Recursos que puede acumular: personal, estanterías, medios de manejo, energía y recursos de conservación.
                p.mb-4 Relación con la producción: recibe, custodia y entrega materiales a los centros consumidores.
                p.mb-0 #[b Planeación y soporte técnico]
                p.mb-0 Recursos que puede acumular: personal técnico, sistemas de información y recursos documentales.
                p.mb-0 Relación con la producción: suministra información y apoyo a los centros de producción.
          .tarjeta.color-a.p-4(titulo="Centros no productivos")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Administración]
                p.mb-0 Recursos que puede acumular: personal administrativo, servicios profesionales y recursos de oficina.
                p.mb-4 Relación con la producción: atiende la gestión general sin intervenir directamente en la fabricación.
                p.mb-0 #[b Comercialización]
                p.mb-0 Recursos que puede acumular: promoción, ventas, distribución comercial y atención de clientes.
                p.mb-0 Relación con la producción: gestiona la colocación del producto y no forma parte del proceso de transformación.
                
    p.mb-5(data-aos="fade-right") La calidad, el almacén y el soporte técnico pueden clasificarse de manera diferente entre organizaciones. La decisión depende de sus funciones, del lugar que ocupan en la estructura y del tipo de servicios prestados. Lo fundamental es conservar un criterio documentado y evitar que el mismo costo se registre simultáneamente en varios centros.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferencia entre centro, objeto y lugar físico

    p.mb-5(data-aos="fade-right") El centro de costo no debe confundirse con el objeto final al que se calcula el costo. Una orden de producción puede transitar por varios centros, mientras que un centro atiende diferentes órdenes durante el periodo. Tampoco todo puesto de trabajo necesita convertirse en un centro independiente.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferencias entre unidades utilizadas para la acumulación del costo

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Objeto de costo
          p.mb-4 #[b Función:] identifica aquello cuyo valor se desea determinar.
          p.mb-0 #[b Ejemplo:] una orden de 800 camisas de una referencia específica.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Centro de costo
          p.mb-4 #[b Función:] acumula los recursos consumidos por una unidad operativa o de apoyo.
          p.mb-0 #[b Ejemplo:] el centro de ensamble de tejido plano.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center  Operación
          p.mb-4 #[b Función:] representa una transformación definida dentro de la secuencia.
          p.mb-0 #[b Ejemplo:] cerrar costados o montar mangas.

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Puesto de trabajo
          p.mb-4 #[b Función:] corresponde a la localización donde se ejecuta una actividad.
          p.mb-0 #[b Ejemplo:] una máquina plana asignada a una operación.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Departamento
          p.mb-4 #[b Función:] agrupa funciones y responsabilidades dentro de la estructura organizacional.
          p.mb-0 #[b Ejemplo:] el departamento de producción.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Orden de producción
          p.mb-4 #[b Función:] autoriza y documenta la fabricación de una cantidad determinada.
          p.mb-0 #[b Ejemplo:] orden OP-0256 para una referencia, talla y color definidos.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Codificación de los centros

    p.mb-0(data-aos="fade-left") La codificación permite relacionar requisiciones, reportes de tiempo, facturas, consumos de servicios y registros de mantenimiento con la unidad responsable. Los códigos deben ser únicos, comprensibles y estables.
    p.mb-4 Una estructura sencilla puede integrar el tipo de centro, el proceso y un consecutivo:
    p.mb-5(data-aos="fade-left") #[b Código del centro = Tipo - Proceso - Consecutivo]

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de codificación de centros de costo

    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-6.pe-lg-0.mb-lg-0.mb-4
        .h-100.bg5.p-4.p-lg-5
          h3.mb-4.text-center Centros de producción
          p.mb-0 PR-COR-01: corte.
          p.mb-0 PR-ENS-01: ensamble de tejido plano.
          p.mb-0 PR-ENS-02: ensamble de tejido de punto.
          p.mb-0 PR-ACA-01: terminación y acabado.
          p.mb-0 PR-EMP-01: empaque.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.mb-lg-0.mb-4
        .h-100.bg6.p-4.p-lg-5.text-white
          h3.mb-4.text-center Centros de servicios
          p.mb-0 SV-MAN-01: mantenimiento.
          p.mb-0 SV-CAL-01: control de calidad.
          p.mb-0 SV-ALM-01: almacén de materiales.
      .col-lg-4.col-md-6.ps-lg-0.mb-lg-0.mb-0
        .h-100.bg7.p-4.p-lg-5
          h3.mb-4.text-center Centros de servicios
          p.mb-0 NP-ADM-01: administración general.
          p.mb-0 NP-COM-01: comercialización.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Localización inicial de los costos

    p.mb-5(data-aos="fade-left") La localización comienza con el documento que demuestra el consumo. Una requisición puede identificar el centro que recibió un material; el registro de tiempo permite asociar la mano de obra con el área correspondiente; una factura de mantenimiento puede señalar el equipo intervenido, y una medición de energía puede establecer el consumo de una sección. Si el documento carece de código, periodo, responsable u orden relacionada, la trazabilidad se debilita.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Documentos para localizar costos en los centros

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder3").bg3.p-lg-5.p-4

    p.mb-4(data-aos="fade-right") El recorrido básico de la información puede resumirse así:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Recorrido de la información para la localización de costos
        img(src="@/assets/curso/tema2/48.svg", alt='Diagrama de flujo de cinco etapas: documento de origen, clasificación, centro de costo, orden o referencia y costo unitario.')

    p.mb-5(data-aos="fade-right") No todos los costos pasan directamente del centro a la orden. Los recursos acumulados en mantenimiento, almacén o calidad atienden varios centros y requieren una redistribución posterior. En esta etapa se identifica su origen y se comprueba la unidad beneficiada; la selección y aplicación de las bases de distribución exige un análisis específico.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de acumulación por centros

    p.mb-4(data-aos="fade-right") Supóngase que los registros de un periodo presentan los siguientes valores antes de distribuir los centros de servicios:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Ejemplo de localización inicial de costos por centros
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tabla-a.tab7.mb-0
              table
                thead
                  tr
                    th Centro
                    th Materiales indirectos
                    th Mano de obra
                    th Otros costos indirectos
                    th Total acumulado
                tbody
                  tr
                    td Corte.
                    td $1.800.000.
                    td $9.400.000.
                    td $6.300.000.
                    td $17.500.000.
                  tr
                    td Ensamble.
                    td $3.200.000.
                    td $31.600.000.
                    td $12.700.000.
                    td $47.500.000.
                  tr
                    td Terminación y acabado.
                    td $900.000.
                    td $8.800.000.
                    td $5.100.000.
                    td $14.800.000.
                  tr
                    td Mantenimiento.
                    td $2.600.000.
                    td $6.500.000.
                    td $2.900.000.
                    td $12.000.000.
                  tr
                    td Control de calidad.
                    td $350.000.
                    td $7.200.000.
                    td $1.950.000.
                    td $9.500.000.
                  tr
                    td Total.
                    td $8.850.000.
                    td $63.500.000.
                    td $28.950.000.
                    td $101.300.000.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema2/49.png')

    p.mb-5(data-aos="fade-right") La tabla permite reconocer dónde se registraron los recursos, pero todavía no determina cuánto corresponde a cada orden. Los costos acumulados en mantenimiento y control de calidad deben analizarse según los servicios prestados a los centros productivos. Del mismo modo, los valores de corte, ensamble y acabado deberán relacionarse posteriormente con las órdenes procesadas durante el periodo.

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Control de trazabilidad
      p.mb-0 Cada valor debe conservar relación con un documento de origen, una fecha, un concepto, un centro y un responsable. Las reclasificaciones posteriores no deben eliminar esa identificación; deben registrar el valor trasladado, el centro de origen, el centro receptor y el criterio utilizado.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/50.png')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/51.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La localización correcta evita que los costos productivos se mezclen con desembolsos administrativos, comerciales o financieros. La NIC 2 incorpora al inventario los costos de compra, transformación y otros necesarios para llevarlo a su ubicación y condición actuales; los costos administrativos que no contribuyen a ese propósito y los costos de venta se excluyen del costo del inventario (IFRS Foundation, 2025). La norma también indica que la asignación de los costos indirectos fijos de producción debe sustentarse en la capacidad normal de las instalaciones. 
        p.mb-0 La clasificación por comportamiento, la identificación de la trazabilidad y la localización por centros conforman una secuencia necesaria para proyectar el costo de una orden. Si un recurso se clasifica sin definir el objeto o se distribuye sin reconocer su origen, el resultado puede contener duplicidades, omisiones o asignaciones que no representan el consumo productivo.


</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder2: [
      {
        titulo: 'Tejido entregado mediante requisición identificada',
        texto: `
        <b>Respecto de una orden:</b><br>
        directo.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro que recibe el material.
        <br><br>
        <b>Justificación:</b><br>
        la cantidad y el valor pueden relacionarse con documentos específicos.
        `,
        imagen: '@/assets/curso/tema2/22.png',
      },
      {
        titulo: 'Hilo registrado por referencia y lote',
        texto: `
        <b>Respecto de una orden:</b><br>
        directo cuando existe medición confiable.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro consumidor.
        <br><br>
        <b>Justificación:</b><br>
        el sistema permite cuantificar la entrega y el consumo atribuible.
        `,
        imagen: '@/assets/curso/tema2/23.png',
      },
      {
        titulo: 'Hilo de uso compartido sin medición por orden',
        texto: `
        <b>Respecto de una orden:</b><br>
        indirecto.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo o indirecto según el registro interno.
        <br><br>
        <b>Justificación:</b><br>
        no existe evidencia suficiente para establecer el consumo individual.
        `,
        imagen: '@/assets/curso/tema2/24.png',
      },
      {
        titulo: 'Tiempo de costura registrado para una orden',
        texto: `
        <b>Respecto de una orden:</b><br>
        directo.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro de ensamble.
        <br><br>
        <b>Justificación:</b><br>
        las horas o los minutos pueden relacionarse con el trabajo ejecutado.
        `,
        imagen: '@/assets/curso/tema2/25.png',
      },
      {
        titulo: 'Supervisión de varias órdenes',
        texto: `
        <b>Respecto de una orden:</b><br>
        indirecto.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro supervisado.
        <br><br>
        <b>Justificación:</b><br>
        el recurso se identifica con el área, pero beneficia simultáneamente a diferentes órdenes.
        `,
        imagen: '@/assets/curso/tema2/26.png',
      },
      {
        titulo: 'Depreciación de una máquina compartida',
        texto: `
        <b>Respecto de una orden:</b><br>
        indirecto.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro donde se encuentra asignada.
        <br><br>
        <b>Justificación:</b><br>
        el activo pertenece al centro, aunque presta servicio a distintas referencias.
        `,
        imagen: '@/assets/curso/tema2/27.png',
      },
      {
        titulo: 'Mantenimiento de equipos de varias áreas',
        texto: `
        <b>Respecto de una orden:</b><br>
        indirecto.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro de mantenimiento e indirecto para los centros atendidos.
        <br><br>
        <b>Justificación:</b><br>
        el servicio se acumula inicialmente en la unidad que lo ejecuta.
        `,
        imagen: '@/assets/curso/tema2/28.png',
      },
      {
        titulo: 'Equipo alquilado exclusivamente para una orden',
        texto: `
        <b>Respecto de una orden:</b><br>
        directo.
        <br><br>
        <b>Respecto de un centro:</b><br>
        directo al centro usuario.
        <br><br>
        <b>Justificación:</b><br>
        el contrato y el período de uso identifican al objeto beneficiado.
        `,
        imagen: '@/assets/curso/tema2/29.png',
      },
      {
        titulo: 'Arrendamiento general de la planta',
        texto: `
        <b>Respecto de una orden:</b><br>
        indirecto.
        <br><br>
        <b>Respecto de un centro:</b><br>
        indirecto para los centros que comparten el espacio.
        <br><br>
        <b>Justificación:</b><br>
        el recurso beneficia a varias áreas y requiere un criterio de distribución.
        `,
        imagen: '@/assets/curso/tema2/30.png',
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Requisición de materiales',
        texto: `
        <b>Información requerida:</b><br>
        debe incluir fecha, material, cantidad, centro, orden y responsable.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite localizar materiales directos o indirectos entregados.
        `,
        imagen: '@/assets/curso/tema2/41.png',
      },
      {
        titulo: 'Reporte de tiempo',
        texto: `
        <b>Información requerida:</b><br>
        debe señalar persona, centro, orden, actividad y periodo.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite ubicar la mano de obra y diferenciar su destino.
        `,
        imagen: '@/assets/curso/tema2/42.png',
      },
      {
        titulo: 'Orden de mantenimiento',
        texto: `
        <b>Información requerida:</b><br>
        debe identificar equipo, área, intervención, repuestos y horas utilizadas.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite acumular servicios y materiales de mantenimiento.
        `,
        imagen: '@/assets/curso/tema2/43.png',
      },
      {
        titulo: 'Factura de servicios',
        texto: `
        <b>Información requerida:</b><br>
        debe contener periodo, concepto y unidad beneficiada cuando sea identificable.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite reconocer energía, arrendamientos y servicios contratados.
        `,
        imagen: '@/assets/curso/tema2/44.png',
      },
      {
        titulo: 'Registro de activos',
        texto: `
        <b>Información requerida:</b><br>
        debe indicar equipo, localización, base depreciable y periodo.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite asignar inicialmente la depreciación al centro usuario.
        `,
        imagen: '@/assets/curso/tema2/45.png',
      },
      {
        titulo: 'Reporte de producción',
        texto: `
        <b>Información requerida:</b><br>
        debe relacionar centro, orden, referencia, cantidad y tiempo.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite vincular el nivel de actividad con los recursos acumulados.
        `,
        imagen: '@/assets/curso/tema2/46.png',
      },
      {
        titulo: 'Comprobante contable',
        texto: `
        <b>Información requerida:</b><br>
        debe conservar cuenta, tercero, valor, fecha y centro.
        <br><br>
        <b>Costo que permite localizar:</b><br>
        permite integrar el registro financiero con el sistema de costos.
        `,
        imagen: '@/assets/curso/tema2/47.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
