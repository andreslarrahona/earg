import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Geodesia from '@/views/Geodesia.vue';
import Meteoros from '@/views/Meteoros.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Geodesia', name: 'Geodesia', component: Geodesia},
    {path: '/Meteoros', name: 'Meteoros', component: Meteoros},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;