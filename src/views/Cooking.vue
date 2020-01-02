<template>
  <div class="cooking screen hover">
    <HeaderHover title="Cooking" backText="Stop" />

    <div class="instructions">
      <div class="ingredients">
        <h3>Ingredients for {{ nrPeople }} {{ nrPeople > 1 ? 'people' : 'person' }}</h3>
        <p v-for="(ingredient, index) in ingredients" :key="index">
          - <span class="ingredient-name">{{ ingredient.name }}</span> {{ ingredient.amount }} {{ ingredient.unit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderHover from '@/components/HeaderHover.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'cooking',
    components: { HeaderHover },
    props: {
      id: String,
      nrPeople: Number,
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
  .instructions {
    padding: 119px 64px 32px;
  }
</style>