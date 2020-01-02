<template>
  <div class="amount-selector">
    <h3 v-if="title">{{ title }}</h3>
    <a class="button modifier-button" :class="{ small }" @click="change(-increment)">–</a>
    <span class="amount" :class="{ small }">{{ internalAmount }} {{ unit }}</span>
    <a class="button modifier-button" :class="{ small }" @click="change(+increment)">+</a>
  </div>
</template>

<script>
  export default {
    name: 'amount-selector',
    props: {
      title: String,
      initialAmount: {
        type: Number,
        default: 1
      },
      amount: Number,
      increment: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 99
      },
      small: {
        type: Boolean,
        default: false
      },
      unit: String
    },
    data() {
      return {
        internalAmount: this.initialAmount
      }
    },
    watch: {
      amount(val) {
        this.internalAmount = val
      }
    },
    methods: {
      change(value) {
        if (this.internalAmount + value < this.min || this.internalAmount + value > this.max) {
          return
        }
        this.internalAmount += value
        this.$emit('change', this.internalAmount)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button.modifier-button {
    background-color: #ffeedd;
    color: black;

    border-radius: 100%;
    min-width: initial;
    width: 42px;
    height: 42px;
    padding: 3px 8px;
    font-size: 1.6em;

    &.small {
      width: 32px;
      height: 32px;
      padding: 5px;
      font-size: 1em;
    }
  }

  .amount-selector {
    min-width: 136px;
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */

    h3 {
      margin: 0 0 4px 0;
    }

    .amount {
      font-size: 1.3em;
      font-weight: bold;
      display: inline-block;
      text-align: center;
      width: 32px;
      margin: 0 8px;

      &.small {
        width: initial;
        font-size: 1em;
      }
    }
  }
</style>