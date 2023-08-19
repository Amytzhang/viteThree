import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name:'Home',
    component: () => import('../view/Home.vue'),
  },
  {
    name:'tsStatus',
    path:'/tsStatus',
    component:()=>import('../components/TsStatus/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
