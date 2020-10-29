<template>
    <div>
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './layouts/Navbar.vue';
    export default {
        name:"app",
        components: {
            Navbar
        },
    }
</script>
