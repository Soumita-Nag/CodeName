<template>
  <div class="w-full h-screen flex justify-center items-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 animate-pop">
      <h2 class="text-2xl font-semibold text-center text-gray-800">Register As:</h2>
      <div class="flex flex-col gap-4">
        <button @click="assignLeader" class="w-full py-3 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition duration-300">
          Team Leader
        </button>
        <button @click="assignMember" class="w-full py-3 rounded-xl bg-green-600 text-white text-lg font-medium hover:bg-green-700 transition duration-300">
          Team Member
        </button>
      </div>
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
// onMounted(() => {
//     // resetWords()
//     emit('resetWords',true)
// })
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
