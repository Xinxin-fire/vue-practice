<template>
  <div id="app">
    <!-- <router-link to="/" class="home">首页</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f3f3f3;
  color: #2c3e50;
}
</style>
