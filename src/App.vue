<script setup>
import HeaderBar from './components/HeaderBar.vue'

</script>

<template>
  <div class="h-screen flex flex-col box-border">
    <HeaderBar/>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font: 16px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
