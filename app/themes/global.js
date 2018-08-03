import { injectGlobal } from 'styled-components';
import { fontFamily } from './variables';
import GothamBoldEOT from './fonts/Gotham-Bold.eot';
import GothamBoldTTF from './fonts/Gotham-Bold.ttf';
import GothamBoldWOFF from './fonts/Gotham-Bold.woff';
import GothamBookEOT from './fonts/Gotham-Book.eot';
import GothamBookTTF from './fonts/Gotham-Book.ttf';
import GothamBookWOFF from './fonts/Gotham-Book.woff';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    font-size: 10px;
    height: 100%;
    width: 100%;
    font-family: "brandon-grotesque",sans-serif;
  }

  body.fontLoaded {
    font-family: ${fontFamily.fontPrimary};
  }

  #app {
    min-height: 100%;
    min-width: 100%;    
  }

  p,
  label {
    line-height: 1.5em;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  a {
  text-decoration: none;
  
    &:hover, &:focus, &:active{
      text-decoration: none;
    }
  }
  
  .clear {
    clear: both;
    width: 0;
    height: 0;
    display: block;
  }

  :focus {
    outline: none;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBoldEOT});
    src: url(${GothamBoldEOT}?#iefix) format('embedded-opentype'),
      url(${GothamBoldWOFF}) format('woff'),
      url(${GothamBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookEOT});
    src: url(${GothamBookEOT}?#iefix) format('embedded-opentype'),
      url(${GothamBookWOFF}) format('woff'),
      url(${GothamBookTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;
