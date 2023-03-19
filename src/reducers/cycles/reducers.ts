import { Action } from '@remix-run/router'
import { actionTypes } from './actions'
import { produce } from 'immer'

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

export function cyclesReducer(
  state: CyclesState /* valor atual da variavel */,
  action: any,
) {
  // setamos o cycleState
  if (action.type === actionTypes.ADD_NEW_CYCLE) {
    // nome da ação
    return produce(state, (draft) => {
      draft.cycles.push(action.payload.newCycle)
      draft.activeCycleId = action.payload.newCycle.id
    })

    /*
    {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id, // SETA O ID ATIVO DO NOVO CICLO          // retorna o estado mais a ação
    }
    */
    // con esse useReducer todos os estados do ciclo serão controlados aqui, sem a necessidade de criar
    // varios estados
  }

  if (action.type === actionTypes.INTERRUPT_CURRENT_CYCLE) {
    const currentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId
    })

    if (currentCycleIndex < 0) {
      return state // quando nao encotnrar ciclo ativo, apenas retorna o state
    }

    return produce(state, (draft) => {
      draft.activeCycleId = null
      draft.cycles[currentCycleIndex].interruptedDate = new Date()
    })
  }

  if (action.type === actionTypes.MARK_CURRENT_CYCLE) {
    const currentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId
    })

    if (currentCycleIndex < 0) {
      return state // quando nao encotnrar ciclo ativo, apenas retorna o state
    }

    return produce(state, (draft) => {
      draft.activeCycleId = null
      draft.cycles[currentCycleIndex].FinishedDate = new Date()
    })
  }
}
