<template lang="pug">
  .sidebar
    v-navigation-drawer.primary(
      app
      v-model="drawer"
      absolute
      temporary
    ) 
      v-list(rounded dense dark elevation-3)
        v-list-item-group(color="primary")
          v-list-item(
            v-for="(item, index) in sideBarRoutes"
            :key="index"
            :to="item.path"
          )
            v-list-item-icon
              v-icon(v-html="item.icon")
            v-list-item-content
              v-list-item-title(v-text="item.title")
</template>

<script>
import { EventBus } from '@/utils/event-bus';
import routes from '@/router/routes';

export default {
  data: () => ({
    drawer: false,
  }),
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
  created() {
    EventBus.$on('ativar-sidebar', this.enable);
  },
  beforeDestroy() {
    EventBus.$off('ativar-sidebar');
  },
  methods: {
    enable() {
      this.drawer = true;
    },
  },
}
</script>