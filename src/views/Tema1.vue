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

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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
    
    p.mb-5(data-aos="fade-right") La relación general se expresa de la siguiente manera:

    .cajon.color-acento-b.p-4.mb-5(data-aos="fade-left")
      p.mb-0.text-center #[b Costo de producción = Materiales directos + Mano de obra directa + Costos indirectos de fabricación]

    p.mb-5(data-aos="fade-right") Esta fórmula no incluye automáticamente gastos administrativos, costos financieros, gastos de comercialización ni margen de utilidad. Tales conceptos pueden intervenir en la determinación del precio o en el análisis integral de la organización, pero no forman parte del costo de fabricación cuando no contribuyen a llevar el inventario a su ubicación y condición actuales. La NIC 2 establece que el costo de los inventarios comprende los costos de adquisición, los costos de transformación y otros desembolsos necesarios para alcanzar dichas condiciones (IFRS Foundation, 2025).

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferencias entre costo de producción, gasto y precio de venta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
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

    p.mb-4(data-aos="fade-left") También pueden construirse dos agrupaciones auxiliares. El costo primo reúne los materiales directos y la mano de obra directa; el costo de conversión integra la mano de obra directa y los costos indirectos de fabricación. Estas expresiones responden a propósitos distintos y no deben sumarse entre sí, porque la mano de obra directa se encuentra incluida en ambas.

    p.mb-4(data-aos="fade-right") #[b Costo primo = Materiales directos + Mano de obra directa]

    p.mb-5(data-aos="fade-left") #[b Costo de conversión = Mano de obra directa + Costos indirectos de fabricación]

    .cajon.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      h4.mb-3 Precisión de cálculo
      p.mb-0 El costo primo muestra los recursos directamente identificables con el producto. El costo de conversión expresa los recursos utilizados para transformar los materiales en prendas terminadas. La mano de obra directa participa en las dos agrupaciones, pero se contabiliza una sola vez al determinar el costo total de producción.


    separador 
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Materiales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/4.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Los materiales constituyen los recursos físicos empleados en la fabricación de la prenda. Su tratamiento dentro del costo depende de la relación que mantengan con el producto y de la posibilidad de medir su consumo. Un material se considera directo cuando puede identificarse y valorarse respecto de una referencia, unidad, lote u orden sin incurrir en procedimientos desproporcionados.
        p.mb-0 En confección, el tejido principal suele representar una partida significativa, pero no es el único material directo. Forros, entretelas, hilos, cierres, botones, broches, cintas, elásticos, etiquetas, marquillas y empaques pueden formar parte de esta categoría cuando su cantidad y valor se encuentran definidos en la ficha técnica o en la lista de materiales. La estructura cambia según el producto: una camiseta básica puede tener pocos elementos, mientras que una chaqueta estructurada requiere materiales principales, complementarios y accesorios con características técnicas diferentes (Singh & Nijhar, 2015).

    p.mb-5(data-aos="fade-right") La identificación debe partir de documentación vigente. La ficha técnica establece las características del producto; la lista de materiales especifica los componentes requeridos, y la orden de producción determina la cantidad que debe fabricarse. La correspondencia entre estos documentos reduce omisiones, duplicidades y valoraciones realizadas con referencias de materiales incorrectas.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Clasificación operativa de los materiales de confección

    .row.justify-content-center.mb-lg-5.mb-4(data-aos="fade-right")
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

    .row.justify-content-center.mb-5(data-aos="fade-left")
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

    p.mb-4(data-aos="fade-left") La determinación del costo requiere diferenciar la cantidad física del valor monetario. El consumo expresa cuántos metros, kilogramos, unidades o pares necesita la prenda; la valoración convierte esa cantidad en dinero mediante el costo unitario correspondiente. Mezclar ambas dimensiones conduce a errores, especialmente cuando existen cambios de proveedor, variaciones en el ancho del tejido, descuentos comerciales o unidades de compra distintas.

    p.mb-4(data-aos="fade-right") La relación básica es:

    p.mb-4(data-aos="fade-left") #[b Costo del material = Consumo por unidad × Costo por unidad de medida]

    p.mb-4(data-aos="fade-right") Si una referencia requiere 1,65 metros de tejido y el costo aprobado es de $18.000 por metro, el valor del tejido por prenda será:

    p.mb-5(data-aos="fade-left") #[b 1,65 × $18.000/m = $29.700]

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      p.mb-0 El resultado corresponde únicamente al tejido principal. Los demás materiales deben valorarse por separado y después consolidarse. El International Trade Centre señala que el costo del tejido parte de la relación entre consumo y precio por unidad de medida; sin embargo, el cálculo debe conservar correspondencia entre ancho, calidad, moneda y condiciones de compra (International Trade Centre, 2022).

    .tit-doble--azul.mb-5(data-aos="fade-left")
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
    
    p.mb-5(data-aos="fade-left") La NIC 2 excluye del costo de los inventarios las cantidades anormales de desperdicio de materiales, mano de obra u otros costos de producción. Estos valores deben reconocerse según su naturaleza y no distribuirse entre las unidades conformes como si fueran consumos normales (IFRS Foundation, 2025).

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Costo de adquisición

    p.mb-4(data-aos="fade-left") El valor del material no siempre coincide con el precio indicado en la factura. El costo de adquisición puede incluir el precio de compra, aranceles, impuestos no recuperables, transporte, manipulación y otros desembolsos directamente atribuibles a la adquisición. Los descuentos comerciales, rebajas y conceptos equivalentes disminuyen el costo reconocido (IFRS Foundation, 2025).

    p.mb-5(data-aos="fade-right") #[b Costo de adquisición = Precio de compra + Costos directamente atribuibles − Descuentos y rebajas]

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

    p.mb-4(data-aos="fade-left") La hoja de costos debe registrar cada componente con una unidad compatible. Cuando un insumo se compra por rollo, cono, caja o paquete, es necesario convertir el precio de compra a la unidad empleada para calcular el consumo. No resulta técnicamente válido multiplicar el consumo expresado en metros por un precio registrado por kilogramo sin disponer de un factor de conversión comprobado.

    p.mb-5(data-aos="fade-right") Los valores del siguiente ejemplo son hipotéticos y se utilizan únicamente para mostrar el procedimiento de cálculo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema1/13.png')
        
    p.mb-0(data-aos="fade-right") El valor obtenido debe multiplicarse por la cantidad de unidades de la orden, considerando la distribución de tallas o variantes cuando estas modifican el consumo. Utilizar un único promedio sin comprobar la composición del lote puede subestimar o sobrestimar el requerimiento. Si el consumo cambia por talla, color o presentación, la valoración debe mantener esa diferenciación.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Mano de obra

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
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

    p.mb-5(data-aos="fade-right") Una actividad no debe clasificarse de forma automática por el nombre del cargo. El trabajo de inspección, por ejemplo, puede tratarse como directo cuando se registra específicamente para una orden y forma parte del proceso requerido; también puede acumularse como indirecto cuando el personal de calidad atiende simultáneamente diferentes líneas y referencias. La política de costos debe establecer el criterio y mantenerlo durante los periodos comparados.

    .tit-doble--azul.mb-5(data-aos="fade-left")
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

    p.mb-5(data-aos="fade-left") El costo reconocido por minuto debe integrar los conceptos establecidos en la política de la organización. Los salarios, prestaciones, aportes y demás obligaciones laborales constituyen la base para establecer el costo de la fuerza de trabajo, pero su cálculo normativo debe mantenerse diferenciado de la asignación del costo a la orden. Una vez consolidado el valor laboral aplicable, la hoja de costos utiliza la tarifa aprobada sin alterar sus componentes.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Tiempo productivo y novedades
    
    p.mb-5(data-aos="fade-left") No todo el tiempo pagado se convierte automáticamente en mano de obra directa. Durante una jornada pueden presentarse preparación, espera, capacitación, mantenimiento, interrupciones, reprocesos o inactividad. Cada condición requiere una clasificación definida para evitar que el costo de una orden absorba tiempos que no le corresponden.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Tratamiento básico de los tiempos relacionados con la producción

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/19.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Tiempo aplicado a la operación
                p.mb-0 #[b Tratamiento posible]
                p.mb-4 Puede reconocerse como mano de obra directa.
                p.mb-0 #[b Verificación requerida]
                p.mb-0 Debe corresponder con la referencia, operación y periodo registrados.
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/20.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Preparación específica de la orden
                p.mb-0 #[b Tratamiento posible]
                p.mb-4 Puede atribuirse directamente o distribuirse entre las unidades del lote.
                p.mb-0 #[b Verificación requerida] 
                p.mb-0 Debe identificarse la orden que originó el alistamiento.
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/21.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Supervisión compartida
                p.mb-0 #[b Tratamiento posible]
                p.mb-4 Se reconoce generalmente como mano de obra indirecta.
                p.mb-0 #[b Verificación requerida]
                p.mb-0 Debe establecerse una base de distribución entre los procesos beneficiados.
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/22.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Espera normal del proceso
                p.mb-0 #[b Tratamiento posible] 
                p.mb-4 Puede formar parte del costo de conversión según la política aplicada.
                p.mb-0 #[b Verificación requerida]
                p.mb-0 Debe diferenciarse de una interrupción anormal o evitable.
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/23.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Reproceso normal autorizado
                p.mb-0 #[b Tratamiento posible]
                p.mb-4 Requiere trazabilidad y tratamiento consistente.
                p.mb-0 #[b Verificación requerida] 
                p.mb-0 Debe existir evidencia de su relación con el proceso ordinario.
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/24.svg' alt='')
            .tarjeta.color-c
              .p-4
                h4.text-center.mt-3 Pérdida anormal de tiempo
                p.mb-0 #[b Tratamiento posible]
                p.mb-4 No debe incrementar el costo de las unidades conformes.
                p.mb-0 #[b Verificación requerida] 
                p.mb-0 Debe reconocerse separadamente e investigarse su causa.

    p.mb-0(data-aos="fade-left") La utilización de tiempos reales permite conocer el consumo efectivo de mano de obra, mientras que los tiempos estándar proporcionan una referencia para presupuestar y evaluar desviaciones. Ambos valores responden a finalidades diferentes. Sustituir el estándar por el tiempo real sin identificar el propósito del cálculo puede trasladar ineficiencias, esperas o errores a la estimación del costo unitario.


    separador 
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Costos indirectos de fabricación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1/25.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg2.mb-0.p-4.cen
          p.mb-4.mx-lg-2 Los costos indirectos de fabricación, identificados también mediante la sigla CIF, reúnen los recursos necesarios para operar la planta que no pueden asignarse directamente a una prenda, referencia u orden de manera práctica y económicamente justificable. Aunque no se observen como un componente físico predominante, permiten que la transformación se desarrolle en condiciones operativas.
          p.mb-0.mx-lg-2 Su reconocimiento exige comprobar que guardan relación con la producción. Incorporar partidas comerciales o administrativas sin vínculo con la transformación distorsiona el costo fabril y dificulta comparar las órdenes.
    
    p.mb-5(data-aos="fade-left") La NIC 2 incluye dentro de los costos de conversión una asignación sistemática de los costos indirectos fijos y variables incurridos para transformar los materiales en productos terminados. Los costos indirectos fijos permanecen relativamente constantes frente a cambios del volumen dentro de determinado intervalo, mientras que los variables cambian de manera directa o cercana con el nivel de actividad (IFRS Foundation, 2025).

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Costos indirectos asociados con la fabricación de prendas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        ImagenInfografica.color-primario.text-white
          template(v-slot:imagen)
            img(src='@/assets/curso/tema1/26.jpg')
          .tarjeta.color-acento-contenido.p-4(x="9%" y="49%" numero="01")
            p.mb-3 #[b Mano de obra indirecta]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye supervisión, mantenimiento, apoyo técnico y abastecimiento interno.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Respalda distintas órdenes o procesos sin identificación unitaria directa. 
          .tarjeta.color-acento-contenido.p-4(x="35.5%" y="68.5%" numero="02")
            p.mb-3 #[b Materiales indirectos]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye lubricantes, suministros técnicos y consumibles de uso compartido.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Permite operar o conservar los equipos y las condiciones de fabricación.
          .tarjeta.color-acento-contenido.p-4(x="63.6%" y="11.5%" numero="03")
            p.mb-3 #[b Uso de instalaciones]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye arrendamiento, depreciación y mantenimiento del área productiva.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Proporciona el espacio y la infraestructura necesarios para producir.
          .tarjeta.color-acento-contenido.p-4(x="72.5%" y="35.3%" numero="04")
            p.mb-3 #[b Operación de maquinaria]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye energía, depreciación, mantenimiento y repuestos de uso general.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Mantiene la disponibilidad técnica de los equipos empleados en la transformación.
          .tarjeta.color-acento-contenido.p-4(x="18.5%" y="10%" numero="05")
            p.mb-3 #[b Servicios de fábrica]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye iluminación productiva, ventilación, limpieza técnica y servicios compartidos.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Sostiene las condiciones necesarias para ejecutar las operaciones.
          .tarjeta.color-acento-contenido.p-4(x="72.5%" y="78.5%" numero="06")
            p.mb-3 #[b Control y apoyo fabril]
            p.mb-0 #[b Ejemplos]
            p.mb-4 Incluye supervisión de planta y actividades de soporte productivo.
            p.mb-0 #[b Relación con la producción]
            p.mb-0 Facilita la coordinación y continuidad de los procesos de fabricación.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Partidas que no deben confundirse con los CIF

    p.mb-5(data-aos="fade-left") No todas las erogaciones de la organización forman parte de los costos indirectos de fabricación. Asimismo, las ineficiencias extraordinarias no deben distribuirse entre las unidades terminadas como si correspondieran al funcionamiento ordinario.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Diferenciación entre CIF y partidas ajenas al costo de fabricación

    .row.fd3.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema1/27.png')
          .col-lg-8
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/28.svg')
                h4.mb-3 Mantenimiento de maquinaria productiva
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Conserva los equipos empleados en la transformación.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/29.svg')
                h4.mb-3 Supervisión del área de confección
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Apoya varias órdenes y operaciones productivas.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/30.svg')
                h4.mb-3 Energía de la planta
                p.mb-0 #[b Tratamiento general]
                p.mb-3 Puede incluirse en los CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Permite el funcionamiento de maquinaria e instalaciones fabriles.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/31.svg')
                h4.mb-3 Publicidad del producto
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Corresponde a una actividad comercial posterior a la fabricación.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/32.svg')
                h4.mb-3 Comisión de ventas
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Se origina en la comercialización del producto.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/33.svg')
                h4.mb-3 Administración general no fabril
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluye automáticamente como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 No contribuye directamente a llevar la prenda a su condición productiva.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/34.svg')
                h4.mb-3 Desperdicio anormal
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se distribuye entre las unidades conformes.
                p.mb-0 #[b Justificación]
                p.mb-0 Representa una pérdida que excede las condiciones normales del proceso.
              .tarjeta.tarjeta--slyder.b2.p-4.p-lg-3.text-center
                .caja-img.mb-0
                  img(src='@/assets/curso/tema1/35.svg')
                h4.mb-3 Intereses ordinarios de financiación
                p.mb-0 #[b Tratamiento general]
                p.mb-3 No se incluyen automáticamente como CIF.
                p.mb-0 #[b Justificación]
                p.mb-0 Su reconocimiento depende del tratamiento financiero aplicable.

    .tit-doble--azul.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Asignación de los costos indirectos

    .row.fd1.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .bg1.p-lg-5.p-4.mb-0.text-white
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              p.mb-4 Debido a que los CIF no se identifican directamente con cada prenda, deben asignarse mediante una base que represente el consumo de recursos. Pueden utilizarse minutos de mano de obra, horas de máquina, unidades procesadas, costo de la mano de obra u otra medida técnicamente relacionada. La selección debe responder a una relación razonable entre el costo acumulado y la actividad que lo origina.
              p.mb-4 La tasa predeterminada se expresa de forma general así:
              p.mb-4 #[b Tasa predeterminada de CIF = CIF presupuestados ÷ Nivel normal de la base de asignación]
              p.mb-4 Si los CIF presupuestados ascienden a $18.000.000 y la capacidad normal corresponde a 60.000 minutos productivos:
              p.mb-4 #[b $18.000.000 / 60.000 = $300]
              p.mb-4 Una orden que consume 10.000 minutos recibiría:
              p.mb-0 #[b 10.000 × 300 = $3.000.000]
            .col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/tema1/36.png')

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Bases utilizadas para asignar costos indirectos de fabricación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder").bg3.p-lg-5.p-4

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Capacidad normal y CIF fijos
    
    p.mb-4(data-aos="fade-left") La asignación de los costos indirectos fijos debe considerar la capacidad normal de las instalaciones. Esta corresponde a la producción esperada en condiciones ordinarias durante varios periodos, descontando las pérdidas de capacidad derivadas del mantenimiento planificado. Una disminución temporal del volumen no justifica elevar indefinidamente el costo fijo asignado a cada prenda.

    p.mb-5(data-aos="fade-right") Cuando la producción real es anormalmente baja, la parte de los CIF fijos que no se asigna al inventario se reconoce como gasto del periodo. En condiciones de producción anormalmente alta, la tasa debe reducirse para impedir que los inventarios sean valorados por encima de su costo. Los costos indirectos variables, por su parte, se asignan con base en el uso real de las instalaciones productivas (IFRS Foundation, 2025).

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
      h4.mb-3 Criterio de asignación
      p.mb-0 La distribución de los CIF no debe utilizarse para trasladar automáticamente a las prendas el costo de la capacidad ociosa anormal. La base seleccionada debe representar el consumo de recursos, conservar trazabilidad y aplicarse de manera uniforme entre órdenes comparables.

    .tit-doble--azul.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/maquina.svg')", alt="")
      h3.mb-0 Integración de la estructura del costo
    
    p.mb-4(data-aos="fade-left") Después de valorar materiales, mano de obra y costos indirectos, los tres elementos se consolidan en una hoja de costos. Este documento debe conservar la identificación de la referencia, versión técnica, cantidad, unidad monetaria, periodo, fuentes de información y criterios empleados. La ausencia de estos datos impide establecer si dos costos corresponden a las mismas condiciones productivas.

    p.mb-4(data-aos="fade-right") El siguiente ejemplo corresponde a una orden hipotética de 500 prendas conformes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Ejemplo de consolidación del costo de producción de una orden
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            .tabla-a.tab3.mb-0
              table
                thead
                  tr
                    th Elemento
                    th Costo de la orden
                    th Costo por prenda
                tbody
                  tr
                    td Materiales directos
                    td $10.250.000
                    td $20.500
                  tr
                    td Mano de obra directa
                    td $3.200.000
                    td $6.400
                  tr
                    td Costos indirectos de fabricación aplicados
                    td $2.400.000
                    td $6.400
                  tr
                    td Costo total de producción
                    td $10.250.000
                    td $20.500
          .col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/tema1/42.png')
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/43.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/44.svg')
          .col-lg-10.ps-lg-0
            p.mb-4 El costo unitario del ejemplo se determina así:
            p.mb-4 #[b Costo unitario = Costo total de producción ÷ Cantidad de prendas conformes]
            p.mb-0 #[b $15.850.000 ÷ 500 = $31.700 por prenda]
        p.mb-0 Este valor representa el costo de fabricación bajo las condiciones definidas. No equivale al precio de venta ni incorpora automáticamente gastos comerciales, administración general, financiación, impuestos sobre la venta o utilidad. También pierde validez si cambia la cantidad, la composición del lote, el consumo de materiales, el tiempo requerido o el nivel de actividad empleado para distribuir los CIF.

    p.mb-0(data-aos="fade-left") La estructura del costo debe mantener correspondencia con la orden de producción. Los materiales se sustentan en cantidades y precios verificables; la mano de obra se relaciona con las operaciones y los tiempos reconocidos, y los costos indirectos se distribuyen mediante una base racional. Esta articulación permite establecer un costo técnicamente documentado sin confundir consumo productivo, gasto del periodo y decisión comercial.
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Minutos de mano de obra',
        texto: `
          <b>Aplicación posible</b><br>
          Puede emplearse en procesos con alta participación de trabajo directo.
          <br><br>
          <b>Precaución técnica</b><br>
          Debe verificarse que el consumo de CIF mantenga relación con los minutos registrados.
        `,
        imagen: '@/assets/curso/tema1/37.png',
      },
      {
        titulo: 'Horas de máquina',
        texto: `
          <b>Aplicación posible</b><br>
          Puede aplicarse cuando el uso de equipos explica una parte significativa del costo.
          <br><br>
          <b>Precaución técnica</b><br>
          Requiere registros confiables de utilización por orden o proceso.
        `,
        imagen: '@/assets/curso/tema1/38.png',
      },
      {
        titulo: 'Unidades producidas',
        texto: `
          <b>Aplicación posible</b><br>
          Puede utilizarse en lotes homogéneos con consumos indirectos similares.
          <br><br>
          <b>Precaución técnica</b><br>
          Pierde precisión cuando las referencias presentan complejidades diferentes.
        `,
        imagen: '@/assets/curso/tema1/39.png',
      },
      {
        titulo: 'Costo de mano de obra directa',
        texto: `
          <b>Aplicación posible</b><br>
          Puede emplearse como base monetaria en determinados sistemas.
          <br><br>
          <b>Precaución técnica</b><br>
          Debe comprobarse que los CIF varíen de manera coherente con esta base.
        `,
        imagen: '@/assets/curso/tema1/40.png',
      },
      {
        titulo: 'Base combinada',
        texto: `
          <b>Aplicación posible</b><br>
          Puede integrar diferentes inductores para grupos de costos distintos.
          <br><br>
          <b>Precaución técnica</b><br>
          Exige separar previamente los costos según la actividad que los origina.
        `,
        imagen: '@/assets/curso/tema1/41.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
