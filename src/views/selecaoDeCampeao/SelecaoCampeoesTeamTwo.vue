<template lang="pug">
  .team-container
    .team-character-box(v-for="(url, index) in personagens" :key="index")
      .character-background(
        :style="`background-image: linear-gradient(to right, transparent, rgb(2, 2, 37)), url(${url.skin});`"
      )
      .character-avatar
        v-avatar(size="100%")
          v-img(
            :src="url.avatar"
            contain
            height="100%"
            width="100%"
          )
</template>

<script>
export default {
  name: 'SelecaoCampeoesTeamOne',

  data: () => ({
    personagens: [
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Camille.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_5.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/MissFortune.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_4.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Hecarim.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_3.jpg', 
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Nami.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nami_7.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Malphite.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_6.jpg'
      },
    ],
  }),
}
</script>

<style scoped>
  .team-container {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .team-character-box {
    position: relative;
    width: 100%;
    height: 20%;
  }

  .character-background {
    height: 100%;
    width: 100%;
    background-color:  rgba(2, 2, 37, 0.4);
    background-size: cover;
    background-position-y: 30%;
    background-position-x: 50%;
  }

  .character-avatar {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    border: 2px solid rgb(177, 160, 7);
    border-radius: 50%;
  }
  
</style>