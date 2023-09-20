import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import about from '../views/about.vue'
import prices from '../views/prices.vue'
import placingOrder from '../views/placingOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {path: '/about', name: 'about', component: about},
    {path: '/prices', name: 'prices', component: prices},
    {path: '/placing-order', name: 'placingOrder', component: placingOrder},
  ]
})

export default router
