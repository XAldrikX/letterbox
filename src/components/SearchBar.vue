<template>
    <div class="content-wrapper">
        <div class="search-wrapper">
            <input type="text" aria-label="pesquisar">

            <button class="search-btn">
                <img src="../assets/Search.png" alt="Botão de busca" width="30" height="30">
            </button>
        </div>

        <button class="create-chat">
            <img src="../assets/Plus.png" alt="Criar conversa" width="30" height="30">
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--light-color);
}

.search-wrapper {
    position: relative;
    width: 80%;
}

.search-wrapper > input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 40px;
}

.search-btn {
    background-color: unset;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
}

.create-chat {
    background-color: unset;
    border: none;
    cursor: pointer;
}

</style>