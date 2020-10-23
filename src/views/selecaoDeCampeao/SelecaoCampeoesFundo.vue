<template lang="pug">
  .selection-background
    .image-container
      v-slide-y-transition(
        class="py-0"
        tag="v-list"
      )
        .image-selection(
          :style="`background: radial-gradient(circle, rgba(2,0,36,1) 0%, url(${personagem.url}) 96%);`"
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

  .image-container {
    height: 80vh;
    width: 100vw;
  }

  .image-selection {
    height: 100%;
    width: 100%;
    background-color: rgba(2, 2, 37, 0.4);
    background-size: cover;
  }
</style>
