import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RoverControlCenter from '@/views/RoverControlCenter.vue';
import RoverLocationHistory from '@/views/RoverLocationHistory.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'RoverControlCenter',
    component: RoverControlCenter,
  },
  {
    path: '/locationHistory/:roverId',
    name: 'RoverLocationHistory',
    component: RoverLocationHistory,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
