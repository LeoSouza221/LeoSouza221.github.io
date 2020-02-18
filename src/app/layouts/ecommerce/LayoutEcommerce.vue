<template lang="pug">
  .e-commerce
    div(style="width: 100%; height: 100%; position: relative;")
      Toolbar(:items="items")
      Navbar(
        :itemsNavbar="itemsNavbar"
        v-if="verifyMobile()"
      )
      CardFilters(
        :itemsNavbar="itemsNavbar"
      )
      Produtos(
        :toolbarProducts="toolbarProducts"
        :itemsProducts="itemsProducts"
      )
</template>
  
<script>
import { EventBus } from '@/app/core/event-bus';
import isMobile from '@/mixins/isMobile';
import Toolbar from './ToolbarEcommerce';
import Navbar from './NavbarEcommerce';
import Produtos from './ProdutosEcommerce';
import CardFilters from './CardFilterEcommerce';

export default {
  name: 'LayoutEcommerce',
  components: {
    Toolbar,
    Navbar,
    Produtos,
    CardFilters,
  },
  mixins: [isMobile],
  data: () => ({
    drawer: true,
    toolbarProducts: {
      title: null,
      icon: null,
      color: null,
    },
    items: [
      {
        title: 'Livros',
        icon: 'fa fa-book',
        color: '#4CAF50',
        image: 'https://gamepedia.cursecdn.com/minecraft_br_gamepedia/8/85/Livro.png'
      },
      {
        title: 'Roupas',
        icon: 'fa fa-tshirt',
        color: '#F44336',
        image: 'https://images.vexels.com/media/users/3/129426/isolated/preview/9b7eec453f72f3beb766431ec1d73c2f-black-women-s-cloth-by-vexels.png'
      },
      {
        title: 'Eletronicos',
        icon: 'fa fa-laptop',
        color: '#2196F3',
        image: 'https://image.flaticon.com/icons/svg/186/186239.svg'
      },
      {
        title: 'Eletrodomesticos',
        icon: 'fa fa-plug',
        color: '#FFEB3B',
        image: 'https://c7.uihere.com/icons/125/332/30/household-appliances-67aaca748fc25b34f09f7988b3a7e90e.png'
      },
    ],
    itemsNavbar: [
      { header: 'Preco' },
      { 
        title: 'Breakfast & brunch',
        type: 'slide',
        min: 0,
        max: 1000,
        range: [0, 1000]
      },
      { divider: true },
      { header: 'Frete' },
      { 
        title: 'Gratis',
        type: 'checkbox',
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
    ],
    itemsProducts: [
      {
        name: 'Produto 1',
        brand: 'Marca 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 4,
        price: 20
      },
      {
        name: 'Produto 2',
        brand: 'Marca 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 3,
        price: 175.25
      },
      {
        name: 'Produto 3',
        brand: 'Marca 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 5,
        price: 12.50
      },
      {
        name: 'Produto 4',
        brand: 'Marca 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 2,
        price: 12.50
      },
      {
        name: 'Produto 5',
        brand: 'Marca 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 3.5,
        price: 12.50
      },
      {
        name: 'Produto 6',
        brand: 'Marca 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 3.5,
        price: 59.90
      },
      {
        name: 'Produto 7',
        brand: 'Marca 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 3.5,
        price: 1200.50
      },
      {
        name: 'Produto 8',
        brand: 'Marca 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        rating: 3.5,
        price: 120.50
      }
    ],
  }),

  created() {
    this.defineToolbarItem();
    EventBus.$on('change-toolbar-items', this.defineToolbarItem);
  },

  beforeDestroy() {
    EventBus.$off('change-toolbar-items');
  },

  methods: {
    defineToolbarItem(item) {

      if (!item) {
        this.toolbarProducts = this.items[0];
        return;
      }

      this.toolbarProducts = item;
    }
  },
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