import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Geodesia from '@/views/Geodesia.vue';
import Meteoros from '@/views/Meteoros.vue';
import Movimiento from '@/views/Movimiento.vue';
import Sismologia from '@/views/Sismologia.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Geodesia', name: 'Geodesia', component: Geodesia},
    {path: '/Meteoros', name: 'Meteoros', component: Meteoros},
    {path: '/Movimiento', name: 'Movimiento', component: Movimiento},
    {path: '/Sismologia', name: 'Sismologia', component: Sismologia},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;