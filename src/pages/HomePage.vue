<template>
  <div class="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black font-codename">
    <header class="w-full select-none max-w-md py-6 mb-4 text-center shadow-xl rounded-2xl">
      <h1 class="text-4xl md:text-5xl tracking-widest font-bold text-white drop-shadow-md">
        CODENAME
      </h1>
      <p class="text-sm text-gray-400 tracking-wider mt-1">A Spy-Themed Word Game</p>
    </header>
    <div class="w-full select-none max-w-md bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-2xl p-8 space-y-8 animate-pop text-white">
      
      <h2 class="text-3xl font-bold text-center tracking-wide">
        🕵️ Register as:
      </h2>

      <div class="flex flex-col gap-6">
        <button @click="assignLeader" class="w-full cursor-pointer py-3 rounded-xl bg-red-700 text-white text-lg font-semibold shadow-md hover:bg-red-800 hover:scale-105 transition-all duration-300 ease-in-out tracking-wider">
          Spymaster (Team Leader)
        </button>

        <button @click="assignMember" class="w-full cursor-pointer py-3 rounded-xl bg-blue-700 text-white text-lg font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 ease-in-out tracking-wider">
          Field Operative (Team Member)
        </button>
      </div>
      
      <p class="text-sm text-center text-gray-400 pt-2 italic">Choose your role to join the mission.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const emit=defineEmits(['role','resetWords']);
const assignLeader=()=>{
    emit('role','leader');
}
const assignMember=()=>{
    emit('role','member');
}
</script>

<style scoped>
@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pop {
  animation: pop 0.4s ease-out forwards;
}
</style>
