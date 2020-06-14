import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    padding: 4rem 1rem;
    text-align: center;
    line-height: 1.2;
    color: #222;
  }
  body, select {
    font-family: 'Shrikhand', sans-serif;
  }
  h1 {
    display: inline-block;
    font-size: 8rem;
    background: linear-gradient(45deg, red, orange, yellow, green, blue, violet);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
