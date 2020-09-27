import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Logout from "../views/Logout";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
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
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
