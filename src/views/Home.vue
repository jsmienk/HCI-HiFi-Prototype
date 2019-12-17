<template>
  <div class="home">
    <h1>Home</h1>
    <Inventory />
    <Leftovers />
    <Expires :expires="data.expires" />
    <Recipes :recipes="data.recipes" />
  </div>
</template>

<script>
import Inventory from '@/components/home/Inventory.vue'
import Leftovers from '@/components/home/Leftovers.vue'
import Expires from '@/components/home/Expires.vue'
import Recipes from '@/components/home/Recipes.vue'

// Dummy JSON data
import data from "@/dummy.js"

export default {
  name: 'home',
  components: {
    Inventory, Leftovers, Expires, Recipes
  },
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss">
  .home {
    padding: 32px;

    section {
      margin-top: 32px;
      border-top: 1px solid #666;
    }
  }
</style>
