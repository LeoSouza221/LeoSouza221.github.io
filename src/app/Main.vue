<template lang="pug">
  .main-page
    v-content
      toolbar
      main-content
      v-container
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
import MainContent from './core/MainContent.vue';
import Toolbar from './core/Toolbar.vue';

export default {
  components: {
    MainContent,
    Toolbar,
  },
  data: () => ({
  }),
  name: 'Main',
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
   .align-navbar {
      width: 90%;
      margin-left: 10%;
      position: absolute;
      bottom: 5px;
      display: flex;
      justify-content: start;
   }
   .main-page {
     height: 100vh;
     width: 100vw;
   }
   .my-grid {
     display: grid;
     padding: 10px;
     width: 100%;
     height: 60%;
   }
   .my-grid-knowledge {
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(2, 1fr);
   }
   .my-grid-contacts {
     grid-template-columns: repeat(2, 1fr);
   }
   .my-grid-item {
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>