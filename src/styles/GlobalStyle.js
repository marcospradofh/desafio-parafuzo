import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background: #F2F2F2;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
