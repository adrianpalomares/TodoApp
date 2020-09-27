<template>
  <div id="app">
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
