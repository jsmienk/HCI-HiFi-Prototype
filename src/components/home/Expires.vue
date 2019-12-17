<template>
  <section>
    <h2>Expires soon</h2>
    <HorizontalList :items="expires" />
  </section>
</template>

<script>
import HorizontalList from '@/components/HorizontalList.vue'

export default {
  name: 'expires',
  props: ['expires'],
  components: {
    HorizontalList
  }
}
</script>