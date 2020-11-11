<template>
    <div class="login-form">
        <h2 class="login-heading">Register</h2>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form action="#" @submit.prevent="handleSubmit(register)" :keyup.enter="register">

                <div v-if="errorFromServer" class="error-from-server">
                    <div v-for="(value,key) in errorFromServer" :key="key">
                        {{ value[0] }}
                    </div>
                </div>

                <ValidationProvider name="name" rules="required|alpha" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" class="form-control" :class="{ 'input-error': errors[0] }" v-model="name">
                        <span class="form-error">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="name">Email</label>
                        <input type="text" name="email" id="email" class="form-control" :class="{ 'input-error': errors[0] }" v-model="email">
                        <span class="form-error">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="name">Password</label>
                        <input type="password" name="password" id="password" class="form-control" :class="{ 'input-error': errors[0] }" v-model="password">
                        <span class="form-error">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
                <div class="form-group">
                    <button type="submit" class="btn-submit">Create Account</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                errorFromServer: '',
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
                    .catch(error => {
                        console.log(error.response)
                        console.log(error.response.data.errors)
                        console.log(Object.values(error.response.data.errors))
                        this.errorFromServer = Object.values(error.response.data.errors)
                    })
            }
        }
    }
</script>
