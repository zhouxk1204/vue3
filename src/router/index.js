import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/components/App.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue')
  },
  {
    path: '/create-user',
    component: () => import('@/views/CreateUser.vue')
  }
]

const history = createWebHistory()

const router = createRouter({
  routes,
  history,
})

export default router;