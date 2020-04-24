<template lang="pug">
  .defaultForm
    v-container(fluid)
      v-layout(justify-center row wrap)
        v-flex.pa-1(xs6)
          v-text-field(
            label="Nome"
            solo
          )
        v-flex.pa-1(xs6)
          v-text-field(
            label="Email"
            solo
          )
        v-flex.pa-1(xs12)
          v-textarea(
            label="Mensagem"
            solo
          )
        v-btn Enviar
</template>

<script>
export default {
  name: 'DefaultForm',
}
</script>

<style>
</style>