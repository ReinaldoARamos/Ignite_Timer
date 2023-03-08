import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separator,
  StartCountDownButton,
  TaskInput,
} from '../Home/styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <div>
          
            <label htmlFor="task">Vou trabalher em</label>
            <TaskInput id="task" list="task-suggestgions" placeholder="Definir tarefa  " />
            <datalist id="task-suggestgions">
              <option value="projeto 1"></option>
              <option value="projeto 1"></option>
              <option value="projeto 1"></option>

            </datalist>

            <label htmlFor="minutesAmount">durante </label>
            <MinutesAmount
              type="Number"
              id="minutesAmount"
              placeholder="00"
              min={5}
              step={5}
              max={60}
            />
     
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
