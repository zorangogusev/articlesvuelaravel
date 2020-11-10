<template>
    <div>
        <Navbar />
        <transition name="router-animation"
                    enter-active-class="animate__animated animate__fadein"
                    leave-active-class="animate__animated animate__fadeOut"
                    mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';

    export default {
        name:"master",
        components: {
            Navbar
        },
    }
</script>

<style>
    /* Auth Pages */
    label {
        display: block;
        margin-bottom: 4px;
    }
    .login-heading {
        margin-bottom: 16px;
    }
    .form-control {
        margin-bottom: 24px;
    }
    .login-form {
        max-width: 500px;
        margin: auto;
    }
    .btn-submit {
        width: 100%;
        padding: 14px 12px;
        font-size: 18px;
        font-weight: bold;
        background: #6cb2eb;
        color: white;
        border-radius: 3px;
        cursor: pointer;
    }
    .btn-submit:hover {
        opacity: 0.8;
    }

</style>
