<template lang="pug">
  .footer
    v-footer.primary(
      absolute
      width='100vw'
    )
      div {{ new Date().getFullYear() }} — <strong>Leonardo Souza</strong>
</template>

<script>
export default {
  name: 'Footer',
}
</script>