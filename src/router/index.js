import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/",
        name: "",
        redirect: "/personal"
      },
      {
        path: "/personal",
        name: "personal",
        component: () => import("../components/forms/personal.vue")
      },
      {
        path: "/uploads",
        name: "uploads",
        component: () => import("../components/forms/uploads.vue")
      },
      {
        path: "/review",
        name: "review",
        component: () => import("../components/forms/review.vue")
      }
    ]
  },

  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
