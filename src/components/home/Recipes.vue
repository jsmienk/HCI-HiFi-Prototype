<template>
  <section>
    <h2>Recipe recommendations</h2>
    <HorizontalList :items="recipes" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'recipes',
  props: ['recipes'],
  components: {
    HorizontalList
  }
}
</script>