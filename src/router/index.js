import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductosView from "../views/ProductosView.vue";
import ContactoView from "../views/ContactoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/productos",
      name: "productos",
      component: ProductosView,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: ContactoView,
    },
  ],
});

export default router;
