import { createRouter, createWebHistory } from 'vue-router'
// Импортируем Group.vue как главную страницу, так как там лежат ваши карточки
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
    // Путь исправлен согласно вашей структуре: src/components/Items/Me.vue
    component: () => import('../components/Items/Masha.vue')
  },
  {
    path: '/Stepa',
    name: 'Stepa',
    // Путь исправлен согласно вашей структуре: src/components/Items/Me.vue
    component: () => import('../components/Items/Stepa.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 }
  }
})

export default router