<template lang="pug">
  .defaultCarousel
    v-card(flat tile)
      v-window(v-model="onboarding" reverse)
        v-window-item(
          v-for="n in length"
          :key="`card-${n}`"
        )
          v-card(
            color="grey"
            height="200"
          )
            v-row(
              class="fill-height"
              align="center"
              justify="center"
              tag="v-card-text"
            )
              h1(style="font-size: 5rem;" class="white--text") Slide {{ n }}
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
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot:default="{ active, toggle }"
          )
            v-btn(
              :input-value="active"
              icon
              @click="toggle"
            )
              v-iconmdi-record
        v-btn(
          text
          @click="next"
        )
              v-icon mdi-chevron-right
</template>

<script>
export default {
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
}
</script>