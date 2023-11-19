import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';
import AllChats from '@/views/AllChats.vue';

const routes = [
	{
		path: '/',
		name: 'AllChats',
		component: AllChats
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		component: SignUp
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		component: SignIn
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
