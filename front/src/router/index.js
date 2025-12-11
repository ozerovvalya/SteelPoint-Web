// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/views/HomeView.vue'
import FavoritesView from '@/components/views/FavoritesView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/product/:id', name: 'ProductDetail', component: () => import('@/components/views/ProductDetail.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
