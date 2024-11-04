import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import CartView from "@/views/CartView.vue";
import SearchView from "@/views/SearchView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import MyAccountView from "@/views/MyAccountView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import BlogView from "@/views/BlogView.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/category/:categorySlug/:page(\\d+)?",
      name: "category",
      component: CategoryView,
      props: true,
    },
    {
      path: "/product/:id",
      name: "product detail",
      component: ProductDetail,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: MyAccountView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/blog/:id",
      name: "blog-detail",
      component: BlogDetail,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
