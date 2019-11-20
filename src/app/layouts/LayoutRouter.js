export default [
  {
    path: '/layout',
    component: () => import('./index.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-th-large',
        title: 'Layouts',
      },
    },
    children: [
      {
        path: '/layout/advogado',
        name: 'Advocacia',
        component: () => import('./advocacia/LayoutAdvogado.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-balance-scale',
            title: 'Advocacia',
          },
        },
      },
      {
        path: '/layout/nutricao',
        name: 'Nutrição',
        component: () => import('./nutricionista/LayoutNutricionista.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-balance-scale',
            title: 'Nutrição',
          },
        },
      },
      {
        path: '/layout/veterinario',
        name: 'Veterinário',
        component: () => import('./veterinaria/LayoutVeterinario.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-balance-scale',
            title: 'Veterinário',
          },
        },
      },
      {
        path: '/layout/buffet',
        name: 'Buffet',
        component: () => import('./buffet/LayoutBuffet.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-balance-scale',
            title: 'Buffet',
          },
        },
      },
    ],
  },
];
