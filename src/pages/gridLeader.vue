<template>
  <div class="w-full select-none h-screen p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black md:p-10 bg-gray-100 flex flex-col items-center justify-center space-y-4">
    <h1 class="font-semibold text-sm sm:text-xl md:text-2xl text-white">Unique Game Id: {{ props.gameId }}</h1>
    <button v-if="props.wordList.length!=0" @click="resetWords" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
      🔄 Refresh Words
    </button>
    <button v-else @click="resetWords" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
      🛠️ Create Grid
    </button>

    <div class="grid grid-cols-5 gap-2 w-full max-w-4xl">
      <div v-for="(word, index) in props.wordList" :key="index" class=" cursor-pointer h-12 sm:h-20 md:h-26 bg-white border-2 sm:border-3 md:border-4 text-gray-700 border-gray-500 rounded-lg shadow-sm flex justify-center items-center text-[0.65rem] sm:text-lg md:text-xl capitalize font-bold hover:scale-105 hover:bg-blue-50 transition-all duration-200 ease-in-out" :class="[word.colorCode==1&&word.revealed==0?'red':word.colorCode==2&&word.revealed==0?'blue':word.colorCode==3&&word.revealed==0?'black':'']" @dblclick="revealCell(index)">
        {{ word.word }}
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { defineProps } from 'vue'
    const props=defineProps({
      wordList:Array,
      gameId:String,
    })
    const emit=defineEmits(['resetWords','revealCell']);
    const resetWords=()=>{
      emit('resetWords',true)
    }
    const revealCell=(index)=>{
      emit('revealCell',index);
    }
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
