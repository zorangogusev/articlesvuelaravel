<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div class="container">
            <ul class="m-0">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/manage-articles">Manage Articles</router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name:"Navbar",
    }
</script>
