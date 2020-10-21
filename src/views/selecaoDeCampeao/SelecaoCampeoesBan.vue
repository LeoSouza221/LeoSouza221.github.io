<template lang="pug">
  .ban-container
    .ban-caracter
      .ban-image(v-for="index in 10")
        v-img(
          src="http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Aatrox.png"
          contain
          height="100%"
          width="100%"
        )
</template>

<style scoped>
  .ban-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ban-caracter {
    height: 70%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ban-image {
    height: 100%;
    width: 10%;
    border: 2px solid rgb(177, 160, 7);
    margin: 5px;
  }
</style>