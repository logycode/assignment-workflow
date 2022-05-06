import Vue from "vue";
import VueRouter from "vue-router";
import IntroSlide from "@/views/IntroSlide.vue";
import CheckoutStep1 from "@/views/CheckoutStep1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IntroSlide",
    component: IntroSlide,
  },
  {
    path: "/checkout-1",
    name: "CheckoutStep1",
    component: CheckoutStep1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
