<template>
  <div class="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
    <div class="mt-6 w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      <label for="gameId" class="block text-gray-700 font-semibold mb-2">
        Enter Unique Game ID:
      </label>
      <input type="text" v-model="gameId" placeholder="Enter Game ID to join" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4" />
      <button @click="checkGameId" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200" >
        Submit
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
    const gameId=ref('');
    const emit=defineEmits(['gameId']);
    import { db } from '@/firebase';
    import { doc, getDoc } from "firebase/firestore";

    const checkGameId = async () => {
    const gameRef = doc(db, "games", gameId.value); 
    const docSnap = await getDoc(gameRef);

    if (docSnap.exists()) {
        emit("gameId", gameId);
    } else {
        alert("Invalid Game ID. Please check and try again.");
    }
    };

    // const checkGameId=()=>{
    //     emit('gameId',gameId);
    // }
</script>