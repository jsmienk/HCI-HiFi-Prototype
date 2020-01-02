import Vue from 'vue'
import VueRouter from 'vue-router'

// Screens
import Home from '../views/Home.vue'
import ScreenSaver from '../views/ScreenSaver.vue'
import Recipe from '../views/Recipe.vue'
import Cooking from '../views/Cooking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/idle',
    name: 'screensaver',
    component: ScreenSaver
  },
  {
    path: '/recipe/:id/cooking',
    name: 'cooking',
    component: Cooking,
    props: true
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '*',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
