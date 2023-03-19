import { Action } from '@remix-run/router'

export interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  FinishedDate?: Date
  amountSecondsPass: number
} // criando interface dos ciclos

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum actionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE = 'MARK_CURRENT_CYCLE',
}
export function cyclesReducer(
  state: CyclesState /* valor atual da variavel */,
  action: any,
) {
  // setamos o cycleState
  if (action.type === actionTypes.ADD_NEW_CYCLE) {
    // nopme da ação
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id, // SETA O ID ATIVO DO NOVO CICLO          // retorna o estado mais a ação
    }
    // con esse useReducer todos os estados do ciclo serão controlados aqui, sem a necessidade de criar
    // varios estados
  }

  if (action.type === actionTypes.INTERRUPT_CURRENT_CYCLE) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          document.title = 'Home'
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeCycleId: null,
    }
  }

  if (action.type === actionTypes.ADD_NEW_CYCLE) {
    return {
      ...state,
      cycles: state.cycles.map((cycle) => {
        if (cycle.id === state.activeCycleId) {
          document.title = 'Home'
          return { ...cycle, FinishedDate: new Date() }
        } else {
          return cycle
        }
      }),
      activeCycleId: null,
    }
  }
  return state
}
