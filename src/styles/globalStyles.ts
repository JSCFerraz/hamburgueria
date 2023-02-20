import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, select{
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --color-grey100: #333333;
        --color-grey50: #828282;
        --color-grey20: #E0E0E0;
        --color-grey0: #F5F5F5;
        --color-white: #FFFFFF;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #27AE60;
        --color-information: #155BCB;
        --color-overlay-black: rgba(0,0,0,.5);

        --font-size-32: 2rem;
        --font-size-30: 1.875rem;
        --font-size-28: 1.75rem;
        --font-size-24: 1.5rem;
        --font-size-20: 1.25rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.875rem;
        --font-size-12: 0.75rem;

        --radius-1: 0.5rem;
        --radius-2: 0.25rem;
        --radius-50:50%;

    }

      
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-size: var(--font-size-16);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  p, span {
    font-weight: 400;
  }

  button, a {
    cursor: pointer;
  }

  option {
    font-weight: 400;
    font-family: 'Inter', sans-serif; 
    font-size: var(--font-size-14);
  }
  select {
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-2);
    font-size: var(--font-size-14);
    border: solid 1 var(--color-grey-1);
  }

  fieldset {
    border: none;
  }

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--color-grey0); 
}

::-webkit-scrollbar-thumb {
    background: var(--color-grey20); 
}

::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey50); 
}
`;
