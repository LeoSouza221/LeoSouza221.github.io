<template lang="pug">
  .lawyerLayout
    d-header(
      :height="150"
      color="rgb(0, 0, 0, .7)"
      image="url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      flat=true
    )
      template(v-slot:item-left)
        v-layout(justify-center row align-center fill-height)
          v-flex(xs1)
            v-avatar(dark size="80" style="border: solid 2px white; border-radius: 50%")
              v-icon(large) fa fa-balance-scale
          v-flex(xs10)
            h2.text-center Um Nome Advocacia
      template(v-slot:menu)
        d-menu(:menuItems="itens")
    d-body(
      image="url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"
      color="rgb(0, 0, 0, .7)"
      :itemsImage="itemsImage"
    )
      template(v-slot:text-container)
        v-layout(justify-center row fill-height)
          v-flex(xs8)
            v-card-title Apresentação
            p.mx-3(style="text-align: justify; color: rgb(156, 153, 153)") {{ apresentation }}
            p.mx-3(style="text-align: justify;color: rgb(156, 153, 153)") {{ apresentation }}
          v-flex(xs4)
            div.card-image
      template(v-slot:extra-content)
        section.lawyer-extra-content
          div.title-lawyer-extra-content
            h2.white--text Atuações
          div.content-lawyer-extra-content
            div.my-grid.my-grid-lawyer
              template(v-for="i in 3")
                div.my-grid-item-lawyer
                  div.avatar-grid
                    v-avatar(dark size="80" style="border: solid 2px white; border-radius: 50%;")
                      v-icon(large style="color: #fff;") fa fa-balance-scale
                  div.text-grid
                    h4.text-grid-title Lorem
                    div.text-grid-content 
                      p {{ apresentation1 }}
      template(v-slot:carousel-container)

</template>

<script>
import Pagina from '@/app/core/Pagina.vue';
import DefaultHeader from '@/app/models/DefaultHeader.vue';
import DefaultMenu from '@/app/models/DefaultMenuItens.vue';
import DefaultBody from '@/app/models/DefaultBody.vue';

export default {
  components: {
    Pagina,
    'd-header': DefaultHeader,
    'd-menu': DefaultMenu,
    'd-body': DefaultBody,
  },
  data: () => ({
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
      }
    ]
  }),
  name: 'Advocacia',
}
</script>

<style scoped>
  .lawyerLayout {
    font-family: 'Merriweather', serif;
    color: rgb(156, 153, 153);
  }
  .card-image {
    background-image: url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-position: center;
    background-size: cover;
    width: 95%;
    height: 100%;
  }
  .lawyer-extra-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  .title-lawyer-extra-content {
    height: 20%;
    width: 100%;
  }
  .content-lawyer-extra-content {
    height: 80%;
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
    border: solid 2px #FFF;
    border-radius: 20px;
    box-shadow: 2px 2px 30px #000;
    padding: 2px;
    flex-direction: column;
  }
  .avatar-grid {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-grid {
    height: 70%;
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
    padding: 10px;
  }
  .text-grid-content p {
    font-size: 11px;
  }
</style>
