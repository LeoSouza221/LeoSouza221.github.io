<template lang="pug">
  .defaultMenuItens
    .teste(v-if="verifyMobile()")
      template(v-for="(item, index) in menuItems")
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
          v-icon fa fa-ellipsis-v
      v-list(:color="color")
        v-list-item(
          v-for="(item, index) in menuItems"
          :key="index"
          @click=""
        )
          v-list-item-title.white--text {{ item.text }}
</template>

<script>
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  props: ['menuItems', 'color'],
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
