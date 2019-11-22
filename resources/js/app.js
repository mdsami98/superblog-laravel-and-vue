
require('./bootstrap');

window.Vue = require('vue');


// Vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);


import {routes} from './routes';





const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'history'
})


const app = new Vue({
    el: '#app',
    router
});
