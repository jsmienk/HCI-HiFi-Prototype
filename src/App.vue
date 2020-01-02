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

  .screen {
    padding: 32px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &.hover {
      padding: 0;
    }
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
    cursor: pointer;

    &.main-button {
      background-color: orange;
      color: white;
    }

    &.back-button {
      background-color: navy;
      color: white;

      display: inline-block;
      min-width: 100px;
    }

    &:hover, &:active {
      box-shadow: 0px 4px 12px 0px #999;
    }
  }
</style>
