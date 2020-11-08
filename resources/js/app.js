require('./bootstrap');

window.Vue = require('vue');

// import App from './App.vue'
import Master from './components/layouts/Master.vue'

import router from './router';


new Vue({
    router,
    render: h => h(Master),
}).$mount('#app');
