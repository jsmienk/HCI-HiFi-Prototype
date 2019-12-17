<template>
  <section class="leftovers">
    <h2>Leftovers</h2>
    <HorizontalList :items="data" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'leftovers',
  props: ['data'],
  components: {
    HorizontalList
  }
}
</script>