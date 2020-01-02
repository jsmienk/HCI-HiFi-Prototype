<template>
  <div class="home screen">
    <Modal ref="modalGroceriesAdded" header="New groceries added!">
      New groceries have been added to your inventory!
    </Modal>

    <header>
      <h1>Home</h1>
      <span class="date">{{ getDate() }}</span>
    </header>

    <Inventory :data="data.inventory" />
    <Leftovers :data="data.leftovers" />
    <Expires :data="data.expires" />
    <Recipes :data="data.recipes" />
  </div>
</template>

<script>
  import Modal from '@/components/Modal.vue'
  import Inventory from '@/components/home/Inventory.vue'
  import Leftovers from '@/components/home/Leftovers.vue'
  import Expires from '@/components/home/Expires.vue'
  import Recipes from '@/components/home/Recipes.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'home',
    components: {
      Modal, Inventory, Leftovers, Expires, Recipes
    },
    data() {
      return {
        data,
        modalGroceriesAdded: undefined
      }
    },
    mounted() {
      this.$refs.modalGroceriesAdded.open()
    },
    methods: {
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
