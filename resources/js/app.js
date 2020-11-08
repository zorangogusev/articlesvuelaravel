require('./bootstrap');

window.Vue = require('vue');

import Master from './components/layouts/Master.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
    router,
    render: h => h(Master),
}).$mount('#app');
