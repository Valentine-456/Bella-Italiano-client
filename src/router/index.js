import Vue from "vue";
import VueRouter from "vue-router";

import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Delivery from "../views/Delivery.vue";

//!! For implementing duplicate redirections
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => {
//     if (err.name !== "NavigationDuplicated") throw err;
//   });
// };
//!!

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/menu" },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: Delivery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
