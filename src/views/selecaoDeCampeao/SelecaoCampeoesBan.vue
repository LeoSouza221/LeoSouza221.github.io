<template lang="pug">
  .ban-container
    .ban-character
      .ban-col
        .ban-images(v-for="index in 5")
          v-img(
            src="http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/Brand.png"
            contain
            height="100%"
            width="100%"
          )
      .ban-col.col-left
        .ban-images(v-for="index in 5")
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
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ban-col {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .col-left {
    justify-content: flex-end;
    padding-right: 35px;
  }

  .ban-images {
    height: 35px;
    width: 35px;
    margin: 5px;
    background-color: rgb(46, 46, 46);
  }
</style>