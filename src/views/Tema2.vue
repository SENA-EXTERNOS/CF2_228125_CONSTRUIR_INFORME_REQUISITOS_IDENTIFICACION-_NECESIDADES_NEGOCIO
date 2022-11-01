<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lenguaje unificado de modelado

    .tarjeta--container.row.mb-5.mt-5
      .col-md.tarjeta.color--secundario.p-5  
        p(data-aos="fade-left") Continuemos con los lenguajes unificados de modelado (UML) , los cuales son una serie de normas y estándares que dicen cómo se debe representar algo de la vida real a un sistema de cómputo, sea a través de diagramas o expresiones computacionales que representan una ecuación matemática. Normalmente son usados por grupos grandes de desarrollo de #[i software] con el objetivo de planificar y documentar cómo se construyen los programas informáticos complejos.  Los UML definen normas para construir muchos tipos de esquemas, no esquemas de un solo tipo.
      .col-md.tarjeta.color-azul-palido.p-5        
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-01.svg', alt='Texto que describa la imagen')(data-aos="fade-down-right")

    p #[b Las ventajas del uso de UML se pueden definir de la siguiente manera:]    

    .row.justify-content-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/tema2-img-02.svg", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Ayuda a analizar el cómo se implementa.
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Se facilita la comunicación entre el grupo al existir un lenguaje en común.
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Se dispone de documentación que trasciende al proyecto.
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Los modelos ayudan a visualizar cómo es o cómo se quiere que sea el sistema.
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Especifican el comportamiento y la estructura del sistema.
          .tarjeta.color-secundario.tam-tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3 
              p.text-center.mb-0 Guían la construcción del sistema.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p #[b En los UML se pueden definir dos tipos principales de diagramas y estos a su vez se subdividen, conozcámoslos.]

    figure
      img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg").tema2-decorativa-01

    .titulo-segundo.color-acento-contenido
      h2 Diagramas estructurales UML

    p.index-dos.mb-5 Hablemos primero de los diagramas estructurales UML, los cuales representan la configuración general de un sistema: sus atributos, relaciones y objetos entre las distintas entidades. Es decir, se preocupa más por lo que es el sistema y no por cómo se comporta.
    p Entre ellos podemos encontrar:

    .slyderB_bg_01.px-5.py-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="01")
              h4.ps-4 Diagrama de clases:
              p.ps-4.mb-0 estos tipos de diagramas UML se utilizan para proporcionar la representación estática del programa. Una clase tiene tres elementos fundamentales: su comportamiento, su nombre y sus atributos.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-04.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="02")
              h4.ps-4 Diagrama de componentes: 
              p.ps-4.mb-0 se encarga de desglosar todo el sistema en pequeños componentes, de tal manera que se pueda ver cómo dependen unos de los otros. Este tipo de diagramas constan únicamente de dos partes: las dependencias y los componentes.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-05.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="03")
              h4.ps-4 Diagrama de despliegue: 
              p.ps-4.mb-0 está dividido en dos partes principales: los artefactos y los nodos. Los artefactos son los encargados de representar a los clientes o los esquemas, y por otro lado, los nodos son los que representan el servidor de la base de datos.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-06.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="04")
              h4.ps-4 Diagrama de objetos:
              p.ps-4.mb-0 presenta múltiples objetos en cada enlace. Cada entidad consta de su grupo de características y un nombre definido de objetos.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-07.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="05")
              h4.ps-4 Diagrama de paquetes:
              p.ps-4.mb-0 provee una manifestación de un sistema con sus respectivos módulos y los subsistemas que este conlleva de más alto nivel.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-08.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="06")
              h4.ps-4 Diagrama de perfil:
              p.ps-4.mb-0 se utiliza para mostrar la meta configurada del sistema. Además, puede generar conexiones entre los elementos de un perfil y diferentes perfiles.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-09.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-7.mb-1.mb-lg-0
            .number(data-number="07")
              h4.ps-4 Diagrama de la estructura compuesta:
              p.ps-4.mb-0 se usan para reproducir la configuración interna de una clase.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-10.svg')

    separador

    figure
      img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-02.svg").tema2-decorativa-02

    .titulo-segundo.color-acento-contenido
      h2 Diagramas UML de comportamiento

    p.mb-5 Ahora estudiemos los diagramas UML de comportamiento, los cuales determinan la funcionalidad general de cada unidad y el comportamiento del sistema. Además, algunos de estos diagramas manifiestan también el flujo de información y control en el sistema.
    p Entre ellos podemos encontrar:

    .acodionA-01
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta_azul imagen-tarjeta")
        .row(titulo="Diagrama de máquina de estado")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama de máquina de estado: 
            p.ps-4.mb-0 Define los tipos de estados del sistema. Además, muestra las  acciones, sus tipos y cómo resolvería una clase a ellas.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-12.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama de actividad")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama de actividad:
            p.ps-4.mb-0 Manifiesta el flujo general del sistema en relación con varias actividades. Recibe una instancia del sistema y observa cómo reacciona.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-13.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama de casos de uso")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama de casos de uso:
            p.ps-4.mb-0 Demuestra cómo el usuario final se comunicaría con el sistema. Además, genera múltiples actores principales, como por ejemplo, los usuarios y su comunicación con elementos puntuales del sistema.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-14.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama secuencial")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama secuencial:
            p.ps-4.mb-0 Especifica el flujo a través de un proceso entre múltiples componentes de manera consecutiva, presentando variables elementos y especificando el flujo que pasa de un componente  a otro.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-15.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama de comunicación")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama de comunicación:
            p.ps-4.mb-0 manifiesta de forma fácil cómo es la conexión entre las múltiples entidades del sistema.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-16.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama de tiempos")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama de tiempos:
            p.ps-4.mb-0 muestra la conducta de cualquier tipo de objeto a través de una duración puntual.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-17.svg', alt='Texto que describa la imagen')
        .row(titulo="Diagrama general interactivo")
          .col-md-6.mb-4.mb-md-0.texto-acordionA-1
            h4.ps-4 Diagrama general interactivo:
            p.ps-4.mb-0 Reproduce el flujo de múltiples secuencias interactivas entre sí. Una de ellas es la actividad que está simbolizada por un margen que consta de varias unidades en su interior.
          .col-md-5.img-acordionA-1
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-18.svg', alt='Texto que describa la imagen')                                                                          







</template>

<script>
export default {
  name: 'Tema2',
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
