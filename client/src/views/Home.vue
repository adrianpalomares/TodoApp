<template>
  <div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">This is a simple todo app.</p>
    <hr class="my-4" />
    <p>Built with Node.js, Vue.js, Express, and MongoDB.</p>
    <router-link class="btn btn-primary btn-lg" to="/login" role="button"
      >Login</router-link
    >
    <!-- TODO: Add a register view -->
    <router-link class="btn btn-primary btn-lg" to="/register" role="button"
      >Register</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Home",
  created: function () {
    if (localStorage.getItem("user") != null) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
