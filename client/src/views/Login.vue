<template>
    <div class="container">
        <h1 class="mb-4">Log In</h1>
        <form @submit="submitForm">
            <div class="form-group">
                <label for="inputUsername">Username</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputUsername"
                    placeholder="Username"
                    v-model="username"
                />
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    v-model="password"
                />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Login",
    data: function() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        submitForm: function(e) {
            e.preventDefault();
            console.log(this.username);
            // TODO: AJAX request to api
        },
    },
};
</script>
