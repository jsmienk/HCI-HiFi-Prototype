<template>
  <header>
    <!-- Back button -->
    <a class="button back-button" @click="$router.go(-1)">⬅ {{ backText }}</a>
    <!-- Page title -->
    <h1>{{ title }}</h1>
    <!-- Weight to center the title -->
    <div style="width: 100px;" />
  </header>
</template>

<script>
  export default {
    name: 'header-hover',
    props: {
      title: String,
      backText: {
        type: String,
        default: 'Back'
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 32px;
    background-image: linear-gradient(#ffffffff, #ffffffff, #ffffff00);

    h1 {
      margin: 0;
    }
  }
</style>