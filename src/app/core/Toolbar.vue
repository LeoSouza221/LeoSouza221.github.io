<template lang="pug">
  .toolbar
    v-app-bar.default-background(
      prominent
      app
      fixed
      :height="verifyMobile() ? '150px' : '100px'"
    )
      div.avatar
      div.align-navbar
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