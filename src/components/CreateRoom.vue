<template>
  <div class="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
    <div class="space-x-4">
      <button @click="generateGameId" class="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-200" >
         Create Room
      </button>

      <button @click="toggleJoinForm" class="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-200" >
         Join Room
      </button>
    </div>

    <div v-if="showJoinForm" class="mt-6 w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      <label for="gameId" class="block text-gray-700 font-semibold mb-2">
        Enter Unique Game ID:
      </label>
      <input type="text" v-model="enteredGameId" placeholder="Enter Game ID to join" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4" />
      <button @click="joinRoom" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200" >
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