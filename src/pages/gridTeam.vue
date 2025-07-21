<template>
  <div class="w-full h-screen p-4 md:p-10 bg-gray-100 flex justify-center items-center">
    <div v-if="props.wordList.length==0" class="pb-30">
      <h4 class="md:text-4xl sm:text-2xl text-xl font-semibold">⏳ Wait for the Leader to create the Grid...</h4>
    </div>
    <div v-else class="grid grid-cols-5 gap-2 w-full max-w-4xl">
      <div v-for="(word, index) in props.wordList" :key="index" class=" cursor-pointer h-24 md:h-32 bg-white border-4 text-gray-700 border-gray-500 rounded-lg shadow-sm flex justify-center items-center text-xl capitalize font-bold hover:scale-105 hover:bg-blue-50 transition-all duration-200 ease-in-out" :class="[word.colorCode==1&&word.revealed==1?'red':word.colorCode==2&&word.revealed==1?'blue':word.colorCode==3&&word.revealed==1?'black':'']" @dblclick="revealCell">
        {{ word.word }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props=defineProps({
  wordList:Array,
})
</script>

<style scoped>
.red{
  background-color: rgb(253, 126, 126);
  border: 4px solid rgb(255, 77, 77);
  border-radius: 10px;
  color: rgb(89, 0, 0)
}
.blue{
  background-color: rgb(121, 188, 255);
  border: 4px solid rgb(61, 158, 255);
  border-radius: 10px;
  color: rgb(0, 22, 94)
}
.black{
  background-color: rgb(116, 116, 116);
  border: 4px solid rgb(60, 60, 60);
  border-radius: 10px;
  color: rgb(255, 255, 255)
}
</style>
