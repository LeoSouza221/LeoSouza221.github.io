<template lang="pug">
  .main-page
    sidebar
    toolbar
    v-content(style="height: 100%; width: 100%")
      main-content(v-if="$route.name === 'Main'")
      v-slide-y-transition(mode="out-in")
        router-view
</template>

<script>
import MainContent from './core/MainContent.vue';
import Toolbar from './core/Toolbar.vue';
import Sidebar from './core/Sidebar.vue';

export default {
  components: {
    MainContent,
    Toolbar,
    Sidebar,
  },
  name: 'Main',
}
</script>

<style>
   .default-background {
     background: #6335e2;
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
      border: solid 5px #6335e2;
      background: #ffffff;
      box-shadow: 2px 2px 5px black;
      transition: all .5s ease-in;
   }
   .align-navbar {
      width: 85%;
      margin-left: 10%;
      margin-right: 5%;
      position: absolute;
      bottom: 0;
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
     height: 80%;
   }
   .my-grid-knowledge {
     width: 100%;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(2, 0.42fr);
     grid-row-gap: 20px;
     grid-column-gap: 20%;
   }
   .my-grid-contacts {
     width: 30%;
     grid-template-columns: repeat(2, 0.5fr);
     grid-template-rows: 0.5fr;
   }
   .my-grid-item {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 20px;
   }
  @media only screen and (max-width: 600px) {
    .my-grid-contacts {
      width: 100%;
    }
    .avatar {
      height: 80px;
      width: 80px;
      bottom: -38%;
    }
    .align-navbar {
      margin: 0;
    }
  }
</style>