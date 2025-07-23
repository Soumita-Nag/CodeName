<template>
  <div>
    <div>
      <button @click="generateGameId">Create Room</button>
      <button @click="toggleJoinForm">Join Room</button>
    </div>

    <div v-if="showJoinForm" class="mt-4">
      <label for="gameId">Enter Unique Game ID:</label>
      <input type="text" v-model="enteredGameId" placeholder="Enter Game ID to join" />
      <button @click="joinRoom">Submit</button>
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

    const joinRoom = () => {
        emit('joinRoom', enteredGameId);
    };

</script>
<style scoped>
    
</style>