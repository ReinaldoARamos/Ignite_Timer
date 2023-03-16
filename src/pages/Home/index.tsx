import { HandPalm, Play } from 'phosphor-react'
import { createContext, useEffect, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from '../Home/styles'

import { useForm } from 'react-hook-form'
import { Action } from '@remix-run/router'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  FinishedDate?: Date
} // criando interface dos ciclos

interface CyclesContextData {
  activeCycle: Cycle | undefined // passando a interface do contexto como a interface cycle
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}
export const CyclesContext = createContext({} as CyclesContextData) // criando o contexto do ciclo

export function Home() {
  const [cycles, SetCycles] = useState<Cycle[]>([]) // iniciando um estado que irá armazenar todos os ciclos
  const [activeCycleId, SetActiveCycle] = useState<string | null>(null) // inicisndo o estado que vai verificar o estado ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    SetCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          document.title = 'Home'
          return { ...cycle, FinishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: newCycleData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
      startDate: new Date(),
    }

    SetCycles((state) => [...state, newCycle]) // adicionando um estado novo pegando o anterior e passando o novo
    SetActiveCycle(id)
    setamountSecondsPass(0)
    reset()
  }

  function HandleInterruptedCycle() {
    SetCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          document.title = 'Home'
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    SetActiveCycle(null)
  }

  const task = watch('task')

  return (
    // aqui no handleSubmit o HandleCreate new Cyle que pega os dados no Onsubmit
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          <NewCycleForm />
          <CountDown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <StopCountDownButton type="button" onClick={HandleInterruptedCycle}>
            <HandPalm size={20} id="teste" />
            Interromper processo
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={!task}>
            <Play size={20} id="teste" />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
