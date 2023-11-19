<template>
    <section class="chat-bubble" v-for="chat in 10" :key="chat">
        <img src="../assets/Customer.png" alt="Foto do perfil" class="profile-pic">

        <div class="chat-info-wrapper">
            <div class="chat-name-date">
                <p class="profile-name">Nicolas Bortoli</p>

                <p class="chat-date">10/11/23</p>
            </div>

            <p class="chat-preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias, consequatur</p>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

.chat-bubble {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    background-color: var(--light-color);
    font-size: var(--font-size);
    height: 75px;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 10px;
    cursor: pointer;
    transition: ease .2s;
}

.chat-bubble:hover {
    background-color: #d5d5d6;
}

.profile-pic {
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 50%;
    background-color: var(--primary-color);
}

.chat-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.chat-name-date {
    display: flex;
    justify-content: space-between;
}

.chat-preview {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.chat-date {
    font-size: 12px;
}

</style>