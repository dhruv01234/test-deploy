import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  // },
  {
    path: '/',
    component: () => import('layouts/secondLP.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: '/ai', component: () => import('pages/AIPage.vue') },
      { path: '/ml', component: () => import('pages/MLPage.vue') },
      { path: '/cyber', component: () => import('pages/CyberPage.vue') },
    ],
  },
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
