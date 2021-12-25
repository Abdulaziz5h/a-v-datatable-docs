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
    path: "examples",
    name: "docs examples",
    redirect: "/docs/example/basic"
  },
  {
    path: "example/:example",
    name: "docs examples preview",
    component: () => import("@/views/docs/examples"),
    props: true,
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "essentials",
          active: true,
        },
        {
          text: "examples",
          active: true,
        },
      ],
    }),
  },
];
