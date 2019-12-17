<template>
  <section class="recipes">
    <h2>Recipe recommendations</h2>
    <HorizontalList :items="data" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'recipes',
  props: ['data'],
  components: {
    HorizontalList
  }
}
</script>