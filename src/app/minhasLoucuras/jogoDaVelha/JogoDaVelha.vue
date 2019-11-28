<template lang="pug">
  .tela
    .fundo1
      .sol
      .montanhas
        .montanha(v-for="(alt, index) in mont" :key="index")
          .bloco(:style="{ top: altura(alt.alt) }")
    .fundo2
      .estrada
        .sinalizacao
      .linha-estrada1
      .linha-estrada2
    .linhazinha
    .texto
      h1 Jogo da véia
      .triangulo1
      .triangulo2
    .champison(v-if="capeao")
      p Vencedor: {{ capeao }}
    .jogo
      //- .rejogar
      //-   v-btn Rejogar
      .item(v-for="posicao in posicoes" :key="posicao.numero")
        .quadrado(@click="jogada(posicao.numero)")
          h4 {{ posicao.item }}
</template>

<script>
export default {
  data: () => ({
    capeao: '',
    numeroJogada: 1,
    fimDeJogo: false,
    vez: true,
    mont: [
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
      {
        alt: Math.floor(Math.random() * 100),
      },
    ],
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
  computed: {
    
  },
  methods: {
    altura(alt) {
      return `${40 + alt}px`;
    },
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
        this.capeao = item;
      }
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
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: 1fr;
  }
  .montanha {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    transform: rotate(45deg);
  }
  .bloco {
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(120deg, rgb(19, 0, 41) 25%, rgb(133, 2, 255) 100%)
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
    100% {
      top: 100%;
      height: 10px;
      opacity: 0;
    }
  }
  .linha-estrada2 {
    position: absolute;
    width: 100%;
    top: 50%;
    height: 5px;
    background: magenta;
    animation: caminho2 2s linear infinite;
  }
  @keyframes caminho2 {
    25% {
      top: 100%;
      height: 10px;
      opacity: 0;
    }
    50% {
      top: 0;
      height: 1px;
      opacity: 0;
    }
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
    animation: faixa 0.3s linear infinite;
  }
  @keyframes faixa {
    to{
      top: 60%;
      opacity: 0;
    }
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
  .quadrado {
    height: 100%;
    width: 100%;
    cursor: pointer;
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
  .texto {
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
    /* transform: rotate(-45deg); */
  }
  .triangulo1 {
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 200px solid cyan;
    transform: rotate(-10deg);
    z-index: 1;
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
    transform: rotate(-10deg);
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
    z-index: 4;
  }
  .rejogar {
    position: absolute;
    width: 400px;
    top: 7em;
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
  @media screen and (max-width: 400px){
    .jogo {
      height: 250px;
      width: 250px;
    }
    .texto {
      animation: virar 2s;
      transform: rotate(0deg);
      width: 100%;
      font-size: 12px;
      text-align: center;
    }
    .rejogar {
      width: 250px;
    }
    .champison {
      font-size: 30px;
    }
    .triangulo1 {
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-bottom: 80px solid cyan;
    }
    .triangulo2 {
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
  }
</style>


