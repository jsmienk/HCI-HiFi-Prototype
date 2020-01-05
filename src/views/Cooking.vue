<template>
  <div class="cooking screen hover">
    <HeaderHover title="Cooking" backText="Stop" />

    <article class="recipe">
      <h1>{{ recipe.title }}</h1>

      <!-- Recipe recap -->
      <div class="recap">
        <!-- Image -->
        <div class="hero" :style="getImageStyle(recipe.thumbnail)" />

        <!-- Ingredients -->
        <div class="ingredients">
          <h3>Ingredients for {{ nrPeople }} {{ nrPeople > 1 ? 'people' : 'person' }}</h3>
          <p v-for="(ingredient, index) in ingredients" :key="index">
            <span>- {{ ingredient.name }}:</span>
            <span>{{ ingredient.amount }} {{ ingredient.unit }}</span>
          </p>
        </div>
      </div>

      <!-- Instructions -->
      <h2>Steps</h2>
      <div ref="instructions" class="instructions">
        <p class="instruction" :class="{ selected: index == selectedInstruction }"
          v-for="(rawText, index) in recipe.meta.instructions" :key="index"
          @click="onInstructionClick(index)">
          <span class="index">{{ index+1 }}.</span>
          <span class="text" v-html="getInstruction(rawText)" />
        </p>
      </div>
    </article>

    <!-- Done cooking -->
    <div class="instruction-controls">
      <a class="button control-button" @click="onInstructionClick(selectedInstruction-1)">Previous</a>
      <a class="button main-button" @click="doneCooking">Done cooking</a>
      <a class="button control-button" @click="onInstructionClick(selectedInstruction+1)">Next</a>
    </div>

    <!-- Speech Assistant -->
    <SpeechAssistant :speak="textToSpeech" />
  </div>
</template>

<script>
  import HeaderHover from '@/components/HeaderHover.vue'
  import SpeechAssistant from '@/components/SpeechAssistant.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'cooking',
    components: { HeaderHover, SpeechAssistant },
    props: {
      id: String,
      nrPeople: Number,
      ingredients: Object
    },
    data() {
      return {
        recipe: data.recipes[this.id],
        selectedInstruction: 0,
        textToSpeech: ''
      }
    },
    methods: {
      /**
       * Fill raw instruction text with the right ingredient amounts
       */
      getInstruction(rawText) {
        let formatted = rawText
        for (let key in this.ingredients) {
          const ingredient = this.ingredients[key]
          const ingredientText = '<span class="highlight">' + ingredient.amount + ' ' + ingredient.unit + '</span>'
          formatted = formatted.replace('{!' + key + '!}', ingredientText)
        }
        return formatted
      },
      onInstructionClick(index) {
        // Change index
        if (index >= 0 && index < this.recipe.meta.instructions.length) {
          this.selectedInstruction = index
        }

        // Scroll to that instruction
        const instructionElement = this.$refs.instructions.children[this.selectedInstruction]
        const topCoord = -8
          + this.$refs.instructions.scrollTop
          - this.$refs.instructions.getBoundingClientRect().y
          + instructionElement.getBoundingClientRect().y

        this.$refs.instructions.scrollTo({
          top: topCoord,
          behavior: 'smooth'
        })

        // Speak out loud this instruction
        this.textToSpeech = instructionElement.innerText
      },
      doneCooking() {
        // TODO: Modal?
      },
      getImageStyle(image) {
        return 'background-image: url("' + image + '");'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recipe {
    padding: 119px 64px 0;

    h1 {
      margin-top: 0;
      font-size: 2em;
    }

    .recap {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .hero {
        display: inline-block;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0px 4px 12px 0px #999;

        height: 200px;
        width: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }

      .ingredients {
        h3 {
          margin-top: 0;
          font-size: 1.5em;
        }

        p {
          margin: 0 0 8px;
          display: flex;
          justify-content: space-between;
          width: 300px;
          font-size: 1.3em;
        }
      }
    }

    .instructions {
      height: 400px;
      overflow-y: scroll;
      padding: 8px 0;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;

      .instruction {
        display: flex;
        align-items: flex-start;
        font-size: 1.5em;

        margin: 0;
        padding: 16px;
        border-radius: 8px;

        &.selected {
          background: #333;
          color: white;
          text-shadow: 1px 0 0 white;
        }

        .index {
          font-style: italic;
          margin-right: 16px;
        }
      }
    }
  }

  .control-button {
    min-width: 120px;
    background-color: #f9f9f9;
  }

  .instruction-controls {
    position: fixed;
    width: 100%;
    bottom: 64px;
    padding: 0 64px;
    display: flex;
    justify-content: space-between;
  }
</style>