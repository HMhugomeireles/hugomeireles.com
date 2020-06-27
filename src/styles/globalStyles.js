import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;

    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyle
