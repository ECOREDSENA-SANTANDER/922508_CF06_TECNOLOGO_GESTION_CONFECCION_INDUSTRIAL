<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura del costo de confección
      
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-terciario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El costo de confección representa el valor de los recursos consumidos para transformar materiales textiles e insumos en prendas terminadas que cumplen las especificaciones de la orden de producción. Su determinación exige identificar los recursos incorporados físicamente al producto, el trabajo aplicado durante la transformación y los costos fabriles necesarios para sostener las operaciones. La suma de estos elementos constituye el costo de producción, siempre que las partidas incluidas guarden relación con la fabricación.
            br 
            br
            p.mb-0 La estructura básica comprende materiales directos, mano de obra directa y costos indirectos de fabricación. Esta organización permite reconocer qué recursos pueden asociarse de forma técnica y económicamente viable con una referencia, un lote o una orden, y cuáles deben distribuirse mediante criterios de asignación. La contabilidad de costos advierte que una misma erogación puede recibir tratamientos diferentes según su finalidad, trazabilidad y relación con el objeto de costo; por ello, la clasificación debe sustentarse en criterios documentados y aplicarse de manera uniforme (Datar & Rajan, 2021).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Elementos básicos del costo de producción de prendas
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Elemento
                th Contenido general
                th Relación con la prenda
            tbody
              tr
                td Materiales directos
                td Comprenden tejidos, forros, entretelas, cierres, botones, elásticos, etiquetas y demás elementos identificables con la referencia.
                td Se incorporan físicamente al producto y su consumo puede medirse de manera técnica.
              tr
                td Mano de obra directa
                td Comprende el costo del trabajo aplicado a las operaciones de transformación atribuibles a la orden.
                td Puede relacionarse con las operaciones, el tiempo estándar o el tiempo registrado para fabricar el producto.
              tr
                td Costos indirectos de fabricación
                td Comprenden recursos fabriles necesarios para producir, pero cuya identificación directa con cada unidad no resulta práctica o económicamente viable.
                td Se asignan mediante una base técnica, racional y aplicada de forma consistente.
    
    p.mb-5 La relación general se expresa de la siguiente manera:

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-right")
      p.mb-0.text-center #[b Costo de producción = Materiales directos + Mano de obra directa + Costos indirectos de fabricación]

    p.mb-5 Esta fórmula no incluye automáticamente gastos administrativos, costos financieros, gastos de comercialización ni margen de utilidad. Tales conceptos pueden intervenir en la determinación del precio o en el análisis integral de la organización, pero no forman parte del costo de fabricación cuando no contribuyen a llevar el inventario a su ubicación y condición actuales. La NIC 2 establece que el costo de los inventarios comprende los costos de adquisición, los costos de transformación y otros desembolsos necesarios para alcanzar dichas condiciones (IFRS Foundation, 2025).

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferencias entre costo de producción, gasto y precio de venta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/2.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Costo de producción")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Diferencia técnica:] El costo de producción representa los recursos consumidos para fabricar la prenda.
                p.mb-4 #[b Finalidad:] Cuantifica los recursos empleados para fabricar una prenda.
                p.mb-0 #[b Ejemplo aplicado:] Registra tejido, trabajo directo y costos fabriles aplicados.
          .tarjeta.color-a.p-4(titulo="Gasto del periodo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Diferencia técnica:] El gasto corresponde a recursos reconocidos en el periodo que no se incorporan al inventario producido.
                p.mb-4 #[b Finalidad:] Reconoce recursos consumidos en actividades que no forman parte de la transformación.
                p.mb-0 #[b Ejemplo aplicado:] Incluye publicidad, comisiones de venta o administración general no relacionada con la fábrica.
          .tarjeta.color-a.p-4(titulo="Precio de venta")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Diferencia técnica:] El precio de venta incluye decisiones comerciales y puede incorporar el costo total, el margen esperado, impuestos y otras condiciones de negociación.
                p.mb-4 #[b Finalidad:] Define el valor comercial solicitado por el producto.
                p.mb-0 #[b Ejemplo aplicado:] Integra criterios de costo, margen, mercado, negociación e impuestos aplicables.

    p.mb-4 También pueden construirse dos agrupaciones auxiliares. El costo primo reúne los materiales directos y la mano de obra directa; el costo de conversión integra la mano de obra directa y los costos indirectos de fabricación. Estas expresiones responden a propósitos distintos y no deben sumarse entre sí, porque la mano de obra directa se encuentra incluida en ambas.

    p.mb-4 #[b Costo primo = Materiales directos + Mano de obra directa]

    p.mb-5 #[b Costo de conversión = Mano de obra directa + Costos indirectos de fabricación]

    .cajon.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Precisión de cálculo
      p.mb-0 El costo primo muestra los recursos directamente identificables con el producto. El costo de conversión expresa los recursos utilizados para transformar los materiales en prendas terminadas. La mano de obra directa participa en las dos agrupaciones, pero se contabiliza una sola vez al determinar el costo total de producción.


    separador 
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Materiales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/4.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Los materiales constituyen los recursos físicos empleados en la fabricación de la prenda. Su tratamiento dentro del costo depende de la relación que mantengan con el producto y de la posibilidad de medir su consumo. Un material se considera directo cuando puede identificarse y valorarse respecto de una referencia, unidad, lote u orden sin incurrir en procedimientos desproporcionados.
        p.mb-0 En confección, el tejido principal suele representar una partida significativa, pero no es el único material directo. Forros, entretelas, hilos, cierres, botones, broches, cintas, elásticos, etiquetas, marquillas y empaques pueden formar parte de esta categoría cuando su cantidad y valor se encuentran definidos en la ficha técnica o en la lista de materiales. La estructura cambia según el producto: una camiseta básica puede tener pocos elementos, mientras que una chaqueta estructurada requiere materiales principales, complementarios y accesorios con características técnicas diferentes (Singh & Nijhar, 2015).

    p.mb-5 La identificación debe partir de documentación vigente. La ficha técnica establece las características del producto; la lista de materiales especifica los componentes requeridos, y la orden de producción determina la cantidad que debe fabricarse. La correspondencia entre estos documentos reduce omisiones, duplicidades y valoraciones realizadas con referencias de materiales incorrectas.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Clasificación operativa de los materiales de confección

    .row.justify-content-center.mb-lg-5.mb-md-5(data-aos="fade-left")
      .col-md-6.col-lg-4.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/5.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Material principal
              p.mb-4 #[b Ejemplos:] incluye tejido plano, tejido de punto, cuero, no tejido u otro material predominante.
              p.mb-4 #[b Tratamiento en el costo:] se calcula según el consumo aprobado y el costo de adquisición aplicable.
      .col-md-6.col-lg-4.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/6.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Material complementario
              p.mb-4 #[b Ejemplos:] incluye forro, entretela, relleno, refuerzo o material de contraste.
              p.mb-4 #[b Tratamiento en el costo:] se identifica por referencia, cantidad, unidad de medida y valor unitario.
      .col-md-6.col-lg-4.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/7.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Insumos de ensamble
              p.mb-4 #[b Ejemplos:] Incluye hilo, cierres, botones, broches, elásticos, cintas y remaches.
              p.mb-4 #[b Tratamiento en el costo:] se asigna directamente cuando su consumo puede medirse por unidad u orden.

    .row.justify-content-center.mb-lg-5.mb-md-5(data-aos="fade-left")
      .col-md-6.col-lg-4.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/8.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Elementos de identificación
              p.mb-4 #[b Ejemplos:] incluye etiquetas de marca, composición, talla, cuidado y trazabilidad.
              p.mb-4 #[b Tratamiento en el costo:] se incorpora de acuerdo con la cantidad requerida por producto.
      .col-md-6.col-lg-4.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/9.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Material de presentación
              p.mb-4 #[b Ejemplos:] incluye bolsas, cajas, papel, ganchos y otros elementos exigidos para entregar la prenda.
              p.mb-4 #[b Tratamiento en el costo:] se reconoce como material directo cuando forma parte de la presentación especificada.
      .col-md-6.col-lg-4.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/10.svg' alt='')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Material indirecto
              p.mb-4 #[b Ejemplos:] incluye lubricantes, elementos de limpieza técnica y suministros de bajo valor o consumo compartido.
              p.mb-4 #[b Tratamiento en el costo:] se acumula como costo indirecto cuando no resulta viable identificarlo con cada unidad.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Consumo y valoración de materiales

    p.mb-4 La determinación del costo requiere diferenciar la cantidad física del valor monetario. El consumo expresa cuántos metros, kilogramos, unidades o pares necesita la prenda; la valoración convierte esa cantidad en dinero mediante el costo unitario correspondiente. Mezclar ambas dimensiones conduce a errores, especialmente cuando existen cambios de proveedor, variaciones en el ancho del tejido, descuentos comerciales o unidades de compra distintas.

    p.mb-4 La relación básica es:

    p.mb-4 #[b Costo del material = Consumo por unidad × Costo por unidad de medida]

    p.mb-4 Si una referencia requiere 1,65 metros de tejido y el costo aprobado es de $18.000 por metro, el valor del tejido por prenda será:

    p.mb-5 #[b 1,65 × $18.000/m = $29.700]

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      p.mb-0 El resultado corresponde únicamente al tejido principal. Los demás materiales deben valorarse por separado y después consolidarse. El International Trade Centre señala que el costo del tejido parte de la relación entre consumo y precio por unidad de medida; sin embargo, el cálculo debe conservar correspondencia entre ancho, calidad, moneda y condiciones de compra (International Trade Centre, 2022).

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Consumo neto y consumo requerido
    
    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 El consumo neto representa la cantidad incorporada técnicamente al producto. El consumo requerido puede incluir una previsión por pérdidas normales inherentes al proceso, siempre que esta no haya sido incorporada previamente en el estándar. La tolerancia no debe agregarse de manera automática, pues duplicarla incrementaría artificialmente el costo estimado.
              p.mb-4 Cuando el consumo neto no contiene la pérdida normal, la cantidad requerida puede calcularse así:
              p.mb-4 #[b Consumo requerido = Consumo neto ÷ (1 − Tasa de pérdida normal)]
              p.mb-4 Por ejemplo, si el consumo neto es de 1,60 metros y la pérdida normal técnicamente aprobada es del 4 %:
              p.mb-4 #[b Consumo requerido = 1,60 m ÷ (1 − 0,04) = 1,60 m ÷ 0,96 = 1,6667 m]
              p.mb-0 El resultado puede expresarse como 1,67 metros, de acuerdo con la regla de redondeo adoptada. Esta cantidad no debe volver a incrementarse si el trazo aprobado o el consumo de la ficha ya incorpora el margen correspondiente.
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema1/11.png')


    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Control del consumo
      p.mb-0 Las pérdidas normales deben sustentarse en condiciones técnicas documentadas. Los errores de corte, deterioros evitables, faltantes, daños por manipulación o desperdicios anormales no deben presentarse como tolerancias ordinarias para incrementar el costo estándar.
    
    p.mb-5 La NIC 2 excluye del costo de los inventarios las cantidades anormales de desperdicio de materiales, mano de obra u otros costos de producción. Estos valores deben reconocerse según su naturaleza y no distribuirse entre las unidades conformes como si fueran consumos normales (IFRS Foundation, 2025).

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Costo de adquisición

    p.mb-4 El valor del material no siempre coincide con el precio indicado en la factura. El costo de adquisición puede incluir el precio de compra, aranceles, impuestos no recuperables, transporte, manipulación y otros desembolsos directamente atribuibles a la adquisición. Los descuentos comerciales, rebajas y conceptos equivalentes disminuyen el costo reconocido (IFRS Foundation, 2025).

    p.mb-5 #[b Costo de adquisición = Precio de compra + Costos directamente atribuibles − Descuentos y rebajas]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/12.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Componentes de adquisición")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Precio de compra]
                p.mb-0 #[b • Tratamiento general:] constituye la base monetaria de la adquisición.
                p.mb-4 #[b • Condición de inclusión:] debe corresponder con la referencia, calidad y unidad negociadas.
                p.mb-4 #[b Aranceles e impuestos no recuperables]
                p.mb-0 #[b • Tratamiento general:] incrementan el costo de adquisición.
                p.mb-0 #[b • Condición de inclusión:] se incluyen cuando no pueden recuperarse mediante mecanismos fiscales.
          .tarjeta.color-a.p-4(titulo="Costos asociados a la entrada")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Transporte de entrada]
                p.mb-0 #[b • Tratamiento general:] puede formar parte del costo del material.
                p.mb-4 #[b • Condición de inclusión:] debe relacionarse directamente con el traslado hasta la ubicación requerida.
                p.mb-4 #[b Manipulación de entrada]
                p.mb-0 #[b • Tratamiento general:] puede incorporarse cuando resulta atribuible a la adquisición.
                p.mb-0 #[b • Condición de inclusión:] debe estar sustentada mediante registros y criterios consistentes.
          .tarjeta.color-a.p-4(titulo="Ajustes y exclusiones")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Descuentos comerciales]
                p.mb-0 #[b • Tratamiento general:] disminuyen el costo del material.
                p.mb-4 #[b • Condición de inclusión:] se deducen cuando afectan el precio efectivo de adquisición.
                p.mb-4 #[b Intereses y financiación ordinaria]
                p.mb-0 #[b • Tratamiento general:] no forman parte automáticamente del costo de adquisición.
                p.mb-4 #[b • Condición de inclusión:] requieren el tratamiento previsto por la normativa financiera aplicable.
                p.mb-4 #[b Pérdidas anormales]
                p.mb-0 #[b • Tratamiento general:] no incrementan el costo de las unidades conformes.
                p.mb-0 #[b • Condición de inclusión:] se reconocen separadamente de acuerdo con su naturaleza.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Consolidación del costo de materiales

    p.mb-4 La hoja de costos debe registrar cada componente con una unidad compatible. Cuando un insumo se compra por rollo, cono, caja o paquete, es necesario convertir el precio de compra a la unidad empleada para calcular el consumo. No resulta técnicamente válido multiplicar el consumo expresado en metros por un precio registrado por kilogramo sin disponer de un factor de conversión comprobado.

    p.mb-5 Los valores del siguiente ejemplo son hipotéticos y se utilizan únicamente para mostrar el procedimiento de cálculo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Ejemplo de valoración de materiales directos por prenda
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tabla-a.tab2.mb-0
              table
                thead
                  tr
                    th Material
                    th Consumo unitario
                    th Costo unitario
                    th Costo por prenda
                tbody
                  tr
                    td Tejido principal
                    td 1,65 metros
                    td $18.000 por metro
                    td $29.700
                  tr
                    td Entretela
                    td 0,22 metros
                    td $8.500 por metro
                    td $1.870
                  tr
                    td Hilo
                    td 85 metros
                    td $12 por metro
                    td $1.020
                  tr
                    td Cierre
                    td 1 unidad
                    td $2.600 por unidad
                    td $2.600
                  tr
                    td Botones
                    td 5 unidades
                    td $280 por unidad
                    td $1.400
                  tr
                    td Etiquetas
                    td 3 unidades
                    td $190 por unidad
                    td $570
                  tr
                    td Empaque
                    td 1 unidad
                    td $850 por unidad
                    td $850
                  tr
                    td Total de materiales directos
                    td No aplica
                    td No aplica
                    td $38.010
          .col-lg-4
            img(src='@/assets/curso/tema1/13.png')
        
    p.mb-0 El valor obtenido debe multiplicarse por la cantidad de unidades de la orden, considerando la distribución de tallas o variantes cuando estas modifican el consumo. Utilizar un único promedio sin comprobar la composición del lote puede subestimar o sobrestimar el requerimiento. Si el consumo cambia por talla, color o presentación, la valoración debe mantener esa diferenciación.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Mano de obra

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/14.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/15.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La mano de obra comprende el valor del trabajo humano utilizado en la transformación de los materiales. Se clasifica como directa cuando puede vincularse con las operaciones realizadas para una referencia, un lote o una orden mediante registros de tiempo, secuencias operacionales u otra base técnicamente sustentada. Su reconocimiento no depende exclusivamente del cargo: depende de la relación entre la actividad desarrollada y el objeto de costo.
        p.mb-0 Las operaciones de corte, preparación, ensamble, terminación y empaque pueden generar mano de obra directa cuando el tiempo aplicado se identifica con la producción. En cambio, la supervisión general, el mantenimiento, el abastecimiento interno o el apoyo compartido suelen clasificarse como mano de obra indirecta, debido a que respaldan varias órdenes o procesos simultáneamente. Datar y Rajan (2021) señalan que la distinción se fundamenta tanto en la trazabilidad como en la conveniencia económica de efectuar la medición.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferencias entre mano de obra directa e indirecta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Mano de obra directa
                    p.mb-0 #[b Relación con el producto]
                    p.mb-4 Puede asociarse con una operación, referencia u orden específica.
                    p.mb-0 #[b Registro]
                    p.mb-4 Se sustenta mediante tiempos, unidades, operaciones o reportes de producción.
                    p.mb-0 #[b Ejemplos habituales]
                    p.mb-4 Comprende corte, ensamble, preparación y terminación identificables con la orden.
                    p.mb-0 #[b Tratamiento]
                    p.mb-4 Se carga directamente al objeto de costo definido.
                    p.mb-0 #[b Condición determinante]
                    p.mb-0 Exige trazabilidad suficiente y medición económicamente viable.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/16.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Mano de obra indirecta
                    p.mb-0 #[b Relación con el producto]
                    p.mb-4 Apoya varias operaciones, líneas u órdenes al mismo tiempo.
                    p.mb-0 #[b Registro]
                    p.mb-4 Se acumula como parte de los costos indirectos de fabricación.
                    p.mb-0 #[b Ejemplos habituales]
                    p.mb-4 Comprende supervisión general, mantenimiento, apoyo técnico y abastecimiento compartido.
                    p.mb-0 #[b Tratamiento]
                    p.mb-4 Se distribuye mediante una base de asignación técnicamente sustentada.
                    p.mb-0 #[b Condición determinante]
                    p.mb-0 Corresponde a actividades necesarias cuya identificación unitaria no resulta práctica.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/17.png")

    p.mb-5 Una actividad no debe clasificarse de forma automática por el nombre del cargo. El trabajo de inspección, por ejemplo, puede tratarse como directo cuando se registra específicamente para una orden y forma parte del proceso requerido; también puede acumularse como indirecto cuando el personal de calidad atiende simultáneamente diferentes líneas y referencias. La política de costos debe establecer el criterio y mantenerlo durante los periodos comparados.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Base técnica del costo de mano de obra

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema1/18.png')
            .col-lg-5
              p.mb-4 El cálculo puede partir del tiempo estándar, del tiempo real autorizado o de una combinación definida por el sistema de costeo. Cuando se emplea el contenido estándar de trabajo, debe existir correspondencia entre la versión del producto, la secuencia operacional y el tiempo utilizado. Un minuto estándar permitido (#[em Standard Allowed Minute, SAM]) desactualizado genera una estimación que no representa la construcción vigente.
              p.mb-4 La relación básica puede expresarse así:
              p.mb-4 #[b Costo de mano de obra directa por unidad = Minutos directos por unidad × Costo reconocido por minuto]
              p.mb-4 Para una orden:
              p.mb-4 #[b MOD de la orden = Cantidad programada × Minutos directos por unidad × Costo reconocido por minuto]
              p.mb-4 Supóngase una orden de 400 prendas, cada una con 22 minutos directos y un costo reconocido de $260 por minuto:
              p.mb-0 #[b 400 × 22 × $260 = $2.288.000]
              p.mb-4 El costo directo estimado por prenda equivale a:
              p.mb-0 #[b $2.288.000 / 400 = $5.720]
            
    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      h4.mb-3 Distinción necesaria
      p.mb-0 El SAM expresa contenido de trabajo en minutos; no constituye por sí mismo un valor monetario. Para convertirlo en costo debe multiplicarse por una tarifa o costo por minuto calculado con criterios laborales, contables y operativos definidos.

    p.mb-5 El costo reconocido por minuto debe integrar los conceptos establecidos en la política de la organización. Los salarios, prestaciones, aportes y demás obligaciones laborales constituyen la base para establecer el costo de la fuerza de trabajo, pero su cálculo normativo debe mantenerse diferenciado de la asignación del costo a la orden. Una vez consolidado el valor laboral aplicable, la hoja de costos utiliza la tarifa aprobada sin alterar sus componentes.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Tiempo productivo y novedades
    
    p.mb-5 No todo el tiempo pagado se convierte automáticamente en mano de obra directa. Durante una jornada pueden presentarse preparación, espera, capacitación, mantenimiento, interrupciones, reprocesos o inactividad. Cada condición requiere una clasificación definida para evitar que el costo de una orden absorba tiempos que no le corresponden.





















    separador 
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Costos indirectos de fabricación

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
