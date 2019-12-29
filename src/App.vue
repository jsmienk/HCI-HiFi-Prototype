<template>
  <router-view id="app"/>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
    display: inline-block;
    border-radius: 4px;
    padding: 8px 16px;
    min-width: 200px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 0px 4px 6px 0px #999;

    &:hover, &:active {
      box-shadow: 0px 4px 12px 0px #999;
    }
  }
</style>
