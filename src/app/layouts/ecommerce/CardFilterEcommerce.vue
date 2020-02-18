<template lang="pug">
  v-dialog(
    v-model="dialog"
    max-width="300"
    persistent
  )
    v-card(style="overflow: hidden")
      v-toolbar.transparent(flat height="50")
        v-toolbar-title 
          v-icon.mx-3(size="20") fa fa-filter
          span Filtros
        v-spacer
        v-btn(
          @click.native="dialog = !dialog"
          icon
        ) 
          v-icon fa fa-times
      v-container(grid-list-xs)
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
      v-row(justify="center")
        v-btn.ma-3(@click="dialog = !dialog") Aplicar
</template>

<script>
import { EventBus } from '@/app/core/event-bus';

export default {
  name: 'CardFilter',
  props: ['itemsNavbar'],
  data: () => ({
    dialog: false,
  }),

  created() {
    EventBus.$on('open-filters', this.openDialog);
  },

  beforeDestroy() {
    EventBus.$off('open-filters');
  },

  methods: {
    openDialog() {
      this.dialog = true;
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