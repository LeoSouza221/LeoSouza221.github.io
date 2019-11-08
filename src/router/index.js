import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/app/Main.vue'),
      name: 'Main',
      children: routes,
    },
  ],
});

export default router;
