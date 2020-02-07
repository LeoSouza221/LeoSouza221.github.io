<template lang="pug">
  .lawyerLayout
    v-toolbar(
      height="150"
      dark
      fixed
      style="background: linear-gradient(to right bottom, #272829 70%, #afafaf 30%)"
    )
      v-layout(justify-center row :align-center="verifyMobile()" fill-height)
        v-flex(xs3 md1)
          v-avatar(
            dark
            :size="verifyMobile() ? '80' : '60'"
            style="border: solid 2px white; border-radius: 50%; display: flex; justify-content: center;"
            :class="!verifyMobile() ? 'ma-1' : ''"
          )
            v-icon(large) fa fa-balance-scale
        v-flex(xs9 md10)
          h2.text-center(v-if="verifyMobile()") Um Nome Advocacia
          h3.text-center(v-else :class="!verifyMobile() ? 'mt-5' : ''") Um Nome Advocacia
      d-menu(:menuItems="itens")
    main
      .parallax-image
      .apresentation
        v-row(align="center" justify="center" style="height: 100%")
          v-card.elevation-5(
            :height="verifyMobile() ? 500 : 600"
            :width="verifyMobile() ? 1000 : 350"
            style="background: radial-gradient(circle at top left, #272829 80%, #afafaf 20%); color: white"
            light
          )
            v-row(align="center" justify="center" style="height: 100%")
              v-col(cols="4" style="margin: 0; padding: 0" v-if="verifyMobile()")
                img(
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  width="100%"
                  height="500"
                  style="margin: 0; padding: 0"
                )
              v-col(:cols="verifyMobile() ? 8 : 11" style="height: 100%")
                div(class="apresentation-content")
                  h1 Apresentação
                  div(class="card-text")
                    p.mx-5 {{ apresentation }}
                    p.mx-5 {{ apresentation1 }}
      .atuacao-container
        v-row(align="center" justify="center" style="height: 100%")
          section.lawyer-extra-content
            .title-lawyer-extra-content
              h2.white--text Atuações
            .content-lawyer-extra-content
              .my-grid.my-grid-lawyer
                template(v-for="i in 3")
                  .my-grid-item-lawyer
                    .avatar-grid
                      v-avatar(dark size="60" style="border: solid 2px white; border-radius: 50%;")
                        v-icon(large style="color: #fff;") fa fa-balance-scale
                    .text-grid
                      h4.text-grid-title Lorem
                      .text-grid-content 
                        p {{ apresentation1 }}
      div(style="width: 100%; height: 700px")
        v-row(align="center" justify="center" style="height: 100%")
          section.lawyer-extra-content
            div.title-lawyer-extra-content
              h2 Corpo Juridico
            v-card.transparent(flat)
              v-window(v-model="onboarding" reverse)
                v-window-item(
                  v-for="(item, index) in carouselItems"
                  :key="`card-${index}`"
                  style="background: #272829; border-radius: 5px"
                )
                  .avatar-grid
                    v-img(
                      :src="item.src"
                      width="300"
                      max-height="300"
                    )
                  .text-grid
                    h3.text-grid-title Lorem
                    .text-grid-content 
                      p {{ item.text }}
              v-card-actions(class="justify-space-between")
                v-btn(
                  text
                  @click="prev"
                )
                  v-icon mdi-chevron-left
                v-item-group(
                  v-model="onboarding"
                  class="text-center"
                  mandatory
                )
                  v-item(
                    v-for="(item, index) in carouselItems"
                    :key="`btn-${index}`"
                    v-slot:default="{ active, toggle }"
                  )
                    v-btn(
                      :input-value="active"
                      icon
                      @click="toggle"
                    )
                      v-icon mdi-record
                v-btn(
                  text
                  @click="next"
                )
                  v-icon mdi-chevron-right
      .contacts-container
        v-row(align="center" justify="center" style="height: 100%")
          section.lawyer-extra-content
            div.title-lawyer-extra-content
              h2 Contatos
            div.content-lawyer-extra-content
              .my-grid.contact-grid
                .contact-grid-item
                  d-map
                .contact-grid-item            
                  d-form
                .contact-grid-item.align-contact-grid
                  .contacts-icons     
                    a
                      v-icon(dark large) fa fa-envelope
                    a
                      v-icon(dark large) fab fa-facebook-square
                    a
                      v-icon(dark large) fab fa-whatsapp
</template>

<script>
import Pagina from '@/app/core/Pagina.vue';
import DefaultHeader from '@/app/models/DefaultHeader.vue';
import DefaultMenu from '@/app/models/DefaultMenuItens.vue';
import DefaultBody from '@/app/models/DefaultBody.vue';
import DefaultForm from '@/app/models/DefaultForm.vue';
import DefaultMap from '@/app/models/DefaultMap.vue';
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  components: {
    Pagina,
    'd-header': DefaultHeader,
    'd-menu': DefaultMenu,
    'd-body': DefaultBody,
    'd-form': DefaultForm,
    'd-map': DefaultMap,
  },
  data: () => ({
    length: 3,
    onboarding: 0,
    apresentation1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    apresentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    itens: [
      {
        text: 'Apresentação',
      },
      {
        text: 'Atuações',
      },
      {
        text: 'Corpo Jurídico',
      },
      {
        text: 'Contatos',
      },
    ],
    itemsImage: [
      {
        src: 'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',
      },
    ],
    carouselItems: [
      {
        src: 'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg',
        title: 'Lawyer 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        src: 'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg',
        title: 'Lawyer 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        src: 'https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg',
        title: 'Lawyer 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
    ],
  }),
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    },
  },
  name: 'Advocacia',
}
</script>

<style scoped>
  .lawyerLayout {
    width: 100%;
    height: 100%;
    font-family: 'Merriweather', serif;
    color: rgb(156, 153, 153);
  }

  main {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .parallax-image {
    width: 100vw;
    height: calc(100vh - 220px);
    background-image: url(https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1505&q=80);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color:rgb(199, 199, 199);
    mix-blend-mode: overlay;
    position: absolute;
  }

  .apresentation {
    width: 100%; 
    height: calc(100% - 150px); 
  }

  .apresentation-content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 85%
  }

  .card-text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-text p {
    text-align: justify;
    font-size: 14px;
    text-indent: 50px;
  }

  .atuacao-container {
    width: 100%; 
    height: 500px;
    background: radial-gradient(circle at top right, #272829 80%,#afafaf 20%);
  }

  .lawyer-extra-content {
    height: 100%;
    width: 1000px;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  
  .title-lawyer-extra-content {
    height: 10%;
    width: 100%;
  }
  .content-lawyer-extra-content {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .my-grid-lawyer {
    width: 100%;
    height: 80%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15%;
  }

  .my-grid-item-lawyer {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: solid 1px #afafaf;
    background: #272829;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding: 2px;
    flex-direction: column;
  }

  .avatar-grid {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text-grid {
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }

  .text-grid-title {
    height: 20%;
    width: 100%;
    text-align: center;
  }
  .text-grid-content {
    height: 80%;
    width: 100%;
    text-align: justify;
    padding: 15px;
    text-indent: 20px;
  }
  .text-grid-content p {
    font-size: 11px;
  }

  .carousel-infos {
    padding: 5px;
    font-size: 12px;
    text-align: justify;
  }

  .align-item-content {
    display: flex;
    height: 80%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .background-image-align {
    width: 80vh;
    height: 80vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .contacts-container {
    width: 100%; 
    height: 600px;
    background: radial-gradient(circle at top left, #272829 80%, #afafaf 20%);
    color: white;
  }

  .contacts-container {
    display: flex;
    flex-direction: column;
  }

  .contact-grid {
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 20px;
    grid-template-rows: 1fr 0.4r;
  }
  .contact-grid-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .align-contact-grid {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contacts-icons {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (max-width: 700px) {
    .parallax-image {
      background-attachment: scroll;
    }

    .apresentation {
      width: 100%; 
      height: 800px; 
    }

    .atuacao-container {
      width: 100%; 
      height: 800px;
    }

    .my-grid-lawyer {
      width: 100%;
      height: 80%;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 15px;
    }

    .text-grid-content p {
      font-size: 10px;
    }

    .text-container {
      height: 70vh;
      padding: 10px;
    }

     .contacts-container {
      width: 100%; 
      height: 800px;
     }

    .contact-grid {
      grid-template-columns: 3fr;
      grid-template-rows: 1fr 1fr 0.4fr;
    }

    .align-contact-grid {
      grid-column-start: 1;
      grid-column-end: 1;
    }

    .contacts-icons {
      width: 100%;
    }

    .carousel-container {
      height: 100vh;
    }

    .background-image-align {
      width: 50vh;
      height: 50vh;
      transform: translateX(-40%);
    }
  }

  
</style>
