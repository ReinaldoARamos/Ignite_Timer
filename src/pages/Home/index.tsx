import { HandPalm, Play, Watch } from "phosphor-react";
import { useEffect, useState } from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separator,
  StartCountDownButton,
  StopCountDownButton,
  TaskInput,
} from "../Home/styles";
import { useForm } from "react-hook-form";
import { Action } from "@remix-run/router";
import { differenceInSeconds } from "date-fns";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/Countdown";

interface Cycle {
  id: string;
  task: string;
  minutesAmout: number;
  startDate: Date;
  interruptedDate?: Date;
  FinishedDate?: Date;
} // criando interface dos ciclos

export function Home() {
  const [cycles, SetCycles] = useState<Cycle[]>([]); // iniciando um estado que irá armazenar todos os ciclos
  const [activeCycleId, SetActiveCycle] = useState<string | null>(null); // inicisndo o estado que vai verificar o estado ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const currentSeconds = activeCycle ? TotalSeconds - amountSecondsPass : 0; // pega os totais de segundos e diminui pelo que passa

  const minutesAmount = Math.floor(currentSeconds / 60); // PEGA OS SEGUNDOS e converte em minutos
  const secondsAmout = currentSeconds % 60; // pega o resto da divisao

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmout).padStart(2, "0");

  const id = String(new Date().getTime());


  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes} : ${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  function handleCreateNewCycle(data: newCycleData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
      startDate: new Date(),
    };

    SetCycles((state) => [...state, newCycle]); // adicionando um estado novo pegando o anterior e passando o novo
    SetActiveCycle(id);
    setamountSecondsPass(0);
    reset();
  }

  function HandleInterruptedCycle() {
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

  const task = watch("task");

  return (
    // aqui no handleSubmit o HandleCreate new Cyle que pega os dados no Onsubmit
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <NewCycleForm />
        <CountDown />
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
  );
}
