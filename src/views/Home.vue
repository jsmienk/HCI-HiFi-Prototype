<template>
  <div class="home screen">
    <!-- New groceries welcome Modal -->
    <Modal ref="modalGroceriesAdded" header="New groceries added!">
      <p class="modal-info">New groceries have been added to your inventory!</p>
    </Modal>

    <!-- Inventory management Modal -->
    <Modal ref="modalInventoryManagement" :header="selectedCategory.title">
      <CategoryManagement :category="selectedCategory" />
    </Modal>

    <!-- Header -->
    <header>
      <h1>Home</h1>
      <span class="date">{{ getDate() }}</span>
    </header>

    <!-- Inventory -->
    <Inventory :data="data.inventory" @on-category-click="onCategoryClick" />
    <!-- Leftovers -->
    <Leftovers :data="data.leftovers" />
    <!-- Products that soon expire -->
    <Expires :data="data.expires" />
    <!-- Recipes -->
    <Recipes :data="data.recipes" />
  </div>
</template>

<script>
  import Modal from '@/components/Modal.vue'
  import CategoryManagement from '@/components/home/CategoryManagement.vue'
  import Inventory from '@/components/home/Inventory.vue'
  import Leftovers from '@/components/home/Leftovers.vue'
  import Expires from '@/components/home/Expires.vue'
  import Recipes from '@/components/home/Recipes.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'home',
    components: {
      Modal, CategoryManagement, Inventory, Leftovers, Expires, Recipes
    },
    data() {
      return {
        data,
        modalGroceriesAdded: undefined,
        selectedCategory: { title: '' }
      }
    },
    mounted() {
      this.$refs.modalGroceriesAdded.open()
    },
    methods: {
      onCategoryClick(category) {
        this.selectedCategory = category
        this.$refs.modalInventoryManagement.open()
      },
      getDate() {
        const date = new Date();
        const d = ('0' + date.getDate()).slice(-2);
        const m = ('0' + (date.getMonth() + 1)).slice(-2);
        const y = date.getFullYear();
        return d + '/' + m + '/' + y;
      }
    }
  }
</script>

<style lang="scss">
  .home {
    header {
      .date {
        font-family: monospace;
        font-size: 1.5em;
      }
    }

    section {
      border-top: 1px solid #666;

      h2 {
        margin: 6px 2px;
      }
    }
  }
</style>
