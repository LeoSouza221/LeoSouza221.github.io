import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { EventBus } from '@/app/core/event-bus';

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

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('snackbar') && to.name !== 'Main') {
    EventBus.$emit('show-snackbar', 'secondary', `
      Todos os layouts sao exemplos e nao condizem com um projeto real 
    `);
    localStorage.setItem('snackbar', true);
  }
  next();
});

export default router;
