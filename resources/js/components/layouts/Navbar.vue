<template>
    <nav class="nav navbar navbar-expand-sm navbar-dark bg-info mb-4 text-right">
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

<style>
    .nav {
        display: flex;
        list-style: none;
        padding: 15px 0;
        margin: 0;
        justify-content: flex-end;
        background: #F5F8FA;
        border-bottom: 1px solid lightgrey;
        margin-bottom: 24px;
    }
    .nav a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

</style>
