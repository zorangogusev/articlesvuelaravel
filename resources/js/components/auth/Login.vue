<template>
    <div class="login-form page-main-div">
        <h2 class="login-heading">Login</h2>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form action="#" @submit.prevent="handleSubmit(login)" :keyup.enter="login">

<!--                <div v-if="successMessage" class="success-message">{{ successMessage }}</div>-->
                <div v-if="errorFromServer" class="error-from-server">{{ errorFromServer }}</div>

                <ValidationProvider name="username" rules="required|email" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="username">Username/Email</label>
                        <input type="email" name="username" id="username" ref="username" class="form-control" :class="{ 'input-error': errors[0] }" v-model="username">
                        <span class="form-error">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
                <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" :class="{ 'input-error': errors[0] }" v-model="password">
                        <span class="form-error">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>
                <div class="form-group">
                    <button type="submit" class="btn-submit" :disabled="loadingSpinner">
                        <div class="lds-ring-container" v-if="loadingSpinner" >
                            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                        <div :class=" { 'hidden-div': loadingSpinner }">Login</div>
                    </button>
                </div>

            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            dataSuccessMessage: {
                type: String,
            }
        },
        data() {
            return {
                username: '',
                password: '',
                errorFromServer: '',
                successMessage: this.dataSuccessMessage,
                loadingSpinner: false,
            }
        },
        mounted() {
            this.focusInput()
        },
        methods: {
            focusInput() {
                this.$refs.username.focus()
            },
            login() {
                this.loadingSpinner = true
                this.$store.dispatch('getToken', {
                    'username': this.username,
                    'password': this.password,
                })
                    .then(response => {
                        this.$store.dispatch('getLoggedInUserName')
                        this.$router.push({name: 'manage-articles'})
                        this.loadingSpinner = false
                    })
                    .catch(error => {
                        // console.log(error.response.data)
                        this.password = ''
                        this.errorFromServer = error.response.data
                        this.successMessage = ''
                        this.loadingSpinner = false
                    })
            }
        }
    }
</script>
