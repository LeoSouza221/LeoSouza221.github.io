<template lang="pug">
  v-app.background
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
    //- v-dialog(v-model="dialog" persistent max-width="200")
    //-   v-card(flat height="200")
    //-     div(style=`display: flex;
    //-       justify-content: center;
    //-       align-items: center;
    //-       height: 100%;
    //-       flex-direction: column;`
    //-     )
    //-       img(src="@/../public/img/farol_2.svg"
</template>

<script>
import { EventBus } from '@/app/core/event-bus';

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

<style >
  .background {
    background: #9a9a9b;
    width: 100%;
    height: 100%;
  }
</style>
