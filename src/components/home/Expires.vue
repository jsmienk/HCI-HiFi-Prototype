<template>
  <section class="expires">
    <h2>Expires soon</h2>
    <HorizontalList :items="data" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'expires',
  props: ['data'],
  components: {
    HorizontalList
  }
}
</script>