<template>
    <div>
        <div>
            <label for="gameId">Enter Unique Game-Id</label>
            <input type="text" placeholder="Enter Game Id to join" v-model="gameId">
            <button @click="checkGameId">Join Room</button>
            <h1>{{ gameId }}</h1>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const gameId=ref('');
    const emit=defineEmits(['gameId']);
    const checkGameId=()=>{
        emit('gameId',gameId);
    }
</script>