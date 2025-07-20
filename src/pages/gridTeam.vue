<template>
  <div class="w-full h-screen p-4 md:p-10 bg-gray-100 flex justify-center items-center">
    <div class="grid grid-cols-5 gap-2 w-full max-w-4xl">
      <div v-for="i in 25" :key="i" class="h-24 md:h-32 bg-white border rounded-lg shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-105 hover:bg-blue-50 transition-all duration-200 ease-in-out">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
