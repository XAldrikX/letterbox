<template>
    <header>
        <nav>
            <router-link to="/" class="title-nav">
                <img src="../assets/LetterboxWhite.png" alt="Logo caixa de correio">
                <h1>Letterbox</h1>
            </router-link>

            <div class="menu-open" v-show="!menuOpen" @click="menuOpen = true">
                <img src="../assets/Menu.png" alt="Menu">
            </div>

            <div class="menu-close" v-show="menuOpen" @click="menuOpen = false">
                <img src="../assets/Close.png" alt="Menu">
            </div>
        </nav>
    </header>

    <section>
        <div class="menu">
            <div class="menu-foto-perfil">
                <img src="../assets/Customer.png" alt="Foto de perfil">
            </div>

            <div v-if="!userLogged">
                <router-link to="/sign-up" class="menu-item sign-up" @click="menuOpen = false">
                    <img src="../assets/Add_User_Male.png" alt="Logo caixa de correio">
                    <p>Cadastre-se</p>
                </router-link>

                <router-link to="/sign-in" class="menu-item sign-in" @click="menuOpen = false">
                    <img src="../assets/Enter.png" alt="Logo caixa de correio">
                    <p>Entrar</p>
                </router-link>

                <router-link to="/about" class="menu-item about" @click="menuOpen = false">
                    <img src="../assets/Info.png" alt="Logo caixa de correio">
                    <p>Sobre</p>
                </router-link>
            </div>

            <div v-else>
                <router-link to="/add-contact" class="menu-item add-contact" @click="menuOpen = false">
                    <img src="../assets/Add_User_Male.png" alt="Logo caixa de correio">
                    <p>Adicionar contato</p>
                </router-link>

                <router-link to="/config" class="menu-item config" @click="menuOpen = false">
                    <img src="../assets/Settings.png" alt="Logo caixa de correio">
                    <p>Configurações</p>
                </router-link>

                <router-link to="/about" class="menu-item about" @click="menuOpen = false">
                    <img src="../assets/Info.png" alt="Logo caixa de correio">
                    <p>Sobre</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, computed } from 'vue';

const menuOpen = ref(false);

const userLogged = ref(false);

const menuPosition = computed(() => {
    return menuOpen.value === false ? '-100%' : '0px';
})
const menuBackground = computed(() => {
    return menuOpen.value === false ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.5)';
})
const menuPointerEvent = computed(() => {
    return menuOpen.value === false ? 'none' : 'all';
})

</script>

<style scoped>

header {
    background-color: var(--secondary-color);
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.95rem;
    padding-right: 0.95rem;
    height: 70px;
}

.title-nav {
    display: flex;
    align-items: center;
    gap: 10px;
}

.title-nav > h1 {
    font-weight: 400;
    font-size: 1.25rem;
    color: white;
}

.menu-open,
.menu-close {
    cursor: pointer;
}

section {
    width: 100%;
    position: absolute;
    height: calc(100vh - 130px);
    background-color: v-bind(menuBackground);
    transition: ease-in-out .7s;
    pointer-events: v-bind(menuPointerEvent);
}

.menu {
    width: 70%;
    position: absolute;
    left: v-bind(menuPosition);
    height: calc(100vh - 130px);
    background-color: var(--light-color);
    border-radius: 0 0.3125rem 0.3125rem 0;
    transition: ease-in-out .7s;
}

.menu-foto-perfil {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    border-radius: 0 0.3125rem 0 0;
    background-color: #D9D9D9;
    border-bottom: 3px solid var(--light-color);
}

.menu-foto-perfil > img {
    width: 90px;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 0.60rem 0 0.60rem 0.95rem;
    padding-left: 0.95rem;
    gap: 15px;
    text-decoration: none;
    font-size: var(--font-size);
    cursor: pointer;
}

.menu-item > img{
    width: 30px;
}

.menu-item:hover {
    background-color: #D9D9D9;
}

</style>