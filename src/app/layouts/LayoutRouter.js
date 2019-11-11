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
    ],
  },
];