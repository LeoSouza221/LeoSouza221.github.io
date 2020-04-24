<template lang="pug">
  v-toolbar(
    flat
    style="border-bottom: solid 1px grey"
    extended
  )
    v-row(
      justify="center"
      align="center"
    )
      v-btn(
        icon
        absolute
        left
        v-if="!verifyMobile()"
        @click="openFilter"
      )
        v-icon(size="20") fa fa-filter
      v-icon.mr-3 fa fa-store
      h1() Loja
    template(v-slot:extension)
      v-row(
        justify="center"
        align="center"
      )
        v-col(:cols="!verifyMobile() ? 3 : 2")
          v-menu(offset-y)
            template(v-slot:activator="{ on }")
              v-btn(
                v-on="on"
                light
                text
                :icon="!verifyMobile()"
                style="color: rgba(0,0,0,.54)"
              ) 
                v-icon(:left="verifyMobile()") fa fa-boxes
                span(v-if="verifyMobile()") Departamentos
            v-list
              v-list-item(
                v-for="(item, index) in items"
                :key="index"
                @click="changeToolbar(item)"
              )
                v-list-item-icon
                  v-icon {{ item.icon }}
                v-list-item-title {{ item.title }}
        v-col(:cols="!verifyMobile() ? 6 : 4")
          v-text-field.mt-4(
            label="Pesquisar"
            append-icon="fa fa-search"
          )
        v-col(:cols="!verifyMobile() ? 3 : 4")
          v-row(justify="end")
            v-menu(offset-y open-on-hover)
              template(v-slot:activator="{ on }")
                v-avatar.mr-4.mb-2(v-on="on" 
                  :style=`
                    verifyMobile() ?
                    'border: solid 1px grey; border-radius: 50%; cursor: pointer' :
                    'border: none;'
                    `
                  )
                  v-icon fa fa-user
              v-list
                v-list-item(
                  @click=""
                )
                  v-list-item-icon
                    v-icon far fa-user
                  v-list-item-title Perfil
                v-list-item(
                  @click=""
                )
                  v-list-item-icon
                    v-icon fas fa-sign-out-alt
                  v-list-item-title Sair
</template>

<script>
import { EventBus } from '@/utils/event-bus';
import isMobile from '@/mixins/isMobile';

export default {
  name: 'ToolbarEcommerce',
  props: ['items'],
  mixins: [isMobile],
  data: () => ({
    drawer: true,
  }),
  methods: {
    changeToolbar(item) {
      EventBus.$emit('change-toolbar-items', item);
    },
    openFilter() {
      EventBus.$emit('open-filters');
    }
  }
}
</script>