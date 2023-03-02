// import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/routes' // importação de rotas
import { BrowserRouter } from 'react-router-dom' // temos que esperifdicar as rotas do browser, fazer um wrap ali no return

export function App() {
  // const [count, setCount] = useState(0)

  // passando o themeProvider nos botoes
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
