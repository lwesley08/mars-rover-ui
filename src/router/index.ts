import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RoverControlCenter from '@/views/RoverControlCenter.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'RoverControlCenter',
    component: RoverControlCenter,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
