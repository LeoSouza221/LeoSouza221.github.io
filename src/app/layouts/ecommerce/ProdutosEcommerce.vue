<template lang="pug">
  main
    v-toolbar(
      flat
      height="50" 
      :style=`{
        borderBottom: changeColor(toolbarProducts.color),
        transition: 'all .5s ease-in'}
      `)
      v-icon.mr-3(:color="toolbarProducts.color") {{ toolbarProducts.icon }}
      v-toolbar-title {{ toolbarProducts.title }}
    v-container
      v-data-iterator(
        :items="itemsProducts"
        :items-per-page.sync="itemsPerPage"
        hide-default-footer
      )
        template(v-slot:default="props")
          v-row(justify="center")
            v-col(
              v-for="item in props.items"
              :key="item.name"
              xs="12"
              sm="6"
              lg="3"
            )
              v-expand-transition
                v-card(flat hover height="350" :width="!verifyMobile() ? '100%' : 300")
                  .card-image
                    v-img(
                      :src="toolbarProducts.image"
                      height="120"
                      width="120"
                    )
                  v-card-title(
                    class="headline"
                    primary-title
                  ) R$ {{ item.price | adjustFixed }}
                  v-card-subtitle.subtitle-1 {{ item.name }} - {{ item.brand }}
                  v-card-text {{ item.description }}
                  div(class="text-center")
                    v-rating(
                      readonly
                      v-model="item.rating"
                      color="yellow"
                    )
    v-pagination(
      v-model="page"
      circle
      :length=4
      :page="page"
    )
</template>

<script>
import isMobile from '@/mixins/isMobile';

export default {
  name: 'ProdutosEcommerce',
  props: ['toolbarProducts', 'itemsProducts'],
  mixins: [isMobile],
  data: () => ({
    page: 1,
    itemsPerPage: 8,
  }),
  filters: {
    adjustFixed(value) {
      return (value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }));
    }
  },
  methods: {
    changeColor(color) {
      return `2px solid ${color}`
    }
  }
}
</script>

<style scoped>
  main {
    position: absolute;
    top: 128px;
    right: 10px;
    width: calc(100% - 300px);
    height: 110%;
  }

  .card-image {
    width: 120px;
    height: calc(120px + 15px);
    margin: 0 auto;
    padding-top: 15px;
  }

  @media (max-width: 600px) {
    main {
      right: none;
      width: calc(100% - 20px);
      margin: 0 auto;
    }
  }
</style>