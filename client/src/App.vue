<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/" class="nav-link">Dashboard</router-link>
            <router-link to="/logout" class="nav-link">Logout</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
