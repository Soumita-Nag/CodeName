<template>
  <div class="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
    <div class="space-x-4">
      <button @click="generateGameId" class="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg cursor-pointer shadow-md hover:bg-yellow-700 transition duration-200" >
         Create Room
      </button>

      <button @click="toggleJoinForm" class="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg cursor-pointer shadow-md hover:bg-yellow-700 transition duration-200" >
         Join Room
      </button>
    </div>

    <div v-if="showJoinForm" class="w-full select-none max-w-md bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-8 animate-pop text-white">
      <label for="gameId" class="text-xl font-bold text-center tracking-wide">
        Enter Unique Game ID:
      </label>
      <input type="text" v-model="enteredGameId" placeholder="Enter Game ID to join" class="w-full px-4 py-2 mt-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />
      <button @click="joinRoom" class="w-full cursor-pointer py-3 rounded-xl bg-blue-700 text-white text-lg font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 ease-in-out tracking-wider" >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const showJoinForm = ref(false);
    const enteredGameId = ref('');
    const emit = defineEmits(['gameId', 'joinRoom']);

    const toggleJoinForm = () => {
        showJoinForm.value = true;
    };

    const generateGameId = () => {
        const date = new Date();
        const time = date.getTime();
        const gameId = time.toString(16);
        emit('gameId', gameId);
    };
    import { db } from '@/firebase';
    import { doc, getDoc } from "firebase/firestore";

    const joinRoom = async () => {
    const gameRef = doc(db, "games", enteredGameId.value); 
    const docSnap = await getDoc(gameRef);

    if (docSnap.exists()) {
        emit("joinRoom", enteredGameId);
    } else {
        alert("Invalid Game ID. Please check and try again.");
    }
    };

    // const joinRoom = () => {
    //     emit('joinRoom', enteredGameId);
    // };

</script>
<style scoped>
    
</style>