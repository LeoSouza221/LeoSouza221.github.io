<template lang="pug">
  .defaultCarousel
    v-card.transparent(flat tile)
      v-window(v-model="onboarding" reverse)
        v-window-item(
          v-for="(item, index) in carouselItems"
          :key="`card-${index}`"
        )
          v-card(
            max-width="300"
            class="mx-auto"
            height="400"
          )
            v-img(
              :src="item.src"
              width="300"
              max-height="300"
            )
            v-layout.ma-3(justify-center)
              h3 {{ item.title }}
            .carousel-infos
              p {{ item.text }}
      v-card-actions(class="justify-space-between")
        v-btn(
          text
          @click="prev"
        )
          v-icon mdi-chevron-left
        v-item-group(
          v-model="onboarding"
          class="text-center"
          mandatory
        )
          v-item(
            v-for="(item, index) in carouselItems"
            :key="`btn-${index}`"
            v-slot:default="{ active, toggle }"
          )
            v-btn(
              :input-value="active"
              icon
              @click="toggle"
            )
              v-icon mdi-record
        v-btn(
          text
          @click="next"
        )
          v-icon mdi-chevron-right
</template>

<script>
export default {
  props: ['carouselItems'],
  data: () => ({
    length: 3,
    onboarding: 0,
  }),
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    },
  },
  name: 'DefaultCarousel',
}
</script>

<style scoped>
  .carousel-infos {
    padding: 5px;
    font-size: 12px;
    text-align: justify;
  }
</style>
