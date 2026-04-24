import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Masha',
    name: 'Masha',
    component: () => import('../components/Items/Masha.vue')
  },
  {
    path: '/Stepa',
    name: 'Stepa',
    component: () => import('../components/Items/Stepa.vue')
  },
  {
    path: '/Artem',
    name: 'Artem',
    component: () => import('../components/Items/Artem.vue')
  },
  {
    path: '/Seni',
    name: 'Seni',
    component: () => import('../components/Items/Seni.vue')
  },
  {
    path: '/Roma',
    name: 'Roma',
    component: () => import('../components/Items/Roma.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 }
  }
})

export default router