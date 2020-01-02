<template>
  <div class="index-indicator">
    <div v-for="i in size" :key="i" :class="{ active: active==i-1 }" @click="$emit('on-index-click', i-1)" />
  </div>
</template>

<script>
  export default {
    name: 'index-indicator',
    props: ['size', 'active']
  }
</script>

<style lang="scss">
  .index-indicator div {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin: 0 4px;
    background-color: #999;
    border-radius: 8px;
    cursor: pointer;

    &.active {
      background-color: #333;
    }
  }
</style>