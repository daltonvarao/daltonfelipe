import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    font-family: Montserrat, sans-serif;
  }

  body {
    background: #282a36;
  }

  button {
    :hover {
      opacity: .7;
      cursor: pointer;
    }
  }

  .loader {
    height: 100%;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;
  }

  .loader::after {
    content: '';
    width: 24px;
    height: 24px;

    border: 4px solid #50fa7b;

    animation: spinner 2s linear infinite;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
`;

export default GlobalStyle;
