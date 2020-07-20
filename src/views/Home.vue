<template lang="pug">
  .main-page.background
    sidebar
    toolbar
    v-content(
      :style=`{
        height: teste(),
        width: '100%'}`
    )
      main-content(v-if="$route.name === 'Home'")
      v-slide-y-transition(mode="out-in")
        router-view
    main-footer
    v-speed-dial(
      v-model="fab"
      bottom
      right
      transition
    )
      template(v-slot:activator)
        v-btn(
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        )
          v-icon(v-if="fab") mdi-close
          v-icon(v-else) mdi-account-circle
      v-btn(
        fab
        dark
        small
        color="green"
      )
        v-icon mdi-pencil
      v-btn(
        fab
        dark
        small
        color="indigo"
      )
        v-icon mdi-plus
</template>

<script>
import MainContent from '@/components/MainContent.vue';
import Toolbar from '@/components/Toolbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'Home',

  components: {
    MainContent,
    Toolbar,
    Sidebar,
    MainFooter,
  },

  data: () => ({
    fab: false,
  }),

  methods: {
    teste() {
      return this.$route.name === 'Home' && this.$vuetify.breakpoint.width < 800 ? '130%' : '100%';
    },
  },
};
</script>

<style>
  .background {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at top left,
      #00BCD4 40%,
      #fff 40%
    );
  }

  .default-container {
    height: 100vh;
    width: 100%;
    padding: 30px;
  }
  .default-blend {
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
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
    overflow-x: hidden;
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
    .default-container {
      height: 100%;
    }
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
      height: 50px;
    }
  }
</style>