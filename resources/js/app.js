require('./bootstrap');

window.Vue = require('vue');

import Master from './components/layouts/Master.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AnimateCss from 'animate.css/animate.min.css'
import {store}  from './store/store'

Vue.use(BootstrapVue)
Vue.use(AnimateCss)


new Vue({
    router,
    store,
    render: h => h(Master),
}).$mount('#app');
