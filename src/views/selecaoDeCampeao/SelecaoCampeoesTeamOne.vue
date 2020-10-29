<template lang="pug">
  .team-container
    .team-character-box(v-for="(url, index) in personagens" :key="index")
      .character-background(
        :style="`background-image: linear-gradient(to left, transparent, rgb(2, 2, 37)), url(${url.skin});`"
      )
      .character-info(v-if="index !== 4")
        .character-avatar
          .character-avatar-box
            v-avatar(size="100%")
              img(
                :src="url.avatar"
              )
        .character-text
          h5 {{ url.name }}
          p(style="margin: 0;") Invocador {{ index + 1 }}
        .separator-line
</template>

<script>
export default {
  name: 'SelecaoCampeoesTeamOne',

  data: () => ({
    personagens: [
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Sett.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sett_0.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Nunu.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nunu_2.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Orianna.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Orianna_2.jpg', 
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Braum.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_2.jpg',
      },
      {
        avatar: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Twitch.png',
        skin: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Twitch_2.jpg'
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
    display: flex;
    align-items: center;
  }

  .character-info {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .character-background {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 2, 37, 0.4);
    background-size: cover;
    background-position-y: 10%;
    background-position-x: 50%;
    z-index: -1;
  }

  .character-avatar {
    width: 110px;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .character-avatar-box {
    width: 70px;
    height: 70px;
    border: 2px solid rgb(177, 160, 7);
    border-radius: 50%;
  }

  .separator-line {
    width: 95%;
    height: 1px;
    background-image: linear-gradient(to right, rgb(88, 87, 65), rgba(255, 255, 255, 0));
    position: absolute;
    top: 0;
    right: 0;
  }

  .separator-line:after {
    content: " ";
    position: absolute;
    height: 8px;
    width: 8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    left: -9px;
    border: 1px solid #988343;
    transition: all 0.25s;
  }
  
  .character-text {
    height: 70px;
    width: calc(100% - 110px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding-right: 15px;
  }
</style>