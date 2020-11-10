<template>
    <div class="login-form">
        <h2 class="login-heading">Register</h2>
        <form action="#">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="text" name="email" id="email" class="form-control">
                </div>

                <div class="form-group">
                    <label for="name">Password</label>
                    <input type="password" name="password" id="password" class="form-control">
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

    }
</script>
