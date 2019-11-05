<template lang="pug">
  .mainContent
    v-layout(justify-center row wrap align-center fill-height)
      v-flex(xs12 sm6)
        v-card.elevation-10.mx-3.slide
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            height="250px"
          )
            v-card-title.show-content Apresentação
            v-card-subtitle.white--text.show-content Olá, me chamo Leonardo, sou formado em Análise e Desenvolvimento de Sistemas desde o comeco de 2019. Ja fui estagiario de BI por cerca de um ano e meio, onde era responsvel por criar os dashboards e aplicar as metricas pre definidas
            v-card-subtitle.white--text.show-content Atualmente trabalho como desenvolvedor front-end, utilizando VueJS com Vuetify e buscando sempre novos conhecimentos e aprender coisas novas.
      v-flex(xs12 sm4)
        v-card.elevation-10.mx-3.slide
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            height="250px"
          )
            v-card-title.show-content Conhecimentos
            div.my-grid.my-grid-knowledge.show-content
              div.my-grid-item
                img(
                  src="@/../public/images/css.png"
                  width="50"
                  height="50"
                )
              div.my-grid-item
                img(
                  src="@/../public/images/html.png"
                  width="50"
                  height="50"
                )
              div.my-grid-item 
                img(
                  src="@/../public/images/js.png"
                  width="50"
                  height="50"
                )
              div.my-grid-item.grid-adjust
                img(
                  src="@/../public/images/vue.png"
                  width="50"
                  height="50"
                )
      v-flex(xs12 sm10)
        v-card.elevation-10.mx-3.slide
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            max-height="150px"
          )
            v-card-title.show-content Contatos e Referencias
            div.contacts-container.show-content
              div.my-grid.my-grid-contacts
                div.my-grid-item
                  a(href="https://github.com/LeoSouza221" target="_blank")
                    img(
                      src="@/../public/images/git.png"
                      width="60"
                      height="60"
                    )
                div.my-grid-item
                  a(href="https://www.linkedin.com/in/leonardo-de-souza-a75557156/" target="_blank")
                    img(
                      src="@/../public/images/linkedin.png"
                      width="60"
                      height="60"
                    )
</template>

<script>
export default {
  
}
</script>

<style>
  .mainContent {
    height: 70%;
  }
  .contacts-container {
    display: flex;
    justify-content: center;
  }
  .grid-adjust {
    grid-column-start: 2;
  }
  .slide {
    animation: 1s ease-out 0s 1 slide_transition;
  }
  @keyframes slide_transition {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .show-content {
    opacity: 0;
    animation: 1s ease-in opacity_transition forwards;
    animation-delay: 1.5s;
  }
  @keyframes opacity_transition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
