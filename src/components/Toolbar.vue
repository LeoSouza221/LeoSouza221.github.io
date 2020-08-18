<template lang="pug">
  .toolbar
    v-app-bar.transparent(
      app
      flat
      fixed
      width='100vw'
    )
      navbar
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