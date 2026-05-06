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
  {
    path: '/Vlad',
    name: 'Vlad',
    component: () => import('../components/Items/Vlad.vue')
  },
  {
    path: '/Egor',
    name: 'Egor',
    component: () => import('../components/Items/Me.vue')
  },
  {
    path: '/Zavar',
    name: 'Zavar',
    component: () => import('../components/Items/Zavar.vue')
  },
  {
    path: '/Ivan',
    name: 'Ivan',
    component: () => import('../components/Items/Ivan.vue')
  },
  {
    path: '/Yarik',
    name: 'Yarik',
    component: () => import('../components/Items/Yarik.vue')
  },
  {
    path: '/Leva',
    name: 'Leva',
    component: () => import('../components/Items/Leva.vue')
  },
  {
    path: '/Dimon',
    name: 'Dimon',
    component: () => import('../components/Items/Dimon.vue')
  },
  {
    path: '/Artem-two',
    name: 'Artem-two',
    component: () => import('../components/Items/Artem-2.vue')
  },
  {
    path: '/Antoni',
    name: 'Antoni',
    component: () => import('../components/Items/Antoni.vue')
  },
  {
    path: '/Andrey',
    name: 'Andrey',
    component: () => import('../components/Items/Andrey.vue')
  },
  {
    path: '/Schoolboy',
    name: 'Schoolboy',
    component: () => import('../components/Items/Schoolboy.vue')
  },
  {
    path: '/Sasha',
    name: 'Sasha',
    component: () => import('../components/Items/Sasha.vue')
  },
  {
    path: '/Vika',
    name: 'Vika',
    component: () => import('../components/Items/Vika.vue')
  },
  {
    path: '/Yliuna',
    name: 'Yliuna',
    component: () => import('../components/Items/Yliuna.vue')
  },
  {
    path: '/Anonymous',
    name: 'Anonymous',
    component: () => import('../components/Items/An.vue')
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