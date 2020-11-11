<template>
    <div class="login-form">
        <h2 class="login-heading">Login</h2>
        <form action="#" @submit.prevent="login" :keyup.enter="login">
            <div class="form-group">
                <label for="username">Username/Email</label>
                <input type="email" name="username" id="username" class="form-control" v-model="username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <button type="submit" class="btn-submit"> Login</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('getToken', {
                    'username': this.username,
                    'password': this.password,
                })
                    .then(response => {
                        this.$store.dispatch('getLoggedInUserName')
                        this.$router.push({ name: 'manage-articles'})
                    })
                    .catch(error => {
                        this.password = ''
                    })
            }
        }
    }
</script>
