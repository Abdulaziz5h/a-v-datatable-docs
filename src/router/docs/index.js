import { All } from "..";
// import { nullGuid } from "@core/util/global/index.js";
export default [
  {
    path: "",
    redirect: "/documentation/introduction",
  },
  {
    path: "introduction",
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
    redirect: "/documentation/examples/basic"
  },
  {
    path: "examples/:example",
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
