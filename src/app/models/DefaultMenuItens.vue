<template lang="pug">
  .defaultMenuItens
    template(v-for="(item, index) in menuItems" v-if="verifyMobile()")
      v-btn(
        text
        dark
      ) {{ item.text }}
    v-menu(offset-y v-else)
      template(v-slot:activator="{ on }")
        v-btn(
          dark
          v-on="on"
          icon
        )
          v-icon fa fa-user
      v-list
        v-list-item(
          v-for="(item, index) in menuItems"
          :key="index"
          @click=""
        )
          v-list-item-title {{ item.text }}
</template>

<script>
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  props: ['menuItems'],
  name: 'DefaultMenuItens',
}
</script>

<style scoped>
  .defaultMenuItens {
    position: absolute;
    bottom: 0;
    right: 5%;
  }
</style>
