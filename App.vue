<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <h1>Hello Vite + Vue 2</h1>
    <div class="box">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 20px;
}
</style>