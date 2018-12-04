import Register from '@/components/Register.vue';
import  Login from '@/components/Login.vue';
import  Home from '@/components/Home.vue';


const  routes=[
        {
            path:'/',
            name: 'Register',
            component:Register
        },{
        path:'/login',
            name:'Login',
            component:Login
        },
    {
        path:'/home',
        name:'home',
        component:Home
    }
    ];
export  default  routes;