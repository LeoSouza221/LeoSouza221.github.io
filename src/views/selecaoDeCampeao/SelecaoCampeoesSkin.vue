<template lang="pug">
  .skin-container
    .image-container
      .circulos
        .circulo-1
          v-slide-y-transition(
            class="py-0"
            tag="v-list"
          )
            .image-selection(
              :style="`background: url(${personagem.url});`"
            )
    .skins-selection
    .details-selection
      v-row(
        justify="center"
        align="center"
        style="height: 100%"
      )
        .line
        .edit.px-2
        .select
          v-select(
            outlined
            dense
            color="white"
            width="20px"
          )
        .skill
          .skill-square
            v-img(
              src="http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/SummonerFlash.png"
              contain
              height="100%"
              width="100%"
            )
        .skill
          .skill-square
            v-img(
              src="http://ddragon.leagueoflegends.com/cdn/10.22.1/img/spell/SummonerHeal.png"
              contain
              height="100%"
              width="100%"
            )
        .ward
        .emote
        .line
</template>

<script>
export default {
  name: 'SelecaoCampeoesSkin',

  props: {
    personagem: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .skin-container {
    height: 100%;
    width: 100%;
  }
  
  .image-container {
    position: relative;
    height: 72%;
    width: 100%;
    z-index: 2;
  }

  .image-selection {
    height: 100%;
    width: 100%;
    filter: none !important;
    background-size: cover !important;
    background-position: center !important;
    border-radius: 50%;
  }

  .circulos {
    position: absolute;
    width: 700px;
    height: 700px;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  .circulo-1 {
    width: 700px;
    height: 700px;
    border-radius: 50%;
    border: 5px solid rgb(177, 160, 7);
  }

  .skins-selection {
    position: relative;
    height: 20%;
    width: 100%;
    z-index: 2;
  }

  .details-selection {
    height: calc(8% - 20px);
    width: 100%;
  }

  .line {
    width: 20px;
    height: 1px;
    background-color: #988343;
  }

  .skill {
    height: 100%;
    width: 40px;
  }

  .skill-square {
    width: 35px;
    height: 35px;
    border: 1px solid #988343;
  }
</style>
