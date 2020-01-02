<template>
  <div class="screen hover">
    <HeaderHover title="Recipe" />

    <!-- Recipe -->
    <article class="recipe">
      <!-- Title -->
      <h1>{{ recipe.title }}</h1>

      <!-- Image & nr of persons -->
      <div class="info">
        <div class="hero" :style="getImageStyle(recipe.thumbnail)" />
        <AmountSelector title="People" :initial-amount="recipe.meta.serves" @change="nrPeople = $event" />
      </div>

      <!-- Description -->
      <h3>Description</h3>
      <p>{{ recipe.meta.description }}</p>

      <!-- Ingredients -->
      <h3>Ingredients for {{ nrPeople }} {{ nrPeople > 1 ? 'people' : 'person' }}</h3>
      <Ingredients :ingredients="recipe.meta.ingredients" :serves="recipe.meta.serves" :nr-people="nrPeople"
        @ingredients-change="ingredients = $event" />
    </article>

    <!-- Start cooking -->
    <div class="start-cooking">
      <a class="button main-button" @click="startCooking()">Start cooking</a>
    </div>
  </div>
</template>

<script>
  import HeaderHover from '@/components/HeaderHover.vue'
  import AmountSelector from '@/components/AmountSelector.vue'
  import Ingredients from '@/components/recipe/Ingredients.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'recipe',
    components: { HeaderHover, AmountSelector, Ingredients },
    data() {
      return {
        recipe: data.recipes[this.$route.params.id],
        nrPeople: data.recipes[this.$route.params.id].meta.serves,
        ingredients: {}
      }
    },
    methods: {
      getImageStyle(image) {
        return 'background-image: url("' + image + '");'
      },
      startCooking() {
        this.$router.push({
          name: 'cooking',
          params: {
            id: this.$route.params.id,
            nrPeople: this.nrPeople,
            ingredients: this.ingredients
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recipe {
    padding: 119px 64px 128px;

    h1 {
      margin-top: 0;
      font-size: 2em;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .hero {
      display: inline-block;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0px 4px 12px 0px #999;

      height: 300px;
      width: 460px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }

  .start-cooking {
    position: fixed;
    width: 100%;
    bottom: 64px;
    text-align: center;
  }
</style>