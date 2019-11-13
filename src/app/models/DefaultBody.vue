<template lang="pug">
  .defaultBody
    .default-container.text-container
      v-layout(align-center fill-height justify-center)
        v-flex(xs11)
          v-card(flat height="400")
            slot(name="text-container")
    v-divider.mb-5
    .default-container.default-blend.extra-content(
      :style=`{
        backgroundImage: image,
        backgroundColor: color,
      }`
    )
      v-layout(justify-center align-center fill-height)
        slot(name="extra-content")
    v-divider.mb-5    
    .default-container.carousel-container
      slot(name="carousel-container")
        .background-image-align
          img(
            src="@/../public/images/balance.png"
            width="100%"
            height="100%"
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
      }`
    )
      slot(name="contacts-container")
        .align-item-text
          h2 Contatos
        .align-item-content
          .my-grid.contact-grid
            .contact-grid-item
              span teste
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

export default {
  components: {
    'd-carousel': DefaultCarousel,
    'd-form': DefaultForm,
  },
  props: ['image', 'color', 'itemsImage', 'carouselTitle', 'carouselItems'],
  name: 'DefaultBody',
}
</script>

<style scoped>

  .text-container {
    height: calc(100vh - 200px);
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
    height: 80vh;
    display: flex;
    flex-direction: column;
  }
  .contact-grid {
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 0.3fr;
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
</style>