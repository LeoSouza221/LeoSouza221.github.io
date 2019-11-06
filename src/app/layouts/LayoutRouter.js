export default [
  {
    path: '/layout',
    component: () => import('./index'),
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
        component: () => import('./LayoutAdvogado.vue'),
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
