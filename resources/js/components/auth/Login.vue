<template>
    <div class="login-form">
        <h2 class="login-heading">Login</h2>
        <form action="#">
            <div class="form-group">
                <label for="username">Username/Email</label>
                <input type="email" name="username" id="username" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control">
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

    }
</script>
