import { useState } from 'react'
import { Button } from './components/Button'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button />
      <Button />
      <Button />
      <Button />
      
    </>
    )
}


