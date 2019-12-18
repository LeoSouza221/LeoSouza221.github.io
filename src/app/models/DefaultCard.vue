<template lang="pug">
  .defaultCard
    v-data-iterator(
      :items="carouselItems"
      hide-default-footer
    )
      template(v-slot:default="props")
        v-layout(justify-center)
          v-flex.ma-1(
            v-for="(item, index) in props.items"
            :key="index"
            xs3
          )
            v-card(width="300")
              v-img(
                :src="item.src"
                width="300"
                v-if="item.src"
              )
              v-card-title.text-center
                h4 {{ item.title }}
              v-divider
              .card-text
                p {{ item.text }}
</template>

<script>
export default {
  props: ['carouselItems'],
  name: 'DefaultCard',
}
</script>

<style scoped>
  .defaultCard {
    width: 80%;
    height: 100%;
  }
  .card-text {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .card-text p {
    text-align: justify;
    font-size: 12px;
  }
  @media only screen and (max-width: 1000px) {
    .card-text p {
      font-size: 10px;
    }
    .defaultCard {
      width: 100%;
    }
  }
</style>