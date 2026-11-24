export default {
  global: {
    Name: 'Costeo de la producción de prendas',
    Description:
      'El presente componente aborda la identificación y clasificación de los elementos del costo de confección, su localización por centros de costo y la asignación técnica de los recursos productivos. Comprende el análisis de materiales, mano de obra y costos indirectos de fabricación, además del cálculo del valor minuto de planta, el valor minuto de mano de obra y el costo estimado de una orden de producción, de acuerdo con la capacidad operativa y las condiciones previstas para su ejecución.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del costo de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Materiales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mano de obra',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Costos indirectos de fabricación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación y localización de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Costos fijos y variables',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costos directos e indirectos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Centros de costo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Asignación técnica de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Recursos productivos y capacidad operativa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios de distribución del costo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cálculo y proyección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Valor minuto de planta',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Valor minuto de mano de obra',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Costo estimado de la orden de producción',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Base de distribución',
      significado:
        'magnitud utilizada para asignar un costo indirecto entre los centros, órdenes o productos que consumen un recurso compartido.',
    },
    {
      termino: 'Capacidad normal',
      significado:
        'nivel promedio de producción que se espera alcanzar durante varios periodos bajo condiciones habituales, considerando las interrupciones planificadas.',
    },
    {
      termino: 'Centro de costo',
      significado:
        'unidad operativa o de apoyo definida para acumular, organizar y controlar los recursos consumidos.',
    },
    {
      termino: 'Costo de conversión',
      significado:
        'valor integrado por la mano de obra directa y los costos indirectos de fabricación necesarios para transformar los materiales.',
    },
    {
      termino: 'Costo directo',
      significado:
        'costo que puede identificarse y medirse respecto de una orden, referencia, lote u otro objeto específico.',
    },
    {
      termino: 'Costo estimado',
      significado:
        'valor proyectado antes de la ejecución, calculado mediante consumos, tiempos, precios y tasas previamente establecidos.',
    },
    {
      termino: 'Costo fijo',
      significado:
        'costo que permanece relativamente constante en términos totales dentro de un periodo y un intervalo de actividad definidos.',
    },
    {
      termino: 'Costo indirecto de fabricación',
      significado:
        'costo productivo que beneficia a varios objetos y requiere una base para distribuirse entre ellos.',
    },
    {
      termino: 'Costo variable',
      significado:
        'costo cuyo valor total cambia en función del nivel de actividad desarrollado.',
    },
    {
      termino: 'Objeto de costo',
      significado:
        'elemento respecto del cual se desea medir y acumular un costo, como una prenda, orden, referencia, lote o centro.',
    },
    {
      termino: 'Orden de producción',
      significado:
        'documento que autoriza y delimita la fabricación de una cantidad específica de productos bajo requisitos definidos.',
    },
    {
      termino: 'SAM',
      significado:
        'minuto estándar permitido que expresa el contenido estándar de trabajo requerido para una operación o unidad de producto, según un método y unas condiciones previamente establecidos.',
    },
    {
      termino: 'Tasa de distribución',
      significado:
        'valor monetario calculado por cada unidad de la base seleccionada para asignar costos indirectos.',
    },
    {
      termino: 'Valor minuto de mano de obra',
      significado:
        'costo laboral directo correspondiente a un minuto productivo o estándar de trabajo.',
    },
    {
      termino: 'Valor minuto de planta',
      significado:
        'costo indirecto de fabricación asignable a un minuto de capacidad productiva, según el alcance y la base definidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abtew, M. A., Kumari, A., Babu, A., & Hong, Y. (2020). Statistical analysis of standard allowed minute on sewing efficiency in apparel industry [Análisis estadístico del minuto estándar permitido y la eficiencia de costura en la industria de la confección]. Autex Research Journal, 20(4), 359–365.',
      link: '',
    },
    {
      referencia:
        'Das, S., & Patnaik, A. (2015). Production planning in the apparel industry [Planeación de la producción en la industria de la confección]. En R. Nayak & R. Padhye (Eds.), Garment manufacturing technology [Tecnología de fabricación de prendas] (pp. 81–108). Woodhead Publishing.',
      link: '',
    },
    {
      referencia:
        'Datar, S. M., & Rajan, M. V. (2021). Horngren’s cost accounting: A managerial emphasis [Contabilidad de costos de Horngren: un enfoque gerencial] (17.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez-Castañeda, B. E., & Duque-Roldán, M. I. (2014). Costos indirectos de fabricación: propuesta para su tratamiento ante los cambios normativos que enfrenta Colombia. Cuadernos de Contabilidad, 15(39), 829–852.',
      link: '',
    },
    {
      referencia:
        'IFRS Foundation. (2025). IAS 2 inventories [NIC 2 Inventarios].',
      link: '',
    },
    {
      referencia:
        'International Trade Centre. (2022). The garment costing guide: For small firms in value chains [Guía para el costeo de prendas: dirigida a pequeñas empresas de las cadenas de valor].',
      link: '',
    },
    {
      referencia:
        'Singh, A., & Nijhar, K. (2015). Garment costing [Costeo de prendas]. En R. Nayak & R. Padhye (Eds.), Garment manufacturing technology [Tecnología de fabricación de prendas] (pp. 447–467). Woodhead Publishing.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'johann teran carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
