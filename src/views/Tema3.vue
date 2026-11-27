<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Asignación técnica de recursos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La asignación técnica de recursos relaciona los requerimientos de una orden de producción con los materiales, el tiempo de trabajo, la maquinaria, los equipos auxiliares, la infraestructura y los servicios necesarios para ejecutarla. Su propósito consiste en determinar qué recursos deben utilizarse, en qué cantidad, durante qué periodo y en cuál centro de costo se registrará su consumo.
            br 
            br 
            p.mb-0 Asignar un recurso no equivale a distribuir su costo. La asignación operativa identifica la disponibilidad y el uso previsto; la distribución económica determina qué proporción del valor acumulado corresponde a cada centro, orden o referencia. Una máquina puede asignarse a una orden durante un turno, mientras que su depreciación mensual debe distribuirse entre las órdenes que utilizaron su capacidad durante el periodo.

    p.mb-5(data-aos="fade-right") La información inicial procede de la orden de producción, la ficha técnica, la lista de materiales, la secuencia operacional, los tiempos estándar y los registros de capacidad. A partir de estos datos se establece la carga requerida y se contrasta con los recursos disponibles. Posteriormente, los consumos directos se registran en la orden y los costos compartidos se acumulan en centros o agrupaciones homogéneas para aplicar una base de distribución.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Relación entre requerimientos productivos y asignación de recursos

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema3/2.png')
          .col-lg-8
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/5.svg')
                h4.mb-3 Mantenimiento de maquinaria productiva
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Conserva los equipos empleados en la transformación.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/6.svg')
                h4.mb-3 Supervisión del área de confección
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Apoya varias órdenes y operaciones productivas.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/7.svg')
                h4.mb-3 Energía de la planta
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Permite el funcionamiento de maquinaria e instalaciones fabriles.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/8.svg')
                h4.mb-3 Publicidad del producto
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Corresponde a una actividad comercial posterior a la fabricación.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/9.svg')
                h4.mb-3 Comisión de ventas
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Se origina en la comercialización del producto.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/10.svg')
                h4.mb-3 Administración general no fabril
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye automáticamente como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 No contribuye directamente a llevar la prenda a su condición productiva.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/11.svg')
                h4.mb-3 Desperdicio anormal
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se distribuye entre las unidades conformes.
                p.mb-0 #[b Justificación]
                p.mb-0 Representa una pérdida que excede las condiciones normales del proceso.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/12.svg')
                h4.mb-3 Intereses ordinarios de financiación
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluyen automáticamente como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Su reconocimiento depende del tratamiento financiero aplicable.

    .cajon.color-acento-b.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Criterio de asignación
      p.mb-0 El recurso debe vincularse con una necesidad verificable de la orden. La asignación no se justifica únicamente por su disponibilidad física; debe existir correspondencia entre las especificaciones del producto, la operación prevista, la capacidad requerida y el periodo de utilización.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Recursos productivos y capacidad operativa

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/3.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/4.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Los recursos productivos comprenden los elementos que intervienen directa o indirectamente en la transformación de los materiales. Para efectos de costeo, su análisis no se limita a comprobar su existencia. También exige establecer la unidad en la que se mide su capacidad, el costo asociado con su disponibilidad, el nivel de utilización y la posibilidad de relacionarlo con una orden o centro.
        p.mb-0 Los materiales se miden mediante unidades físicas como metros, kilogramos, conos o unidades. La mano de obra se expresa mediante horas o minutos; la maquinaria puede analizarse por horas-máquina, minutos de utilización o ciclos, y los servicios de apoyo mediante horas de atención, órdenes de servicio, movimientos, inspecciones u otra magnitud técnicamente pertinente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Unidades para planear y costear los recursos productivos
        .tabla-a.tab8.mb-0
          table
            thead
              tr
                th Recurso
                th Unidad física o temporal
                th Información requerida
                th Aplicación en el costo
            tbody
              tr
                td Tejidos
                td Metros, kilogramos o área.
                td Debe identificarse el consumo previsto, la unidad de compra y el valor aplicable.
                td Permite calcular el material directo requerido por la orden.
              tr
                td Insumos
                td Unidades, metros, conos o paquetes.
                td Debe relacionarse la cantidad por prenda con el volumen programado.
                td Permite valorar los elementos incorporados al producto.
              tr
                td Mano de obra
                td Minutos u horas de trabajo.
                td Debe conocerse el tiempo requerido y el costo correspondiente al periodo.
                td Permite proyectar el costo del trabajo necesario para la transformación.
              tr
                td Maquinaria
                td Minutos-máquina, horas-máquina o ciclos.
                td Deben registrarse disponibilidad, utilización y costos asociados.
                td Permite localizar y distribuir depreciación, energía y mantenimiento.
              tr
                td Equipos auxiliares
                td Horas de uso, operaciones o lotes atendidos.
                td Debe identificarse la relación entre el equipo y el proceso beneficiado.
                td Permite asignar los costos de equipos compartidos.
              tr
                td Espacio productivo
                td Metros cuadrados utilizados durante un periodo.
                td Debe conocerse la superficie ocupada y el tiempo de utilización.
                td Puede servir como base para distribuir costos relacionados con la infraestructura.
              tr
                td Mantenimiento
                td Horas de servicio, órdenes atendidas o intervenciones.
                td Debe identificarse el centro o equipo beneficiado.
                td Permite redistribuir el costo del centro de mantenimiento.
              tr
                td Control de calidad
                td Horas de inspección, lotes o unidades verificadas.
                td Debe registrarse el alcance de las verificaciones efectuadas.
                td Permite asignar el costo del servicio a los procesos atendidos.
              tr
                td Manejo interno
                td Movimientos, peso, volumen o lotes trasladados.
                td Deben registrarse las transferencias entre centros.
                td Permite distribuir los costos de manipulación y transporte interno.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Determinación de los recursos requeridos

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema3/13.png')
            .col-lg-5
              p.mb-4 El cálculo parte de una carga de producción definida. En materiales, la cantidad necesaria se obtiene mediante el consumo unitario aprobado y el número de prendas. En los recursos temporales, la carga se expresa mediante los minutos u horas requeridos por la orden.
              p.mb-4 #[b Rm = Cu × Q]
              p.mb-0 Donde:
              p.mb-0 #[b • Rm] corresponde al material requerido.
              p.mb-0 #[b • Cu] representa el consumo unitario aprobado.
              p.mb-4 #[b • Q] indica la cantidad de prendas de la orden.
              p.mb-4 Cuando el consumo unitario no incluye el margen normal técnicamente autorizado, este debe incorporarse de manera explícita. Si el consumo ya contiene la tolerancia o pérdida prevista, adicionarla nuevamente produciría una sobreestimación.
              p.mb-4 Para la carga de trabajo puede utilizarse la siguiente relación:
              p.mb-4 #[b Mr = SAM × Q]
              p.mb-0 Donde:
              p.mb-0 #[b • Mr] corresponde a los minutos estándar requeridos.
              p.mb-0 #[b • SAM] representa el minuto estándar permitido por unidad.
              p.mb-0 #[b • Q] indica la cantidad programada.

    p.mb-5(data-aos="fade-right") Cuando una referencia atraviesa varios centros, el SAM total debe desagregarse según las operaciones ejecutadas en cada uno. Esta separación permite reconocer la carga que recibe corte, ensamble, terminación u otro centro, sin imputar a una unidad operativa el tiempo correspondiente a procesos que no ejecuta.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de requerimientos para una orden de producción

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema3/14.png')
          .col-lg-8
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/15.svg')
                h4.mb-3.text-center Tejido principal
                p.mb-3 Parámetro por unidad: 1,45 metros por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 1.740 metros.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/16.svg')
                h4.mb-3.text-center Entretela
                p.mb-3 Parámetro por unidad: 0,18 metros por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 216 metros.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/17.svg')
                h4.mb-3.text-center Cremallera
                p.mb-3 Parámetro por unidad: 1 unidad por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 1.200 unidades.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/18.svg')
                h4.mb-3.text-center Hilo de confección
                p.mb-3 Parámetro por unidad: 85 metros por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 102.000 metros.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/19.svg')
                h4.mb-3.text-center Tiempo de corte
                p.mb-3 Parámetro por unidad: 0,90 minutos por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 1.080 minutos estándar.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/20.svg')
                h4.mb-3.text-center Tiempo de ensamble
                p.mb-3 Parámetro por unidad: 15,60 minutos por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 18.720 minutos estándar.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/21.svg')
                h4.mb-3.text-center Tiempo de terminación
                p.mb-3 Parámetro por unidad: 1,50 minutos por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 1.800 minutos estándar.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3
                .caja-img.mb-0
                  img(src='@/assets/curso/tema3/22.svg')
                h4.mb-3.text-center Tiempo total
                p.mb-3 Parámetro por unidad: 18,00 minutos por prenda.
                p.mb-3 Cantidad programada: 1.200 prendas.
                p.mb-0 Requerimiento total: 21.600 minutos estándar.

    p.mb-5(data-aos="fade-left") El cálculo anterior determina la carga prevista, pero no confirma que los recursos se encuentren disponibles. Antes de asignarlos debe contrastarse el requerimiento con los inventarios, el tiempo laboral, la capacidad de las máquinas y los servicios de apoyo. Una disponibilidad global suficiente puede ocultar restricciones particulares: una planta puede contar con minutos totales para atender la orden y, al mismo tiempo, carecer de una máquina especializada requerida por una operación.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Capacidad aplicada al costeo

    p.mb-5(data-aos="fade-left") La capacidad representa la aptitud de un recurso o centro para procesar una carga dentro de condiciones definidas. Para el costeo interesa diferenciar la capacidad máxima de referencia, la capacidad que puede sostenerse bajo condiciones normales, la disponibilidad prevista y el nivel realmente utilizado.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Conceptos de capacidad utilizados en la asignación de recursos

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad teórica
          p.mb-4 #[b Alcance:] representa el nivel máximo bajo funcionamiento continuo y sin interrupciones.
          p.mb-0 #[b Aplicación técnica:] sirve como referencia límite, pero no constituye una base realista para asignar costos en condiciones habituales.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad práctica
          p.mb-4 #[b Alcance:] descuenta interrupciones inevitables, como mantenimiento programado, ajustes y pausas necesarias.
          p.mb-0 #[b Aplicación técnica:] permite aproximar la capacidad que puede ofrecerse en condiciones operativas sostenibles.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad normal
          p.mb-4 #[b Alcance:] corresponde a la producción promedio esperada durante varios periodos o temporadas bajo condiciones normales.
          p.mb-0 #[b Aplicación técnica:] se utiliza como referente para asignar los costos indirectos fijos de producción.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad presupuestada
          p.mb-4 #[b Alcance:] representa el nivel previsto para un periodo específico.
          p.mb-0 #[b Aplicación técnica:] permite proyectar recursos y establecer tasas predeterminadas.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad disponible
          p.mb-4 #[b Alcance:] corresponde a los recursos que efectivamente pueden programarse después de considerar restricciones conocidas.
          p.mb-0 #[b Aplicación técnica:] permite comprobar si una orden puede incorporarse al periodo planificado.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Capacidad utilizada
          p.mb-4 #[b Alcance:] representa la actividad realmente consumida durante la ejecución.determinada.
          p.mb-0 #[b Aplicación técnica:] permite aplicar costos, analizar diferencias y medir capacidad no utilizada.

    p.mb-5(data-aos="fade-right") La capacidad normal adquiere especial importancia en el tratamiento de los costos indirectos fijos. La NIC 2 establece que estos costos deben asignarse con base en la capacidad normal de las instalaciones. También indica que una reducción anormal de la producción o la existencia de capacidad ociosa no debe emplearse para incrementar artificialmente el costo fijo asignado a cada unidad; la parte no distribuida se reconoce como gasto del periodo (IFRS Foundation, 2025). 

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Carga de capacidad
    
    p.mb-4(data-aos="fade-right") La carga representa la cantidad de capacidad requerida por una orden o conjunto de órdenes. Su relación con la capacidad disponible puede expresarse mediante el porcentaje de ocupación:

    p.mb-4(data-aos="fade-left") #[b Porcentaje de ocupación = (Carga requerida ÷ Capacidad disponible) × 100]

    p.mb-5(data-aos="fade-right") Una carga inferior al 100 % indica que, según los datos empleados, existe capacidad disponible. Un resultado igual al 100 % representa ocupación completa de la capacidad considerada. Un porcentaje superior señala que la carga excede la disponibilidad y requiere revisar el periodo, los recursos, el método o la programación.

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 Considérese la orden presentada en la sección «Ejemplo de requerimientos para una orden de producción». Si el centro dispone de 27.000 minutos estándar para el periodo y la referencia requiere 21.600 minutos, la carga proyectada será:
              p.mb-4 #[b 21.600 / 27.000 × 100 = 80%]
              p.mb-4 La capacidad restante equivale a:
              p.mb-4 #[b 27.000 - 21.600 = 5.400 minutos estándar]
              p.mb-0 El resultado indica que la orden consumiría el 80 % de la capacidad disponible expresada en minutos estándar. No demuestra que todas las operaciones puedan ejecutarse sin restricciones, pues todavía debe verificarse la compatibilidad de las máquinas, la distribución de la carga entre centros, la disponibilidad de materiales y la presencia de recursos especializados.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema3/23.png')

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Verificaciones previas a la asignación de recursos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder4").bg3.p-lg-5.p-4

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Recursos asignados, utilizados y no utilizados
    
    p.mb-4(data-aos="fade-left") La asignación prevista debe diferenciarse del consumo real. Una orden puede reservar 500 horas-máquina y utilizar 460; también puede requerir más tiempo del presupuestado debido a reprocesos, fallas o cambios técnicos. Registrar únicamente la cantidad asignada impide identificar diferencias entre planeación y ejecución.

    p.mb-4(data-aos="fade-right") #[b Diferencia de utilización = Recurso utilizado − Recurso asignado]

    p.mb-5(data-aos="fade-left") Un resultado positivo indica consumo superior al previsto; uno negativo señala utilización inferior. Sin embargo, la diferencia no debe calificarse automáticamente como favorable o desfavorable. Una menor utilización puede originarse en mejoras del proceso, pero también en una producción incompleta. Un consumo superior puede provenir de un volumen adicional autorizado o de una pérdida operativa.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Lectura de diferencias entre recursos asignados y utilizados

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .tarjet.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Material utilizado superior al asignado
                    p.mb-4 Interpretación inicial: puede existir sobreconsumo, reposición, desperdicio o cambio en la cantidad producida.
                    p.mb-0 Verificación necesaria: deben revisarse requisiciones, devoluciones, saldo en proceso y unidades obtenidas.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/32.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Material utilizado inferior al asignado
                    p.mb-4 Interpretación inicial: puede presentarse ahorro, producción incompleta o devolución pendiente.
                    p.mb-0 Verificación necesaria: deben verificarse cantidades terminadas, inventarios y material no consumido.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/33.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Tiempo utilizado superior al previsto
                    p.mb-4 Interpretación inicial: puede existir pérdida de eficiencia, reproceso o modificación del método.
                    p.mb-0 Verificación necesaria: deben examinarse novedades, calidad, tiempos registrados y versión del estándar.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/34.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Tiempo utilizado inferior al previsto
                    p.mb-4 Interpretación inicial: puede existir mejora del método o ejecución parcial de la orden.
                    p.mb-0 Verificación necesaria: deben contrastarse unidades conformes, alcance del proceso y registros de salida.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/35.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Horas-máquina superiores a las asignadas
                    p.mb-4 Interpretación inicial: puede existir repetición de operaciones, baja velocidad o falla técnica.
                    p.mb-0 Verificación necesaria: deben revisarse reportes de equipo, mantenimiento y producción procesada.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/36.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio de apoyo superior al previsto
                    p.mb-4 Interpretación inicial: puede presentarse mayor demanda de mantenimiento, inspección o manejo.
                    p.mb-0 Verificación necesaria: deben verificarse órdenes de servicio y centros beneficiados.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/37.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Capacidad reservada no utilizada
                    p.mb-4 Interpretación inicial: puede existir aplazamiento, falta de materiales o interrupción de la orden.
                    p.mb-0 Verificación necesaria: debe identificarse la causa y el tratamiento del costo de capacidad no utilizada.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/38.png")

    .cajon.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Trazabilidad del recurso
      p.mb-0 La asignación debe conservar tres valores diferenciados: cantidad prevista, cantidad efectivamente utilizada y diferencia registrada. Sustituir el consumo real por la cantidad presupuestada elimina la posibilidad de reconocer variaciones y altera la proyección de órdenes posteriores.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Criterios de distribución del costo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/39.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/40.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La distribución del costo se aplica cuando un recurso beneficia a varios centros, órdenes o referencias y no puede relacionarse directamente con uno solo. El procedimiento consiste en agrupar costos de naturaleza semejante, seleccionar una base vinculada con su consumo, determinar una tasa y aplicarla a los objetos beneficiados.
        p.mb-0 La distribución no modifica el valor total del costo acumulado; cambia su localización. Si un centro de mantenimiento registra $12.000.000, la suma distribuida entre los centros atendidos debe conservar ese mismo valor, salvo que la política definida establezca un tratamiento particular para diferencias, capacidad no utilizada o servicios destinados a actividades no productivas.

    p.mb-5(data-aos="fade-left") Un criterio técnicamente adecuado debe representar la relación entre el recurso y el objeto que recibe el beneficio. La facilidad del cálculo no constituye una justificación suficiente. Distribuir todos los costos indirectos según el número de prendas puede generar distorsiones si algunas referencias requieren más tiempo de máquina, inspecciones adicionales o mayor cantidad de movimientos.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Base de distribución
    
    p.mb-4(data-aos="fade-left") La base de distribución es la magnitud empleada para medir el consumo relativo de un recurso compartido. Puede corresponder con horas de trabajo, horas-máquina, metros cuadrados, consumo de energía, órdenes de mantenimiento, inspecciones o movimientos de materiales.
    p.mb-5(data-aos="fade-right") La selección debe considerar la relación causal, el beneficio recibido, la disponibilidad de datos y la consistencia del método. Gutiérrez-Castañeda y Duque-Roldán (2014) señalan que la definición de la base de actividad y del nivel de operación incide en la asignación de los costos indirectos; su estudio también evidencia que una sola variable puede no explicar adecuadamente el comportamiento de todos los costos. 

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Criterios para seleccionar una base de distribución

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Relación causal
          p.mb-4 #[b Requisito:] la base debe guardar relación con el origen o comportamiento del costo.
          p.mb-0 #[b Aplicación:] las horas de mantenimiento pueden utilizarse cuando el costo depende del tiempo dedicado a cada centro.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Beneficio recibido
          p.mb-4 #[b Requisito:] la proporción asignada debe reflejar el servicio obtenido por cada objeto.
          p.mb-0 #[b Aplicación:] los centros que reciben más intervenciones deben asumir una proporción coherente del costo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Homogeneidad
          p.mb-4 #[b Requisito:] los costos agrupados deben responder a factores semejantes.
          p.mb-0 #[b Aplicación:] no deben mezclarse en una sola agrupación recursos con causas de consumo diferentes.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Medición verificable
          p.mb-4 #[b Requisito:] la base debe proceder de registros completos y comprobables.
          p.mb-0 #[b Aplicación:] las horas-máquina requieren reportes de utilización consistentes.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Consistencia
          p.mb-4 #[b Requisito:] el método debe aplicarse de manera uniforme entre periodos comparables.
          p.mb-0 #[b Aplicación:] los cambios de base deben justificarse y documentarse.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Materialidad
          p.mb-4 #[b Requisito:] el nivel de precisión debe guardar relación con la importancia del costo.
          p.mb-0 #[b Aplicación:] un recurso de valor reducido puede utilizar una base menos detallada si no altera materialmente el resultado.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Costo-beneficio
          p.mb-4 #[b Requisito:] la utilidad de la información debe justificar el esfuerzo de medición.
          p.mb-0 #[b Aplicación:] no resulta eficiente implantar un registro complejo para un costo poco significativo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          h4.mb-4.text-center Medición verificable
          p.mb-4 #[b Requisito:] la base debe distinguir el consumo productivo de la capacidad no utilizada cuando corresponda.
          p.mb-0 #[b Aplicación:] los costos fijos deben considerar la capacidad normal y no únicamente el volumen reducido del periodo.
  
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Bases aplicables a recursos compartidos

    p.mb-5(data-aos="fade-left") No existe una base universal para todos los costos indirectos. Cada agrupación debe analizarse según el recurso que representa. Incluso dentro de un mismo centro puede ser necesario separar costos fijos y variables o utilizar bases diferentes.
    
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Bases posibles para distribuir costos indirectos de producción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Maquinaria y mantenimiento")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Energía de maquinaria]
                p.mb-0 Base posible: kilovatios-hora medidos, horas-máquina o potencia por tiempo de uso.
                p.mb-4 Condición para su utilización: la base debe representar el consumo de los equipos atendidos.
                p.mb-0 #[b Depreciación de maquinaria]
                p.mb-0 Base posible: horas-máquina, capacidad utilizada o tiempo disponible.
                p.mb-4 Condición para su utilización: debe considerarse la relación entre el activo y los centros beneficiados.
                p.mb-0 #[b Mantenimiento]
                p.mb-0 Base posible: horas de servicio, órdenes atendidas o tiempo de intervención.
                p.mb-4 Condición para su utilización: los registros deben identificar el equipo y el centro atendido.
                p.mb-0 #[b Preparación de máquinas]
                p.mb-0 Base posible: número de alistamientos u horas de preparación.
                p.mb-0 Condición para su utilización: resulta pertinente cuando las órdenes generan frecuencias de ajuste diferentes.
          .tarjeta.color-a.p-4(titulo="Personal y control")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Supervisión]
                p.mb-0 Base posible: horas de mano de obra, número de personas o tiempo dedicado.
                p.mb-4 Condición para su utilización: la base debe representar el alcance real de la supervisión.
                p.mb-0 #[b Control de calidad]
                p.mb-0 Base posible: horas de inspección, lotes revisados o unidades verificadas.
                p.mb-4 Condición para su utilización: deben diferenciarse las referencias con exigencias de inspección distintas.
                p.mb-0 #[b Seguridad industrial del área productiva]
                p.mb-0 Base posible: número de personas, horas laboradas o áreas atendidas.
                p.mb-0 Condición para su utilización: la base debe corresponder con el alcance del servicio prestado.
          .tarjeta.color-a.p-4(titulo="Instalaciones y servicios")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Arrendamiento productivo]
                p.mb-0 Base posible: metros cuadrados ocupados durante el periodo.
                p.mb-4 Condición para su utilización: la distribución debe considerar las áreas efectivamente utilizadas por los centros.
                p.mb-0 #[b Iluminación]
                p.mb-0 Base posible: metros cuadrados, puntos instalados o medición directa.
                p.mb-4 Condición para su utilización: la base debe aproximar el consumo del espacio beneficiado.
                p.mb-0 #[b Limpieza industrial]
                p.mb-0 Base posible: metros cuadrados, horas de servicio o frecuencia de atención.
                p.mb-0 Condición para su utilización: debe identificarse el espacio o centro beneficiado.
          .tarjeta.color-a.p-4(titulo="Materiales y almacenamiento")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 #[b Manejo de materiales]
                p.mb-0 Base posible: número de movimientos, peso, volumen o lotes trasladados.
                p.mb-4 Condición para su utilización: la unidad seleccionada debe corresponder con el esfuerzo de manipulación.
                p.mb-0 #[b Almacén de materiales]
                p.mb-0 Base posible: requisiciones, referencias administradas o volumen despachado.
                p.mb-0 Condición para su utilización: debe existir relación entre la actividad del almacén y los centros usuarios.
    
    p.mb-5(data-aos="fade-right") Las bases presentadas son alternativas técnicas; su pertinencia debe verificarse con los registros y características de cada organización.

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Criterio de homogeneidad
      p.mb-0 Una agrupación de costos debe contener recursos que respondan a una causa semejante. Si la depreciación depende de la disponibilidad de los equipos y el mantenimiento correctivo depende de las horas de intervención, reunir ambos valores y distribuirlos mediante una sola base puede reducir la precisión del resultado.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Etapas de distribución

    p.mb-5(data-aos="fade-left") La distribución puede organizarse en tres momentos. Primero se localizan los costos indirectos en los centros donde se originan. Después se trasladan los costos de los centros de servicios hacia los centros productivos que recibieron su apoyo. Finalmente, los costos acumulados en los centros de producción se asignan a las órdenes o referencias procesadas.


    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Etapas para distribuir los costos indirectos

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg44.p-4
          h4.mb-4.text-center Distribución primaria
          p.mb-4 Operación: localiza los costos indirectos en centros de producción y de servicios.
          p.mb-0 Resultado: cada costo queda registrado en el centro donde se originó o consumió inicialmente.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg44.p-4
          h4.mb-4.text-center Distribución secundaria
          p.mb-4 Operación: traslada los costos de los centros de servicios hacia los centros beneficiados.
          p.mb-0 Resultado: los centros productivos reciben una proporción de mantenimiento, calidad, almacén u otros apoyos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg44.p-4
          h4.mb-4.text-center Distribución final
          p.mb-4 Operación: asigna los costos acumulados en los centros productivos a las órdenes o referencias.
          p.mb-0 Resultado: cada objeto de costo recibe la proporción correspondiente según la base establecida.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg44.p-4
          h4.mb-4.text-center Conciliación
          p.mb-4 Operación: compara los costos acumulados con los valores distribuidos.
          p.mb-0 Resultado: permite comprobar que no existan omisiones, duplicidades o diferencias sin explicar.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Distribución primaria

    p.mb-5(data-aos="fade-left") La distribución primaria identifica el centro al que corresponde inicialmente cada costo. Si una factura de mantenimiento señala de manera directa el equipo intervenido, el valor puede localizarse en el centro usuario o registrarse en el centro de mantenimiento según la política definida. Cuando una factura de energía cubre toda la planta, debe separarse mediante mediciones o bases que representen el consumo de las áreas.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Distribución secundaria

    p.mb-5(data-aos="fade-left") Los centros de servicios acumulan costos que posteriormente deben trasladarse a los centros beneficiados. La base seleccionada debe expresar la magnitud del servicio recibido. En mantenimiento puede utilizarse el tiempo de intervención; en calidad, las horas de inspección; en almacén, las requisiciones atendidas o los movimientos efectuados.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Distribución final

    p.mb-5(data-aos="fade-left") Después de recibir los costos de apoyo, cada centro productivo conserva un valor total que debe asignarse a las órdenes procesadas. La base puede expresarse en horas-máquina, minutos de transformación, horas de mano de obra u otra magnitud asociada con la actividad del centro. No debe aplicarse una misma base de forma automática a corte, ensamble y acabado si sus estructuras de consumo son diferentes.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Tasa de distribución

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 La tasa establece el valor asignable por cada unidad de la base seleccionada:
              p.mb-4 #[b TD = CA / BT]
              p.mb-0 Donde:
              p.mb-0 #[b • TD] corresponde a la tasa de distribución.
              p.mb-0 #[b • CA] representa el costo acumulado en la agrupación o centro.
              p.mb-4 #[b • BT] indica el total de unidades de la base de distribución.
              p.mb-4 El costo asignado a un centro u orden se obtiene mediante:
              p.mb-4 #[b CADᵢ = TD × Bᵢ]
              p.mb-0 Donde:
              p.mb-0 #[b • CADᵢ]  corresponde al costo asignado al objeto i
              p.mb-0 #[b • TD] representa la tasa de distribución.
              p.mb-0 #[b • Bᵢ] indica las unidades de la base consumidas por el objeto i.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema3/41.png')
      
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de distribución del costo de mantenimiento

    p.mb-4(data-aos="fade-left") Supóngase que el centro de mantenimiento acumula $12.000.000 durante el periodo y registra 600 horas de servicio. La tasa será:

    p.mb-4(data-aos="fade-right") #[b TD = $12.000.000 / 600 horas = $20.000 por hora]

    p.mb-5(data-aos="fade-left") Los reportes indican que corte recibió 120 horas, ensamble 300 y terminación 180.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Distribución hipotética del centro de mantenimiento
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tabla-a.tab9.mb-0
              table
                thead
                  tr
                    th Centro beneficiado
                    th Horas de servicio
                    th Tasa por hora
                    th Costo distribuido
                tbody
                  tr
                    td Corte.
                    td 120 horas
                    td $20.000
                    td $2.400.000
                  tr
                    td Ensamble.
                    td 300 horas
                    td $20.000
                    td $6.000.000
                  tr
                    td Terminación.
                    td 180 horas
                    td $20.000
                    td $3.600.000
                  tr
                    td Total.
                    td 600 horas
                    td No aplica
                    td $12.000.000
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema3/42.png')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/43.png', alt="")
      .col-lg-9
        .row.mb-lg-3.mb-4
          .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema3/44.svg', alt="")
          .col-lg-6(data-aos="fade-left")
            .bg8.p-4.cen
              p.mb-4.mx-lg-2 Los valores son hipotéticos y muestran una distribución basada en las horas de servicio registradas.
              p.mb-4.mx-lg-2 La suma distribuida coincide con el costo acumulado en mantenimiento. Ensamble recibe la mayor proporción porque concentró el 50 % de las horas de servicio:
              p.mb-0.mx-lg-2 #[b 300 / 600 × 100 = 50 %]
        p.mb-0 Este resultado no significa necesariamente que ensamble presente una gestión deficiente. El mayor consumo puede explicarse por la cantidad de equipos, el tiempo de operación, la complejidad técnica o las intervenciones programadas. La interpretación requiere relacionar el costo con la actividad desarrollada y las condiciones de los equipos.

      
    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Distribución mediante una o varias bases
    
    p.mb-4(data-aos="fade-left") El empleo de una sola base reduce la complejidad del cálculo, pero puede asignar costos sin representar adecuadamente su consumo. Si un centro reúne depreciación, energía, supervisión y preparación de máquinas, distribuir todo según horas de mano de obra supone que cada recurso depende del mismo factor, lo cual no siempre resulta válido.

    p.mb-5(data-aos="fade-right") Una alternativa consiste en separar agrupaciones homogéneas:

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Separación de costos según su factor de consumo

    .row.justify-content-center.align-items.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/45.svg' alt='')
          .tarjeta.color-b.h-100
            .p-4
              h4.text-center.mt-3 Depreciación de equipos
              p.mb-4 #[b Costo acumulado:] $18.000.000.
              p.mb-4 #[b Base seleccionada:] horas-máquina disponibles o utilizadas, según el criterio aprobado.
              p.mb-0 #[b Justificación:] el costo se relaciona con la capacidad y disponibilidad de los activos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/46.svg' alt='')
          .tarjeta.color-b.h-100
            .p-4
              h4.text-center.mt-3 Energía de accionamiento
              p.mb-4 #[b Costo acumulado:] $9.500.000.
              p.mb-4 #[b Base seleccionada:] kilovatios-hora u horas-máquina ponderadas por potencia.
              p.mb-0 #[b Justificación:] el consumo depende del funcionamiento de los equipos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/47.svg' alt='')
          .tarjeta.color-b.h-100
            .p-4
              h4.text-center.mt-3 Supervisión
              p.mb-4 #[b Costo acumulado:] $11.000.000.
              p.mb-4 #[b Base seleccionada:] horas de trabajo o cantidad de personas atendidas.
              p.mb-0 #[b Justificación:] el servicio se relaciona con el alcance de la supervisión.

    .row.justify-content-center.align-items.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/48.svg' alt='')
          .tarjeta.color-b.h-100
            .p-4
              h4.text-center.mt-3 Preparación de máquinas
              p.mb-4 #[b Costo acumulado:] $6.000.000.
              p.mb-4 #[b Base seleccionada:] número de alistamientos u horas de preparación.
              p.mb-0 #[b Justificación:] las órdenes generan diferentes frecuencias y duraciones de ajuste.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/49.svg' alt='')
          .tarjeta.color-b.h-100
            .p-4
              h4.text-center.mt-3 Inspección de calidad
              p.mb-4 #[b Costo acumulado:] $8.000.000.
              p.mb-4 #[b Base seleccionada:] horas de inspección o lotes verificados.
              p.mb-0 #[b Justificación:] el consumo depende de la actividad de control requerida.
    
    p.mb-4(data-aos="fade-right") Los valores son hipotéticos.
    p.mb-5(data-aos="fade-right") La utilización de varias bases no garantiza por sí misma un resultado más preciso. Cada registro debe ser confiable y el beneficio de la desagregación debe justificar su costo administrativo. Cuando las bases no pueden medirse con consistencia, una estructura excesivamente detallada puede producir una apariencia de exactitud sin suficiente soporte documental.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Capacidad normal y distribución de costos fijos
    
    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema3/50.png')
            .col-lg-5
              p.mb-4 La distribución de los costos indirectos fijos requiere evitar que una producción anormalmente baja eleve el valor asignado a cada unidad. Considérese un centro con costos indirectos fijos de $24.000.000 y una capacidad normal de 30.000 horas-máquina.
              p.mb-4 #[b Tasa de costo fijo = $24.000.000 / 30.000 horas-máquina = $800 por hora-máquina]
              p.mb-4 Si durante el periodo se utilizan 20.000 horas-máquina, el costo fijo distribuido será:
              p.mb-4 #[b $800 × 20.000 = $16.000.000]
              p.mb-4 La diferencia no distribuida asciende a:
              p.mb-0 #[b $24.000.000 - $16.000.000 = $8.000.000]

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Ejemplo de distribución de costos fijos con capacidad normal

    .row.justify-content-center.align-items-center.mb-lg-4.mb-0(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Costos indirectos fijos del periodo:] $24.000.000.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Capacidad normal:] 30.000 horas-máquina.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Tasa basada en capacidad normal:] $800 por hora-máquina.

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Actividad real:] 20.000 horas-máquina.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Costo fijo distribuido:] $16.000.000.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg9.p-4
          p.mb-0 #[b Costo fijo no distribuido:] $8.000.000.
      
    p.mb-4(data-aos="fade-left") Si la tasa se calculara dividiendo los $24.000.000 entre las 20.000 horas utilizadas, ascendería a $1.200 por hora. Este procedimiento trasladaría al producto el efecto de la baja actividad. La capacidad normal evita que el inventario absorba costos derivados de inactividad anormal; los costos indirectos fijos no distribuidos deben reconocerse en el periodo conforme al tratamiento contable aplicable (IFRS Foundation, 2025).

    p.mb-5(data-aos="fade-right") En periodos de producción anormalmente alta, el valor fijo asignado a cada unidad debe reducirse para evitar que los inventarios se midan por encima de su costo. Los costos indirectos variables, en cambio, se distribuyen con base en el uso real de las instalaciones productivas. Estas disposiciones se encuentran formuladas expresamente en la NIC 2 y en la edición 2025 de la Norma de Contabilidad para las PYMES de la IFRS Foundation. 

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Tasas predeterminadas y costos reales
    
    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 La tasa de distribución puede calcularse antes de iniciar el periodo mediante costos y bases presupuestadas. Este procedimiento facilita la proyección de las órdenes sin esperar el cierre contable:
              p.mb-4 #[b Ecuación editable: TP = CIFp / Bp]
              p.mb-0 Donde:
              p.mb-0 • TP corresponde a la tasa predeterminada.
              p.mb-0 • CIFp representa los costos indirectos presupuestados.
              p.mb-4 • Bp indica la cantidad presupuestada de la base.
              p.mb-4 El costo aplicado durante la ejecución se determina así:
              p.mb-4 #[b CIFa = TP × Br]
              p.mb-0 Donde:
              p.mb-0 #[b • CIFa] corresponde al costo indirecto aplicado.
              p.mb-0 #[b • TP] representa la tasa predeterminada.
              p.mb-4 #[b • Br] indica la base realmente consumida por la orden.
              p.mb-4 Al cierre del periodo debe compararse el costo aplicado con el costo real:
              p.mb-0 #[b Diferencia de aplicación = CIFreal – CIFaplicado]
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema3/51.png')
            
    p.mb-4(data-aos="fade-right") Un resultado positivo indica que el costo real fue superior al aplicado; uno negativo señala que el valor aplicado superó el costo registrado. La diferencia debe analizarse antes de definir su tratamiento, pues puede originarse en cambios de precios, variaciones de consumo, modificaciones en la actividad o supuestos presupuestarios que no se cumplieron.

    p.mb-5(data-aos="fade-left") Gutiérrez-Castañeda y Duque-Roldán (2014) destacan la importancia de analizar las tasas predeterminadas, las bases de asignación y las diferencias entre los costos reales y aplicados, especialmente cuando se busca mantener coherencia con el tratamiento de los inventarios.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Controles para la distribución

    p.mb-5(data-aos="fade-left") La distribución debe permitir reconstruir el recorrido del costo desde su documento de origen hasta la orden que finalmente lo recibe. La ausencia de conciliación puede producir duplicidades, centros con saldos sin distribuir o valores aplicados sin soporte.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Controles para verificar la distribución de costos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .tarjet.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Integridad del costo acumulado
                    p.mb-4 Verificación: la totalidad de los valores debe proceder de documentos y registros identificables.
                    h4.mb-4 Correspondencia de la base
                    p.mb-0 Verificación: la unidad utilizada debe guardar relación con el recurso distribuido.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/52.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Cierre de la base
                    p.mb-4 Verificación: la suma de las unidades asignadas a los objetos debe coincidir con el total empleado en la tasa.Verificación: la suma de las unidades asignadas a los objetos debe coincidir con el total empleado en la tasa.
                    h4.mb-4 Conciliación monetaria
                    p.mb-0 Verificación: el costo distribuido más las diferencias reconocidas debe coincidir con el costo acumulado.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/53.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Ausencia de duplicidad
                    p.mb-4 Verificación: un mismo valor no debe cargarse directamente a la orden y distribuirse nuevamente como indirecto.
                    h4.mb-4 Consistencia temporal
                    p.mb-0 Verificación: el costo y la base deben pertenecer al mismo periodo de análisis.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/54.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Control de capacidad
                    p.mb-4 Verificación: deben diferenciarse actividad normal, utilización real y capacidad no empleada.
                    h4.mb-4 Documentación del cambio
                    p.mb-0 Verificación: toda modificación de centro, agrupación o base debe conservar fecha y justificación.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/55.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Revisión de valores atípicos
                    p.mb-4 Verificación: las variaciones significativas deben contrastarse con novedades operativas y contables.
                    h4.mb-4 Trazabilidad final
                    p.mb-0 Verificación: cada orden debe permitir identificar la tasa, la base consumida y el costo recibido.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/56.png")

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Regla de conciliación
      p.mb-0 La distribución no crea ni elimina costos. El valor acumulado debe ser igual a la suma de los importes asignados y las diferencias reconocidas. Cualquier desequilibrio requiere revisar los documentos, las bases, las tasas y los registros aplicados.

    p.mb-0(data-aos="fade-left") La asignación técnica de recursos proporciona las cantidades y capacidades que requiere la orden; la distribución convierte el consumo compartido en valores atribuibles a centros y productos. La confiabilidad del resultado depende de que las bases representen el uso de los recursos, las agrupaciones sean homogéneas, la capacidad normal reciba un tratamiento diferenciado y cada movimiento conserve trazabilidad documental.
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder4: [
      {
        titulo: 'Correspondencia técnica',
        texto: `
        <b>Condición requerida:</b><br>
        el recurso debe ser compatible con el material, la operación y las especificaciones del producto.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        puede asignarse un equipo disponible que no cumple las necesidades del proceso.
        `,
        imagen: '@/assets/curso/tema3/24.png',
      },
      {
        titulo: 'Cantidad requerida',
        texto: `
        <b>Condición requerida:</b><br>
        la disponibilidad debe cubrir el consumo o el tiempo previsto para la orden.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        pueden generarse faltantes, interrupciones o compras no programadas.
        `,
        imagen: '@/assets/curso/tema3/25.png',
      },
      {
        titulo: 'Periodo de disponibilidad',
        texto: `
        <b>Condición requerida:</b><br>
        el recurso debe encontrarse libre durante las fechas previstas.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        puede producirse una doble asignación entre órdenes.
        `,
        imagen: '@/assets/curso/tema3/26.png',
      },
      {
        titulo: 'Capacidad por centro',
        texto: `
        <b>Condición requerida:</b><br>
        cada área debe disponer del tiempo necesario para atender su parte de la secuencia.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        la capacidad total puede ocultar una restricción localizada.
        `,
        imagen: '@/assets/curso/tema3/27.png',
      },
      {
        titulo: 'Condición operativa',
        texto: `
        <b>Condición requerida:</b><br>
        los equipos deben encontrarse habilitados y con mantenimiento compatible con la programación.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        la capacidad nominal puede diferir de la capacidad realmente utilizable.
        `,
        imagen: '@/assets/curso/tema3/28.png',
      },
      {
        titulo: 'Competencia técnica',
        texto: `
        <b>Condición requerida:</b><br>
        el personal asignado debe corresponder con las operaciones requeridas.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        la cantidad disponible puede resultar insuficiente desde el punto de vista técnico.
        `,
        imagen: '@/assets/curso/tema3/29.png',
      },
      {
        titulo: 'Servicios de apoyo',
        texto: `
        <b>Condición requerida:</b><br>
        mantenimiento, calidad, abastecimiento y manejo deben responder a la carga prevista.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        la operación puede detenerse aunque exista capacidad directa.
        `,
        imagen: '@/assets/curso/tema3/30.png',
      },
      {
        titulo: 'Identificación contable',
        texto: `
        <b>Condición requerida:</b><br>
        cada recurso debe asociarse con una orden, centro o agrupación de costos.
        <br><br>
        <b>Riesgo de omisión:</b><br>
        el consumo puede quedar sin localizar o registrarse en un objeto incorrecto.
        `,
        imagen: '@/assets/curso/tema3/31.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
