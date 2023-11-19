<template>
    <main>
        <SearchBar />
        <ChatBuggle />
    </main>
</template>

<script setup>

import SearchBar from '@/components/SearchBar.vue';
import ChatBuggle from '@/components/ChatBubble.vue';

</script>

<style scoped>

main {
    height: calc(100vh - 130px);
    background-color: var(--primary-color);
    overflow-y: scroll;
}

</style>