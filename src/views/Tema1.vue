<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de #[i software]

    p.mb-4 Qué mejor manera de empezar el componente formativo que con las metodologías de desarrollo de #[em software] y sus derivados, y así validar cuál metodología se puede abarcar, según sus necesidades.
      br
      br
      |Lo invitamos a ver el siguiente video para conocer qué es una metodología de desarrollo de #[em software:]

    .row(data-aos="zoom-out")
      figure.mb-5.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido.index-dos.mt-5
      h2 Tipos de metodología de desarrollo de #[i software] tradicionales
    
    p.index-dos.mb-5 Las metodologías tradicionales son aquellas que #[b no se ajustan nada bien a los cambios] y su comportamiento resalta de forma muy superficial. La siguiente imagen presenta el flujo de una metodología de desarrollo de #[em software] tradicional.

    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg").tema1-decorativa-01

    .titulo-sexto.color-acento-contenido.index-dos.mb-5
      h5 Figura 1
      br
      span #[i Flujo de una metodología de desarrollo de software tradicional]

    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-01.svg")

    p.mt-5 Conozcamos algunas de las principales metodologías tradicionales:

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="<i>Waterfall</i> (cascada)")
        .row
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p En esta metodología, las diferentes funciones se despliegan en etapas separadas y obedeciendo a un orden estricto. Antes de cada fase, se debe verificar el producto para confirmar si está listo para continuar con la siguiente etapa. Las especificaciones y requisitos iniciales, no se encuentran propensos a cambiarse, razón por la cual, no se pueden observar los avances hasta que el proyecto ya se encuentre, en gran parte, ejecutado.
        
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-03.svg', alt='Texto que describa la imagen').justifica-imagen-izq             
      .py-3.py-md-4(titulo="Prototipado")
        .row
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Se basa en la ejecución de un prototipo de #[em software] que se desarrolla rápidamente, para que los usuarios puedan aportar una retroalimentación y, de esta manera, poder corregir lo que se encuentra errado y, de esta manera, introducir los requerimientos que sean necesarios. Es un modelo que se basa en el procedimiento de prueba y error, para entender las especificidades del producto.
        
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-04.svg', alt='Texto que describa la imagen').justifica-imagen-izq             
      .py-3.py-md-4(titulo="Espiral")
        .row
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Es la unión de los dos modelos anteriores, la diferencia es que esta, añade el concepto de análisis de riesgo. Se separa en cuatro fases: planificación, análisis de riesgo, desarrollo de prototipo y evaluación del cliente. El nombre de este tipo de metodología se da debido a su funcionamiento, porque se van ejecutando las etapas en forma de espiral, cuanto más cerca del centro significa que más avanzado está el proyecto.
        
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-05.svg', alt='Texto que describa la imagen').justifica-imagen-izq             
      .py-3.py-md-4(titulo="Incremental")
        .row
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p En esta metodología se va generando el producto final de manera progresiva. En cada fase incremental se añade una nueva funcionalidad, lo que permite observar los resultados de una forma más rápida con respecto al modelo en cascada. El #[i software] se puede comenzar a utilizar incluso antes que se finalice totalmente y, en general, es mucho más flexible que las demás metodologías.
        
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-06.svg', alt='Texto que describa la imagen').justifica-imagen-izq             
      .py-3.py-md-4(titulo="Desarrollo rápido de aplicaciones (RAD)")
        .row
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Esta metodología posibilita desarrollar #[em software] de alta calidad en un periodo de tiempo corto. El desarrollo es más flexible pero los costos son mucho más altos, aunque demanda una mayor intervención de los usuarios. Así mismo, el código puede incluir más errores y sus funciones pueden reducirse, debido al poco tiempo del que se dispone para desarrollarlas. El objetivo principal es el de reproducir el menor número posible de veces, para alcanzar una aplicación funcional, completa, y de forma rápida.
        
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-07.svg', alt='Texto que describa la imagen').justifica-imagen-izq             
    
    .titulo-segundo.color-acento-contenido.index-dos.mt-5
      h2 Tipos de metodología de desarrollo de #[i software] ágiles
    
    p.index-dos.mb-5 Ahora, conozcamos este tipo de metodologías, las cuales se basan en la metodología incremental, en la que, en cada ciclo de desarrollo, el producto final, se va construyendo y puliendo, a la vez que el cliente puede ir conduciendo nuevos requerimientos, debido a que puede comprobar cómo avanza el proyecto en tiempo real. La siguiente imagen presenta el flujo de una metodología de desarrollo de #[em software] ágil.

    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-02.svg").tema1-decorativa-02

    .titulo-sexto.color-acento-contenido.index-dos.mb-5
      h5 Figura 2
      br
      span #[i Flujo de una metodología de desarrollo de software ágil]

    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-08.svg")
    
    p.mt-5 Las principales metodologías ágiles son:

    TabsC.clase-extra.color-acento-botones
      .py-3.py-md-4(titulo="Kanban")
        .row
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-09.svg', alt='Texto que describa la imagen').justifica-imagen-der             
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Esta metodología consiste en separar las actividades en fragmentos mínimos y organizarlas en un tablero de trabajo, separándolas en tareas pendientes, en curso y finalizadas. De esta manera, se genera un flujo de trabajo muy visual basado en tareas primordiales y generando un valor agregado al producto.
      .py-3.py-md-4(titulo="Scrum")
        .row
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-10.svg', alt='Texto que describa la imagen').justifica-imagen-der            
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p 	Es también una metodología incremental que divide las tareas y requisitos de forma similar a Kanban. Se reproduce sobre bloques de tiempos fijos y cortos (entre dos y cuatro semanas) para alcanzar un resultado completo en cada iteración. Las fases son: planificación de la iteración (#[i planning sprint]), llevar a cabo (#[i sprint]), reunión diaria (#[i daily meeting]) y demostración de los avances (#[i sprint review]). A todas estas etapas se le denomina también #[i sprint]. 
      
      .py-3.py-md-4(titulo="Lean")
        .row
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-11.svg', alt='Texto que describa la imagen').justifica-imagen-der                       
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Está configurado para que grupos pequeños de desarrollo altamente capacitados puedan elaborar cualquier tarea en poco tiempo. Los activos más importantes son su compromiso y las personas del equipo, posponiendo así a un segundo plano los costes y el tiempo.
        
      .py-3.py-md-4(titulo="Programación extrema (XP)")
        .row
          .col-md-5.mt-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-12.svg', alt='Texto que describa la imagen').justifica-imagen-der                     
          .col-md-7.mt-5.mb-4.mb-md-0
            .row.justify-content-around
              .col-lg-10.mb-lg-0.mt-lg-1
                p Su principal objetivo es el de generar un buen ambiente de trabajo con el grupo y que exista una retroalimentación constante del cliente. El trabajo se fundamenta en varias fases: diseño fácil, pruebas, codificación con estándares y refactorización, propiedad colectiva del código, programación en par, integridad con el cliente, integración continua, entregas semanales, atención al cliente, planificación, y entregas frecuentes.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
