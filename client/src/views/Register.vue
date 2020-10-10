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
      <p class="m-2" style="color: red">{{ flashMessage }}</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data: function () {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      flashMessage: "",
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      // Making sure passwords match
      if (this.password == "" || this.confirmPassword == "") {
        this.flashMessage = "Fill out password fields";
      } else if (this.password != this.confirmPassword) {
        this.flashMessage = "Passwords do not match";
      } else {
        // Send api request
        axios({
          url: "/api/users",
          method: "POST",
          data: {
            username: this.username,
            password: this.password,
          },
        })
          .then((res) => {
            console.log(res, "hello");
            // Add user data to localStorage
            localStorage.setItem("user", JSON.stringify(res.data));

            // Redirect to dashboard
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            // Catching username already taken error
            if (err.response.status === 409)
              this.flashMessage = "Username already exists";
          });
      }
    },
  },
};
</script>