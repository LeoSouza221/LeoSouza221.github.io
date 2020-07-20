<template lang="pug">
  .toolbar
    v-app-bar.transparent(
      app
      flat
      fixed
      width='100vw'
    )
      navbar
      v-spacer
      v-btn(
        icon
        to="/"
        dark
        v-if="$route.name !== 'Home'"
      )
        v-icon fa fa-home
</template>

<script>
import isMobile from '@/mixins/isMobile';
import Navbar from './Navbar.vue';

export default {
  mixins: [isMobile],
  components: {
    Navbar,
  },
  name: 'Toolbar',
}
</script>

<style scoped>
  
</style>