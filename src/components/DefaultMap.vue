<template lang="pug">
  .defaultMap
    iframe(
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.946246327148!2d-51.9404545844092!3d-23.42630886250521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd72da37f7931%3A0xca788375078d8bfc!2sCatedral%20de%20Maring%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1573925908918!5m2!1spt-BR!2sbr"
      :width='mapWidth'
      height="300"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    )
</template>

<script>
export default {
  name: 'DefaultMap',
  computed: {
    mapWidth() {
      if (this.$vuetify.breakpoint.width > '960') {
        return '500';
      } 
      return '300';
    },
  },
}
</script>