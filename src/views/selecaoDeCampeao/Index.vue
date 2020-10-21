<template lang="pug">
  .selection-container
    SCFundo(
      :personagem="personagem"
    )
    .grid-layout
      .grid-ban
        SCBan
      .grid-team1
        SCTeamOne
      .grid-chat
        SCTeamTwo
      .grid-skin
        SCSkin
      .grid-team2
        SCTeamTwo
</template>

<script>
import http from '@/utils/http';
import SelecaoCampeoesFundo from './SelecaoCampeoesFundo.vue';
import SelecaoCampeoesBan from './SelecaoCampeoesBan.vue';
import SelecaoCampeoesTeamOne from './SelecaoCampeoesTeamOne.vue';
import SelecaoCampeoesTeamTwo from './SelecaoCampeoesTeamTwo.vue';
import SelecaoCampeoesSkin from './SelecaoCampeoesSkin.vue';

export default {
  name: 'SelecaoCampeoes',

  components: {
    SCFundo: SelecaoCampeoesFundo,
    SCBan: SelecaoCampeoesBan,
    SCTeamOne: SelecaoCampeoesTeamOne,
    SCTeamTwo: SelecaoCampeoesTeamTwo,
    SCSkin: SelecaoCampeoesSkin,
  },

  data: () => ({
    personagem: {},
  }),

  created() {
    this.buscar();
  },

  methods: {
    // https://developer.riotgames.com/docs/lol
    // Champion Loading Screen Assets
    // http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
    // The number at the end of the filename follows the same convention described in the Champion Splash Art.

    // Champion Square Assets
    // http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Aatrox.png

    // Champion Passive Assets
    // http://ddragon.leagueoflegends.com/cdn/10.21.1/img/passive/Anivia_P.png
    buscar() {
      http.get('/img/champion/splash/Akali_0.jpg')
        .then(({ config }) => {
          this.personagem = config;
        });
    },
  },
};
</script>

<style scoped>
  .selection-container {
    width: 100vw;
    height: 100vh;
  }

  .grid-layout {
    width: 100%;
    height: 100%;
    color: white;
    display: grid;
    grid-template-columns:  0.25fr 0.5fr 0.25fr;
    grid-template-rows:  0.10fr 0.7fr 0.2fr;
    grid-template-areas: 
      "ban ban ban"
      "team1 skin team2"
      "chat skin footer";
  }

  .grid-ban {
    grid-area: ban;
    z-index: 0;
  }
  .grid-team1 {
    grid-area: team1;
    z-index: 0;
  }
  .grid-chat {
    grid-area: chat;
    z-index: 0;
  }
  .grid-skin {
    grid-area: skin;
    z-index: 0;
  }
  .grid-team2 {
    grid-area: team2;
    z-index: 0;
  }
</style>
