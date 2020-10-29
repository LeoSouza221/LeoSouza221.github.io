<template lang="pug">
  .team-container
    .team-character-box(v-for="(url, index) in personagens" :key="index")
      .character-info(v-if="index !== 4")
        .character-text
          h5 {{ url.name }}
          p Invocador {{ index + 1 }}
        .character-avatar
          v-avatar(size="100%")
            v-img(
              :src="url.avatar"
              contain
              height="100%"
              width="100%"
            )
        .separator-line
      .character-info
        .separator-line
</template>

<script>
export default {
  name: 'SelecaoCampeoesTeamOne',

  data: () => ({
    personagens: [
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Camille.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_1.jpg',
        name: 'Camille',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/MissFortune.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_4.jpg',
        name: 'MissFortune',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Hecarim.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_3.jpg',
        name: 'Hecarim',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Nami.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nami_7.jpg',
        name: 'Nami',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Malphite.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_6.jpg',
        name: 'Malphite',
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

  .character-info {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .character-avatar {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 50%;
    transform: translateY(-50%);
    right: 35px;
    border: 2px solid rgb(138, 18, 9);
    border-radius: 50%;
  }

  .separator-line {
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to left, rgb(88, 87, 65), rgba(255, 255, 255, 0));
    position: absolute;
    top: 0;
  }

  .separator-line:after {
    content: " ";
    position: absolute;
    height: 8px;
    width: 8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    right: -9px;
    border: 1px solid #988343;
    transition: all 0.25s;
  }
  
  .character-text {
    height: 50px;
    width: 70%;
    text-align: right;
  }
</style>