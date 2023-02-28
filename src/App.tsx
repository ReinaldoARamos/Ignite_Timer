import { useState } from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  const [count, setCount] = useState(0)

  //passando o themeProvider nos botoes
  return (
    <ThemeProvider theme={defaultTheme}> 
      <Button variant='primary'/>
      <Button variant='neutral'/>
      <Button variant='secondary'/>
      <Button />

      <GlobalStyle/>
      
    </ThemeProvider>
    )
}


