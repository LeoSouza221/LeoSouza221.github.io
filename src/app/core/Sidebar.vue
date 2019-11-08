<template lang="pug">
  .sidebar
    v-navigation-drawer.secondary(
      app
      v-model="drawer"
      absolute
      temporary
    ) 
      v-list(rounded dense dark elevation-3)
        template(v-for="(item, index) in sideBarRoutes")
          v-list-group(
            v-if="item.children && item.children[0].meta"
            :group="item.path"
            :prepend-icon="item.icon"
            :expand="true"
            :key="index"
          )
            template(v-slot:activator)
              v-list-item-content
                v-list-item-title {{ item.title }}
            v-list-item(
              v-for="(subItem, y) in item.children"
              :key="y"
              :to="subItem.path"
            )
              v-list-item-action
                v-icon(v-html="subItem.meta.sidebar.icon")
              v-list-item-content
                v-list-item-title(v-text="subItem.meta.sidebar.title")
          v-list-tile(
            v-else
            ripple
            :key="index"
            :to="item.path"
          )
            v-list-item-icon
              v-icon(v-html="item.icon")
            v-list-item-content
              v-list-item-title(v-text="item.title")
</template>

<script>
import { EventBus } from '@/app/core/event-bus';
import routes from '../../router/routes';

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