<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    margin:0;
    padding:0;
}

html, body, #app {
  position: relative;
  height: 100%;
  overflow: auto;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a, a:active, a:visited {
  outline: none;
  color: white;
  text-decoration: none;
}


</style>
