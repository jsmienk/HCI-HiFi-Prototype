<template>
  <div class="ingredients">
    <div class="ingredient" v-for="(ingredient, key) in ingredients" :key="key">
      <span class="name">- {{ ingredient.name }}:</span>
      <AmountSelector class="selector" :initial-amount="ingredient.amount" :unit="ingredient.unit" 
        :amount="getIngredientForNrPeople(ingredient.amount, ingredient.increment)" 
        :increment="ingredient.increment" :min="ingredient.min" :max="ingredient.max" 
        @change="onIngredientChange(key, $event, true)" small />
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
      return {
        chosenIngredients: {}
      }
    },
    mounted() {
      for (let key in this.ingredients) {
        this.onIngredientChange(key, this.ingredients[key].amount, false)
      }
      this.$emit('ingredients-change', this.chosenIngredients)
    },
    methods: {
      onIngredientChange(key, value, emit) {
        const ingredient = this.ingredients[key]
        this.chosenIngredients[key] = {
          name: ingredient.name,
          unit: ingredient.unit,
          amount: value
        }
        if (emit) {
          this.$emit('ingredients-change', this.chosenIngredients)
        }
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