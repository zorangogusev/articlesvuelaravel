<template>
    <nav class="nav navbar navbar-expand-lg navbar-light bg-info mb-4">
        <div class="container p-2 mx-auto" >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li v-if="loggedIn" class="nav-item">
                        <router-link to="/manage-articles">Manage Articles</router-link>
                    </li>
                    <li v-if="!loggedIn" class="nav-item">
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li v-if="!loggedIn" class="nav-item">
                        <router-link to="/register">Register</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a v-if="loggedIn" class="nav-link dropdown-toggle"  style="color:white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome {{ getLoggedInUserName }}
                        </a>
                        <div class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" v-if="loggedIn" to="/logout">Logout</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name:"Navbar",
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            },
            getLoggedInUserName() {
                return this.$store.getters.getLoggedInUserName
            }
        }
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
    .nav a, .nav li a {
        color: white;
        padding: 0 25px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

</style>
