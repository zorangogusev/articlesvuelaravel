<template>
    <div class="login-form page-main-div">
        <h2 class="login-heading">Register</h2>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form action="#" @submit.prevent="handleSubmit(register)" :keyup.enter="register">

<!--                <div v-if="successMessage" class="success-message">{{ successMessage }}</div>-->

                <div v-if="errorFromServer" class="error-from-server">
                    <div v-for="(value,key) in errorFromServer" :key="key">
                        {{ value[0] }}
                    </div>
                </div>

                <ValidationProvider name="name" rules="required|alpha" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" ref="name" class="form-control" :class="{ 'input-error': errors[0] }" v-model="name">
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
                    <button type="submit" class="btn-submit" :disabled="loadingSpinner">
                        <div class="lds-ring-container" v-if="loadingSpinner" >
                            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                        <div :class=" { 'hidden-div': loadingSpinner }">Create Account</div>
                    </button>
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
                successMessage: '',
                loadingSpinner: false,
            }
        },
        mounted() {
            this.focusInput()
        },
        methods: {
            focusInput() {
                this.$refs.name.focus()
            },
            register() {
                this.loadingSpinner = true,
                this.$store.dispatch('register', {
                    'name': this.name,
                    'email': this.email,
                    'password': this.password,
                })
                    .then(result => {
                        this.successMessage = 'Registered Successfully'
                        this.$router.push({ name: 'login', params: { dataSuccessMessage: this.successMessage } })
                        this.$toast.success({
                            title: this.successMessage,
                            message:'You can login here'
                        })

                    })
                    .catch(error => {
                        // console.log(Object.values(error.response.data.errors))
                        this.errorFromServer = Object.values(error.response.data.errors)
                    })
            }
        }
    }
</script>
