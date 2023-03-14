export default {
  global: {
    componenteFormativo: 'Construcción del informe de requisitos',
    descripcionCurso:
      'Esta fase implica determinar los estándares de especificación de requisitos, con el fin de encontrar las mejores técnicas de análisis, para una buena realización de resultados en los estudios y, de esta manera, mejorar el desarrollo del informe, según las especificaciones de requisito del <em>software</em>, y llevar un control de todas las versiones de las referencias, de una forma organizada y controlada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías de desarrollo de <i>software</i>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje unificado de modelado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requerimientos de <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de documentación de requerimientos en proyectos ERS',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Metodologías de desarrollo de <i>software</i>',
      referencia:
        'OS Infor. (2019). <em>Metodologías de desarrollo de software – Análisis y diseño</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5tyU_h69F-s',
    },
    {
      tema: 'Lenguaje unificado de modelado',
      referencia:
        'Lucid Software Español. (2019). <em>Tutorial – Diagrama de Clases UML</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z0yLerU0g-Q&t=164s',
    },
    {
      tema: 'Requerimientos de <i>software</i>',
      referencia:
        'Ingeniería de Software de Élite. (2020). <em>01-Ingeniería de Requerimientos ¿Qué son los requerimientos de software?</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hedi-Qobgbc',
    },
    {
      tema: 'Técnicas de documentación de requerimientos en proyectos ERS',
      referencia:
        'Varon, A. (2021). <em>Como crear un documento de Especificación de Requerimientos de Software</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AotyBHVKp8I',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'capacidad por la cual un <i>software</i> facilita el mantenimiento de sus componentes. ',
    },
    {
      termino: 'Adaptabilidad',
      significado:
        'facilidad con la que un <i>software</i> se adapta a diferentes condicionantes del sistema y necesidades del usuario. ',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto de datos relacionados que van a ser utilizados por un conjunto de programas.',
    },
    {
      termino: 'Calidad del <i>software</i>',
      significado:
        'conjunto de especificaciones de un producto <i>software</i>, relacionado con su capacidad de satisfacer unas necesidades dadas.',
    },
    {
      termino: 'Caso de prueba',
      significado:
        'conjunto de datos de prueba y los procedimientos asociados, desarrollados para un determinado caso, tal como probar un camino particular de un programa o verificar el cumplimiento de un requisito específico.',
    },
    {
      termino: 'Ciclo de vida del <i>software</i>',
      significado:
        'periodo de tiempo que empieza cuando se crea un producto <i>software</i> y finaliza cuando el producto pierde su utilidad.',
    },
    {
      termino: 'Datos',
      significado:
        'representación de los hechos, instrucciones de una manera satisfactoria para la comunicación.',
    },
    {
      termino: 'Diagramas UML de comportamiento',
      significado:
        'determinan la funcionalidad general de cada unidad y el comportamiento del sistema.',
    },
    {
      termino: 'Estándar',
      significado:
        'requisitos obligatorios empleados y aplicados a dirigir un enfoque uniforme para el desarrollo de <i>software</i>.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'habilidad para seguir la vida de un requerimiento en ambos sentidos, desde sus orígenes o hasta su implementación por medio de las especificaciones propuestas durante el proceso de desarrollo.',
    },
  ],
  referencias: [
    {
      referencia: 'Kishorekumar 62. (s.f.). <i>Domain model</i>. ',
      link: 'https://commons.wikimedia.org/wiki/File:Domain_model.png',
    },
    {
      referencia:
        'Letelier, P. y Penadés, M. C. (2006). <i>Metodologías ágiles para el desarrollo de software: eXtreme Programming (XP)</i>. ',
      link:
        'https://www.researchgate.net/publication/26428496_Metodologias_agiles_para_el_desarrollo_de_software_eXtreme_Programming_XP',
    },
    {
      referencia:
        'López, C. (2017). <i>Efectividad metodológica para el levantamiento de requerimientos de una aplicación web que permita realizar el proceso de planeación de la acción pedagógica</i> (Tesis maestría, Universidad Autónoma de Bucaramanga en convenio con Universitat Oberta de Catalunya). Repositorio UNAB.',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/3419/2017_Tesis_Lopez_Caballero_Cesar_Augusto.pdf?sequence=1',
    },
    {
      referencia: 'Marijo TM. (2016). <em>Diagrama de despliegue.</em> <br>',
      link:
        'https://commons.wikimedia.org/wiki/File:Diagrama-de-despliegue.jpg',
    },
    {
      referencia:
        'Microsoft. (2021). <em>Crear un diagrama de comunicación UML.</em><br> ',
      link:
        'https://support.microsoft.com/es-es/office/crear-un-diagrama-de-comunicaci%C3%B3n-uml-911956f4-5f19-4a58-97a3-bb14110a5ed1',
    },
    {
      referencia:
        'Pressman, R. (s.f.). <em>Ingeniería del software. Un enfoque práctico.</em><br>',
      link:
        'https://tesuva.edu.co/phocadownload/Ingenieria_del_Software._Un_Enfoque_Practico.pdf',
    },
    {
      referencia:
        'Sarmiento, P. y Hernández, D. (2017). <em>Metodología para la optimización de los procesos de recolección de información y análisis en la etapa de especificación de requerimientos de software.</em> (Trabajo final, Universidad Distrital Francisco José de Caldas). Repositorio Universidad Distrital. ',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/7804/METODOLOG%C3%8DA%20PARA%20LA%20OPTIMIZACI%C3%93N%20DE%20LOS%20PROCESOS%20DE%20RECOLECCI%C3%93N%20DE%20INFORMACI%C3%93N%20Y%20AN%C3%81LISIS%20EN%20LA%20ETAPA%20DE%20ESPECIFICACI%C3%93N%20DE%20REQUERIMIENTOS%20DE%20SOFTWARE.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Stkl. (2015). <i>Umlprofildiagramm</i>. ',
      link: 'https://fr.wikipedia.org/wiki/Fichier:UmlProfildiagramm-1.svg',
    },
    {
      referencia: 'Wilfredor. (2010). <em>Diagrama de clases.</em><br> ',
      link: 'https://commons.wikimedia.org/wiki/File:Diagrama_de_clases.svg',
    },
    {
      referencia:
        'Yohandry14. (2012).<i>Ejemplo de diagrama de componentes</i>.<br>',
      link:
        'https://commons.wikimedia.org/wiki/File:Ejemplo_de_diagrama_de_componentes.png',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
