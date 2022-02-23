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
    --white : white;
    --black: black;
    --black-op: rgba(9, 11, 13, 1);
    --black-op8: rgba(9, 11, 13, 0.8);
    --black-op6: rgba(9, 11, 13, 0.6);
    --gray-1: #DBDBDB;
    --gray-2: #363636;
    --gray-3: rgba(9,11,13,0.6);
    --gray-4: rgba(9,11,13,0.8);
    --blue-up1: #0A22F5;
    --blue-up2: #112A46;
    --blue-up3: #2C5DF2;

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
  
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background: linear-gradient(90deg, var(--black-op) 0%, var(--black-op2) 100%);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
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
