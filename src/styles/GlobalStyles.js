import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --deep-dark: #1E1E1E;
    --white: rgb(235,235,240);
    --black: black;
    --black-op: rgba(9, 11, 13, 1);
    --black-op8: rgba(9, 11, 13, 0.9);
    --black-op6: rgba(9, 11, 13, 0.6);
    --gray-1: rgb(235,235,240);
    --gray-2: #363636;
    --gray-3: rgba(9,11,13,0.6);
    --gray-4: rgba(9,11,13,0.8);
    --gray-5: rgba(255, 255, 255, 0.125);
    --blue-up1: #0A22F5;
    --blue-up2: #112A46;
    --blue-up3: #2C5DF2;
    --blue-up4: rgba(17, 25, 40, 0.75);
    --black-2: #161B22;

    --nav-height: 50px;
  }
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: var(--gray-2);
    border-left: 1px outset var(--blue-up1);
  }

  *::-webkit-scrollbar-thumb {
    box-shadow: 1px 1px 15px 15px var(--blue-up2);
    background-color: var(--gray-1);
    border-radius: 5px;
    border-left: 1px outset var(--blue-up1);
    border-top: 1px outset var(--blue-up1);
    border-bottom: 1px outset var(--blue-up1);
  }
  
  html {
    font-size: 10px;
    font-family: 'Roboto Mono';
  }

  body {
    background-image: radial-gradient(
      circle,
      #051e4c,
      #071e41,
      #0d1d35,
      #131c29,
      #181a1d
    );
    max-width: 1440px;
    position: relative;
    margin: auto;
  }

  textarea:focus, input:focus{
    outline: none;
  }
  
  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    outline: none
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
