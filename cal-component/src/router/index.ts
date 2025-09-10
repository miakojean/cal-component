import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'index',
      component: () => import('@/views/login.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/login.vue')
    },
    {
      path:'/registration',
      name:'registration',
      component: () => import('@/views/registration.vue')
    },
    
    // This about the dashboard
    {
      path:'/dashboard',
      name:'dashboard',
      component: () => import('@/views/Dashboard/dashBoardIndex.vue')
    },

    {
      path:'/school-registration',
      name:'school-registration',
      component: () => import('@/views/Dashboard/schoolRegistration.vue')
    },

    {
      path:'/dashboard/classe',
      name:'classe',
      component: () => import('@/views/Dashboard/dashboardClasses.vue')
    },

    {
      path:'/dashboard/class-registration',
      name:'class-registration',
      component: () => import('@/views/Dashboard/classRegistration.vue')
    },

    {
      path:'/dashboard/tuition',
      name:'tuition-dashboard',
      component: () => import('@/views/Dashboard/tuitionDashboard.vue')
    },
    
    {
      path:'/student-registration',
      name:'student-registration',
      component: () => import('@/views/Dashboard/dashboard.vue')
    }
  ],
})

export default router
