<template>
  <section class="inventory">
    <h2>Inventory</h2>
    <!-- Category grid -->
    <div class="inventory-categories">
      <div v-for="category in data" :key="category.id" class="inventory-category">
          <span class="title">{{ category.title }}</span>
          <div class="thumbnail" :style="getBackgroundStyle(category.thumbnail)" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'inventory',
    props: ['data'],
    components: {},
    methods: {
      getBackgroundStyle(image) {
        return 'background-image: url("' + image + '");'
      }
    }
  }
</script>

<style lang="scss">
  .inventory {
    .inventory-categories {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .inventory-category {
        display: inline-grid;
        margin-right: 8px;
        margin-bottom: 16px;

        .title {
          display: block;
          padding: 0 8px;
          font-size: 1.2em;
        }

        .thumbnail {
          overflow: hidden;
          margin: 8px 0;
          border-radius: 12px;
          box-shadow: 0px 4px 12px 0px #999;

          width: 150px;
          height: 90px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          transition: transform 0.1s ease-in-out;
        }
      }
    }
  }
</style>