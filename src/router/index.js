import Vue from 'vue'
import VueRouter from 'vue-router'

// Screens
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import ScreenSaver from '../views/ScreenSaver.vue'
import Recipe from '../views/Recipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/idle',
    name: 'screensaver',
    component: ScreenSaver
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
