<template lang="pug">
  .skin-container
    .image-container
      v-slide-y-transition(
        class="py-0"
        tag="v-list"
      )
        .image-selection(
          :style="`background: url(${personagem.url});`"
        )
      .circulos
        .circulo-1
    .skins-selection
    .details-selection

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
  .skin-container {
    height: 100%;
    width: 100%;
  }
  
  .image-container {
    position: relative;
    height: 72%;
    width: 100%;
    z-index: 2;
  }

  .image-selection {
    height: 100%;
    width: 100%;
    filter: none !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .circulos {
    position: absolute;
    width: 700px;
    height: 700px;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  .circulo-1 {
    width: 700px;
    height: 700px;
    border-radius: 50%;
    border: 5px solid rgb(177, 160, 7);
  }

  .skins-selection {
    position: relative;
    height: 20%;
    width: 100%;
    z-index: 2;
  }

  .details-selection {
    height: 8%;
    width: 100%;
  }
</style>
