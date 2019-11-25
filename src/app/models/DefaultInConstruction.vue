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
              .barrier-foot-main.barrier-foot-main-color
              .barrier-foot-shadow.barrier-foot-shadow-color
          .barrier-foot-left.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main.barrier-foot-main-color
              .barrier-foot-shadow.barrier-foot-shadow-color
          .barrier-shadow
    .screen-container
      .screen-toolbar.primary
      .screen-content
        v-avatar(
          dark
          size="140"
        )
          v-icon(style="font-size: 140px") fa fa-exclamation-circle
    .panel-container
      .panel-adjust
        .panel-board-main
          .panel-main
            .panel-text-container
              p EM OBRAS!!! AGUARDE
          .panel-left
          .panel-top
        .barrier-foot
          .barrier-foot-right.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main.panel-foot-main-color
              .barrier-foot-shadow.panel-foot-shadow-color
          .barrier-foot-left.foot-adjust
            .barrier-foot-bar
              .barrier-foot-main.panel-foot-main-color
              .barrier-foot-shadow.panel-foot-shadow-color
          .barrier-shadow
</template>

<style scoped>
  .defaultConstruction {
    height: 100%;
    width: 100%;
    position: relative;
  }
  /* ------------- BARRIER ----------------*/
  .barrier-container {
    position: absolute;
    height: 50%;
    width: 50%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: leftSlide 3s forwards;
  }
  @keyframes leftSlide {
    from {
      left: 0;
    }
    to {
      left: 40%;
      transform: translateX(-50%);
    }
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
    position: absolute;
    z-index: 1;
  }
  .barrier-foot-main-color {
    background: yellow;
  }
  .barrier-foot-left {
    width: 100%;
    height: 90%;
  }
  .barrier-foot-shadow {
    height: 100%;
    width: 6px;
    position: absolute;
    transform: skewY(-50deg);
    right: 0;
    top: -3px;
    z-index: 1;
  }
  .barrier-foot-shadow-color {
    background: rgb(199, 199, 62);
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
    animation: topSlide 3s forwards;
  }
   @keyframes topSlide {
    from {
      top: 0;
    }
    to {
      top: 10%;
    }
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
  /* --------------------------------------- */
  .panel-container {
    position: absolute;
    height: 70%;
    width: 25%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: rightSlide 3s forwards;
  }
  @keyframes rightSlide {
    from {
      right: 0;
    }
    to {
      right: 5%;
    }
  }
  .panel-adjust {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 85% 15%;
    grid-template-columns: 100%;
  }
  .panel-board-main {
    height: 100%;
    width: 100%;
    position: relative;
    bottom: 0px;
    z-index: 2;
  }
  .panel-main {
    background: rgb(32, 32, 32);
    height: calc(100% - 10px);
    width: calc(100% - 20px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    grid-row-start: 1;
    grid-row-end: 1;
    border: solid 15px black;
    box-shadow: inset 4px 4px 2px black;
    z-index: 2;
  }
  .panel-text-container {
    font-family: 'Raleway Dots', cursive;
    font-weight: 400;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 50px;
    color: white;
    text-align: center;
  }
  .panel-text-container p {
    text-shadow:  0 0 10px white,
      0 0 20px white,
      0 0 30px white,
      0 0 40px yellow,
      0 0 60px yellow,
      0 0 80px yellow;
    animation: light 2s infinite cubic-bezier(0.075, 0.1, 0.08, 1);
  }
  @keyframes light{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .panel-left {
    background: rgb(32, 32, 32);
    height: 98%;
    width: 13px;
    position: absolute;
    right: 0;
    bottom: 5px;
    transform: skewY(-45deg);
    border-radius: 0 10px 0 0;
  }
  .panel-top {
    background: rgb(32, 32, 32);
    height: 10px;
    width: calc(100% - 20px);
    position: absolute;
    top: 0px;
    left: 52%;
    transform: skewX(-50deg) translateX(-50%);
    border-radius: 0 10px 0 0;
  }
  .panel-foot {
    grid-row-start: 2;
    grid-row-end: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
  .panel-foot-main-color {
    background: black;
  }
  .panel-foot-shadow-color {
    background: rgb(32, 32, 32);
  }
  @media only screen and (max-width: 1100px) {
    .panel-text-container {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 850px) {
    .panel-container {
      width: 35%;
    }
  }
  @media only screen and (max-width: 800px) {
    .barrier-container {
      height: 35%;
    }
    @keyframes leftSlide {
      from {
        left: -100px;
      }
      to {
        left: 0;
        transform: translateX(0);
      }
    }
    .barrier-adjust {
      grid-template-rows: 40% 60%;
    }
    .barrier-foot-bar {
      width: 30px;
    }
    .barrier-foot-main {
      width: 26px;
    }
    .barrier-shadow {
      height: 20%;
    }
    .barrier-foot-shadow {
      top: -2px;
    }
    .barrier-board-top {
      border-radius: 0 10px 0 0;
    }
    .screen-container {
      width: 90%;
    }
    .panel-container {
      height: 50%;
      width: 50%;
    }
    .panel-text-container {
      font-size: 30px;
    }
    .panel-adjust {
      grid-template-rows: 80% 20%;
    }
    .panel-left {
      bottom: 3.5px;
      border-radius: 0 10px 0 5px;
    }
    .panel-top {
      left: 53%;
    }
    .panel-text-container {
      font-size: 25px;
    }
  }
</style>