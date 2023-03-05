import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountDownButton,
} from '../Home/styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalher em</label>
            <input id="task" />

            <label htmlFor="minutesAmount">durante</label>
            <input type="Number" id="minutesAmount" />

            <span>minutos.</span>
          </div>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton>
          <Play size={20} id="teste" />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
