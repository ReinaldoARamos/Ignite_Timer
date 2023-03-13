import { Play, Watch } from "phosphor-react";
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
  TaskInput,
} from "../Home/styles";
import { useForm } from "react-hook-form";
import { Action } from "@remix-run/router";
import { differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});
/*
O Register é uma função que vem junto do hook form, atravé dela temos diversos acessos a outros métodos
que são geralmente usado com funções, como onchange, onblue e até onFocus */

interface Cycle {
  id: string;
  task: string;
  minutesAmout: number;
  startDate: Date;
} //criando interface dos ciclos

export function Home() {
  const [cycles, SetCycles] = useState<Cycle[]>([]); //iniciando um estado que irá armazenar todos os ciclos
  const [activeCycleId, SetActiveCycle] = useState<string | null>(null); //inicisndo o estado que vai verificar o estado ativo
  const [amountSecondsPass, setamountSecondsPass] = useState(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
   
  

  const { register, handleSubmit, watch, formState, reset } =
    useForm<newCycleData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

 useEffect (() => {
        if(activeCycle){
          setInterval(()=> {
              setamountSecondsPass(differenceInSeconds(new Date(), activeCycle.startDate))
          }, 1000)
        }
    }, [activeCycle]) 

   
  type newCycleData = zod.infer<typeof newCycleFormValidationSchema>;
  const id = String(new Date().getTime());


  const TotalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0; //´pega os minutos passados e retorna sem segundos
  const currentSeconds = activeCycle ? TotalSeconds - amountSecondsPass : 0; //pega os totais de segundos e diminui pelo que passa

  const minutesAmount = Math.floor(currentSeconds / 60); //PEGA OS SEGUNDOS e converte em minutos
  const secondsAmout = currentSeconds % 60; //pega o resto da divisao

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmout).padStart(2, "0");

  console.log(activeCycle);

  function handleCreateNewCycle(data: newCycleData) {
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
      startDate: new Date(),
    };

    SetCycles((state) => [...state, newCycle]); //adicionando um estado novo pegando o anterior e passando o novo
    SetActiveCycle(id);
    reset();
  }

  const task = watch("task");

  return (
    //aqui no handleSubmit o HandleCreate new Cyle que pega os dados no Onsubmit
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalher em</label>
            <TaskInput
              id="task"
              list="task-suggestgions"
              placeholder="Definir tarefa  "
              {...register("task")}
              // usando o ... a gente retorna todos os métodos dentro do register
            />
            <datalist id="task-suggestgions">
              <option value="projeto 1"></option>
              <option value="projeto 1"></option>
              <option value="projeto 1"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante </label>
            <MinutesAmount
              type="Number"
              id="minutesAmount"
              placeholder="00"
              min={5}
              step={5}
              {...register("minutesAmount", { valueAsNumber: true })} //register
            />

            <span>minutos.</span>
          </div>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountDownButton disabled={!task}>
          <Play size={20} id="teste" />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
