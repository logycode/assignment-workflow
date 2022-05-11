import Vue from "vue";
import VueRouter from "vue-router";
import IntroSlide from "@/views/IntroSlide.vue";
import CheckoutStep1 from "@/views/CheckoutStep1.vue";
import CheckoutStep2 from "@/views/CheckoutStep2.vue";
import SuccessPage from "@/views/SuccessPage.vue";

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
  {
    path: "/checkout-2",
    name: "CheckoutStep2",
    component: CheckoutStep2,
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: SuccessPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
