import Vue from 'vue'
import VueRouter from 'vue-router'

// Screens
import Home from '../views/Home.vue'
import ScreenSaver from '../views/ScreenSaver.vue'
import Recipe from '../views/Recipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/idle',
    name: 'screensaver',
    component: ScreenSaver
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
