<template lang="pug">
  .mainContent(style="height: 100%;")
    v-layout(justify-center row wrap align-center fill-height)
      v-flex(xs12 sm6)
        v-card.elevation-10.mx-3
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            height="250px"
          )
            v-card-title Apresentação
            v-card-subtitle.white--text Olá, me chamo Leonardo, sou formado em Análise e Desenvolvimento de Sistemas desde o comeco de 2019. Ja fui estagiario de BI por cerca de um ano e meio, onde era responsvel por criar os dashboards e aplicar as metricas pre definidas
            v-card-subtitle.white--text Atualmente trabalho como desenvolvedor front-end, utilizando VueJS com Vuetify e buscando sempre novos conhecimentos e aprender coisas novas.
      v-flex(xs12 sm4)
        v-card.elevation-10.mx-3
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            height="250px"
          )
            v-card-title Conhecimentos
            div.my-grid.my-grid-knowledge
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
              div.my-grid-item
                img(
                  src="@/../public/images/vue.png"
                  width="50"
                  height="50"
                )
      v-flex(xs12 sm10)
        v-card.elevation-10.mx-3
          v-img(
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)"
            src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
            max-height="150px"
          )
            v-card-title Contatos e Referencias
            div.my-grid.my-grid-contacts
              div.my-grid-item
                a
                  img(
                    src="@/../public/images/git.png"
                    width="80"
                    height="80"
                  )
              div.my-grid-item
                a
                  img(
                    src="@/../public/images/linkedin.png"
                    width="60"
                    height="60"
                  )
</template>

script
