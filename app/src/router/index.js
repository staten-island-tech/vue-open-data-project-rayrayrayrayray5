import { createRouter, createWebHistory } from 'vue-router'
import SATResults from '@/views/aidenliublood.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: SATResults,
    },
  ],
})

export default router
