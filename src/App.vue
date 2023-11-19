<template>
	<NavBar />
	<router-view class="router-view"/>
	<FooterElement />
</template>

<script setup>

import NavBar from '@/components/NavBar.vue';
import FooterElement from '@/components/FooterElement.vue';

</script>

<style>

:root {
	--primary-color: #42444C;
	--secondary-color: #212226;
	--light-color: #E9EAEC;
	--font-family: 'Happy Monkey', sans-serif;
	--font-size: 0.875rem;
	--font-color: #212226;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: var(--font-family);
	color: var(--font-color);
}

img {
	width: 100%;
	display: block;
}

body {
	background-color: var(--primary-color);
}

.router-view {
	padding: 15px;
}

</style>
