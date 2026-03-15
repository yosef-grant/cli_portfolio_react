import { createGlobalStyle } from "styled-components";
import W95FA from "../fonts/w95fa.woff";
import W95FA2 from "../fonts/w95fa.woff2";
import Snowbell from "../fonts/Snowbell-Wp4g9.ttf"


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "W95FA";
  src: 
  url(${W95FA}) format("woff"), 
  url(${W95FA2}) format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Snowbell";
  src: 
  url(${Snowbell}) format("truetype"), 
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  box-sizing: border-box;
  font-family: 'W95FA', sans-serif;
}

html,body, #root {
  min-height: 100%;
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
`;

export {GlobalStyle};

// @font-face {
//   font-family: "Snowbell";
//   src: url("../../fonts/Snowbell-Wp4g9.ttf") format("truetype");
