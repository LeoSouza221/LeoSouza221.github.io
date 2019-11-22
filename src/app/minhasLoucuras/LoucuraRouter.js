export default [
  {
    path: '/loucuras',
    component: () => import('./index.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-gamepad',
        title: 'Loucuras',
      },
    },
    children: [
      {
        path: '/loucuras/jogo-da-velha',
        name: 'Jogo Da Velha',
        component: () => import('./jogoDaVelha/JogoDaVelha.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-dice',
            title: 'Jogo Da Velha',
          },
        },
      },
    ],
  },
];

