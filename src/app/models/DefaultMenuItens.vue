<template lang="pug">
  .defaultMenuItens
    template(v-for="(item, index) in menuItems")
      v-btn(
        text
        dark
      ) {{ item.text }}
</template>

<script>
export default {
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
