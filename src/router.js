import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/HomeView.vue') },
    { path: '/project/:id', component: () => import('./views/ProjectView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: (to) => (to.hash ? { el: to.hash, top: 76, behavior: 'smooth' } : { top: 0 })
})
