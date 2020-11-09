import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import About from './components/About.vue';
import ManageArticles from "./components/ManageArticles";

Vue.use(VueRouter);

export default new VueRouter({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name:'about',
            component: About
        },
        {
            path: '/manage-articles',
            name:'manage-articles',
            component: ManageArticles
        }
    ],
    mode: 'history',
    history: true,
    // beforeEach: () => {
    //
    // },

});
