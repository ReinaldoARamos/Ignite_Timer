import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { any } from "zod";
import { CountdownContainer, Separator } from "./styles";

interface CountDownProps {
  activeCycle: any
}
export function CountDown({activeCycle} : CountDownProps) {

  const [amountSecondsPass, setamountSecondsPass] = useState(0);
  const TotalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0; // ´pega os minutos passados e retorna sem segundos


  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const SecondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (SecondsDiff >= TotalSeconds) {
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
      </CountdownContainer>;
    )
 
}

