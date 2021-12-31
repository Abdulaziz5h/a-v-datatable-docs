import { All } from "@/router";
export default [
  {
    header: "essentials",
  },
  {
    title: "introduction",
    to: "/documentation/introduction",
    roles: [All],
  },
  {
    header: "items",
  },
  {
    title: "examples",
    to: "/documentation/examples",
  },
  {
    title: "methods",
    to: "/documentation/methods",
  },
  {
    header: "apis",
  },
  {
    title: "props",
    to: "/documentation/apis/props",
  },
  {
    title: "slots",
    to: "/documentation/apis/slots",
  },
  {
    title: "events",
    to: "/documentation/apis/events",
  },
];
