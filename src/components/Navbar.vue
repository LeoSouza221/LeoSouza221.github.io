<template lang="pug">
  .sidebar
    .icon-bar
      v-btn(   
        icon
        dark
        @click="openSide"
      )
        v-icon fa fa-bars   
</template>

<script>
import { EventBus } from '@/utils/event-bus';
import isMobile from '@/mixins/isMobile';
import routes from '@/router/routes';

export default {
  mixins: [isMobile],
  computed: {
    sideBarRoutes() {
      return routes
        .filter(route => route.meta && route.meta.sidebar)
        .map(route => ({
          path: route.path,
          icon: route.meta.sidebar.icon,
          title: route.meta.sidebar.title,
          children: route.children ? route.children : null,
        }));
    },
  },
  methods: {
    openSide() {
      EventBus.$emit('ativar-sidebar');
    }
  },
  name: 'Navbar',
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
