import Vue from 'vue';
import Router from 'vue-router';
import PersonalInfo from './views/personal-info.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/personal-info',
      name: 'personalInfo',
      component: PersonalInfo,
    },
    {
      path: '/modify-password',
      name: 'modifyPassword',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "modifyPassword" */ './views/modify-password.vue'),
    },
  ],
});
