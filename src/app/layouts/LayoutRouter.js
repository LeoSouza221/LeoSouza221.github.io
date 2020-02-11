export default [
  {
    path: '/portfolio',
    component: () => import('./index.vue'),
    meta: {
      sidebar: {
        icon: 'fa fa-th-large',
        title: 'Portfolio',
      },
    },
    children: [
      {
        path: '/portfolio/empresa',
        name: 'Empresa',
        component: () => import('./empresa/LayoutEmpresa.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-balance-scale',
            title: 'Empresa',
          },
        },
      },
      {
        path: '/portfolio/login',
        name: 'Login',
        component: () => import('./login/LayoutLogin.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-user-secret',
            title: 'Login',
          },
        },
      },
      {
        path: '/portfolio/ecommerce',
        name: 'E-Commerce',
        component: () => import('./ecommerce/LayoutEcommerce.vue'),
        meta: {
          sidebar: {
            icon: 'fa fa-comment-dollar',
            title: 'E-Commerce',
          },
        },
      },
      {
        path: '/portfolio/github',
        name: 'GitHub',
        component: () => import('./github/LayoutGithub.vue'),
        meta: {
          sidebar: {
            icon: 'fab fa-github',
            title: 'Github',
          },
        },
      },
    ],
  },
];
