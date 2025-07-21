<template>
  <div class="w-full h-screen p-4 md:p-10 bg-gray-100 flex flex-col items-center justify-center space-y-4">
    <button @click="resetWords" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer">
      🔄 Refresh Words
    </button>

    <div class="grid grid-cols-5 gap-2 w-full max-w-4xl">
      <div v-for="(word, index) in props.wordList" :key="index" class=" cursor-pointer h-24 md:h-32 bg-white border rounded-lg shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-105 hover:bg-blue-50 transition-all duration-200 ease-in-out" @dblclick="revealCell">
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
    })
    const emit=defineEmits(['resetWords']);
    // const displayedWords = ref([])

    // function resetWords() { 
    // const shuffled = [...props.wordList].sort(() => 0.5 - Math.random())
    // displayedWords.value = shuffled.slice(0, 25)
    // emit('newDisplayWord',displayedWords);
    // }
    
    const resetWords=()=>{
      emit('resetWords',true)
    }

    onMounted(() => {
    // resetWords()
    emit('resetWords',true)
    })
</script>

<style scoped>
</style>
