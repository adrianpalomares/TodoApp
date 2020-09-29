<template>
  <div id="app">
    <div id="banner">
      <span id="banner-text">TODO APP</span>
    </div>
    <nav class="nav">
      <router-link
        v-if="localStorage.getItem('user') != null"
        to="/dashboard"
        class="nav-link"
        >Dashboard</router-link
      >
      <router-link
        v-if="localStorage.getItem('user') != null"
        to="/profile"
        class="nav-link"
        >Profile</router-link
      >
      <router-link
        v-if="localStorage.getItem('user') != null"
        to="/logout"
        class="nav-link"
        >Logout</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      localStorage: localStorage,
    };
  },
};
</script>
<style scoped>
#banner {
  width: 100%;
  background-color: black;
  height: 100px;
  margin-bottom: 30px;
}
#banner-text {
  color: white;
  font-size: 50px;
  font-family: "Permanent Marker", cursive;
  /* margin-top: 100px; */
}
</style>