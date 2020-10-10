import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Logout from "../views/Logout";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
