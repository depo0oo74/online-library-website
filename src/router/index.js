import { createRouter, createWebHistory } from "vue-router";
import clientRoutes from "./client/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...clientRoutes],
});

export default router;
