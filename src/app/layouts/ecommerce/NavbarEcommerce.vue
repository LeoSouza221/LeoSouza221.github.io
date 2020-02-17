<template lang="pug">
  v-navigation-drawer(
    v-model="navSlide"
    light
    color="transparent"
    height="calc(100% - 64px)"
    absolute
    temporary
  ) 
    div.mt-2(style="display: inline-flex")
      v-icon.mx-3(size="20") fa fa-filter
      h3 Filtros
    v-list
      template(v-for="(item, index) in itemsNavbar")
        v-list-item(
          v-if="item.title"
          :key="index"
          dense
        )
          v-checkbox(v-if="item.type === 'checkbox'" :label="item.title" dense)
          v-range-slider.my-2(
            v-else
            v-model="item.range"
            :max="item.max"
            :min="item.min"
            hide-details
            class="align-center"
          )
            template(v-slot:prepend)
              v-text-field(
                :value="item.range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
            )
            template(v-slot:append)
              v-text-field(
                :value="item.range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              )
        v-divider(
          v-else-if="item.divider"
          :key="index"
        )
        v-subheader(
          v-else-if="item.header"
          :key="item.header"
        ) 
          strong {{ item.header }}
</template>

<script>

export default {
  name: 'NavbarEcommerce',
  props: ['itemsNavbar', 'drawer'],
  data: () => ({
    navSlide: false,
  }),
  watch: {
    drawer() {
      this.navSlide = this.drawer;
    }
  }
}
</script>

<style scoped>
  .v-input--selection-controls {
    margin: 0;
    padding: 0;
  }
</style>
