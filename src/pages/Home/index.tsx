import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
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

        <button>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
