<template lang="pug">
  .defaultBody
    .default-container.text-container
      v-layout(align-center fill-height justify-center)
        v-flex(xs11)
          v-card(flat height="400")
            slot(name="text-container")
    .default-container.default-blend.extra-content(
      :style=`{
        backgroundImage: image,
        backgroundColor: color,
      }`
    )
      v-layout(justify-center align-center fill-height)
        slot(name="extra-content")
    .default-container.carousel-container
      slot(name="carousel-container")
        .background-image-align
          img(
            src="@/../public/images/balance.png"
            :width="imageScale"
            :height="imageScale"
            style="opacity: 0.3"
          )
        .align-item-text
          h2 {{ carouselTitle }}
        .align-item-content
          d-carousel(:carouselItems="carouselItems")
    .default-container.default-blend.contacts-container(
      :style=`{
        backgroundImage: image,
        backgroundColor: color,
        height: contactsHeight,
      }`
    )
      slot(name="contacts-container")
        .align-item-text
          h2 Contatos
        .align-item-content
          .my-grid.contact-grid
            .contact-grid-item
              d-map
            .contact-grid-item            
              d-form
            .contact-grid-item.align-contact-grid
              .contacts-icons     
                a
                  v-icon(dark large) fa fa-envelope
                a
                  v-icon(dark large) fab fa-facebook-square
                a
                  v-icon(dark large) fab fa-whatsapp
</template>

<script>
import DefaultCarousel from './DefaultCarousel.vue';
import DefaultForm from './DefaultForm.vue';
import DefaultMap from './DefaultMap.vue';

export default {
  components: {
    'd-carousel': DefaultCarousel,
    'd-form': DefaultForm,
    'd-map': DefaultMap,
  },
  props: ['image', 'color', 'itemsImage', 'carouselTitle', 'carouselItems'],
  computed: {
    contactsHeight() {
      if (this.$vuetify.breakpoint.width > '1264') {
        return '60vh';
      }
      if (this.$vuetify.breakpoint.width <= '450') {
        return '100%';
      }
      return '80vh';
    },
    imageScale() {
      if (this.$vuetify.breakpoint.width <= '450') {
        return '80%';
      }
      return '100%';
    }
  },
  name: 'DefaultBody',
}
</script>

<style scoped>

  .text-container {
    height: calc(100vh - 200px);
    animation: changeOpacity 3s;
  }
  @keyframes changeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .carousel-container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .align-item-text {
    height: 20%;
    width: 100%;
  }
  .align-item-content {
    display: flex;
    height: 80%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .background-image-align {
    width: 80vh;
    height: 80vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

  }
  .background-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contacts-container {
    display: flex;
    flex-direction: column;
  }
  .contact-grid {
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 0.4r;
  }
  .contact-grid-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .align-contact-grid {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contacts-icons {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    .text-container {
      height: 70vh;
      padding: 10px;
    }
    .contact-grid {
      grid-template-columns: 3fr;
      grid-template-rows: 1fr 1fr 0.4fr;
    }
    .align-contact-grid {
      grid-column-start: 1;
      grid-column-end: 1;
    }
    .contacts-icons {
      width: 100%;
    }
    .carousel-container {
      height: 100vh;
    }
    .background-image-align {
      width: 50vh;
      height: 50vh;
      transform: translateX(-40%);
    }
  }
</style>