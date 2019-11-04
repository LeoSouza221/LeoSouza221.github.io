<template lang="pug">
  .sidebar
    template(v-for="(item, index) in sideBarRoutes")
      v-menu.transparent(open-on-hover bottom left)
        template(v-slot:activator="{ on }")
          v-btn(
            v-on="on"
            small
          )
            v-icon(medium left) {{ item.icon }}
            span {{ item.title }}
        v-list(rounded dense)
          v-list-item(
            :to="item.children[0].path"
            v-if="item.children && item.children[0].meta"
          )
            v-list-item-action
              v-icon {{ item.children[0].meta.sidebar.icon }}
            v-list-item-content
              v-list-item-title {{ item.children[0].meta.sidebar.title }}
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
    drawer: true,
  }),
  created() {
    EventBus.$on('ativar-sidebar', this.enable);
  },
  beforeDestroy() {
    EventBus.$off('ativar-sidebar');
  },
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
    enable() {
      this.drawer = !this.drawer;
    },
  },
  name: 'Sidebar',
};
</script>
