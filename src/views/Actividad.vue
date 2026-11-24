<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Costeo de la producción de prendas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la identificación, clasificación y proyección de los costos de fabricación según recursos y capacidad operativa.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuáles son los tres elementos básicos del costo de producción de prendas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Materiales directos, mano de obra directa y costos indirectos de fabricación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Materiales indirectos, publicidad comercial y margen esperado de utilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mano de obra administrativa, impuestos de venta y gastos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Costos de distribución, promoción comercial y financiación de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes conceptos corresponde normalmente a un gasto comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Depreciación de maquinaria empleada en el ensamble de prendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Publicidad destinada a promover la venta de productos terminados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Energía requerida para el funcionamiento de máquinas industriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Supervisión compartida de operaciones dentro de la planta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué elementos conforman el costo primo de una prenda?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Costos indirectos de fabricación y gastos de administración general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Materiales directos y costos indirectos de mantenimiento fabril.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Materiales directos y mano de obra directa identificable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mano de obra indirecta y costos financieros del periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cómo se obtiene el costo de conversión en la confección?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sumando materiales directos y gastos generales de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sumando precio de venta e impuestos asociados al producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sumando compras de materiales y descuentos comerciales obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sumando mano de obra directa y costos indirectos fabriles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el costo de tejido por prenda si se consumen 1,5 metros a $20.000 por metro?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '$30.000 por prenda, mediante la multiplicación del consumo y precio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                '$20.000 por prenda, tomando solamente el precio de compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '$21.500 por prenda, sumando incorrectamente 1.500 al precio unitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '$40.000 por prenda, duplicando automáticamente el precio unitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe comprobarse antes de agregar una tolerancia de pérdida normal al consumo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la empresa aumente todos los consumos por igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la pérdida no esté incorporada en el estándar aprobado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que el costo comercial permita recuperar cualquier desperdicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que las tallas menores tengan idénticos consumos de material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tratamiento reciben los descuentos comerciales en el costo de adquisición?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementan el costo por considerarse parte del transporte de entrada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se registran siempre como costos indirectos de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se descuentan del valor de compra reconocido del material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se suman al precio unitario antes de calcular el consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué criterio determina si una actividad corresponde a mano de obra directa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El nombre del cargo establecido en el organigrama general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La antigüedad laboral registrada por cada persona operaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La categoría contractual definida por recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La trazabilidad del trabajo hacia la orden o referencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el costo directo por prenda para 18 minutos a $250 por minuto?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '$4.500 por prenda, multiplicando el tiempo por la tarifa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$4.250 por prenda, descontando un minuto por operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '$4.750 por prenda, añadiendo un minuto sin justificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '$5.000 por prenda, redondeando la tarifa antes del cálculo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué expresa el SAM utilizado como base para costear operaciones?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El precio comercial final calculado para cada prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El contenido estándar de trabajo medido en minutos por unidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El gasto financiero correspondiente a la fabricación del lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El costo total de los insumos incorporados a la referencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de estas partidas suele clasificarse como costo indirecto de fabricación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La tela identificada y consumida directamente por una orden.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cierre cuantificado para cada unidad de una referencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La depreciación de maquinaria utilizada por distintas órdenes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La comisión obtenida por vender las prendas ya terminadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué base resulta pertinente para distribuir el costo de mantenimiento entre centros?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El número total de prendas vendidas en todas las tiendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de campañas publicitarias realizadas por la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El porcentaje de utilidad previsto por el área comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las horas de servicio registradas para cada centro atendido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué comportamiento presenta un costo variable proporcional cuando aumenta la producción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta su valor total y conserva su costo unitario estable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conserva su valor total y reduce su costo unitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuye su valor total y mantiene su costo unitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementa únicamente su componente fijo por cada unidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué ocurre con el costo fijo por unidad si aumenta la producción dentro del rango relevante?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permanece invariable aunque aumente la cantidad de prendas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disminuye al distribuirse el costo fijo entre más unidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aumenta proporcionalmente al crecimiento del volumen total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se convierte en costo directo de cada materia prima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cómo se clasifica un servicio con cargo básico y cobro adicional según consumo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Costo estrictamente fijo durante cualquier nivel de operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costo directo por existir una factura del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo mixto por combinar componentes fijo y variable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costo escalonado sin relación con unidades de actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad principal de establecer centros de costo en confección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el precio comercial de todas las referencias fabricadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar las órdenes por registros generales de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar las bases de distribución de los costos compartidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Acumular recursos por áreas y facilitar su asignación posterior.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué centro se considera productivo al transformar directamente componentes de una prenda?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El centro de ensamble donde se ejecutan operaciones de confección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El departamento comercial encargado de negociar los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El área administrativa destinada a la gestión general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La unidad financiera responsable del crédito empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cómo se calcula la carga estándar de trabajo de una orden de producción?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dividiendo los materiales directos entre el número de operarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Multiplicando el SAM unitario por las prendas programadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sumando los costos comerciales y el margen de utilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dividiendo la capacidad normal entre el precio unitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué capacidad sirve de referencia para asignar los costos indirectos fijos de producción?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad máxima teórica sin considerar interrupciones normales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad ociosa resultante de una caída extraordinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad normal prevista bajo condiciones ordinarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La capacidad comercial estimada por el equipo de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cómo se determina el costo estimado unitario de una orden de producción?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dividiendo solamente los materiales comprados por la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sumando el precio comercial previsto y los gastos de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Multiplicando el margen esperado por los minutos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dividiendo el costo estimado total entre las unidades conformes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
