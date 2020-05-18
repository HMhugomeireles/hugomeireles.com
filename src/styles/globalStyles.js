import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,900&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    padding: 0;
    margin: 0;

    font-family: 'Roboto', sans-serif;
  }
`
