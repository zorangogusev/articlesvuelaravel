require('./bootstrap');

window.Vue = require('vue');

import Master from './components/layouts/Master.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AnimateCss from 'animate.css/animate.min.css'
import {store}  from './store/store'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import { ValidationObserver } from 'vee-validate'

import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
const toastrConfigs = {
    position: 'top right',
    showDuration: 2000,
    timeOut: 5000,
    progressBar: true,
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(BootstrapVue)
Vue.use(AnimateCss)
Vue.use(CxltToastr, toastrConfigs)


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.loggedIn) {
            next({
                name: 'manage-articles',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(Master),
}).$mount('#app');
