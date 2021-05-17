import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Text';
    src: local('SF Pro Text Regular'), local('SFProText-Regular'),
        url('../fonts/SFProText-Regular.woff2') format('woff2'),
        url('../fonts/SFProText-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

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

    @media only screen and (max-width: 37.5em) {
      font-size: 50%;
    }
  }

  body {
    font-size: 'Verdana';
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme: { pallete } }) => pallete.black};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
