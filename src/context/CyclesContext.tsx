import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  InterruptCycleAction,
  MarkFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducers'
// ---------------------------------------------

interface CreateCycleData {
  // dados pra passar no createNewCycle
  task: string
  minutesAmount: number
}

// ---------------------------------------------

interface CyclesContextData {
  activeCycle: Cycle | undefined // passando a interface do contexto como a interface cycle
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPass: number
  setSecondsPass: (seconds: number) => void
  CreateNewCycle: (data: CreateCycleData) => void
  InterruptedCycle: () => void
  cycles: Cycle[]
}

// ---------------------------------------------

// ---------------------------------------------
interface contextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextData) // criando o contexto do ciclo

export function CyclesContextProvider({ children }: contextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    // reducer irá controlar os estados do app

    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem('@ignite-timer 1.0.0:')
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }
      return initialState // retorna o estado vazio caso nao haja nada no lcoalStorage
    },
  )

  const { activeCycleId, cycles } = cyclesState
  const activeCycle = cycles.find(
    (cycle: { id: any }) => cycle.id === activeCycleId,
  )
  const [amountSecondsPass, setamountSecondsPass] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate), // se o startDate for string converte em data e
        // se ja for data ele nao faz nada
      )
    }
  })
  // const [activeCycleId, SetActiveCycle] = useState<string | null>(null) // inicisndo o estado que vai verificar o estado ativo

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer 1.0.0:', stateJSON)
  }, [cyclesState])

  const id = String(new Date().getTime())

  function setSecondsPass(seconds: number) {
    setamountSecondsPass(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(MarkFinishedAction(activeCycleId))
    /*
    SetCycles((state) =>
     // SetActiveCycle(null)
     */
  }

  // ---------------------------------------------
  function CreateNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
      startDate: new Date(),
      amountSecondsPass,
    }
    dispatch(addNewCycleAction(newCycle))
    // SetCycles((state) => [...state, newCycle]) // adicionando um estado novo pegando o anterior e passando o novo
    // SetActiveCycle(id)
    setamountSecondsPass(0)
  }

  // ---------------------------------------------

  function InterruptedCycle() {
    dispatch(InterruptCycleAction(activeCycleId))

    /*
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
     //  SetActiveCycle(null)
    */
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPass,
        setSecondsPass,
        CreateNewCycle,
        InterruptedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
