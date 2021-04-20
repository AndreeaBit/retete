import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Reteta from "../views/Reteta.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/reteta/:id",
    name: "Reteta",
    component: Reteta,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
