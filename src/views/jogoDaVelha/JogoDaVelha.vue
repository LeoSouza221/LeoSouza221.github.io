<template lang="pug">
  .tela
    .fundo1
      .sol
      .montanhas
    .fundo2
      .estrada
        .sinalizacao
      .linha-estrada1
      .linha-estrada2
    .linhazinha
    .jogo-titulo
      .triangulo1
      .triangulo2
      .titulo
        h1 Jogo da velha
    .champison(v-if="capeao")
      p {{ capeao }}
    .jogo-container
      .jogo-alinhar
        .jogo
          .item(v-for="posicao in posicoes" :key="posicao.numero")
            .quadrado(@click="jogada(posicao.numero)")
              h4 {{ posicao.item }}
      .rejogar
        v-btn(
          v-if="capeao"
          @click="replay"
          dark
          style="background: linear-gradient(170deg, rgb(19, 0, 41) 50%, rgb(15, 0, 71) 100%)"
        ) 
          v-icon(left small) fa fa-redo-alt
          span Rejogar
</template>

<script>
export default {
  data: () => ({
    capeao: '',
    numeroJogada: 1,
    vez: true,
    itemsDoJogo: {
      X: [],
      O: [],
    },
    jogosVencedores: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    posicoes: [
      {
        numero: 0,
        item: '',
      },
      {
        numero: 1,
        item: '',
      },
      {
        numero: 2,
        item: '',
      },
      {
        numero: 3,
        item: '',
      },
      {
        numero: 4,
        item: '',
      },
      {
        numero: 5,
        item: '',
      },
      {
        numero: 6,
        item: '',
      },
      {
        numero: 7,
        item: '',
      },
      {
        numero: 8,
        item: '',
      },
    ],
  }),
  methods: {
    jogada(numero) {
      if (!this.capeao) {
        if (this.vez) {
          if (!this.posicoes[numero].item) {
            this.posicoes[numero].item = 'X';
            this.vez = !this.vez;
            this.itemsDoJogo.X.push(numero);
            this.numeroJogada += 1;
          }
        } else {
          if (!this.posicoes[numero].item) {
            this.posicoes[numero].item = 'O';
            this.vez = !this.vez;
            this.itemsDoJogo.O.push(numero);
            this.numeroJogada += 1;
          }
        }
        if (this.numeroJogada >= 5) {
          this.conferirVencedor(this.posicoes[numero].item);
        }
      }
    },
    conferirVencedor(item) {
      const vencedor = this.jogosVencedores.filter((array) => {
        return array.every(num => this.itemsDoJogo[item].includes(num));
      });
      if (vencedor.length > 0) {
        this.capeao = `Vencedor: ${item}`;
      } 
      if (this.numeroJogada >= 10) {
        this.capeao = 'Empate';
      } 
    },
    replay() {
      this.capeao = "";
      this.itemsDoJogo.X = [];
      this.itemsDoJogo.O = [];
      this.numeroJogada = 1;
      this.vez = true;
      this.posicoes.forEach((posicao) => {
        posicao.item = "";
      });
    },
  },
  name: 'Jogo',
};
</script>

<style scoped>
  .tela {
    display: flex;
    justify-content: center !important;
    align-items: center;
    height: calc(100vh - 50px)!important;
    width: 100vw !important;
    overflow-y: hidden;
  }
  .fundo1 {
    position: absolute;
    top: 0;
    background: linear-gradient(rgb(18, 23, 95), magenta);
    height: 70% !important;
    width: 100vw !important;
    display: flex;
    align-items: flex-end;
  }
  .montanhas {
    width: 100vw;
    height: 150px;
    background: linear-gradient(rgb(133, 2, 255) 25%,rgb(19, 0, 41) 100%);
    clip-path: polygon(0% 100%, 9% 30%, 14% 66%, 21% 34%, 28% 73%, 34% 36%, 38% 81%, 44% 41%, 49% 70%, 53% 38%, 57% 70%, 62% 37%, 69% 75%, 75% 42%, 79% 91%, 86% 43%, 93% 100%, 100% 45%, 100% 100%);
  }

  .fundo2 {
    position: absolute;
    bottom: 0;
    height: 30% !important;
    width: 100vw !important;
    display: flex;
    height: 30% !important;
    width: 100vw !important;
    justify-content: center;
    background: repeating-linear-gradient(rgb(19, 0, 41), black);
    z-index: 2;
  }
  .sol {
    position: absolute;
    background:repeating-linear-gradient(yellow, magenta);
    box-shadow: 0 0 9px 0px #fff, 0 0 40px 5px red;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    bottom: -35%;
    right: 0;
    animation: sol 60s linear infinite;
  }
  @keyframes sol {
    45% {
      right: 45%;
      bottom: 70%;
    }
    50% {
      right: 50%;
      bottom: 75%;
    }
    55% {
      right: 55%;
      bottom: 70%;
    }
    100%{
      right: 90%;
      bottom: -35%;
    }
  }
  .linha-estrada1 {
    position: absolute;
    width: 100%;
    top: 0;
    height: 1px;
    background: magenta;
    animation: caminho 2s linear infinite;
  }

  @keyframes caminho {
    40%, 100% {
      top: 100%;
      height: 10px;
      opacity: 0;
    }
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }

  .linha-estrada2 {
    position: absolute;
    width: 100%;
    top: 0;
    height: 5px;
    background: magenta;
    animation: caminho 2s linear infinite;
    animation-delay: 2s
  }

  .linha-estrada3 {
    position: absolute;
    border-bottom: 30vh solid magenta;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    width: 5px;
    transform: rotate(10deg);
    z-index: 1;
  }
  .linha-estrada4 {
    position: absolute;
    border-bottom: 30vh solid magenta;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    width: 5px;
    transform: rotate(-10deg);
    z-index: 1;
  }
  .estrada {
    border-bottom: 30vh solid rgb(15, 0, 71);
    border-left: 10vw solid transparent;
    border-right: 10vw solid transparent;
    height: 0;
    width: 30vw;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  .sinalizacao {
    position: absolute;
    width: 10px;
    height: 12vh;
    top: 0;
    background: #fff;
    z-index: 1;
    animation: faixa 0.5s linear infinite;
  }

   @keyframes faixa {
    40%, 100% {
      top: 60%;
      opacity: 0;
    }
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }

  .jogo-container {
    width: 400px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70% 30%;
    z-index: 2;
  }
  .jogo {
    z-index: 10;
    height: 400px;
    width: 400px;
    background: repeating-linear-gradient(magenta, yellow);
    box-shadow: 0 0 10px white,
      0 0 20px white,
      0 0 30px white,
      0 0 40px yellow,
      0 0 60px yellow,
      0 0 80px yellow;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .jogo-alinhar {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
  }
  .quadrado {
    height: 100%;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item {
    background-color: white;
    opacity: 0.4;
  }
  .item2 {
      background-color: rgb(18, 23, 95);
      box-shadow:  0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #228DFF,
      0 0 40px #228DFF,
      0 0 70px #228DFF;
  }
  .jogo-titulo {
    font-family: 'Faster One', cursive;
    font-size: 20px;
    height: 200px;
    width: 400px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .titulo {
    position: absolute;
    top: 80px;
    left: 40px;
    z-index: 1;
    animation: elastico 2s cubic-bezier(.75,-0.8,0,1.75) forwards;
  }
  .triangulo1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 200px solid cyan;
    z-index: 1;
    animation: elastico 2s cubic-bezier(.75,-0.8,0,3) forwards;
  }
  .triangulo2 {
    position: absolute;
    top: 2%;
    left: 5%;
    width: 0;
    height: 0;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 200px solid rgb(11, 14, 56);
    transform: rotate(-10deg);
    z-index: 0;
    animation: elastico 2.5s cubic-bezier(.75,-0.8,0,3) forwards;
  }
  h1 {
    z-index: 2;
    color: rgb(18, 23, 95);
    text-shadow: 0 0 10px #fff,
      0 0 20px #fff ,
      0 0 30px #fff,
      0 0 40px rgb(18, 23, 95),
      0 0 50px rgb(18, 23, 95),
      0 0 60px rgb(18, 23, 95),
      0 0 70px rgb(18, 23, 95);
  }
  @keyframes elastico {
    from {
      transform: translateX(-100px) rotate(-10deg);
    }
    to {
      transform: translateX(0) rotate(-10deg);
    }
  }
  h4 {
    font-size: 80px;
  }
  .champison {
    color: magenta;
    padding: 2px;
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Faster One', cursive;
    height: 200px;
    width: 100%;
    text-align: center;
    animation: pisca 2s infinite;
    z-index: 10;
  }
  .rejogar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes pisca {
    50% {
      color: white;
      font-size: 80px;
      text-shadow:  0 0 10px white,
      0 0 20px white,
      0 0 30px white,
      0 0 40px yellow,
      0 0 60px yellow,
      0 0 80px yellow;
    }
  }
  @media screen and (max-width: 600px){
    .jogo {
      height: 250px;
      width: 250px;
    }
    .jogo-titulo {
      animation: virar 2s;
      transform: rotate(0deg);
      width: 100%;
      font-size: 12px;
      text-align: center;
    }
    .rejogar {
      width: 100%;
    }
    .champison {
      top: 15%;
      font-size: 30px;
    }
    .titulo {
      position: absolute;
      top: 20px;
      left: 10px;
      z-index: 1;
    }
    .triangulo1 {
      left: 10px;
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-bottom: 80px solid cyan;
    }
    .triangulo2 {
      left: 20px;
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-bottom: 80px solid rgb(11, 14, 56);
    }
    @keyframes pisca {
      50% {
        color: white;
        font-size: 40px;
        text-shadow:  0 0 10px white,
        0 0 20px white,
        0 0 30px white,
        0 0 40px yellow,
        0 0 60px yellow,
        0 0 80px yellow;
      }
    }
    h4 {
      font-size: 40px;
    }
    .estrada {
      width: 60vw;
    }
  }
</style>


