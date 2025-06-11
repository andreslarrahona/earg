import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Geodesia from '@/views/Geodesia.vue';
    import Geodinamica from '@/views/Geodinamica.vue';
        import GeodinTdf from '@/views/GeodinTdf.vue';
        import GeodinSC from '@/views/GeodinSC.vue';
    import Gravimetria from '@/views/Gravimetria.vue';
    import Geodhist from '@/views/Geodhist.vue';
        import Pgs from '@/views/Pgs.vue';
import Atmosfera from '@/views/Atmosfera.vue';
    import Coral from '@/views/Coral.vue';
import Meteoros from '@/views/Meteoros.vue';
import Astrolabio from '@/views/Astrolabio.vue';
import Sismologia from '@/views/Sismologia.vue';
    import SismoEstaciones from '@/views/SismoEstaciones.vue';
import TdaTDF from '@/views/TdaTDF.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Geodesia', name: 'Geodesia', component: Geodesia},
        {path: '/Geodinamica', name: 'Geodinamica', component: Geodinamica},
            {path: '/GeodinTdf', name: 'GeodinTdf', component: GeodinTdf},
            {path: '/GeodinSC', name: 'GeodinSC', component: GeodinSC},
        {path: '/Gravimetria', name: 'Gravimetria', component: Gravimetria},
        {path: '/Geodhist', name: 'Geodhist', component: Geodhist},
            {path: '/Pgs', name: 'Pgs', component: Pgs},
            {path: '/Astrolabio', name: 'Astrolabio', component: Astrolabio},
    {path: '/Meteoros', name: 'Meteoros', component: Meteoros},
    {path: '/Atmosfera', name: 'Atmosfera', component: Atmosfera},
        {path: '/Coral', name: 'Coral', component: Coral},
    {path: '/Sismologia', name: 'Sismologia', component: Sismologia},
        {path: '/SismoEstaciones', name: 'SismoEstaciones', component: SismoEstaciones},
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