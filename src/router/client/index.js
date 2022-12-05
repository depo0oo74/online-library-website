import HomeView from "../../views/client/HomeView.vue";
import AboutView from "../../views/client/AboutView.vue";

const clientRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export default clientRoutes;
