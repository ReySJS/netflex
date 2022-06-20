import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  ul {
    list-style: none;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
    border: unset;

  }

  input {
    border: unset;
  }

  input:focus {
    outline: unset;
  }
`;
