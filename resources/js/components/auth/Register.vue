<template>
    <div class="login-form">
        <h2 class="login-heading">Register</h2>
        <form action="#" @submit.prevent="register">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="text" name="email" id="email" class="form-control" v-model="email">
                </div>

                <div class="form-group">
                    <label for="name">Password</label>
                    <input type="password" name="password" id="password" class="form-control" v-model="password">
                </div>
            <div class="form-group">
                <button type="submit" class="btn-submit">Create Account</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                'name': '',
                'email': '',
                'password': '',
            }
        },
        methods: {
            register() {
                this.$store.dispatch('register', {
                    'name': this.name,
                    'email': this.email,
                    'password': this.password,
                })
                    .then(result => {
                        this.$router.push({ name: 'login' })
                    })
                    .catch()
            }
        }
    }
</script>
