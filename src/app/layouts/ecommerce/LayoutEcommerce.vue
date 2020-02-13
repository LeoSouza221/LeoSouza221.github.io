<template lang="pug">
  .e-commerce
    v-card(width="100%" height="100%")
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
                  @click=""
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
                  v-avatar.mr-4(v-on="on" style="border: solid 1px grey; border-radius: 50%")
                    v-icon fa fa-user
                v-list
                  v-list-item
                    v-list-item-icon
                      v-icon far fa-user
                    v-list-item-title Perfil
                  v-list-item
                    v-list-item-icon
                      v-icon fas fa-sign-out-alt
                    v-list-item-title Sair
      v-navigation-drawer(
        v-model="drawer"
        light
        color="white"
        height="calc(100% - 64px)"
      )
        h2 Filtros
        v-list-group(
          v-for="item in itemsNavbar"
          :key="item.title"
          v-model="item.active"
          no-action
        )
        
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(v-text="item.title")
          v-list-item(
            v-for="subItem in item.items"
            :key="subItem.title"
            @click="")
          
            v-list-item-content
              v-list-item-title(v-text="subItem.title")
    
</template>
  
<script>

export default {
  data: () => ({
    drawer: true,
    items: [
      {
        title: 'Livros',
        icon: 'fa fa-book'
      },
      {
        title: 'Roupas',
        icon: 'fa fa-tshirt'
      },
      {
        title: 'Eletronicos',
        icon: 'fa fa-laptop'
      },
      {
        title: 'Eletrodomesticos',
        icon: 'fa fa-plug'
      },
    ],
    itemsNavbar: [
      {
        title: 'Preco',
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
        ],
      },
      {
        title: 'Frete',
        items: [
          { title: 'Gratis' },
          { title: 'ate 50 reais' },
          { title: 'ate 100 reais' },
        ],
      },
      {
        title: 'Marca',
        active: true,
        items: [
          { title: 'Marca 1' },
          { title: 'Marca 2' },
          { title: 'Marca 3' },
        ],
      },
      {
        title: 'Eletrodomesticos',
        items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
        ],
      },
    ]
  }),
  name: 'LayoutEcommerce',
}
</script>

<style scoped>
  .e-commerce {
    width: 100%;
    height: 100%;
  }
</style>