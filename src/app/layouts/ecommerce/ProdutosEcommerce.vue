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
                v-card(flat hover height="350" width="300")
                  .card-image
                    v-img.pt-2(
                      :src="toolbarProducts.image"
                      height="120"
                      width="120"
                    )
                  v-card-title(
                    class="headline"
                    primary-title
                  ) {{ item.name }}
                  v-card-subtitle {{ item.brand }}
                  v-card-text {{ item.description }}
                  div(class="text-center")
                    v-rating(
                      readonly
                      v-model="item.rating"
                      color="yellow"
                    )
                  h3.title.pb-n4.pl-5 R$ {{ item.price | adjustFixed }}
    v-pagination(
    )
</template>

<script>

export default {
  name: 'ProdutosEcommerce',
  props: ['toolbarProducts', 'itemsProducts'],
  data: () => ({
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
    top: 74px;
    right: 10px;
    width: calc(100% - 300px);
    height: 110%;
  }

  .card-image {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
</style>