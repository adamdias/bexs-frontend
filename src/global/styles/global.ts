import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

    @media only screen and (max-width: 64em) {
      font-size: 55%;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }
  }

  body {
    font-family: Verdana;
    font-weight: 400;
    line-height: 1;
    background-color: ${({ theme: { pallete } }) => pallete.grayLight};
    color: ${({ theme: { pallete } }) => pallete.black};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
