<template>
<nav>
  <div class="h-10 px-5 flex justify-between items-center text-white">
    <div id="header-left">
      <div id="header-title">
        Building Tagging Guide
      </div>
    </div>
    <div id="header-right" class="flex flex-row space-x-2">
      <router-link
        v-for="item in routes"
        :key="item.to"
        :to="item.to"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {title:"Points", to:"/points"},
        {title:"Equipment", to:"/equipment"},
        {title:"Guides", to:"/guides"},
        {title:"About", to:"/about"},
      ]
    }
  }
}
</script>

<style>
  nav {
    background-color: #354858;
  }
</style>