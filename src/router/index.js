import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import NotFound from "../components/NotFound";
import Authroize from "../components/Authroize";


const routes = [
    {

        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },{
    path:'/auth',
        name:'Authroize',
        component:Authroize
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];
export default routes;