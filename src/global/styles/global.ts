import SFProTextRegularWoff from 'global/assets/fonts/SFProText-Regular.woff';
import SFProTextRegularWoff2 from 'global/assets/fonts/SFProText-Regular.woff2';
import SFProTextSemiBoldWoff from 'global/assets/fonts/SFProText-Semibold.woff';
import SFProTextSemiBoldWoff2 from 'global/assets/fonts/SFProText-Semibold.woff2';
import VerdanaBoldWoff from 'global/assets/fonts/Verdana-Bold.woff';
import VerdanaBoldWoff2 from 'global/assets/fonts/Verdana-Bold.woff2';
import VerdanaWoff from 'global/assets/fonts/Verdana.woff';
import VerdanaWoff2 from 'global/assets/fonts/Verdana.woff2';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
    src: local('Verdana'),
        url(${VerdanaWoff2}) format('woff2'),
        url(${VerdanaWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Verdana';
    src: local('Verdana Bold'), local('Verdana-Bold'),
        url(${VerdanaBoldWoff2}) format('woff2'),
        url(${VerdanaBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: local('SF Pro Text Regular'), local('SFProText-Regular'),
        url(${SFProTextRegularWoff2}) format('woff2'),
        url(${SFProTextRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: local('SF Pro Text Semibold'), local('SFProText-Semibold'),
        url(${SFProTextSemiBoldWoff2}) format('woff2'),
        url(${SFProTextSemiBoldWoff}) format('woff');
    font-weight: bold;
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
    font-family: Verdana;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme: { pallete } }) => pallete.black};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
