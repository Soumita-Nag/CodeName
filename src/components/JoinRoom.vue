<template>
  <div class="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
    <div class="w-full select-none max-w-md bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-8 animate-pop text-white">
      <label for="gameId" class="text-xl font-bold text-center tracking-wide">
        Enter Unique Game ID:
      </label>
      <input type="text" v-model="gameId" placeholder="Enter Game ID to join" class="w-full px-4 py-2 mt-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />
      <button @click="checkGameId" class="w-full cursor-pointer py-3 rounded-xl bg-blue-700 text-white text-lg font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 ease-in-out tracking-wider" >
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