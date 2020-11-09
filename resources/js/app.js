require('./bootstrap');

window.Vue = require('vue');

import Master from './components/layouts/Master.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AnimateCss from 'animate.css/animate.min.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://articlesvuelaravel.deb.test:8080/api/';

Vue.use(BootstrapVue)
Vue.use(AnimateCss)


new Vue({
    router,
    render: h => h(Master),
}).$mount('#app');
