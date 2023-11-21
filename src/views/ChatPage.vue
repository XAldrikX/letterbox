<template>
    <main>
        <SearchBar />

    </main>
</template>

<script setup>

import SearchBar from '@/components/SearchBar.vue';

</script>

<style scoped>
main {
    height: calc(100vh - 130px);
    background-color: var(--primary-color);
    overflow-y: scroll;
}
</style>