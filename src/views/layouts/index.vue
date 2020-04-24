<template lang="pug">
  v-slide-y-transition(mode="out-in")
    router-view
</template>

<script>
import Pagina from '@/components/Pagina.vue';

export default {
  components: {
    Pagina,
  },
  name: 'IndexLayout',
};
</script>
