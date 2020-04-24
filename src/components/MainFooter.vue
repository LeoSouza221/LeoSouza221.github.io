<template lang="pug">
  .main-footer
    v-footer.primary(
      style="height: 20px; width: 100vw"
      app
      dark
    ) 
      v-layout(justify-center)
        p(style="font-size: 10px;") {{ new Date().getFullYear() }} — <strong>Leonardo Souza</strong>
</template>

<script>
export default {
  name: 'Footer',
}
</script>