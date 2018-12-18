import  Vue from 'vue';
import Vuex from 'vuex';
import UserData from './modules/UserData';
Vue.use(Vuex);

export  const store=new Vuex.Store({
modules:{
    UserData
}
});
