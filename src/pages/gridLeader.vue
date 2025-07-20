<template>
  <div class="w-full h-screen p-4 md:p-10 bg-gray-100 flex flex-col items-center justify-center space-y-4">
    <button @click="resetWords" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
      🔄 Refresh Words
    </button>

    <div class="grid grid-cols-5 gap-2 w-full max-w-4xl">
      <div v-for="(word, index) in displayedWords" :key="index" class="h-24 md:h-32 bg-white border rounded-lg shadow-sm flex justify-center items-center text-xl font-semibold hover:scale-105 hover:bg-blue-50 transition-all duration-200 ease-in-out" >
        {{ word }}
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const wordList = [
    'apple', 'banana', 'train', 'river', 'book', 'pen', 'sun', 'cloud', 'temple', 'cricket',
    'phone', 'bottle', 'fan', 'mirror', 'door', 'cycle', 'school', 'puja', 'glass', 'biryani',
    'pencil', 'samosa', 'match', 'goal', 'flag',
    ]

    const displayedWords = ref([])

    function resetWords() {
    const shuffled = [...wordList].sort(() => 0.5 - Math.random())
    displayedWords.value = shuffled.slice(0, 25)
    }

    onMounted(() => {
    resetWords()
    })
</script>

<style scoped>
</style>
