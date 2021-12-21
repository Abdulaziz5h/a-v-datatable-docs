import { All } from "..";
// import { nullGuid } from "@core/util/global/index.js";
export default [
  {
    path: "introduction",
    redirect: "/docs",
  },
  {
    path: "",
    name: "docs introduction",
    component: () => import("@/views/docs/introduction"),
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "essentials",
          active: true,
        },
        {
          text: "introduction",
          active: true,
        },
      ],
    }),
  },
  {
    path: "installation",
    name: "docs installation",
    component: () => import("@/views/docs/installation"),
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "essentials",
          active: true,
        },
        {
          text: "installation",
          active: true,
        },
      ],
    }),
  },
  {
    path: "getting-started",
    name: "docs getting started",
    component: () => import("@/views/docs/getting-started"),
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "essentials",
          active: true,
        },
        {
          text: "getting-started",
          active: true,
        },
      ],
    }),
  },
];
