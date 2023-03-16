import { createContext } from "react";

//---------------------------------------------

interface CyclesContextData {
  activeCycle: Cycle | undefined; // passando a interface do contexto como a interface cycle
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPass: number;
  setSecondsPass: (seconds: number) => void;
}

//---------------------------------------------

interface Cycle {
  id: string;
  task: string;
  minutesAmout: number;
  startDate: Date;
  interruptedDate?: Date;
  FinishedDate?: Date;
  amountSecondsPass: number;
} // criando interface dos ciclos

//---------------------------------------------

export const CyclesContext = createContext({} as CyclesContextData); // criando o contexto do ciclo
