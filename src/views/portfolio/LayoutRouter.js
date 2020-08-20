export default [
  {
    path: '/empresa',
    name: 'Empresa',
    component: () => import('../empresa/LayoutEmpresa.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-balance-scale',
        title: 'Empresa',
      },
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../login/LayoutLogin.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-user-secret',
        title: 'Login',
      },
    },
  },
  {
    path: '/ecommerce',
    name: 'E-Commerce',
    component: () => import('../ecommerce/LayoutEcommerce.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-comment-dollar',
        title: 'E-Commerce',
      },
    },
  },
  {
    path: '/github',
    name: 'GitHub',
    component: () => import('../github/LayoutGithub.vue'),
    meta: {
      sidebar: {
        icon: 'fab fa-github',
        title: 'Github',
      },
    },
  },
  {
    path: '/jogo-da-velha',
    name: 'Jogo Da Velha',
    component: () => import('../jogoDaVelha/JogoDaVelha.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-dice',
        title: 'Jogo Da Velha',
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/DefaultInConstruction.vue'),
    meta: {
      sidebar: {
        icon: 'fas fa-times',
        title: '404',
      },
    },
  },
  // {
  //   path: '/desenho',
  //   name: 'Desenho',
  //   component: () => import('../desenho/Anime.vue'),
  //   meta: {
  //     sidebar: {
  //       icon: 'fa fa-paint-brush',
  //       title: 'Desenho',
  //     },
  //   },
  // },
];
