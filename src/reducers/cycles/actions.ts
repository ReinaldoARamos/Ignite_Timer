import { Cycle } from './reducers'

export enum actionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE = 'MARK_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: 'ADD_NEW_CYCLE',
    payload: {
      newCycle,
    },
  }
}

export function InterruptCycleAction(activeCycleId: Cycle) {
  return {
    type: 'INTERRUPT_CURRENT_CYCLE',
    payload: {
      data: activeCycleId,
    },
  }
}

export function MarkFinishedAction(activeCycleId: Cycle) {
  return {
    type: 'MARK_CURRENT_CYCLE',
    payload: {
      data: activeCycleId,
    },
  }
}
