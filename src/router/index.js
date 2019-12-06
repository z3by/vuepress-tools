import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FourOhFour from "../views/FourOhFour.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/all",
    redirect: "/"
  },

  {
    path: "/docs",
    name: "documentation",
    component: Home
  },

  {
    path: "/blog",
    name: "blog",
    component: Home
  },

  {
    path: "/others",
    name: "others",
    component: Home
  },
  {
    path: "*",
    component: FourOhFour
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
