import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { any } from "zod";
import { CyclesContext } from "../..";
import { CountdownContainer, Separator } from "./styles";



export function CountDown() {
  const {activeCycle, activeCycleId, markCurrentCycleAsFinished } = useContext(CyclesContext)
  const [amountSecondsPass, setamountSecondsPass] = useState(0);
  const TotalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0; // ´pega os minutos passados e retorna sem segundos
 
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

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const SecondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (SecondsDiff >= TotalSeconds) {
          markCurrentCycleAsFinished()

          setamountSecondsPass(TotalSeconds);
          clearInterval(interval);
        } else {
          setamountSecondsPass(SecondsDiff);
        }
      }, 1000);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, TotalSeconds, activeCycleId]);

  
    return(
        <CountdownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownContainer>
    )
 
}

