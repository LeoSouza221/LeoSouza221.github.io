<template lang="pug">
  .defaultConstruction
    .barrier-container
      .barrier-adjust
        .barrier-board
          .barrier-board-main
          .barrier-board-left
          .barrier-board-top
        .barrier-foot
          .barrier-foot-right.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main
              .barrier-foot-shadow
          .barrier-foot-left.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main
              .barrier-foot-shadow
          .barrier-shadow
    .screen-container
      .screen-toolbar.primary
      .screen-content
        v-avatar(
          dark
          size="140"
        )
          v-icon(style="font-size: 140px") fa fa-exclamation-circle
    .barrier-container2
      .barrier-adjust
        .barrier-board
          .barrier-board-main
          .barrier-board-left
          .barrier-board-top
        .barrier-foot
          .barrier-foot-right.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main
              .barrier-foot-shadow
          .barrier-foot-left.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main
              .barrier-foot-shadow
          .barrier-shadow
</template>

<style scoped>
  .defaultConstruction {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .barrier-container2 {
    position: absolute;
    height: 50%;
    width: 50%;
    bottom: 5%;
    right: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .barrier-container {
    position: absolute;
    height: 50%;
    width: 50%;
    bottom: 5%;
    left: 40%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .barrier-adjust {
    position: relative;
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 100%;
  }
  .barrier-board {
    grid-row-start: 1;
    grid-row-end: 1;
    height: 100%;
    width: 100%;
    position: relative;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .barrier-board-main {
    background: linear-gradient(45deg, 
      yellow 10%, black 10%,
      black 20%, yellow 20%,
      yellow 30%, black 30%,
      black 40%, yellow 40%,
      yellow 50%, black 50%,
      black 60%, yellow 60%,
      yellow 70%, black 70%,
      black 80%, yellow 80%,
      yellow 90%, black 90%
    );
    position: absolute;
    bottom: -2px;
    height: calc(100% - 10px);
    width: calc(100% - 5px);
    bottom: 0;    
    z-index: 2;
  }
  .barrier-board-left {
    background: rgb(199, 199, 62);
    height: 94%;
    width: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: skewY(-30deg);
  }
  .barrier-board-top {
    background: rgb(199, 199, 62);
    height: 6px;
    width: 99%;
    position: absolute;
    top: 6px;
    left: 2px;
    transform: skewX(-50deg); 
  }
  .barrier-foot {
    grid-row-start: 2;
    grid-row-end: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
  .foot-adjust {
    display: flex;
    justify-content: center;
  }
  .barrier-foot-right {
    width: 100%;
    height: 90%;
  }
  .barrier-foot-bar {
    width: 50px;
    height: 100%;
    position: relative;
  }
  .barrier-foot-main {
    height: 100%;
    width: 45px;
    background: yellow;
    position: absolute;
    z-index: 1;
  }
  .barrier-foot-left {
    width: 100%;
    height: 90%;
  }
  .barrier-foot-shadow {
    background: rgb(199, 199, 62);
    height: 100%;
    width: 6px;
    position: absolute;
    transform: skewY(-50deg);
    right: 0;
    top: -3px;
    z-index: 1;
  }
  .barrier-shadow {
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 5%;
    background: rgb(202, 191, 191);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.5;
  }
  .screen-container {
    height: 60%;
    width: 50%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    background: white;
    z-index: 0;
    box-shadow: 7px -7px 5px grey;
    border-radius: 20px;
  }
  .screen-toolbar {
    height: 15%;
    width: 100%;
    border-radius: 20px 20px 0 0 ;
  }
  .screen-content {
    height: 50%;
    width: 100%;
    border-radius: 20px 20px 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>