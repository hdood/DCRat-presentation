import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Infection from '../views/Infection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Introduction
    },
    {
      path: '/infection',
      name: 'infection',
      component: Infection
    },

  ]
})

export default router
