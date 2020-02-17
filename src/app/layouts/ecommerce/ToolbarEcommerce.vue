<template lang="pug">
  v-toolbar(
    flat
    style="border-bottom: solid 1px grey"
  )
    v-row(
      justify="center"
      align="center"
    )
      v-col(cols="2" style="display: inline-flex")
        v-icon.mr-3 fa fa-store
        h1 Loja
      v-col(cols="2")
        v-menu(offset-y)
          template(v-slot:activator="{ on }")
            v-btn(
              v-on="on"
              light
              text
            ) Departamentos
          v-list
            v-list-item(
              v-for="(item, index) in items"
              :key="index"
              @click="changeToolbar(item)"
            )
              v-list-item-icon
                v-icon {{ item.icon }}
              v-list-item-title {{ item.title }}
      v-col(cols="4")
        v-text-field.mt-4(
          label="Pesquisar"
          append-icon="fa fa-search"
        )
      v-col(cols="4")
        v-row(justify="end")
          v-menu(offset-y open-on-hover)
            template(v-slot:activator="{ on }")
              v-avatar.mr-4(v-on="on" style="border: solid 1px grey; border-radius: 50%; cursor: pointer")
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
import { EventBus } from '@/app/core/event-bus';

export default {
  name: 'ToolbarEcommerce',
  props: ['items'],
  methods: {
    changeToolbar(item) {
      EventBus.$emit('change-toolbar-items', item);
    }
  }
}
</script>