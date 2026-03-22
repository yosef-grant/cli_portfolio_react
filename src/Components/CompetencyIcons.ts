/* lo-res icon imports */
import html_lo from "../assets/techIcons/lores/html_lo.png";
import css_lo from "../assets/techIcons/lores/css_lo.png";
import js_lo from "../assets/techIcons/lores/js_lo.png";
import react_lo from "../assets/techIcons/lores/react_lo.png";
import remix_lo from "../assets/techIcons/lores/remix_lo.png";
import node_lo from "../assets/techIcons/lores/node_lo.png";
import sql_lo from "../assets/techIcons/lores/sql_lo.png";
import graphql_lo from "../assets/techIcons/lores/graphql_lo.png";
import liquid_lo from "../assets/techIcons/lores/liquid_lo.png";
import shopify_lo from "../assets/techIcons/lores/shopify_lo.png";
/* hi-res icon imports */
import html_hi from "../assets/techIcons/hires/html_hi.png";
import css_hi from "../assets/techIcons/hires/css_hi.png";
import js_hi from "../assets/techIcons/hires/js_hi.png";
import react_hi from "../assets/techIcons/hires/react_hi.png";
import remix_hi from "../assets/techIcons/hires/remix_hi.png";
import node_hi from "../assets/techIcons/hires/node_hi.png";
import sql_hi from "../assets/techIcons/hires/sql_hi.png";
import graphql_hi from "../assets/techIcons/hires/graphql_hi.png";
import shopify_hi from "../assets/techIcons/hires/shopify_hi.png";
import liquid_hi from "../assets/techIcons/hires/liquid_hi.png";
import type { WebTechnology } from "../types";

export const competencyIcons: {
  title: WebTechnology;
  low: string;
  high: string;
}[] = [
  {
    title: "HTML",
    low: html_lo,
    high: html_hi,
  },
  {
    title: "CSS",
    low: css_lo,
    high: css_hi,
  },
  {
    title: "Javascript",
    low: js_lo,
    high: js_hi,
  },
  {
    title: "React",
    low: react_lo,
    high: react_hi,
  },
  {
    title: "Remix",
    low: remix_lo,
    high: remix_hi,
  },
  {
    title: "NodeJS",
    low: node_lo,
    high: node_hi,
  },
  {
    title: "SQL",
    low: sql_lo,
    high: sql_hi,
  },
  {
    title: "GraphQL",
    low: graphql_lo,
    high: graphql_hi,
  },
  {
    title: "Shopify",
    low: shopify_lo,
    high: shopify_hi,
  },
  {
    title: "Shopify Liquid",
    low: liquid_lo,
    high: liquid_hi,
  },
];
