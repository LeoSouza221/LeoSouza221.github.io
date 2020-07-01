<template lang="pug">
  .desenho
    .personagem
      .rosto-cima
        .sombra-rosto-cima
      .rosto-meio
        .sombra-rosto-meio
      .rosto-baixo
        .sombra-rosto-baixo
      .queixo
        .queixo-sombra
      .orelha-direita
        .ouvido.direito
        .sombra-orelha.direito
      .orelha-esquerda
        .ouvido.esquerdo
        .sombra-orelha.esquerdo
      .olhos
        .olho-direito
          .iris
        .olho-esquerdo
          .iris
      .nariz
      .traco
      .boca
    //- .luz
    .fundo

</template>

<style>
/* --------------------------------------*/
  .desenho {
    width: 100%;
    height: 100%;
    background-color: black;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

/* --------------------------------------*/

  .fundo {
    width: 800px;
    height: 800px;
    position: absolute;
    background-image: radial-gradient(circle, #e6ff43, #eaff67, #e9f596, #fff, rgba(255, 255, 255, 1));
    top: 0;
    box-shadow:
      0 0 60px 30px #fff,
      0 0 100px 60px #eaff67,
      0 0 140px 90px rgb(233, 228, 180);
    border-radius: 50%;
  }
  
  .personagem {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .rosto-cima {
    width: 500px;
    height: 300px;
    background-color: rgb(255, 255, 231);
    position: absolute;
    border-radius: 500px 500px 100px 100px;
    border-left: 1px solid black;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }

  .sombra-rosto-cima {
    width: 450px;
    height: 285px;
    background: rgb(94, 94, 94);
    position: absolute;
    border-radius: 500px 500px 100px 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .rosto-meio {
    width: 500px;
    height: 150px;
    background-color: rgb(255, 255, 231);
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
  }

  .sombra-rosto-meio {
    width: 450px;
    height: 100%;
    background: rgb(94, 94, 94);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);

  }

  .rosto-meio::before {
    content: "";
    position: absolute;
    height: 100%;
    border: 1px solid black;
    left: 9px;
    transform: rotate(-8deg);;
  }

  .rosto-baixo {
    width: calc(500px - 4.5%);
    height: 150px;
    position: absolute;
    background-color: rgb(255, 255, 231);
    top: 548px;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    z-index: 1;
  }

  .sombra-rosto-baixo {
    width: calc(435px - 4.5%);
    height: 100%;
    position: absolute;
    background: rgb(94, 94, 94);
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    z-index: 1;
  }

  .rosto-baixo::before {
    content: "";
    position: absolute;
    height: 200px;
    border: 1px solid black;
    left: 49px;
    top: -20px;
    transform: rotate(-31.5deg);
  }

  .queixo {
    width: calc(500px - 24.5%);
    height: 150px;
    position: absolute;
    background-color: rgb(255, 255, 231);
    position: absolute;
    top: 610px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 50% 50%;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    z-index: 0;
  }

  .queixo-sombra {
    width: calc(295px - 24.5%);
    height: 125px;
    position: absolute;
    background: rgb(94, 94, 94);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 50% 50%;
    z-index: 0;
  }

  .orelha-direita {
    width: 200px;
    height: 200px;
    background-color: rgb(255, 255, 231);
    position: absolute;
    top: 45px;
    right: 148px;
    transform: rotate(38deg);
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 120% 700% 0 0 / 500% 700%  50% 50%;
  }

  .orelha-esquerda {
    width: 200px;
    height: 200px;
    background-color: rgb(255, 255, 231);
    position: absolute;
    top: 45px;
    left: 148px;
    transform: rotate(-38deg);
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 700% 120% 0 0 / 700% 500% 50% 50%;
  }

  .ouvido {
    width: 130px;
    height: 130px;
    position: absolute;
    bottom: 0;
    background-color: rgb(172, 102, 125);
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 20px 10px rgb(51, 51, 51),
      inset 0 -3px 10px rgb(51, 51, 51);
    z-index: 1;
  }

  .sombra-orelha {
    width: 160px;
    height: 160px;
    position: absolute;
    bottom: 0;
    background: rgb(94, 94, 94);
    left: 50%;
    transform: translateX(-50%);
  }

  .esquerdo {
    border-radius: 700% 120% 0 0 / 700% 500% 50% 50%;
  }

  .direito {
    border-radius: 120% 700% 0 0 / 500% 700%  50% 50%;
  }

  .olhos {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
  }

  .olho-direito {
    width: 150px;
    height: 190px;
    float: right;
    position: relative;
    background-color: rgb(15, 15, 15);
    border-radius: 50% 0 50% 0;
    transform: rotate(20deg);
    box-shadow: inset 7px 0 15px rgb(112, 112, 112), inset 0 0px 5px rgb(94, 94, 94);
  }

  .olho-esquerdo {
    width: 150px;
    height: 190px;
    float: left;
    position: relative;
    background-color: rgb(15, 15, 15);
    border-radius: 0 50% 0 50%;
    transform: rotate(-20deg);
    box-shadow: inset 7px 0 15px rgb(112, 112, 112), inset 0 0px 5px rgb(94, 94, 94);
  }

  .iris {
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: rgb(202, 202, 202);
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%
  }

  .nariz {
    width: 50px;
    height: 30px;
    position: absolute;
    background-color: rgb(15, 15, 15);
    left: 50%;
    transform: translateX(-50%);
    top: 550px;
    z-index: 2;
    clip-path: polygon(0 0, 0 17%, 21% 100%, 79% 99%, 100% 17%, 100% 0);
  }

  .traco {
    width: 5px;
    height: 30px;
    position: absolute;
    background-color: rgb(15, 15, 15);
    left: 50%;
    transform: translateX(-50%);
    top: 580px;
    z-index: 2;
  }

  .boca {
    width: 120px;
    height: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 610px;
    z-index: 2;
    border-radius: 50% 50% 0 0;
    border-top: 5px solid rgb(15, 15, 15);
  }

/*--------------------------------------------------------*/

  .luz {
    width: 10px;
    height: 10px;
    background-color: yellow;
    position: absolute;
    top: 0;
    left: 10px;
    border-radius: 50%;
    animation: down 20s infinite linear;
    z-index: 2px;
  }
  
  @keyframes down {
    15% {
      top: 10%;
    }
    45% {
      left: 10%;
    }
    50% {
      left: 10%;
    }
    100% {
      left: 0;
      top: 90%;
      opacity: 0;
    }
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
  }

</style>