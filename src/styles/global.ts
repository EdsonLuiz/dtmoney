import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape:#fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`