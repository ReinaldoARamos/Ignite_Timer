import { createContext, useState } from "react";

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

export function CyclesContextProvider() {
  const [cycles, SetCycles] = useState<Cycle[]>([]); // iniciando um estado que irá armazenar todos os ciclos
  const [activeCycleId, SetActiveCycle] = useState<string | null>(null); // inicisndo o estado que vai verificar o estado ativo
  const [amountSecondsPass, setamountSecondsPass] = useState(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const id = String(new Date().getTime());

  function setSecondsPass(seconds: number) {
    setamountSecondsPass(seconds);
  }


  function markCurrentCycleAsFinished() {
    SetCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          document.title = "Home";
          return { ...cycle, FinishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  //---------------------------------------------
  function CreateNewCycle(data: newCycleData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
      startDate: new Date(),
      amountSecondsPass: amountSecondsPass,
    };

    SetCycles((state) => [...state, newCycle]); // adicionando um estado novo pegando o anterior e passando o novo
    SetActiveCycle(id);
    setamountSecondsPass(0);
    reset();
  }

  //---------------------------------------------

  function InterruptedCycle() {
    SetCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          document.title = "Home";
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    SetActiveCycle(null);
  }


  <CyclesContext.Provider
    value={{
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPass,
      setSecondsPass,
    }}
  >
    -
  </CyclesContext.Provider>;
}
