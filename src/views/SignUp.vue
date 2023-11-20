<template>
    <main>
        <section class="sign-up-wrapper">
            <div class="logo">
                <img src="../assets/LetterboxBlack.png" alt="Logo caixa de correio" width="45" height="45">
                <h2>Letterbox</h2>
            </div>

            <h3>Cadastre-se</h3>

            <form class="sign-up-form">
                <div class="form-item">
                    <label for="name">Nome: </label>
                    <input type="text" id="name">
                </div>

                <div class="form-item">
                    <label for="last-name">Sobrenome: </label>
                    <input type="text" id="last-name">
                </div>

                <div class="form-item">
                    <label for="email">E-mail: </label>
                    <input type="email" id="email">
                </div>

                <div class="form-item">
                    <label for="password">Senha: </label>
                    <input type="password" id="password">
                </div>

                <input type="submit" value="Entrar" class="btn-entrar"> 
            </form>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>

main {
    height: calc(100vh - 130px);
    background-color: var(--primary-color);
}

.sign-up-wrapper {
    height: 100%;
    border-radius: 5px;
    background-color: var(--light-color);
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 55px 0;
    gap: 10px;
}

.logo > img {
    width: 45px;
}

.logo > h2 {
    font-size: 20px;
    font-weight: 400;
}

h3 {
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
    padding-bottom: 55px;
}

.sign-up-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: var(--font-size);
}

.form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 5px;
    width: 80%;
}

.form-item > input {
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    padding-left: 10px;
}

.btn-entrar {
    width: 80%;
    height: 40px;
    color: white;
    font-weight: 700;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in-out .2s;
}

.btn-entrar:hover {
    background-color: var(--primary-color);
}

</style>