<template lang="pug">
  img(
    :src="personagens.config.url"
  )
</template>

<script>
import http from '@/utils/http';

export default {
  name: 'SelecaoCampeoes',

  data: () => ({
    personagens: {},
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
      http.get('/img/champion/splash/Poppy_1.jpg')
        .then((response) => {
          this.personagens = response;
        });
    },
  },
};
</script>
