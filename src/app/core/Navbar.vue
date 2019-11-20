<template lang="pug">
  .sidebar
    transition(name="fade")
      template(v-for="(item, index) in sideBarRoutes" v-if="verifyMobile()")
        v-menu.mx-3(open-on-hover offset-y transition="slide-y-transition")
          template(v-slot:activator="{ on }")
            v-btn.transparent(
              v-on="on"
              small
              depressed
              rounded
              dark
              large
            )
              v-icon(medium left) {{ item.icon }}
              span {{ item.title }}
          v-list.primary(
            rounded
            dense
            dark
          )
            v-list-item-group(
              color="secondary"
            )
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
      v-btn(
        v-else
        icon
        dark
        @click="openSide"
      )
        v-icon fa fa-bars   
</template>

<script>
import { EventBus } from '@/app/core/event-bus';
import isMobile from '@/mixins/isMobile';
import routes from '../../router/routes';

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
