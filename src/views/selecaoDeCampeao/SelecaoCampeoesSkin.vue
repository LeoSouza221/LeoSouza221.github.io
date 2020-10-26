<template lang="pug">
  .image-container
    v-slide-y-transition(
      class="py-0"
      tag="v-list"
    )
      .image-selection(
        :style="`background: url(${personagem.baseURL}${personagem.url});`"
      )
</template>

<script>
export default {
  name: 'SelecaoCampeoesSkin',

  props: {
    personagem: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .image-container {
    height: 65%;
    width: 50%;
    z-index: 2;
  }

  .image-selection {
    height: 100%;
    width: 100%;
    filter: none !important;
    background-size: cover !important;
    background-position: center !important;
  }
</style>
