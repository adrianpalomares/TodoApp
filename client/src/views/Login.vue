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
      <!-- Error message -->
      <p v-if="errorMessage" class="mt-4" style="color: red">
        Invalid username/password
      </p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
// TODO: Have a check when view loads, (is user logged in?)
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
      errorMessage: false,
    };
  },
  methods: {
    submitForm: function (e) {
      e.preventDefault();
      console.log(this.username);

      axios({
        url: "/api/auth/login",
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          if (err.response.status == 401) {
            console.log(this.errorMessage);
            this.errorMessage = true;
          }
        });
    },
  },
};
</script>
