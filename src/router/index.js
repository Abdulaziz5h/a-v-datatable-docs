import Vue from "vue";
import VueRouter from "vue-router";

import docs from "./docs";
import website from "./website";

import { canNavigate, isUserLoggedIn } from "@core/util/auth";

Vue.use(VueRouter);

export const All = "All";
export const Admin = "Admin";

let routes = [
  {
    path: "/",
    component: () => import("@/views/website"),
    children: website,
  },
  {
    path: "/documentation",
    components: {
      default: () => import("@/views/docs"),
      "router-action": () => import("@/views/docs/router-action"),
    },
    children: docs,
  },
  {
    path: "/login",
    component: () => import("@/views/auth"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("@/views/auth/login.vue"),
        meta: () => ({
          title: "تسجيل الدخول",
          roles: [All],
        }),
      },
      // {
      //   path: "/signup",
      //   name: "signup",
      //   component: () => import("@/views/auth/signup.vue"),
      //   meta: () => ({
      //     title: "حساب جديد",
      //     roles: [All],
      //   }),
      // },
      // {
      //   path: "/forget-password",
      //   name: "forget-password",
      //   component: () => import("@/views/auth/forget-password.vue"),
      //   meta: () => ({
      //     title: "نسيت كلمة المرور",
      //     roles: [All],
      //   }),
      // },
    ],
  },

  {
    path: "/server-error",
    name: "server-error",
    meta: () => ({
      title: "عطل المخدم",
      roles: [All],
    }),
    component: () => import("@/views/errors/server-error.vue"),
  },
  {
    path: "/error-404",
    name: "page not found",
    meta: () => ({
      title: "الصفحة غير موجودة",
      roles: [All],
    }),
    component: () => import("@/views/errors/error-404.vue"),
  },
  {
    path: "/access-denied",
    name: "access denied",
    meta: () => ({
      title: "ممنوع الوصول",
      roles: [All],
    }),
    component: () => import("@/views/errors/access-denied.vue"),
  },
  {
    path: "*",
    redirect: "/error-404",
  },
  {
    path: "",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn();
  document.title = !to.meta(to).breadcrumb
    ? !to.meta(to).pageTitle
      ? to.meta(to).title
      : to.meta(to).pageTitle
    : to.meta(to).breadcrumb[0].text;
  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next("/login");

    // If logged in => not authorized
    return next("/access-denied");
  }
  next();
});
export default router;
