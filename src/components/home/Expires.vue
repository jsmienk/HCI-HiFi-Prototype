<template>
  <section class="expires">
    <h2>Expires soon</h2>
    <div class="expires-container">
      <span v-for="item in data" :key="item.id" class="expires">
        {{ item.title }} <span class="expiry-date">{{ item.meta.date }}</span>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'expires',
  props: ['data'],
  components: {}
}
</script>

<style lang="scss">
  .expires {
    padding-bottom: 16px;

    .expires-container {
      display: flex;
      flex-wrap: wrap;

      .expires {
        padding: 0 12px;
        border-radius: 12px;
        background-color: #eee;
        margin: 0 8px 8px 0;

        .expiry-date {
          color: #555;
          font-size: .8em;
        }
      }
    }
  }
</style>