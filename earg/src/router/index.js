import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Geodesia from '@/views/Geodesia.vue';
    import Geodinamica from '@/views/Geodinamica.vue';
        import GeodinTdf from '@/views/GeodinTdf.vue';
        import GeodinSC from '@/views/GeodinSC.vue';
    import Gravimetria from '@/views/Gravimetria.vue';
    import Geodhist from '@/views/Geodhist.vue';

import Meteoros from '@/views/Meteoros.vue';
import Astrolabio from '@/views/Astrolabio.vue';
import Sismologia from '@/views/Sismologia.vue';
import TdaTDF from '@/views/TdaTDF.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Geodesia', name: 'Geodesia', component: Geodesia},
        {path: '/Geodinamica', name: 'Geodinamica', component: Geodinamica},
            {path: '/GeodinTdf', name: 'GeodinTdf', component: GeodinTdf},
            {path: '/GeodinSC', name: 'GeodinSC', component: GeodinSC},
        {path: '/Gravimetria', name: 'Gravimetria', component: Gravimetria},
        {path: '/Geodhist', name: 'Geodhist', component: Geodhist},
    {path: '/Meteoros', name: 'Meteoros', component: Meteoros},
    {path: '/Astrolabio', name: 'Astrolabio', component: Astrolabio},
    {path: '/Sismologia', name: 'Sismologia', component: Sismologia},
    {path: '/TdaTDF', name: 'TdaTDF', component: TdaTDF},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router;