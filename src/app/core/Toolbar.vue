<template lang="pug">
  .toolbar
    v-app-bar.primary(
      prominent
      app
      fixed
      :height="toolbarHeight"
      width='100vw'
    )
      div.avatar(v-if="$route.name === 'Main'")
      div.align-navbar
        navbar
        v-spacer
        v-btn(
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

<style scoped>
  .avatar {
    background-image: url('https://www.gravatar.com/avatar/bbbd4d370977e2098e8349bfd0d7aa06');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>