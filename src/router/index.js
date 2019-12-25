import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ThemeDetails from "../views/ThemeDetails.vue";
import FourOhFour from "../views/FourOhFour.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/themes/:type",
    name: "themes",
    component: Home
  },

  {
    path: "/:type/:name",
    name: "details",
    component: ThemeDetails
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
