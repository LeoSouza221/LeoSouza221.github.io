<template lang="pug">
  .vetLayout
    div(:style=`{
      width: '100vw',
      height: 'calc(100vh - 50px)',
      backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
      backgroundColor: 'rgb(0, 0, 0, .7)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'fixed',
      zIndex: -1,
    }`)
    d-header(
      :height="60"
      color="#fff"
      flat=true
      dark=false
    )
      template(v-slot:item-left)
        v-layout(justify-center row :align-center="verifyMobile()" fill-height)
          v-flex(xs2 md1)
            v-avatar(
              size="50"
              style="border: solid 2px black; border-radius: 50%;"
            )
              v-icon(large) fa fa-paw
          v-flex(xs10 md11)
            h1 Veterinário
      template(v-slot:menu)
        d-menu(:menuItems="itens" dark=false)
    d-body(
      color="rgb(0, 0, 0, .7)"
      :itemsImage="itemsImage"
      carouselTitle="Serviços"
      :carouselItems="carouselItems"
      hover=true
      :xs="verifyMobile() ? 'xs7' : 'xs12'"
    )
      template(v-slot:text-container)
        v-card-title.text-center Veterinária Doguinho
        v-layout(justify-center row fill-height)
          v-flex(xs10 md5)
            div(:class="verifyMobile() ? '' : 'text-grid-content'")
              p.mx-5(style="text-align: justify; color: rgb(156, 153, 153)") {{ apresentation }}
          v-flex(xs10 md7)
            div(style="display: flex; width: 100%; height: 100%; justify-content: center; ")
              iframe(
                :width="verifyMobile() ? '450px' : '300px'"
                :height="verifyMobile() ? '300px' : '200px'"
                src="https://www.youtube.com/embed/XCJyMxuu2gI"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              )
      template(v-slot:extra-content)
        section.vet-extra-content
          div.title-vet-extra-content
            h2.white--text Atuações
          div.content-vet-extra-content
            div.my-grid.my-grid-vet
              template(v-for="i in 3")
                div.my-grid-item-vet(data-anima="esquerda")
                  div.avatar-grid
                    v-avatar(dark size="80" style="border: solid 2px white; border-radius: 50%;")
                      v-icon(large style="color: #fff;") fa fa-balance-scale
                  div.text-grid
                    h4.text-grid-title Lorem
                    div.text-grid-content 
      template(v-slot:carousel-container)
  //- //-   template(v-slot:contacts-container)
</template>

<script>
import Pagina from '@/app/core/Pagina.vue';
import DefaultHeader from '@/app/models/DefaultHeader.vue';
import DefaultMenu from '@/app/models/DefaultMenuItens.vue';
import DefaultBody from '@/app/models/DefaultBody.vue';
import isMobile from '@/mixins/isMobile';
// import onScroll from '@/mixins/onScroll';

export default {
  mixins: [isMobile],
  components: {
    Pagina,
    'd-header': DefaultHeader,
    'd-menu': DefaultMenu,
    'd-body': DefaultBody,
  },
  data: () => ({
    apresentation1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    apresentation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    animacaoClass: null,
    teste: null,
    itens: [
      {
        text: 'Sobre',
      },
      {
        text: 'Serviços',
      },
      {
        text: 'Contatos',
      },
    ],
    itemsImage: [
      {
        src: 'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',
      },
    ],
    carouselItems: [
      {
        title: 'vet 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'vet 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'vet 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
    ],
  }),
  mounted() {
    const elementos = document.querySelectorAll('[data-anima]');
    const app = this;
    this.animacaoClass = 'animacao';
    if (elementos.length) {
      this.teste = 'aki3'
      window.addEventListener('scroll', function() {
        this.teste = 'aki4'
        app.animaScroll(elementos);
      })
    }
  },
  computed: {
    imageScale() {
      if (this.$vuetify.breakpoint.width <= '450') {
        return '80%';
      }
      return '100%';
    }
  },
  methods: {
    animaScroll(elementos) {
      this.teste = 'aki';
      const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4);
      elementos.forEach((elemento) => {
        this.teste = 'aki2';

        if (topoPaginaNaJanela > elemento.offsetTop) {
          elemento.classList.add(this.animacaoClass);
        } else {
          elemento.classList.remove(this.animacaoClass);
        }
      });
    },
  },
  name: 'LayoutVeterinario',
}
</script>

<style scoped>
  .vetLayout {
    font-family: 'Merriweather', serif;
    color: rgb(255, 255, 255);
  }
  .card-image {
    background-image: url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .vet-extra-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  .title-vet-extra-content {
    height: 20%;
    width: 100%;
  }
  .content-vet-extra-content {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .my-grid-vet {
    width: 100%;
    height: 80%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15%;
  }
  .my-grid-item-vet {
    display: flex;
    justify-content: center;
    border: solid 2px black;
    border-radius: 20px;
    box-shadow: 2px 2px 30px #000;
    padding: 2px;
    flex-direction: column;
  }
  .avatar-grid {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-grid {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }
  .text-grid-title {
    height: 20%;
    width: 100%;
    text-align: center;
  }
  .text-grid-content {
    height: 80%;
    width: 100%;
    text-align: justify;
    padding: 10px;
  }
  .text-grid-content p {
    font-size: 11px;
  }
  @media only screen and (max-width: 600px) {
    .my-grid-vet {
      width: 100%;
      height: 80%;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 15px;
    }
    .text-grid-content p {
      font-size: 10px;
    }
  }
</style>
