<template lang="pug">
  .defaultBody
    .text-container
      v-layout(align-center fill-height justify-center)
        v-flex(xs11)
          v-card(flat height="400")
            slot(name="text-container")
    v-divider.mb-5
    .extra-content
      v-layout(justify-center align-center fill-height)
        v-flex(xs11)
          v-card.primary(flat height="100%")
            slot(name="extra-content")
    slot(name="carrousel-conteiner")
    slot(name="contacts-container")
    //- 
      https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80

</template>

<script>
export default {
  name: 'DefaultBody',
}
</script>

<style scoped>
  .text-container {
    height: calc(100vh - 200px);
    width: 100%;
  }
  .extra-content {
    height: 100vh;
    width: 100%;
  }
</style>