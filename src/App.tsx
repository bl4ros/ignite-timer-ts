import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";

import { Router } from "../src/Router";
import { CyclesContextProvider } from "./context/CyclesContext";
// import { Home } from "./Home";

export function App() {
  return (
    // <>
    //   <Home />
    // </>

    // ThemeProvider é uma context que permite acessarmos todas as propriedades  de estilização tudo através do contexto

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
