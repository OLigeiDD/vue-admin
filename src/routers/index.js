import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index")
      }
    ]
  }
];

const router = new Router({
  routes
});

export default router;
