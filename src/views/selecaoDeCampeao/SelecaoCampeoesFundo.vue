<template lang="pug">
  .selection-background
    //- .image-container
    //-   v-slide-y-transition(
    //-     class="py-0"
    //-     tag="v-list"
    //-   )
    //-     v-img(
    //-       :src="personagem.url"
    //-       contain
    //-       height="100%"
    //-       width="100%"
    //-     )
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
    width: 60vw;
  }
</style>
