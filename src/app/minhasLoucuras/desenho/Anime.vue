<template lang="pug">
  .desenho
    .personagem
      .rosto-cima
      .rosto-meio
      .rosto-baixo
      .queixo
      .orelha-direita
        .ouvido.direito
      .orelha-esquerda
        .ouvido.esquerdo
      .olhos
        .olho-direito
          .iris
        .olho-esquerdo
          .iris
      .nariz
      .traco
      .boca
    .fundo
</template>

<style>
  .desenho {
    width: 100%;
    height: 100%;
    background-color: grey;
    overflow: hidden;
    position: relative;
  }
  
  .personagem {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  
  .rosto-cima {
    width: 500px;
    height: 300px;
    background-color: white;
    position: absolute;
    border-radius: 500px 500px 100px 100px;
    border: 3px solid black;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }

  .rosto-meio {
    width: 500px;
    height: 150px;
    background-color: white;
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
  }

  .rosto-meio::before {
    content: "";
    position: absolute;
    height: 100%;
    border: 2px solid black;
    left: 9px;
    transform: rotate(-8deg);;
  }

  .rosto-meio::after {
    content: "";
    position: absolute;
    height: 100%;
    border: 2px solid black;
    right: 10px;
    transform: rotate(8deg);
  }

  .rosto-baixo {
    width: calc(500px - 4.5%);
    height: 150px;
    position: absolute;
    background-color: white;
    top: 548px;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    z-index: 1;
  }

  .rosto-baixo::after {
    content: "";
    position: absolute;
    height: 200px;
    border: 2px solid black;
    right: 50px;
    top: -20px;
    transform: rotate(31.5deg);
  }

  .rosto-baixo::before {
    content: "";
    position: absolute;
    height: 200px;
    border: 2px solid black;
    left: 49px;
    top: -20px;
    transform: rotate(-31.5deg);
  }

  .queixo {
    width: calc(500px - 24.5%);
    height: 150px;
    position: absolute;
    background-color: white;
    top: 610px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 50% 50%;
    border-left: 3px solid black;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    z-index: 0;
  }

  .orelha-direita {
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    top: 45px;
    right: 148px;
    transform: rotate(38deg);
    border-left: 3px solid black;
    border-right: 3px solid black;
    border-top: 3px solid black;
    border-radius: 120% 700% 0 0 / 500% 700%  50% 50%;
  }

  .orelha-esquerda {
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    top: 45px;
    left: 148px;
    transform: rotate(-38deg);
    border-left: 3px solid black;
    border-right: 3px solid black;
    border-top: 3px solid black;
    border-radius: 700% 120% 0 0 / 700% 500% 50% 50%;
  }

  .ouvido {
    width: 150px;
    height: 180px;
    position: absolute;
    bottom: 0;
    background-color: rgb(172, 102, 125);
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 20px 10px rgb(51, 51, 51),
      inset 0 -3px 10px rgb(51, 51, 51);
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
    box-shadow: inset 7px 0px 5px rgb(112, 112, 112);
  }

  .olho-esquerdo {
    width: 150px;
    height: 190px;
    float: left;
    position: relative;
    background-color: rgb(15, 15, 15);
    border-radius: 0 50% 0 50%;
    transform: rotate(-20deg);
    box-shadow: inset -7px 0px 5px rgb(112, 112, 112);
  }

  .iris {
    width: 20px;
    height: 20px;
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

</style>