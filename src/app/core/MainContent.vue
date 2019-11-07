<template lang="pug">
  .mainContent
    v-container(style="height: 100%;")
      v-layout(justify-center row wrap align-center fill-height)
        v-flex(xs11 md12)
          v-card.slide(
            dark
            flat 
            :style=`
              verifyMobile() ? 
              'background: linear-gradient(140deg, #6335e2 60%, white 40%)' : 
              'background: linear-gradient(180deg, #6335e2 0, #6335e2 58%, white 58%, white 80%, #6335e2 80%, #6335e2 100%)'
            `
          )
            v-layout.ma-3(justify-center row wrap)
              v-flex(xs12 md7)
                v-card-title.show-content Apresentação
                v-layout(justify-center wrap)
                  p.text-adjust.white--text.show-content Olá, me chamo Leonardo, sou formado em Análise e Desenvolvimento de Sistemas desde o começo de 2019. Já fui estagiário de BI por cerca de um ano e meio, onde era responsável por criar os dashboards e aplicar as métricas pré definidas.
                  p.text-adjust.white--text.show-content Atualmente trabalho como desenvolvedor front-end, utilizando VueJS com Vuetify e buscando sempre novos conhecimentos e aprender coisas novas. 
              v-flex(xs12 md5)              
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
              v-flex(xs12)
                v-card-title.show-content Contatos e Referências
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
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  name: 'MainContent',
}
</script>

<style>
  .mainContent {
    height: 100%;
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
  .text-adjust {
    text-align: justify;
    padding: 0 15px;
  }
</style>
