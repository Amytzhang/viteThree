import { createRouter, createWebHistory } from 'vue-router'
//ts
import TsStatus from '../components/TsStatus/index.vue'
//three.js
import ThreeView from '../view/ThreeView.vue'
import Lut from '../components/ThreeDemo/List/Lut.vue'
import Starts from '../components/ThreeDemo/List/Starts.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Home.vue')
  },
  {
    name: 'tsStatus',
    path: '/tsStatus',
    component: TsStatus
  },
  {
    name: 'demo',
    path: '/demo',
    component: ThreeView
  },
  {
    name: 'lut',
    path: '/demo/lut',
    component: Lut
  },
  {
    name: 'start',
    path: '/demo/start',
    component: Starts
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
