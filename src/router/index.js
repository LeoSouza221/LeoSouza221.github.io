import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { EventBus } from '@/utils/event-bus';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: 'Home',
      children: routes,
    },
    {
      path: '*',
      component: () => import('@/components/DefaultInConstruction.vue'),

    }
  ],
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('snackbar') && to.name !== 'Home') {
    EventBus.$emit('show-snackbar', 'secondary', `
      Todos os layouts sao exemplos e nao condizem com um projeto real 
    `);
    localStorage.setItem('snackbar', true);
  }
  next();
});

export default router;
