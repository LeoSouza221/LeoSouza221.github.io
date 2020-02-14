<template lang="pug">
  .e-commerce
    v-card(width="100%" height="100%")
      Toolbar(:items="items")
      Navbar(:itemsNavbar="itemsNavbar")
    
</template>
  
<script>
import Toolbar from './ToolbarEcommerce';
import Navbar from './NavbarEcommerce';

export default {
  components: {
    Toolbar,
    Navbar,
  },
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
      { header: 'Preco' },
      { 
        title: 'Breakfast & brunch',
        type: 'slide'
      },
      { divider: true },
      { header: 'Frete' },
      { 
        title: 'Gratis',
        type: 'checkbox',
        min: 0,
        max: 1000,
        range: [0, 1000]
      },
      { 
        title: 'ate 50 reais',
        type: 'checkbox'
      },
      { 
        title: 'ate 100 reais',
        type: 'checkbox'
      },
      { divider: true },
      { header: 'Marca' },
      { 
        title: 'Marca 1',
        type: 'checkbox'
      },
      { 
        title: 'Marca 2',
        type: 'checkbox'
      },
      { 
        title: 'Marca 3',
        type: 'checkbox'
      },
      { divider: true },
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
  .v-input--selection-controls {
    margin: 0;
    padding: 0;
  }
</style>