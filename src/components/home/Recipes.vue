<template>
  <section class="recipes">
    <h2>Recipe recommendations</h2>
    <HorizontalList :items="data" @item-click="$emit('recipe-click', $event)" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'recipes',
  components: { HorizontalList },
  props: ['data']
}
</script>