import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
  *, *:before, *:after {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body, select {
    font-family: 'Shrikhand', sans-serif;
    text-align: center;
    padding: 4rem 1rem;
    line-height: 1.2;
    color: #222;
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
