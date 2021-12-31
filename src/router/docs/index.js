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
  {
    path: "methods",
    name: "docs methods",
    component: () => import("@/views/docs/methods"),
    props: true,
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "items",
          active: true,
        },
        {
          text: "methods",
          active: true,
        },
      ],
    }),
  },
  {
    path: "apis",
    name: "docs apis",
    redirect: "/documentation/apis/props"
  },
  {
    path: "apis/props",
    name: "docs apis props",
    component: () => import("@/views/docs/apis/props"),
    props: true,
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "apis",
          active: true,
        },
        {
          text: "props",
          active: true,
        },
      ],
    }),
  },
  {
    path: "apis/slots",
    name: "docs apis slots",
    component: () => import("@/views/docs/apis/slots"),
    props: true,
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "apis",
          active: true,
        },
        {
          text: "slots",
          active: true,
        },
      ],
    }),
  },
  {
    path: "apis/events",
    name: "docs apis events",
    component: () => import("@/views/docs/apis/events"),
    props: true,
    meta: () => ({
      roles: [All],
      layout: "vertical",
      breadcrumb: [
        {
          text: "apis",
          active: true,
        },
        {
          text: "events",
          active: true,
        },
      ],
    }),
  },
];
