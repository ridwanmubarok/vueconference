import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Meet from "../views/Meet.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/daylight-meet/:roomname/:displayname",
    name: "Meet",
    component: Meet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
