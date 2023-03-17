import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/routes' // importação de rotas
import { BrowserRouter } from 'react-router-dom' // temos que esperifdicar as rotas do browser, fazer um wrap ali no return
import { CyclesContextProvider } from './context/CyclesContext'
// import { CyclesContext } from "./pages/Home";
// import { createContext, useState } from 'react'

export function App() {
  // passando o themeProvider nos botoes
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
