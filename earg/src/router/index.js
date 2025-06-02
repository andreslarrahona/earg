import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Geodesia from '@/views/Geodesia.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
        {path: '/Geodesia', name: 'Geodesia', component: Geodesia},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;