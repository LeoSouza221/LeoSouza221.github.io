<template lang="pug">
  .defaultBody
    .text-container
      v-layout(align-center fill-height justify-center)
        v-flex(xs11)
          v-card(flat height="400")
            slot(name="text-container")
    v-divider.mb-5
    .extra-content(
      :style=`{
        backgroundImage: image,
        backgroundColor: color,
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }`
    )
      v-layout(justify-center align-center fill-height)
        slot(name="extra-content")
    .carousel-container
      slot(name="carousel-container")
        d-carousel
    slot(name="contacts-container")
</template>

<script>
import DefaultCarousel from './DefaultCarousel.vue';

export default {
  components: {
    'd-carousel': DefaultCarousel,
  },
  props: ['image', 'color', 'itemsImage'],
  name: 'DefaultBody',
}
</script>

<style scoped>
  .text-container {
    height: calc(100vh - 200px);
    width: 100%;
  }
  .extra-content {
    height: 100vh;
    width: 100%;
  }
  .carousel-container {
    height: 100vh;
    width: 100%;
  }
</style>