<template lang="pug">
  .lawyerLayout
    d-header(:height="150"
      color="black"
      image="url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
    )
      template(v-slot:item-left)
        v-layout(justify-center row align-center fill-height)
          v-flex(xs1)
            v-avatar(dark size="80" style="border: solid 2px white; border-radius: 50%")
              v-icon(large) fa fa-balance-scale
          v-flex(xs10)
            h2.text-center Um Nome Advocacia
    v-container(class="fluid")
      pagina
        span teste
</template>

<script>
import Pagina from '@/app/core/Pagina.vue';
import DefaultHeader from '@/app/models/DefaultHeader.vue';

export default {
  components: {
    Pagina,
    'd-header': DefaultHeader,
  },
  name: 'Advocacia',
}
</script>

<style scoped>
  .lawyerLayout {
    font-family: 'Merriweather', serif;
  }
</style>

