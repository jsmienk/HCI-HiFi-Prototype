<template>
  <div class="ingredients">
    <div class="ingredient" v-for="(ingredient, key) in ingredients" :key="key">
      <span class="name">- {{ ingredient.name }}:</span>
      <AmountSelector class="selector" :initial-amount="ingredient.amount" :unit="ingredient.unit" 
        :amount="getIngredientForNrPeople(ingredient.amount, ingredient.increment)" 
        :increment="ingredient.increment" :min="ingredient.min" :max="ingredient.max" 
        @change="onIngredientChange(key)" small />
    </div>
  </div>
</template>

<script>
  import AmountSelector from '@/components/AmountSelector.vue'

  export default {
    name: 'ingredients',
    components: { AmountSelector },
    props: {
      ingredients: Object,
      serves: Number,
      nrPeople: Number
    },
    data() {
      return {}
    },
    methods: {
      onIngredientChange(key, oldValue, newValue) {
        console.log(key)
        console.log(oldValue)
        console.log(newValue)
      },
      getIngredientForNrPeople(amount, increment) {
        return Math.ceil((this.nrPeople / this.serves) * (amount / increment)) * increment
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ingredients {
    .ingredient {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      width: 460px;

      .name {
        font-weight: bold;
      }

      .selector {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        min-width: 200px;
      }
    }
  }
</style>