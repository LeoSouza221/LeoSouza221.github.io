<template lang="pug">
  .mainContent
    v-container(fill-height)
      input(type="checkbox" id="switch")
      v-row(justify="center" class="flip-container")
        label.checkbox-icon(for="switch")
          v-icon fas fa-sync-alt
        .flipper
          v-card.elevation-12.flip-front
            v-toolbar.down-toolbar.secondary(dark flat tile)
              v-row(justify="space-around")
                v-icon fab fa-js
                h3 Desenvolder Front-End
                v-icon fab fa-vuejs
            v-card-text
              v-row(justify="center" style="margin-top: 70px")
                v-col(cols="12" sm="12" md="3")
                  .avatar-align
                    v-avatar(
                      class="profile"
                      color="grey"
                      tile
                      width="120"
                      height="150"
                    )
                      v-img(:src="require('@/../public/images/eu.jpeg')")
                v-col(cols="12" sm="12" md="9")
                  fieldset
                    legend.show-content Nome
                    p.text-adjust.show-content Leonardo Felipe de Souza
                  fieldset.mt-3
                    legend.show-content Apresentação
                    p.text-adjust.show-content Formado em Análise e Desenvolvimento de Sistemas desde o começo de 2019, buscando sempre novos conhecimentos.
                v-col(cols="12")
                  fieldset
                    legend.show-content Contatos e Referências
                    div.contacts-container.show-content
                      div.my-grid.my-grid-contacts
                        div.my-grid-item
                          a(href="https://github.com/LeoSouza221" target="_blank")
                            img(
                              src="@/../public/images/git.png"
                              width="70"
                              height="70"
                            )
                        div.my-grid-item
                          a(href="https://www.linkedin.com/in/leonardo-de-souza-a75557156/" target="_blank")
                            img(
                              src="@/../public/images/linkedin.png"
                              width="60"
                              height="60"
                            )   
          v-card.elevation-12.flip-back(style="height: 100%")
            v-toolbar.down-toolbar.secondary(dark flat tile)
            v-card-text
              v-row(justify="center" style="margin-top: 70px")
                v-col(cols="12")        
                  fieldset
                    legend.show-content Conhecimentos
                    .my-grid.my-grid-knowledge.show-content
                      .my-grid-item
                        img(
                          src="@/../public/images/html.png"
                          width="50"
                          height="50"
                        )
                      .my-grid-item
                        img(
                          src="@/../public/images/css.png"
                          width="50"
                          height="50"
                        )
                      .my-grid-item 
                        img(
                          src="@/../public/images/js.png"
                          width="50"
                          height="50"
                        )
                      .my-grid-item.grid-adjust
                        img(
                          src="@/../public/images/vue.png"
                          width="50"
                          height="50"
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
    padding: 64px 0 0 0;
    font-family: 'Montserrat', sans-serif;
  }

  fieldset {
    padding: 10px;
  }

  fieldset legend{
    font-size: 12px;
  }

  .avatar-align {
    display: flex;
    justify-content: center;
  }

  .contacts-container {
    display: flex;
    justify-content: center;
  }

  .grid-adjust {
    grid-column-start: 2;
  }

  .down-toolbar {
    position: absolute;
    width: 100%;
    top: 20px;
    border-radius: unset !important;
  }

  .show-content {
    opacity: 0;
    animation: opacity_transition 1s ease-in forwards;
    animation-delay: 1s;
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

  .flip-container {
    perspective: 1000px;
    width: 100%;
    height: 100%;
  }

  .flipper{
    padding: 0 15px;
    width: 700px;
    height: 510px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    position: relative;
    top: 15%;
  }

  #switch:checked ~ .flip-container .flipper {
    transform: rotateY(180deg);
  }

  .flip-front, .flip-back{
    position: absolute;
    width: calc(100% - 30px);
    backface-visibility: hidden;
  }

  .flip-back {
    transform: rotateY(180deg);
  }

  #switch{
    display: none;
  }

  .checkbox-icon {
    position: absolute;
    left: 50%;
    z-index: 2;
    top: 12.5%;
    padding: 15px;
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  }

  .checkbox-icon:hover {
    cursor: pointer;
    animation: rotate-icon 1s ease-in;
  }

  @keyframes rotate-icon {
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  @media screen and (max-width: 960px){
    .flipper {
      height: 662px;
      top: 0;
    }
    .checkbox-icon {
      top: -5%;
    }
  }
</style>
