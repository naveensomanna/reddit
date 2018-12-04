import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routes from '@/router/index.js';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false
const router=new VueRouter({
    mode:'history',
    routes:routes
});
new Vue({
    router:router,
  render:  (function() {
      return function(h) {
          return h(App);
      };
  })(this),
}).$mount('#app');
