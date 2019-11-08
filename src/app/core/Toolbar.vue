<template lang="pug">
  .toolbar
    v-app-bar.secondary(
      prominent
      app
      fixed
      :height="toolbarHeight"
    )
      div.avatar(v-if="$route.name === 'Main'")
      div.align-navbar
        navbar
        v-spacer
        v-btn.mr-3(
          icon
          to="/"
          dark
          v-if="$route.name !== 'Main'"
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
  computed: {
    toolbarHeight() {
      if (this.verifyMobile() && this.$route.name === 'Main') {
        return '150px';
      } else if ((this.verifyMobile() && this.$route.name !== 'Main') || 
        (!this.verifyMobile() && this.$route.name !== 'Main')) {
        return '50px';
      } else {
        return '100px';
      }
    }
  },
  name: 'Toolbar',
}
</script>