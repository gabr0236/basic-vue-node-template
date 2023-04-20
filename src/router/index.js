import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../views/Page1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "page1",
      component: Page1,
    },
    {
      path: "/page2",
      name: "page2",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/page2.vue"),
    },
  ],
});

export default router;