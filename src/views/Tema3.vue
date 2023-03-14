<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Requerimientos de #[i software]

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img.bloque-img-tema1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-01.svg')})`}"
          )(data-aos="fade-down-right")
          .bloque-texto-g__texto.bloque-texto-tema1.p-4(data-aos="fade-left")
            p.mb-0 Con respecto a los requerimientos de #[i software], podemos decir que son las necesidades que tienen los #[i stakeholders] para requerir que el sistema deba cumplir de manera satisfactoria. En otras palabras, son los que definen las funciones que el sistema será capaz de realizar, describen los cambios que el sistema realiza sobre las entradas para producir salidas. Es de gran importancia que se describa el #[b qué] y no el #[b cómo] se deben hacer estos cambios. Estos requerimientos, con el tiempo que va avanzando el proyecto de #[i software], se van convirtiendo en los algoritmos, la lógica y gran parte del código del sistema.

    h4.mb-5 Se pueden identificar principalmente tres niveles de requerimientos: 

    figure
      img(src="@/assets/curso/temas/tema3/tema3-img-decorativa-01.svg").tema3-decorativa-02
    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/tema3-img-02.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido.p-3(x="53.5%" y="8%" tooltip="Ver más" numero="") 
        .h5.mb-4 Requerimientos de negocio:
        p Estos requerimientos representan los objetivos establecidos por la organización, las necesidades de los usuarios y otros involucrados que están siendo afectados por el problema, sin descuidar las reglas del negocio de la organización. 

      .tarjeta.color-acento-contenido.p-3(x="53.5%" y="25.5%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos de usuario: 
        p Son definiciones simples, en el lenguaje del usuario, que se usan para comunicar la solución de alto nivel a los afectados.

      .tarjeta.color-acento-contenido.p-3(x="53.5%" y="43%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos de sistema: 
        p Son los que definen de manera más clara la solución. Canalizan una o más características solicitadas por los usuarios en soluciones de #[i software] específicas. 

      .tarjeta.color-acento-contenido.p-3(x="78.2%" y="62%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos funcionales: 
        p Especifican lo que el sistema debe hacer, es decir, describen acciones que el sistema debe ser capaz de realizar, sin pensar en las restricciones físicas. Los requerimientos funcionales detallan el comportamiento del sistema. 

      .tarjeta.color-acento-contenido.p-3(x="25.5%" y="62%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos no funcionales: 
        p.mb-4 Especifican únicamente cualidades del sistema o atributos del ambiente del sistema. Constan de las siguientes características:  
        ul.lista-ul--color
          li 
            i.fas.fa-circle.fa-xs
            | Están relacionados en función al conjunto del sistema. 
          li 
            i.fas.fa-circle.fa-xs
            | Son cualidades de las funciones que el sistema debe tener. Por consiguiente, no pueden existir requerimientos no funcionales sin que existan requerimientos funcionales. 
          li 
            i.fas.fa-circle.fa-xs
            | El analista debe validar que exista un equilibrio entre estos requerimientos, porque es posible que se puedan producir contradicciones entre varios de estos.        

      .tarjeta.color-acento-contenido.p-3(x="4%" y="85.5%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos del producto: 
        p.mb-4 Diferencia el comportamiento del producto, como los requerimientos de desempeño, en cuánta memoria se requiere y la velocidad de ejecución del sistema. Por ejemplo:
        ul.lista-ul--color
          li 
            i.fas.fa-circle.fa-xs
            | Funcionalidad
          li 
            i.fas.fa-circle.fa-xs
            | Fiabilidad
          li 
            i.fas.fa-circle.fa-xs
            | Usabilidad
          li 
            i.fas.fa-circle.fa-xs
            | Eficiencia
          li 
            i.fas.fa-circle.fa-xs
            | Mantenibilidad
          li 
            i.fas.fa-circle.fa-xs
            | Portabilidad         

      .tarjeta.color-acento-contenido.p-3(x="26.5%" y="85.5%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos organizacionales
        p.mb-4 Se derivan de procedimientos y de las políticas existentes en la organización del cliente y en la del equipo de desarrollo, como los estándares en los procesos que se recomienda usar, los requerimientos de funcionamiento, los lenguajes para programar y los requerimientos de entrega que determinan cuándo se entregará el producto final y su respectiva documentación. Por ejemplo:
        ul.lista-ul--color
          li 
            i.fas.fa-circle.fa-xs
            | Requerimientos de entrega.
          li 
            i.fas.fa-circle.fa-xs
            | Requerimientos de implementación.
          li 
            i.fas.fa-circle.fa-xs
            | Requerimientos de estándares.  

      .tarjeta.color-acento-contenido.p-3(x="49%" y="85.5%" tooltip="Ver más" numero="")
        .h5.mb-4 Requerimientos externos: 
        p.mb-4 Proceso de desarrollo y los factores externos al sistema. Incluyen los requerimientos de interoperabilidad que establecen la manera en que el sistema se relaciona con otros sistemas de la organización; los requerimientos legales que deben originarse para asegurar que el sistema trabaje dentro de la ley y los requerimientos éticos que son impuestos al sistema para garantizar que será aprobado por el usuario. Por ejemplo:
        ul.lista-ul--color
          li 
            i.fas.fa-circle.fa-xs
            | Requerimientos de seguridad.
          li 
            i.fas.fa-circle.fa-xs
            | Requerimientos éticos.
          li 
            i.fas.fa-circle.fa-xs
            | Interoperabilidad.  
    
    .titulo-segundo.color-acento-contenido
      h2 Especificación de Requisitos del #[em Software] (ERS) 

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-03.svg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.bloque-texto-tema2.p-4
            p.mb-0 En cuanto al ERS, es un documento cuyo principal motivo es el de generar una descripción detallada de un producto de #[em software] a desarrollar, incluyendo su objetivo, los principales procesos de negocio, como, por ejemplo, comportamiento, características soportadas y parámetros claves de rendimiento. Por ende, sirve como una guía para el proceso y control del desarrollo.
              br
              br
              |Un ERS es generalmente aprobado al final de la fase de ingeniería de requisitos, la fase más temprana en el proceso de desarrollo de #[em software] y abarca requisitos funcionales y no funcionales.

    p.mb-4 No existen dos documentos ERS idénticos porque todos los proyectos de #[i software] son diferentes; algunos usando el modelo de desarrollo en cascada y otros practicando el desarrollo ágil. Sin embargo, es posible destilar los componentes principales de un ERS y crear un esquema aproximado sobre cómo debería ser:

    figure
      img(src="@/assets/curso/temas/tema3/tema3-img-decorativa-01.svg").tema3-decorativa-01
    
    .row.justify-content-center.align-items-center.index-dos.mb-5
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Introducción")
            .col-md-8.mb-4.mb-md-0
              ol.lista-ol
                li 
                  span 1.1 
                  | Propósito 
                li 
                  span 1.2 
                  | Alcance 
                li 
                  span 1.3 
                  | Definiciones, acrónimos y abreviaturas 
                li 
                  span 1.4 
                  | Referencias 
                li 
                  span 1.5 
                  | Visión global                     
          .row(numero="2" titulo="Descripción general")
            .col-md-6.mb-4.mb-md-0
              ol.lista-ol
                li 
                  span 2.1 
                  | Perspectiva del producto 
                li 
                  span 2.2 
                  | Funciones del producto 
                li 
                  span 2.3 
                  | Características del usuario
                li 
                  span 2.4 
                  | Restricciones 
                li 
                  span 2.5 
                  | Supuestos y dependencias    
                li 
                  span 2.6 
                  | Distribución de requisitos                      
          .row(numero="3" titulo="Requisitos específicos")
            .col-md-6.mb-4.mb-md-0
              ol.lista-ol.mb-4
                li 
                  span.text-bold #[u 3.1] 
                  | #[b #[u Requisitos funcionales]] 
                li.ms-3.mb-0 
                  span 3.1.1 
                  | Requisito funcional 1 
                li.ms-5.mb-0 
                  span 3.1.1.1 
                  | Introducción
                li.ms-5.mb-0 
                  span 3.1.1.2 
                  | Entradas 
                li.ms-5.mb-0 
                  span 3.1.1.3
                  | Procesamiento  
                li.ms-5.mb-0 
                  span 3.1.1.4
                  | Salidas    
                li.ms-3.mb-0 
                  span 3.1.2
                  | Requisito funcional 2  
                li.ms-3.mb-0 
                  span 3.1.3
                  | Requisito funcional n                                                      
              ol.lista-ol
                li 
                  span.text-bold #[u 3.2] 
                  | #[b #[u Requisitos de interfaz externa]] 
                li.ms-3.mb-0 
                  span 3.2.1
                  | Interfaces de usuario 
                li.ms-3.mb-0 
                  p.mb-0 3.2.2 
                    | Interfaces de  #[em hardware] 
                li.ms-3.mb-0 
                  p.mb-0 3.2.3 
                    | Interfaces de  #[em software] 
                li.ms-3.mb-0 
                  span 3.2.4 
                  | Interfaces de comunicación 
            .col-md-6.mb-4.mb-md-0
              ol.lista-ol.mb-4
                li 
                  span.text-bold #[u 3.3] 
                  | #[b #[u  Requisitos de ejecución]]                                                     
              ol.lista-ol.mb-4
                li 
                  span.text-bold #[u 3.4] 
                  | #[b #[u Requisitos de diseño]] 
                li.ms-3.mb-0 
                  span 3.4.1
                  | Acatamiento de estándares
                li.ms-3.mb-0 
                  p.mb-0 3.4.2 
                    | Limitaciones de  #[em hardware]     
              ol.lista-ol.mb-4
                li 
                  span.text-bold #[u 3.5] 
                  | #[b #[u Atributos de calidad]] 
                li.ms-3.mb-0 
                  span 3.5.1
                  | Seguridad
                li.ms-3.mb-0 
                  span 3.5.2
                  | Mantenimiento 
              ol.lista-ol.mb-4
                li 
                  span.text-bold #[u 3.6] 
                  | #[b #[u Otros requisitos]] 
                li.ms-3.mb-0 
                  span 3.6.1
                  | Base de datos
                li.ms-3.mb-0 
                  span 3.6.2
                  | Operaciones   
                li.ms-3.mb-0 
                  span 3.6.3
                  | Adaptación de situación                                                                                    
      .col-lg-4
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="zoom-out-right")
              img(src="@/assets/curso/temas/tema3/tema3-img-04.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .cajon.color-primario.p-4
          p La primera etapa especifica el producto que se está desarrollando, su audiencia objetivo, su propósito, alcance y uso previsto. La segunda etapa brinda más información sobre las necesidades de los factores y los usuarios que podrían impedir que se cumplan los requisitos establecidos. La última etapa está dedicada a los requisitos específicos, tanto funcionales como no funcionales.

    
    .titulo-segundo.color-acento-contenido
      h2 Estándar IEEE 830

    .row.justify-content-around.aling-items-center.mt-5
      .col-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-05.svg')})`}"
          )(data-aos="fade-down-right")  
          .bloque-texto-g__texto.bloque-texto-tema3.p-4
            p.mb-0 ¿Sabía que uno de los aspectos más importantes para la implementación de un #[i software] es tener claros los requerimientos del usuario final? Por esto se ha visto la necesidad de plantear una metodología que describa los métodos y enfoques recomendados para definir un ERS, ayudando a los clientes de #[i software] a detallar con precisión lo que desean obtener y facilitando al mismo tiempo, a todos los proveedores, la comprensión para validar exactamente lo que realmente el cliente desea.

    p.mb-5.mt-5 Este estándar establece que las funciones deberán expresarse como una jerarquía funcional, que a su vez permite organizar esta subsección de múltiples formas y sugiere, entre otras, las siguientes:

    .row.justify-content-center.mb-5
        .col-lg-6
          .acodionA-03
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta__azul")
              .row(titulo="Por tipo de usuario")
                .col-md-12.mb-4.mb-md-0
                  p Distintos usuarios poseen diferentes requerimientos. Para cada clase de usuario que exista en la organización, se especificarán los requerimientos funcionales que le afecten, o tengan mayor relación con sus tareas.
              .row(titulo="Por objetos")
                .col-md-12.mb-4.mb-md-0
                  p Son entidades del mundo real que serán mostradas en el sistema. Por cada objeto, se describen sus funciones y sus atributos. Los objetos pueden agruparse en clases. 
              .row(titulo="Por objetivos")
                .col-md-12.mb-4.mb-md-0
                  p Es un servicio que se aspira a que ofrezca el sistema y que requiere una cantidad determinada de entradas para generar su resultado. Para cada objetivo/subobjetivo que se siga con el sistema, se describen las funciones que permitan llevarlo a cabo.
              .row(titulo="Por estímulos")
                .col-md-12.mb-4.mb-md-0
                  p Se especifican los posibles estímulos que recibe el sistema y las funciones relacionadas con dicho estímulo. Por jerarquía funcional: si ninguna de las anteriores alternativas resulta de ayuda, la funcionalidad del sistema se especifica como una jerarquía de funciones que comparten entradas, salidas o datos internos. Se detallarán las funciones y las subfunciones del sistema. 
        .col-6.col-lg-4
          figure(data-aos="flip-left")
            img(src="@/assets/curso/temas/tema3/tema3-img-06.svg", alt="alt")
    
    .titulo-segundo.color-acento-contenido
      h2 Priorización de requerimientos 

    .row.justify-content-around.aling-items-center.mt-5
      .col-12
        .bloque-texto-g.color-secundario.tam-tarjeta-color.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-07.svg')})`}"
          )
          .bloque-texto-g__texto.bloque-texto-tema4.p-4
            p.mb-0 Ahora, durante la administración de requisitos de un desarrollo de un producto/servicio, además de ejecutar una correcta escritura de los requisitos y recogida, es de gran importancia generar una priorización de los requisitos. Este tipo de tarea no es nada fácil, debido a que se pueden encontrar intereses diferentes.
          .bloque-texto-g__texto.bloque-texto-tema4-1.p-4
            p.mb-0 Una de las técnicas más usadas es conocida como la técnica MoSCoW, la cual aporta priorización al escoger los requisitos; basada en el hecho que, aunque se estima que todos los requisitos son importantes, es primordial destacar aquellos requisitos principales y que aportan un mayor valor agregado al negocio, y son considerados indispensables, de forma que el producto/servicio no se puede colocar en producción, si este incumple alguna de las condiciones; esto ayudará a guiar el desarrollo, de una forma más eficiente.
    
    .crd.clr-paleBlue.p-4.mb-4
      p.mb-5.mt-5 #[b La técnica MoSCoW no determina si un requisito es de prioridad alta, media o baja. Esta técnica ayuda a dividir los requisitos en cuatro grandes categorías:]
    
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/tema3-img-08.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="12.4%" y="74.4%")
          .h5.mb-2 Must
          p Requisitos obligatorios y fundamentales para amortizar las necesidades del negocio. Si estos no se cumplen, se verá afectado el éxito del servicio.

        .tarjeta.color-acento-contenido.p-3(x="37.5%" y="74.4%")
          .h5.mb-2 Should
          p Requisitos que deberían efectuarse en la medida de lo posible. El éxito del proyecto/servicio no dependerá de primera mano del cumplimiento de estos requisitos. Estos requisitos pueden ser satisfechos mediante resultados temporales, o llegado el caso si fuera necesario, podrían ser reemplazables si existiera alguna causa que lo justificara.

        .tarjeta.color-acento-contenido.p-3(x="62.5%" y="74.4%")
          .h5.mb-2 Could
          p Requisitos que son realmente interesantes para que cumpla un servicio. Se trata de requisitos suplementarios que se implementarán en el caso de disponer de presupuesto para ello y tiempo. Estos requisitos mejorarían la productividad del servicio pero podrían ser eliminados de forma fácil.

        .tarjeta.color-acento-contenido.p-3(x="87.7%" y="74.4%")
          .h5.mb-2 Won’t
          p Requisitos que se han tomado la decisión de no implementar de momento, pero que serán tomados en cuenta en un futuro con la meta de mejorar el servicio/producto.
            
    .col-lg-12.mt-5.mb-5
        .cajon.color-acento-botones1.p-4
          p Estas técnicas nos ayudan a definir una “línea roja”, reconociendo aquellos requisitos que son obligatorios y que deben ser incluidos en el desarrollo del producto.

    p.mb-5 Una vez que se tengan identificadas las clasificaciones de requerimientos que existen y las características que deben cumplir, se puede comenzar con la descripción de las actividades que ayudarán a realizar una buena obtención de requerimientos y para ello se deben seguir los siguientes pasos:

    .row.justify-content-center.mb-5
        .col-6.col-lg-4
          figure(data-aos="fade-down-right")
            img(src="@/assets/curso/temas/tema3/tema3-img-09.svg", alt="alt")
        .col-lg-6
          .acodionA-03
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta__azul")
              .row(titulo="Obtención de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p Es la fase inicial de cada ciclo. Los analistas de requerimientos deben trabajar en conjunto con el cliente con el objetivo de encontrar el problema que el sistema debe solucionar. Este proceso lo regula una junta llamada #[em kick off], donde se debe testimoniar lo siguiente:

                  ul.lista-ul--color.ps-3
                    li
                      i.fas.fa-circle.fa-xs
                      | Objetivo del sistema, fechas provisionales del inicio y fin de la ejecución del proyecto.
                    li
                      i.fas.fa-circle.fa-xs
                      | Presentación del grupo de trabajo.
                    li
                      i.fas.fa-circle.fa-xs
                      p.mb-0  Presentación de #[em stakeholders].
                    li
                      i.fas.fa-circle.fa-xs
                      |  Fechas provisionales de reuniones con el cliente (solo aplica siempre y cuando sea consultoría).
              .row(titulo="Análisis de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p Es el segundo paso, el cual implica analizar, refinar y escudriñar/examinar, los requerimientos obtenidos, para asegurar que todos los clientes involucrados entienden lo que pidieron para encontrar errores, omisiones y otras deficiencias. Las actividades a contemplar durante esta etapa son:
                  ul.lista-ul--color.ps-3
                    li
                      i.fas.fa-circle.fa-xs
                      | Reducir confusiones en los requerimientos: se realizan las actividades que permiten borrar los términos que tienen más de una acepción.
                    li
                      i.fas.fa-circle.fa-xs
                      |  Traducir a lenguaje técnico los requerimientos: los requerimientos, después de la etapa anterior, deben ser tratados para llevarlos a un lenguaje de comunicación lo más técnico posible.
                    li
                      i.fas.fa-circle.fa-xs
                      |  Proponer un modelo lógico: se debe edificar un modelo del problema, sea en términos de diagramas o cualquier otro tipo de representación que se considere viable para el modelado.
              .row(titulo="Especificación de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p En esta fase se realiza la documentación de los requerimientos concertados con el cliente, en un nivel necesario de detalle; se documenta la descripción de manera completa de las funcionalidades del sistema y las necesidades que serán desarrolladas; de esta manera, también describe el alcance del sistema y la forma como hará sus funciones, definiendo los requerimientos funcionales y no funcionales.
              .row(titulo="Verificación de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p Se recomienda seleccionar varios revisores de diferentes ámbitos disciplinares; puede ser un arquitecto, un analista, entre otros, pero debe ser alguien que conozca la ingeniería de requerimientos, con el fin de realizar validaciones al documento, aplicarles pruebas de escritorio, etc.
              .row(titulo="Aceptación de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p Este es un proceso donde los analistas implicados se reúnen con el cliente y comienzan a dar una validación de manera formal al documento, de esta manera, comienzan a leer y explicar cada requerimiento; esto con el fin de que todo el grupo comprenda lo que se realizará para cada requerimiento. Una vez que todos estén sincronizados y de acuerdo, se hace la aprobación/aceptación de los detalles de requerimientos, se realiza un acuerdo formal que lo contenga y según las respectivas especificaciones documentadas, será con base en eso que se construya y se pida al cliente una aprobación formal vía correo electrónico o una firma sobre el documento físico.
              .row(titulo="Administración de requerimientos")
                .col-md-12.mb-4.mb-md-0
                  p Se realiza la etapa de todo el proyecto, esto implica llevar un control de los cambios, asegurándose de hacer ver al cliente el impacto en tiempo y costo de entrega del proyecto. Otro punto importante es que debe asegurarse de que todas las actividades del proyecto se den a tiempo para no causar retrasos en la entrega.





</template>

<script>
export default {
  name: 'Tema3',
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
