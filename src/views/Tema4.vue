<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de documentación de requerimientos en proyectos ERS

    .row.justify-content-center.mt-5.mb-5
      .col-lg-11
        p.index-dos El objetivo principal de la Especificación de Requisitos del Sistema (ERS) es ser el intermediario como medio de reproducción entre clientes, usuarios, ingenieros de requisitos y desarrolladores.

    figure
      img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-01.svg').tema4-decorativa-01

    p Las técnicas para analizar los requerimientos expuestas a continuación, parten de la matriz de trazabilidad de requerimientos del proyecto/especificación de requisitos.

    .slyderB_bg_02.px-5.py-4.mb-4
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01").margin-top-txt-01
              h4.ps-4 Descomposición funcional
              p.ps-4.mb-0 Consiste en agarrar los requerimientos de #[i software], separarlos en partes y examinarlos individualmente. De ser necesario, se pueden fragmentar en muchas más partes hasta generar un nivel adecuado de detalle. En cierto modo, el proceso es semejante al de la creación de una estructura de desglose de trabajo de un proyecto. En ingeniería de sistemas, la descomposición funcional se basa en definir un sistema en términos funcionales, para luego generar funciones de bajo nivel y formalizar las relaciones con respecto a las funciones de nivel alto. Esto con el fin de dividir un sistema de tal manera que cada componente se pueda explicar sin necesidad de llamar a otro componente. De esta manera, cada parte del sistema consta de funciones independientes que pueden reemplazarse y rehusarse.
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-02.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02").margin-top-txt-02
              h4.ps-4 Especificación vía sentencias textuales
              p.ps-4.mb-0 El procedimiento consiste en agarrar el requerimiento de un producto del levantamiento de información, para generar una narrativa con mayor detalle. En este caso, no se usan herramientas visuales como los casos de uso o flujogramas, es simplemente una explicación con mayor detalle del requerimiento en lenguaje natural.
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-03.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="03").margin-top-txt-03
              h4.ps-4 Modelado del proceso
              p.ps-4.mb-0 Engloba la creación de diagramas de flujo de procesos a través de los requerimientos del #[i software]. Existen muchas herramientas de modelado de procesos, cada una de ellas con sus propias reglas y símbolos. Los procesos se inician por eventos y pueden incluir actividades manuales, automatizadas o combinación entre ambas; cuando los procesos son grandes y complejos, es necesario desglosarlos en componentes (subprocesos). La #[b relación entre la gerencia de proyectos y los diagramas de flujo] es necesaria para el éxito.
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-04.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="04").margin-top-txt-04
              h4.ps-4 Modelado de dominio
              p.ps-4.mb-0 Consiste en examinar el #[i software] o sistemas relacionados en un dominio, con el fin de descubrir las partes comunes y las partes que los diferencian. Un modelo de dominio abarca diagramas conceptuales que comprenden tanto el comportamiento de un sistema como el de sus datos. Un tipo de modelo de dominio son los diagramas de funcionalidades, que representan de forma “compacta” los sistemas o aplicaciones en términos de sus características. 
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-05.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="05").margin-top-txt-05
              h4.ps-4 Caso de uso
              p.ps-4.mb-0 Es una secuencia de intercambio entre un sistema y/o un servicio. Además, es una de las técnicas con mayor expansión para detallar el comportamiento de un sistema. También proporciona un formato estructurado y simple que puede ser divulgado entre desarrolladores y usuarios, además de implementarse para el análisis de los requerimientos de #[i software]. Son importantes en sistemas informáticos basados en la funcionalidad, que se van a ejecutar en sistemas orientados a objetos y con UML. 
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-06.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="06").margin-top-txt-06
              h4.ps-4 #[i Checklist]
              p.ps-4.mb-0 También conocida como la lista de chequeo, consiste en una serie de revisiones/preguntas que se hacen sobre los #[b requerimientos de #[i software]] y que son mostradas de forma escrita. Por ejemplo:
              ul.lista-ul--color.ps-3
                li
                  i.fas.fa-circle.fa-xs
                  | ¿Se han realizado consideraciones de seguridad?
                li
                  i.fas.fa-circle.fa-xs
                  p.mb-0 ¿Se han determinado los requisitos de  #[i software] y #[i hardware]?
                li
                  i.fas.fa-circle.fa-xs
                  |  ¿Se ha agregado el código de referencia para el reconocimiento del requisito en el desglose de requerimientos?
                li
                  i.fas.fa-circle.fa-xs
                  |  ¿El requerimiento es único? (No existe duplicidad con otro requerimiento).
                li
                  i.fas.fa-circle.fa-xs
                  |  ¿Está escrito el requerimiento en un lenguaje claro y conciso?
              p.ps-4.mb-0 La lista de chequeo sirve como marco de trabajo y técnicas para revisar el requerimiento, simplificando su análisis de forma estructurada. Los requerimientos se pueden verificar sobre la definición del alcance o #[b matriz de trazabilidad de requerimientos.]
          .col-6.col-lg-6
            figure.margin-top-img-1
              img(src='@/assets/curso/temas/tema4/tema4-img-07.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="07").margin-top-txt-07
              h4.ps-4 Inspección
              p.ps-4.mb-4 Es la revisión no invasiva de los requerimientos de #[i software]. Por ejemplo:
              ul.lista-ul--color.ps-3
                li
                  i.fas.fa-circle.fa-xs
                  p.mb-0 Validar un #[i software] visualmente para corroborar que las pantallas solicitadas por el cliente se encuentran incluidas en el desarrollo.
                li
                  i.fas.fa-circle.fa-xs
                  | Verificar la entrada de los campos necesarios para el ingreso de datos.
                li
                  i.fas.fa-circle.fa-xs
                  | Verificar la efectividad de los botones para empezar la funcionalidad que ha sido solicitada.
                li
                  i.fas.fa-circle.fa-xs
                  |  Verificar que el requerimiento cumpla con los estándares definidos para la aplicación.           
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-08.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="08").margin-top-txt-08
              h4.ps-4 Prototipos
              p.ps-4.mb-0 Consiste en generar una representación visual (interfaz gráfica con el usuario) de los requerimientos de #[i software]. Es una herramienta importante para validar con los clientes, usuarios e interesados de un proyecto debido a que el diseño debe corresponder con los requerimientos de #[i software]. Además, permite a usuarios y desarrolladores comprender mejor los requerimientos, determinar cuáles son deseables y cuáles indispensables, de esta manera poder identificar los riesgos de forma temprana. La creación de prototipos conlleva a generar mucha comunicación entre usuarios y desarrolladores.
          .col-6.col-lg-6
            figure.margin-top-img
              img(src='@/assets/curso/temas/tema4/tema4-img-09.svg')              

    p.mb-4 Para lograr un proyecto de #[i software] exitoso es necesario comprender el ámbito del trabajo a ejecutar, los riesgos en que pueda llegar a incurrir, los recursos necesarios para su ejecución, las actividades a llevar a cabo, el costo de los presupuestos controlados y un plan a seguir como soporte.

    .crd.clr-paleYellow.p-4.mb-3
      .row.justify-content-center.mt-5.mb-5
        .col-lg-1 
          figure
            img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-02.svg').tema4-decorativa-02
        .col-lg-11 
          p #[b ERS]

      
      p.mb-5 #[b Lo siguiente es ver cuáles son las características de una buena documentación ERS y qué parámetros deben cumplir estos requerimientos en un proyecto, los cuales se presentan a continuación.]

      .row.justify-content-center.mb-5
        .col-lg-6
          .acodionA-02
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta__azul")
              .row(titulo="Necesario")
                .col-md-12.mb-4.mb-md-0
                  p Si se tiene alguna inquietud acerca de la necesidad del requerimiento, se pueden preguntar: ¿cuál sería el peor caso al no incluir cierto requerimiento? Si no se obtiene una respuesta, entonces es probable que no sea un requerimiento obligatorio.          
              .row(titulo="Completo")
                .col-md-12.mb-4.mb-md-0
                  p Un requerimiento está totalmente finalizado si no necesita ampliar detalles en su descripción, es decir, si se suministra la información suficiente para su entendimiento.
              .row(titulo="Consistente")
                .col-md-12.mb-4.mb-md-0
                  p Es consistente siempre y cuando no sea contradictorio con otro requerimiento.
              .row(titulo="Correcto")
                .col-md-12.mb-4.mb-md-0
                  p Estar de acuerdo entre las dos partes, es decir, contiene una única idea.
              .row(titulo="Factible")
                .col-md-12.mb-4.mb-md-0
                  p El requerimiento deberá ser totalmente viable y estar dentro de un calendario, presupuesto y otras restricciones; si existe alguna duda de su factibilidad, hay que volver a investigar, generar sus respectivas pruebas de concepto para saber su grado de factibilidad y complejidad, y si aún así el requerimiento es no viable, hay que volver a replantear el requerimiento.
        .col-6.col-lg-4
          figure(data-aos="zoom-out-right")
            img.l.my-3(src="@/assets/curso/temas/tema4/tema4-img-10.svg", alt="alt")
        
      .row.justify-content-center.mb-5
        .col-6.col-lg-4
          figure(data-aos="zoom-out-right")
            img.l.my-3(src="@/assets/curso/temas/tema4/tema4-img-11.svg", alt="alt")

        .col-lg-8
          .acodionA-02
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta__azul")
              .row(titulo="Modificable")
                .col-md-12.mb-4.mb-md-0
                  p Que se pueda ajustar con el tiempo.         
              .row(titulo="Priorizado")
                .col-md-12.mb-4.mb-md-0
                  p Organizar el requerimiento nos ayuda a saber el grado de necesidad de este, si es crítico o esencial..
              .row(titulo="Verificable")
                .col-md-12.mb-4.mb-md-0
                  p Si el requerimiento no se puede validar, entonces, ¿Cómo se puede saber si el requerimiento se cumplió o no? Debe ser posible validarlo, sea por análisis de prueba o demostración e inspección. Cuando se esté generando un requerimiento, se deberán decidir los criterios de aceptación pertenecientes al requerimiento.
              .row(titulo="Rastreable")
                .col-md-12.mb-4.mb-md-0
                  p El requerimiento y la funcionalidad se deben ordenar de tal forma que cada función se pueda rastrear, lo que facilita la validación del diseño y las pruebas.
              .row(titulo="Claro")
                .col-md-12.mb-4.mb-md-0
                  p Un requerimiento debe ser claro, fácil de leer y entender; su composición debe ser simple para aquellos que vayan a averiguarlo en un futuro.

    .crd.clr-gray.p-4.mb-4
      .row.justify-content-center.mt-5.mb-5
        .col-lg-7
          p.index-dos Es así como el uso de este tipo de estándares implica un grupo de ventajas, como, por ejemplo:
          .row.justify-content-center.mt-5.mb-5
            .col-lg-10
              ul.lista-ul--color.color-i.index-dos
                li 
                  i.fas.fa-play
                  | La sencillez en la lectura: esto se debe a que una vez que los lectores han comprendido y entendido la plantilla, el interpretar el resto de los requisitos es mucho más fácil y el tiempo usado para esto es mucho menor que si no se utilizan.
                li 
                  i.fas.fa-play
                  | La escritura: una vez reconocida la información que obtiene dicha plantilla, la escritura es mecánica, por ende, la probabilidad de que se olvide algo de información es menor y la revisión de los requisitos es mucho más sencilla. 
                li 
                  i.fas.fa-play
                  | Las personas encargadas o revisores, al inspeccionar el documento, pueden utilizar el estándar con el fin de validar si alguna sección ha quedado incompleta y de esta manera llevar el proceso para que sea revisado
                li 
                  i.fas.fa-play
                  | Los requisitos son más fáciles de recoger.              
        .col-lg-5
          figure(data-aos="zoom-out-right")
            img(src="@/assets/curso/temas/tema4/tema4-img-12.svg", alt="alt")

    .col-lg-12.mt-5
        .cajon.color-acento-botones1.p-4
          p Por otro lado, la desventaja de que el #[i software] es intangible, ¿qué significa? Que el #[i software] no puede ser tocado, lo que lleva a que, en el caso hipotético de darse algún problema, los efectos de este no son visibles de una manera sencilla, sino que se confían de otros para hacer la documentación oportuna para revisar el progreso. 

    figure
      img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-01.svg').tema4-decorativa-03
  
    figure
      img(src='@/assets/curso/temas/tema4/tema4-img-decorativa-03.svg').tema4-decorativa-04


  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p #[b Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.]
      
        
          
  




</template>

<script>
export default {
  name: 'Tema4',
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
