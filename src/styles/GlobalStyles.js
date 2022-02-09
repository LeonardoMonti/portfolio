import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --black-op: rgba(9, 11, 13, 1);
    --gray-op: rgba(38,41,44,1);
    --background-gradient: linear-gradient(90deg, var(--black-op) 0%, var(--gray-op) 100%);
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --deep-dark-1: rgba(9,11,13,0.6);
    --gray-2: #363636;
    --gray-3: rgb(94, 93, 90, 0.75);
    --white : white;
    --black: black;
    --red-1: #ff0050;
    --red-2: rgb(255, 0, 80, 0.5);
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background: var(--background-gradient);
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
