<template>
  <div>
    Cooking
    {{ id }}
    {{ ingredients }}
    {{ recipe }}
  </div>
</template>

<script>
  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'cooking',
    components: {},
    props: {
      id: Number,
      ingredients: Object
    },
    data() {
      return {
        recipe: data.recipes[this.id]
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>