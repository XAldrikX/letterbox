import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';
import AllChats from '@/views/AllChats.vue';
import AddContact from '@/views/AddContact.vue';
import ChatPage from '@/views/ChatPage.vue';

const routes = [
	{
		path: '/',
		name: 'AllChats',
		component: AllChats
	},
	{
		path: '/chat',
		name: 'ChatPage',
		component: ChatPage
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
	{
		path: '/add-contact',
		name: 'AddContact',
		component: AddContact
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
