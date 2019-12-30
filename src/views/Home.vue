<template>
  <div class="home">
    <Modal ref="modalGroceriesAdded" header="New groceries added!">
      Ayy lmao!<br/>
      Ayy lmao!<br/>
      Ayy lmao!<br/>
      Ayy lmao!<br/>
      Ayy lmao!<br/>
      Ayy lmao!<br/>
      New groceries have been added to your inventory!
    </Modal>

    <h1>Home</h1>
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
    }
  }
</script>

<style lang="scss">
  .home {
    padding: 32px;

    section {
      border-top: 1px solid #666;

      h2 {
        margin: 6px 2px;
      }
    }
  }
</style>
