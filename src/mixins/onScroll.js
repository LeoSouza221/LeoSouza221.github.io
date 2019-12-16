// const elementos = document.querySelector('[data-anima]');
// const animacaoClass = 'animacao';

// fucntion animaScroll() {
//   const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4);
//   elementos.forEach((elemento) => {
//     if (topoPaginaNaJanela > elemento.offsetTop) {
//       elemento.classList.add(animacaoClass);
//     } else {
//       elemento.classList.remove(animacaoClass);
//     }
//   });
// }

export default {
  methods: {
    animaScroll(elementos, animacaoClass) {
      const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4);
      elementos.forEach((elemento) => {
        if (topoPaginaNaJanela > elemento.offsetTop) {
          elemento.classList.add(animacaoClass);
        } else {
          elemento.classList.remove(animacaoClass);
        }
      });
    },
  },
}