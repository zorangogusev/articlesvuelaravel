require('./bootstrap');

window.Vue = require('vue');

import Master from './components/layouts/Master.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AnimateCss from 'animate.css/animate.min.css'
import {store}  from './store/store'

Vue.use(BootstrapVue)
Vue.use(AnimateCss)

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
