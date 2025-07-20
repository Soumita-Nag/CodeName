<script setup>
  import HomePage from './pages/HomePage.vue';

  var role="";
  const assignRole=(r)=>{
    role=r;
  }
</script>

<template>
  <HomePage @role="assignRole"/>
</template>
<style scoped>
  
</style>