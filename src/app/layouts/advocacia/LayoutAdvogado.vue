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
    d-body
      template(v-slot:text-container)
        v-layout(justify-center row fill-height)
          v-flex(xs8)
            v-card-title Apresentação
            p.mx-3(style="text-align: justify; color: rgb(156, 153, 153)") {{ apresentation }}
            p.mx-3(style="text-align: justify;color: rgb(156, 153, 153)") {{ apresentation }}
          v-flex(xs4)
            div.card-image
      template(v-slot:extra-content)
        v-layout(justify-center)
          v-flex(xs11)
            v-card-title Atuações
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
</style>

