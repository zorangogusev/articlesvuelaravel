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
