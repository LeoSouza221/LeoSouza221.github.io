<template lang="pug">
  .ban-container
    .ban-character
      .ban-image(v-for="index in 10")
        v-img(
          src="http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Brand.png"
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
    background-color: rgba(0, 0, 0, 0.4);
  }

  .ban-character {
    height: 70%;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ban-image {
    height: 45px;
    width: 45px;
    border: 2px solid rgb(177, 160, 7);
    margin: 5px;
    background-color: rgb(46, 46, 46);
  }
</style>