import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import About from './components/About.vue';
import ManageArticles from "./components/ManageArticles";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Logout from "./components/auth/Logout.vue";

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
            component: ManageArticles,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            props: true,
            meta: {
                requiresGuest: true,
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                requiresGuest: true,
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
            meta: {
                requiresAuth: true,
            }
        },
    ],
    mode: 'history',
    history: true,
});
