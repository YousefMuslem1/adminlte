import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Home from "../components/Home";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/profile",
        component: Profile
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
});

export default router;
