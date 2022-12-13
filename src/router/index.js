import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LetItSnow from 'vue-let-it-snow';

Vue.use(VueRouter)
Vue.use(LetItSnow)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { useSmooth: true }
  },
  {
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue'),
    meta: { hideFooter: true }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/anime',
    name: 'anime',
    component: () => import('../views/AnimeView.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404View.vue'),
    meta: { hideFooter: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
