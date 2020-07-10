import Home from './components/HelloWorld.vue';
import Calculadora from './components/Calculadora.vue';

export const routes = [

    { path: '', name: 'home', component: Home },
    { path: '/calculadora', name: 'calculadora', component: Calculadora }

];