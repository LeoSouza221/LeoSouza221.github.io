<template lang="pug">
  .main-page
    v-navigation-drawer(
      app
      fixed
      dark
      permanent
      style="background: linear-gradient(120deg, #00E676, #B9F6CA)"
    )
    v-content
      header.default-header.default-header-main
        div.avatar
      v-container
        v-card.elevation-1.ma-5
          v-card-title Apresentacao
        v-card.elevation-1.ma-5
          v-card-title Contatos  
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style>
  .default-header {
    width: 100%;
    height: 150px;
    position: relative;
    box-shadow: 0 2px 10px grey;
    margin-bottom: 50px;
  }
   .default-header-main {
     background: linear-gradient(120deg, #00E676, #B9F6CA)
   }
   .avatar {
      position: absolute;
      bottom: -35%;
      height: 130px;
      width: 130px;
      margin: auto;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: solid 5px #00E676;
      background: #ffffff;
      box-shadow: 5px 5px 5px grey;
   }
  .teste {
    width: 100%;
    height: 100%;
  }
</style>