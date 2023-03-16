import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/routes' // importação de rotas
import { BrowserRouter } from 'react-router-dom' // temos que esperifdicar as rotas do browser, fazer um wrap ali no return
import { CyclesContext } from './pages/Home'
import { createContext } from 'react'



export function App() {

// const [count, setCount] = useState(0)

  // passando o themeProvider nos botoes
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPass, setSecondsPass}}
        >
        <Router />
        </CyclesContext.Provider>
      </BrowserRouter>
      
    </ThemeProvider>
  )
  
 
 
}
