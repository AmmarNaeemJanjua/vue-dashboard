// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Landing',
        component: ()=> import('@/components/Landing.vue')
      },
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('@/components/Dashboard.vue')
      },
      {
        path: '/Message',
        name: 'Message',
        component: () => import('@/components/Message.vue')
      },
      {
        path: '/BuyerPersona',
        name: 'BuyerPersona',
        component: () => import('@/components/BuyerPersona.vue')
      },
      {
        path: '/Settings',
        name: 'Settings',
        component: () => import('@/components/Settings.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
