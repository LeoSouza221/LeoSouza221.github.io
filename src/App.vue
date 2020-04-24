<template lang="pug">
  v-app
    v-fade-transition(mode="out-in")
      router-view
    v-snackbar(
      v-model="snackbar"
      :color="color"
      :timeout="12000"
      top
    ) 
      v-icon(dark left) fa fa-exclamation-triangle 
      span {{ text }}
</template>

<script>
import { EventBus } from '@/utils/event-bus';

export default {
  data: () => ({
    snackbar: false,
    color: null,
    text: null,
  }),
  created() {
    EventBus.$on('show-snackbar', this.openSnackbar);
  },
  beforeDestroy() {
    EventBus.$off('show-snackbar', this.openSnackbar);
  },
  methods: {
    openSnackbar(color, msg) {
      this.snackbar = true;
      this.color = color;
      this.text = msg;
    }
  },
  name: 'App',
};
</script>
