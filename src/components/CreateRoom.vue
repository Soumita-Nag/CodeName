<template>
    <div>
        <div>
            <button @click="generateGameId">Create Room</button>
            <button>Join Room</button>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    const emit=defineEmits(['gameId']);
    const generateGameId=()=>{
        const date=new Date();
        const time =date.getTime();
        const gameId= time.toString(16);
        emit('gameId',gameId);
    }

</script>
<style scoped>
    
</style>