<template>
    <div>
        <Navbar />
        <transition name="router-animation"
                    enter-active-class="animate__animated animate__fadeIn"
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
        margin-top: 24px;
        margin-bottom: 4px;
    }
    .login-heading {
        margin-bottom: 16px;
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
    .error-from-server {
        margin-bottom: 12px;
        font-size: 16px;
        padding: 10px 16px;
        color: #a94442;
        background: #F3DEDE;
        border-radius: 4px;
    }
    .form-error {
        font-size: 16px;
        color: #a94442;
        font-style: italic;
    }
    .input-error {
        border: 1px solid red;
    }
    /* end Auth Pages */

    .success-message {
        background-color: #dff0d8;
        color: #3c783d;
        margin-bottom: 12px;
        font-size: 16px;
        padding: 10px 16px;
        border-radius: 4px;
    }
    .page-main-div {
        padding: 20px;
        animation-duration: 0.2s;
    }

    .hidden-div {
        visibility: hidden;
    }

    /* start spinner */
    .lds-ring-container {
        position: absolute;
        right: 51%
    }
    lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 25px;
        height: 25px;
        border: 3px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* end spinner */

    @media (max-width: 767px) {
        .add-new-article-button {
            width: 100%;
            margin-bottom: 20px;
        }
    }

</style>
