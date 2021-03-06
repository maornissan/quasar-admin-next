import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/editor',
        component: () => import('pages/Editor/EditorIndex.vue'),
      },
      {
        path: '/tables/products',
        component: () => import('pages/Table/TableOne.vue'),
      },
      {
        path: '/tables/categories',
        component: () => import('pages/Table/TableTwo.vue'),
      },
      {
        path: '/form/profile',
        component: () => import('pages/Form/ProfilePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
