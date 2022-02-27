import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "HomePage",
    // component: () => import("@/views/HomePage.vue"),
   
   
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.name == store.state.homePage.activeTab) {
    next();
  } else {
    next({
      path: store.state.homePage.activeTab
    });
  }
});
export default router;
