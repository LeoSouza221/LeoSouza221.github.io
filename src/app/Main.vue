<template lang="pug">
  .main-page
    v-navigation-drawer(
      app
      fixed
      dark
      permanent
      style="background: linear-gradient(120deg, #00E676, #B9F6CA)"
    )
    v-content
      v-container.teste
        v-layout(justify-center align-center fill-height)
          v-card(width="90%" height="90%")
            span teste
        v-slide-y-transition(mode="out-in")
          router-view
            
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style>
  .main-page {
    
  }
  .teste {
    width: 100%;
    height: 100vh;
  }
</style>