// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      // PaginaLivros.vue
      {
        path: '/livros',
        name: 'Livros',
        component: () => import('@/views/PaginaLivros.vue'),
      },
      // PaginaMenu
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/PaginaMenu.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
