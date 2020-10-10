<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit="handleSubmit">
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
      <div class="form-group">
        <label for="inputPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="inputConfirmPassword"
          placeholder="Confirm Password"
          v-model="confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data: function () {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
    },
  },
};
</script>