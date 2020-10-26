<template lang="pug">
  .selection-background
    .image-background(
      :style="`background: url(${personagem.baseURL}${personagem.url});`"
    )
</template>

<script>
export default {
  name: 'SelecaoCampeoesFundo',

  props: {
    personagem: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .selection-background {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color:rgb(2, 2, 37);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-background {
    height: 100%;
    width: 100%;
    position: absolute;
    filter: blur(8px);
    background-size: cover !important;
    background-position: center !important;
  }

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
