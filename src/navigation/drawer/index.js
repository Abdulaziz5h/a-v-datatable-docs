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
    title: "examples",
    to: "/documentation/examples",
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
];
