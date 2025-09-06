import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'index',
      component: () => import('@/App.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=> import('@/components/loginForm.vue')
    }
  ],
})

export default router
