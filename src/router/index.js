import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/home',
    component: () => import('@/components/Home.vue')
  }
]

const history = createWebHistory()

const router = createRouter({
  routes,
  history,
})

export default router;