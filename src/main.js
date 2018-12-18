import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routes from '@/router/index.js';
import {store} from '@/store/index.js';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false
export const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if(to.path==='/login') {
        if (sessionStorage.getItem('token')) {
            next('/');
        }
    }
    if (to.path === '/') {
            if (sessionStorage.getItem('token')) {
                next();
            } else {
                next('/login');

            }



        }
     else {
        next()
    }
});


new Vue({
    router: router,
    store: store,
    render: (function () {
        return function (h) {
            return h(App);
        };
    })(this),
}).$mount('#app');
