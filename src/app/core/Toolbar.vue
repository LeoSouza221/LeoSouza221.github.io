<template lang="pug">
  .toolbar
    header.default-header.default-header-main
      div.avatar
      div.align-navbar
        navbar
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar,
  },
  name: 'Toolbar',
}
</script>