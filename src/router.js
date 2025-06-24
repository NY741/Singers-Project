import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from "./pages/ErrorPage.vue";
import SingersPage from "./pages/SingersPage.vue";
import BandsPage from "./pages/BandsPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import SingerDetails from "./components/singers/SingerDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior(_1, _2, savedPos) {
    if (savedPos) return savedPos;
    else return { left: 0, top: 0 };
  },
  routes: [
    { path: "/", redirect: "/singers" },
    {
      name: "singers",
      path: "/singers",
      component: SingersPage,
      children: [
        {
          name: "singer-details",
          path: ":singerId",
          component: SingerDetails,
          props: true,
        },
      ],
    },
    { name: "bands", path: "/bands", component: BandsPage },
    { name: "about", path: "/about", component: AboutPage },
    { name: "errorPage", path: "/:notFound", component: ErrorPage },
  ],
});

export default router;
