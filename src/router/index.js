import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './routerAdmin'
import { publicRoutes } from './routerGuest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...adminRoutes],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
})

// Navigation Guards
// router.beforeEach((to, from, next) => {
//   // Handle admin page title
//   if (to.meta.title) {
//     document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
//   } else {
//     document.title = 'Your Store Name' // Default title for public pages
//   }

  // Check authentication for protected routes
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   // Implement your authentication check here
  //   const isAuthenticated = checkAuthStatus() // You need to implement this function
    
  //   if (!isAuthenticated) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath },
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
// })

// Helper function to check authentication status
// function checkAuthStatus() {
//   // Implement your authentication check logic here
//   return localStorage.getItem('isAuthenticated') === 'true'
// }

export default router