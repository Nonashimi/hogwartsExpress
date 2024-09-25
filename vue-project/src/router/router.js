import Main from '@/pages/Main.vue';
import Character from '@/pages/Character.vue';
import {createRouter, createWebHistory} from 'vue-router';
import WelcomeTo from '@/pages/WelcomeTo.vue';
const routes = [
    {
        path:"/characters",
        component: Main
    },
    {
        path:'/characters/:name',
        component: Character
    },
    {
        path:'/',
        component: WelcomeTo
    } 
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;


