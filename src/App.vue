<template lang="pug">
  v-app
    v-fade-transition(mode="out-in")
      router-view
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
export default {
  name: 'App',
};
</script>
